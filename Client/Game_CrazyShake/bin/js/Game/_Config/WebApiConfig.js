/// <reference path="./GameConfig.ts" />
var ApiConfig;
(function (ApiConfig) {
    /**
     * 获取投注记录信息
     */
    ApiConfig.GetBetRecord = GameConfig.BetWebApiBaseUrl + "/Bet/GetBetRecord";
    /**
     * 获取游客token
     */
    ApiConfig.LoginGame = GameConfig.WebApiBaseUrl + "/Member/LoginGame";
})(ApiConfig || (ApiConfig = {}));
//# sourceMappingURL=WebApiConfig.js.map