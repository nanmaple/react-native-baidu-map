/// <reference path="../../GameConfig.ts" />
var Net;
(function (Net) {
    var ApiConfig;
    (function (ApiConfig) {
        /**
         * 获取投注记录信息
         */
        ApiConfig.GetBetRecord = GameConfig.BetWebApiBaseUrl + "/Bet/GetBetRecord";
        /**
         * 游客登录
         */
        ApiConfig.LoginByTourists = GameConfig.WebApiBaseUrl + "/Member/DemoAccountLogin";
        /**
         * 获取微信js签名信息
         */
        ApiConfig.GetJsSignature = GameConfig.WebApiBaseUrl + "/WeChat/GetJsSignature";
    })(ApiConfig = Net.ApiConfig || (Net.ApiConfig = {}));
})(Net || (Net = {}));
