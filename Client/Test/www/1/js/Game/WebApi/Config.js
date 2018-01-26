/// <reference path="../../GameConfig.ts" />
var Net;
(function (Net) {
    var ApiConfig;
    (function (ApiConfig) {
        /**
         * 获取投注记录信息
         */
        ApiConfig.GetBetRecord = GameConfig.WebApiBaseUrl + "/Bet/GetBetRecord";
    })(ApiConfig = Net.ApiConfig || (Net.ApiConfig = {}));
})(Net || (Net = {}));
