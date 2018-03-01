/// <reference path="../../Cache/Authorization/Authorization.ts" />
/// <reference path="../../Dto/AuthorizationDto.ts"/>
/// <reference path="../../Dto/MemberInfoDto.ts"/>
/// <reference path="IMemberManager.ts" />
var ServiceManager;
(function (ServiceManager) {
    var MemberManager = /** @class */ (function () {
        function MemberManager(gameID) {
            this.gameID = gameID;
        }
        /**
         * 登录错误
         * @param error
         */
        MemberManager.prototype.LoginError = function (error) {
        };
        /**
         * 登出
         */
        MemberManager.prototype.Logout = function () {
            //清除缓存中的信息
            BaseCache.Authorization.instance.SetAuthorization(this.gameID, null);
            return true;
        };
        /**
         * 获取游戏Socket信息
         */
        MemberManager.prototype.GetSocketInfo = function () {
            //从缓存中获取Code，包括Code，Token,GameToken等
            var authorizationDto = BaseCache.Authorization.instance.GetAuthorization(this.gameID);
            if (authorizationDto == null) {
                authorizationDto = new BaseDto.AuthorizationDto();
            }
            return authorizationDto;
        };
        /**
         * 获取会员信息
         */
        MemberManager.prototype.GetMemberInfo = function () {
            //从缓存中获取会员信息
            var memberInfoDto = BaseCache.MemberInfo.instance.GetMemberInfo(GameConfig.GameID);
            return memberInfoDto;
        };
        ;
        /**
         * 登录检查
         * @param dto 登录参数Dto
         * @param successHandler 成功回调
         * @param errorhandler 错误回调
         */
        MemberManager.prototype.LoginByTourists = function (dto, token, successHandler, errorhandler) {
            var _this = this;
            var header = {
                Authorization: token
            };
            var obj = {
                DeviceType: dto.DeviceType,
                DeviceId: dto.DeviceId
            };
            //http
            var http = new Utils.Http();
            //请求调Net的api，
            http.Post(Net.ApiConfig.LoginByTourists, obj, header, function (response) {
                if (response.Result == BaseEnum.ErrorCode.Success) {
                    _this.LoginSuccess(response.Data, successHandler);
                }
                else {
                    errorhandler.runWith(response.Result);
                    console.log(response.Result);
                }
            }, function (error) {
                errorhandler.runWith(error.toString());
                console.log(error.toString());
            });
        };
        ;
        MemberManager.prototype.GetSocketToken = function (token, successHandler, errorhandler) {
            var header = {
                Authorization: token
            };
            var obj = {
                GameID: GameConfig.GameID
            };
            //http
            var http = new Utils.Http();
            //请求调Net的api，
            http.Post(Net.ApiConfig.LoginGame, obj, header, function (response) {
                if (response.Result == BaseEnum.ErrorCode.Success) {
                    GameConfig.SocketToken = response.Data;
                    successHandler.run();
                }
                else {
                    errorhandler.runWith(response.Result);
                    console.log(response.Result);
                }
            }, function (error) {
                errorhandler.runWith(error.toString());
                console.log(error.toString());
            });
        };
        MemberManager.prototype.LoginSuccess = function (response, successHandler) {
            //返回结果是登录成功
            var dto = new BaseDto.AuthorizationDto();
            //token信息
            dto.Token = response.Token;
            //是否有多个账号
            dto.IsMulti = false;
            //账号是否关闭
            dto.IsClose = response.Closed;
            //是否是游客
            dto.IsTourists = true;
            //写入缓存中
            BaseCache.Authorization.instance.SetAuthorization(this.gameID, dto, 1 / 150);
            var result = new BaseDto.LoginResultDto();
            var memberInfo = new BaseDto.MemberInfoDto();
            memberInfo.MemberId = response.MemberId;
            memberInfo.Score = response.Score;
            //写入缓存中
            BaseCache.MemberInfo.instance.SetMemberInfo(this.gameID, memberInfo, 1 / 150);
            successHandler.runWith(dto.Token);
        };
        /**
         * 设置用户金额到缓存
         * @param score
         */
        MemberManager.prototype.SetMemberMoney = function (score) {
            var memberInfo = new BaseDto.MemberInfoDto();
            memberInfo.Score = score.toString();
            //写入缓存中
            BaseCache.MemberInfo.instance.SetMemberInfo(this.gameID, memberInfo);
        };
        /**
         * 获取微信配置信息
         * @param url
         */
        MemberManager.prototype.GetJsSignature = function (url, successHandler) {
            var obj = {
                Url: url,
            };
            //http
            var http = new Utils.Http();
            //请求调Net的api，
            http.Post(Net.ApiConfig.GetJsSignature, obj, null, function (response) {
                // console.log("GetWeChatParams成功回调");
                if (response.Result == BaseEnum.ErrorCode.Success) {
                    successHandler.runWith(response.Data);
                }
                else {
                    // console.log("获取微信配置信息失败", response.Result);
                }
            }, function (error) {
                // console.log("获取微信配置信息失败", error);
            });
        };
        return MemberManager;
    }());
    ServiceManager.MemberManager = MemberManager;
})(ServiceManager || (ServiceManager = {}));
