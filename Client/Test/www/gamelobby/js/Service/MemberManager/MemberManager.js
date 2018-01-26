/// <reference path="../../Net/WebAPI.ts" />
/// <reference path="../../Cache/Authorization/Authorization.ts" />
/// <reference path="../../Dto/AuthorizationDto.ts" />
/// <reference path="IMemberManager.ts" />
var MemberManager;
(function (MemberManager) {
    var Member = /** @class */ (function () {
        function Member() {
        }
        /**
         * 登录
         * @param code 微信授权登录，从地址栏中获取得到
         * @param handler 登录回调事件
         */
        Member.prototype.Login = function (dto, handler) {
            this.handler = handler;
            this.gameID = dto.GameID;
            //从缓存中获取Code，包括Code，Token,GameToken
            var authorizationDto = CacheData.Authorization.instance.GetAuthorization(this.gameID);
            //1.存在存储的Code，传入Code存在且不等于存储的Code，直接使用Code登录
            //2.没有存储的Code，传入Code存在，直接使用Code登录
            if ((authorizationDto != null && dto.Code && dto.Code != authorizationDto.Code) || (authorizationDto == null && dto.Code)) {
                //通过Code登录
                var successHandler = Laya.Handler.create(this, this.LoginSuccess, [dto.Code]);
                var errorHandler = Laya.Handler.create(this, this.LoginError);
                Net.WebApi.instance.Login(dto, successHandler, errorHandler);
            }
            else if (authorizationDto != null && authorizationDto.Token) {
                //token直接做登录验证
                var successHandler = Laya.Handler.create(this, this.LoginSuccess, [dto.Code]);
                var errorHandler = Laya.Handler.create(this, this.LoginError);
                Net.WebApi.instance.LoginCheck(authorizationDto.Token, successHandler, errorHandler);
            }
            else {
                var result = new BaseDto.LoginResultDto();
                result.Result = BaseDto.ResultEnum.NO;
                this.handler.runWith(result);
            }
        };
        /**
        * 通过会员id和临时token登录
        * @param memberID 会员id
        * @param handler 登录回调事件
        */
        Member.prototype.LoginByID = function (dto, handler) {
            this.handler = handler;
            //从缓存中获取Code，包括Code，Token,GameToken
            var authorizationDto = CacheData.Authorization.instance.GetAuthorization(this.gameID);
            if (authorizationDto != null && authorizationDto.Token) {
                var successHandler = Laya.Handler.create(this, this.LoginSuccess, [undefined]);
                var errorHandler = Laya.Handler.create(this, this.LoginError);
                Net.WebApi.instance.LoginByID(authorizationDto.Token, dto, successHandler, errorHandler);
            }
            else {
                var result = new BaseDto.LoginResultDto();
                result.Result = BaseDto.ResultEnum.NO;
                this.handler.runWith(result);
            }
        };
        /**
         * 登录成功回调
         * @param response 会员信息
         */
        Member.prototype.LoginSuccess = function (code, response) {
            console.log("LoginSuccess", code, response);
            //返回结果是登录成功
            var dto = new BaseDto.AuthorizationDto();
            dto.Code = code;
            if (!response.Accounts) {
                //微信只有一个账号
                dto.Token = response.SessionToken;
                dto.SocketToken = response.SocketToken;
                dto.IsMulti = false;
                //微信只有一个账号
                dto.IsClose = response.Closed;
                //写入到WebApi
                Net.WebApi.instance.SetToken(dto.Token);
                //写入缓存中
                CacheData.Authorization.instance.SetAuthorization(this.gameID, dto);
                var result = new BaseDto.LoginResultDto();
                result.Result = BaseDto.ResultEnum.LOGIN;
                this.handler.runWith(result);
            }
            else {
                //微信有多个账号
                dto.IsMulti = true;
                dto.Token = response.TempToken;
                dto.SocketToken = null;
                dto.Accounts = response.Accounts;
                //写入缓存中
                CacheData.Authorization.instance.SetAuthorization(this.gameID, dto);
                var result = new BaseDto.LoginResultDto();
                result.Result = BaseDto.ResultEnum.MULTI;
                result.Data = dto.Accounts;
                this.handler.runWith(result);
            }
        };
        /**
         * 登录错误
         * @param error
         */
        Member.prototype.LoginError = function (error) {
            console.log("LoginError", error);
            var result = new BaseDto.LoginResultDto();
            result.Result = BaseDto.ResultEnum.ERROR;
            result.Data = error;
            this.handler.runWith(result);
        };
        /**
         * 获取会员信息
         */
        Member.prototype.GetMemberInfo = function (gameID, handler) {
            //从缓存中获取Code，包括Code，Token,GameToken等
            var authorizationDto = CacheData.Authorization.instance.GetAuthorization(gameID);
            //如果当前是多账号，需要先选择账号登录
            if (authorizationDto.IsMulti) {
                handler.runWith(authorizationDto.Accounts);
                return;
            }
            Net.WebApi.instance.GetMemberInfo(Laya.Handler.create(this, function (response) {
                console.log("GetMemberInfo", response);
                //写入缓存中
                CacheData.MemberInfo.instance.SetMemberInfo(gameID, response);
                handler.runWith(response);
            }), Laya.Handler.create(this, this.LoginError));
        };
        ;
        return Member;
    }());
    MemberManager.Member = Member;
})(MemberManager || (MemberManager = {}));
