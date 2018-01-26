/// <reference path="../../Net/WebAPI.ts" />
/// <reference path="../../Cache/Authorization/Authorization.ts" />
/// <reference path="../../Dto/AuthorizationDto.ts" />
/// <reference path="IMemberManager.ts" />

namespace MemberManager {
    export class Member implements IMember {
        private handler: Laya.Handler;
        private gameID: number;
        constructor() {
        }

        /**
         * 登录
         * @param code 微信授权登录，从地址栏中获取得到
         * @param handler 登录回调事件
         */
        public Login(dto: BaseDto.LoginDto, handler: Laya.Handler): void {
            this.handler = handler;
            this.gameID = dto.GameID;
            //从缓存中获取Code，包括Code，Token,GameToken
            let authorizationDto: BaseDto.AuthorizationDto = CacheData.Authorization.instance.GetAuthorization(this.gameID);
            //1.存在存储的Code，传入Code存在且不等于存储的Code，直接使用Code登录
            //2.没有存储的Code，传入Code存在，直接使用Code登录
            if ((authorizationDto != null && dto.Code && dto.Code != authorizationDto.Code) || (authorizationDto == null && dto.Code)) {
                //通过Code登录
                let successHandler = Laya.Handler.create(this, this.LoginSuccess, [dto.Code]);
                let errorHandler = Laya.Handler.create(this, this.LoginError);
                Net.WebApi.instance.Login(dto, successHandler, errorHandler);
            } else if (authorizationDto != null && authorizationDto.Token) {
                //token直接做登录验证
                let successHandler = Laya.Handler.create(this, this.LoginSuccess, [dto.Code]);
                let errorHandler = Laya.Handler.create(this, this.LoginError);
                Net.WebApi.instance.LoginCheck(authorizationDto.Token, successHandler, errorHandler);
            } else {
                let result: BaseDto.LoginResultDto = new BaseDto.LoginResultDto();
                result.Result = BaseDto.ResultEnum.NO;
                this.handler.runWith(result);
            }
        }

        /**
        * 通过会员id和临时token登录
        * @param memberID 会员id
        * @param handler 登录回调事件
        */
        public LoginByID(dto: BaseDto.LoginDto, handler: Laya.Handler): void {
            this.handler = handler;
            //从缓存中获取Code，包括Code，Token,GameToken
            let authorizationDto: BaseDto.AuthorizationDto = CacheData.Authorization.instance.GetAuthorization(this.gameID);
            if (authorizationDto != null && authorizationDto.Token) {
                let successHandler = Laya.Handler.create(this, this.LoginSuccess, [undefined]);
                let errorHandler = Laya.Handler.create(this, this.LoginError);
                Net.WebApi.instance.LoginByID(authorizationDto.Token, dto, successHandler, errorHandler);
            } else {
                let result: BaseDto.LoginResultDto = new BaseDto.LoginResultDto();
                result.Result = BaseDto.ResultEnum.NO;
                this.handler.runWith(result);
            }
        }

        /**
         * 登录成功回调
         * @param response 会员信息
         */
        private LoginSuccess(code: string, response: BaseDto.LoginSuccessDto | BaseDto.LoginMultiAccountDto) {
            console.log("LoginSuccess", code, response);
            //返回结果是登录成功
            let dto: BaseDto.AuthorizationDto = new BaseDto.AuthorizationDto();
            dto.Code = code;
            if (!(<BaseDto.LoginMultiAccountDto>response).Accounts) {
                //微信只有一个账号
                dto.Token = (<BaseDto.LoginSuccessDto>response).SessionToken;
                dto.SocketToken = (<BaseDto.LoginSuccessDto>response).SocketToken;
                dto.IsMulti = false;
                //微信只有一个账号
                dto.IsClose = (<BaseDto.LoginSuccessDto>response).Closed;
                //写入到WebApi
                Net.WebApi.instance.SetToken(dto.Token);
                //写入缓存中
                CacheData.Authorization.instance.SetAuthorization(this.gameID, dto);

                let result: BaseDto.LoginResultDto = new BaseDto.LoginResultDto();
                result.Result = BaseDto.ResultEnum.LOGIN;
                this.handler.runWith(result);
            } else {
                //微信有多个账号
                dto.IsMulti = true;
                dto.Token = (<BaseDto.LoginMultiAccountDto>response).TempToken;
                dto.SocketToken = null;
                dto.Accounts = (<BaseDto.LoginMultiAccountDto>response).Accounts;
                //写入缓存中
                CacheData.Authorization.instance.SetAuthorization(this.gameID, dto);

                let result: BaseDto.LoginResultDto = new BaseDto.LoginResultDto();
                result.Result = BaseDto.ResultEnum.MULTI;
                result.Data = dto.Accounts;
                this.handler.runWith(result);
            }
        }

        /**
         * 登录错误
         * @param error 
         */
        private LoginError(error: number | string) {
            console.log("LoginError", error);
            let result: BaseDto.LoginResultDto = new BaseDto.LoginResultDto();
            result.Result = BaseDto.ResultEnum.ERROR;
            result.Data = error;
            this.handler.runWith(result);
        }

        /**
         * 获取会员信息
         */
        public GetMemberInfo(gameID: number, handler: Laya.Handler): void {
            //从缓存中获取Code，包括Code，Token,GameToken等
            let authorizationDto: BaseDto.AuthorizationDto = CacheData.Authorization.instance.GetAuthorization(gameID);
            //如果当前是多账号，需要先选择账号登录
            if (authorizationDto.IsMulti) {
                handler.runWith(authorizationDto.Accounts);
                return;
            }
            Net.WebApi.instance.GetMemberInfo(Laya.Handler.create(this, (response: any) => {
                console.log("GetMemberInfo", response);
                //写入缓存中
                CacheData.MemberInfo.instance.SetMemberInfo(gameID, response);
                handler.runWith(response);
            }), Laya.Handler.create(this, this.LoginError));
        };
    }
}