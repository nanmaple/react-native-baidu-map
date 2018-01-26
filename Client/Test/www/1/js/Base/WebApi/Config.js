/// <reference path="../../GameConfig.ts" />
var Net;
(function (Net) {
    var ApiConfig;
    (function (ApiConfig) {
        /**
         * 登录
         */
        ApiConfig.Login = GameConfig.WebApiBaseUrl + "/Login";
        /**
         * 登录检测
         */
        ApiConfig.LoginCheck = GameConfig.WebApiBaseUrl + "/LoginCheck";
        /**
         * 获取会员信息
         */
        ApiConfig.GetMemberInfo = GameConfig.WebApiBaseUrl + "/MemberInfo";
        /**
         * 获取余额
         */
        ApiConfig.GetMemberBalance = GameConfig.WebApiBaseUrl + "/MemberBalance";
    })(ApiConfig = Net.ApiConfig || (Net.ApiConfig = {}));
})(Net || (Net = {}));
