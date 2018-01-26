/// <reference path="../../Cache/Authorization/Authorization.ts" />
/// <reference path="../../Dto/AuthorizationDto.ts"/>
/// <reference path="../../Dto/MemberInfoDto.ts"/>
/// <reference path="IMemberManager.ts" />
var ServiceManager;
(function (ServiceManager) {
    var MemberManager = (function () {
        function MemberManager(gameID) {
            this.gameID = gameID;
        }
        /**
         * 登录错误
         * @param error
         */
        MemberManager.prototype.LoginError = function (error) {
            console.log(error);
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
                if (GameConfig.IsDebug) {
                    authorizationDto.IsClose = false;
                }
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
        return MemberManager;
    }());
    ServiceManager.MemberManager = MemberManager;
})(ServiceManager || (ServiceManager = {}));
