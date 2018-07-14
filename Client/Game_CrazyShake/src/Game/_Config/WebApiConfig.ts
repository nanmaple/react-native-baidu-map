/// <reference path="./GameConfig.ts" />
namespace ApiConfig {
    /**
     * 获取投注记录信息
     */
    export const GetBetRecord = GameConfig.BetWebApiBaseUrl + "/Bet/GetBetRecord";
    /**
     * 获取游客token
     */
    export const LoginGame = GameConfig.WebApiBaseUrl + "/Member/LoginGame";
}