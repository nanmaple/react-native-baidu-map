/// <reference path="../GameConfig.ts" />
var Net;
(function (Net) {
    var ApiConfig;
    (function (ApiConfig) {
        /**
         * 登录
         */
        ApiConfig.Login = GameConfig.WebApiBaseUrl + "/Member/Login";
        /**
         * 登录检测
         */
        ApiConfig.LoginCheck = GameConfig.WebApiBaseUrl + "/Member/LoginByToken";
        /**
         * 通过id和临时token登录
         */
        ApiConfig.LoginById = GameConfig.WebApiBaseUrl + "/Member/SelectMember";
        /**
         * 获取会员信息
         */
        ApiConfig.GetMemberInfo = GameConfig.WebApiBaseUrl + "/Member/GetUserProfile";
    })(ApiConfig = Net.ApiConfig || (Net.ApiConfig = {}));
})(Net || (Net = {}));
