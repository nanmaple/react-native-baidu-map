/// <reference path="../../Cache/Authorization/Authorization.ts" />
/// <reference path="../../Dto/AuthorizationDto.ts"/>
/// <reference path="../../Dto/MemberInfoDto.ts"/>
/// <reference path="IMemberManager.ts" />

namespace ServiceManager {
    export class MemberManager implements IMemberManager {
        private gameID: number;
        constructor(gameID: number) {
            this.gameID = gameID;
        }

        /**
         * 登录错误
         * @param error 
         */
        private LoginError(error: number | string) {

        }

        /**
         * 登出
         */
        public Logout(): boolean {
            //清除缓存中的信息
            BaseCache.Authorization.instance.SetAuthorization(this.gameID, null);
            return true;
        }

        /**
         * 获取游戏Socket信息
         */
        public GetSocketInfo(): BaseDto.AuthorizationDto {
            //从缓存中获取Code，包括Code，Token,GameToken等
            let authorizationDto: BaseDto.AuthorizationDto = BaseCache.Authorization.instance.GetAuthorization(this.gameID);
            if (authorizationDto == null) {
                authorizationDto = new BaseDto.AuthorizationDto();
            }
            return authorizationDto;
        }


        /**
         * 获取会员信息
         */
        public GetMemberInfo(): BaseDto.MemberInfoDto {
            //从缓存中获取会员信息
            let memberInfoDto: BaseDto.MemberInfoDto = BaseCache.MemberInfo.instance.GetMemberInfo(GameConfig.GameID);
            return memberInfoDto;
        };

        /**
         * 登录检查
         * @param dto 登录参数Dto
         * @param successHandler 成功回调
         * @param errorhandler 错误回调
         */
        public LoginByTourists(dto: BaseDto.LoginDto, token: string, successHandler: Laya.Handler, errorhandler: Laya.Handler) {
            let header = {
                Authorization: token
            }
            let obj = {
                DeviceType: dto.DeviceType,
                DeviceId: dto.DeviceId
            }
            //http
            let http: Utils.Http = new Utils.Http();
            //请求调Net的api，
            http.Post(Net.ApiConfig.LoginByTourists, obj, header, (response: any) => {
                if (response.Result == BaseEnum.ErrorCode.Success) {
                    this.LoginSuccess(response.Data, successHandler);
                }else if(response.Result == BaseEnum.ErrorCode.IPLimited){
                    Laya.Browser.window.location.href = "";
                }else {
                    errorhandler.runWith(response.Result);
                }
            }, (error: any) => {
                errorhandler.runWith(error.toString());
            });
        };

        public GetSocketToken(token: string, successHandler: Laya.Handler,errorhandler: Laya.Handler): void {
            let header = {
                Authorization: token
            }
            let obj = {
                GameID: GameConfig.GameID
            }
            //http
            let http: Utils.Http = new Utils.Http();

            //请求调Net的api，
            http.Post(Net.ApiConfig.LoginGame, obj, header, (response: any) => {
                if (response.Result == BaseEnum.ErrorCode.Success) {
                    console.log("获取游戏SocketToken成功",response);
                    GameConfig.SocketToken = response.Data;
                    successHandler.run();
                }else if(response.Result == BaseEnum.ErrorCode.IPLimited){
                    Laya.Browser.window.location.href = "";
                } else {
                    console.log("获取游戏SocketToken失败",response);
                    errorhandler.runWith(response.Result);
                }
            }, (error: any) => {
                console.log("获取游戏SocketToken失败",error);
                errorhandler.run();
            });
        }

        private LoginSuccess(response: BaseDto.LoginSuccessDto | BaseDto.LoginMultiAccountDto, successHandler: Laya.Handler) {
            //返回结果是登录成功
            let dto: BaseDto.AuthorizationDto = new BaseDto.AuthorizationDto();
            //token信息
            dto.Token = (<BaseDto.LoginSuccessDto>response).Token;
            //是否有多个账号
            dto.IsMulti = false;
            //账号是否关闭
            dto.IsClose = (<BaseDto.LoginSuccessDto>response).Closed;
            //是否是游客
            dto.IsTourists = true;
            //写入缓存中
            BaseCache.Authorization.instance.SetAuthorization(this.gameID, dto, 1 / 150);

            let result: BaseDto.LoginResultDto = new BaseDto.LoginResultDto();
            let memberInfo: BaseDto.MemberInfoDto = new BaseDto.MemberInfoDto();
            memberInfo.MemberId = (<BaseDto.LoginSuccessDto>response).MemberId;
            memberInfo.Score = (<BaseDto.LoginSuccessDto>response).Score;
            //写入缓存中
            BaseCache.MemberInfo.instance.SetMemberInfo(this.gameID, memberInfo, 1 / 150);
            successHandler.runWith(dto.Token);
        }

        /**
         * 设置用户金额到缓存
         * @param score 
         */
        public SetMemberMoney(score: number): void {
            let memberInfo: BaseDto.MemberInfoDto = new BaseDto.MemberInfoDto();
            memberInfo.Score = score.toString();
            //写入缓存中
            BaseCache.MemberInfo.instance.SetMemberInfo(this.gameID, memberInfo);
        }

        /**
         * 获取微信配置信息
         * @param url 
         */
        public GetJsSignature(url: string, successHandler: Laya.Handler) {
            let obj = {
                Url: url,
            }
            //http
            let http: Utils.Http = new Utils.Http();
            //请求调Net的api，
            http.Post(Net.ApiConfig.GetJsSignature, obj, null, (response: any) => {
                // console.log("GetWeChatParams成功回调");
                if (response.Result == BaseEnum.ErrorCode.Success) {
                    successHandler.runWith(response.Data);
                } else {
                    console.log("获取微信配置信息失败", response);
                }
            }, (error: any) => {
                console.log("获取微信配置信息失败", error);
            });
        }
    }
}