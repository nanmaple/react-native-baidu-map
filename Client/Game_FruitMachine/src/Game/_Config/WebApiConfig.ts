/// <reference path="./GameConfig.ts" />
namespace ApiConfig {
    /**
     * 获取投注记录信息
     */
    export const GetBetRecord = GameConfig.BetWebApiBaseUrl + "/Bet/GetBetRecord";
    /**
     * 游客登录
     */
    export const LoginByTourists = GameConfig.WebApiBaseUrl + "/Member/DemoAccountLogin";
    /**
     * 获取游客token
     */
    export const LoginGame = GameConfig.WebApiBaseUrl + "/Member/LoginGame";
    /**
     * 获取微信js签名信息
     */
    export const GetJsSignature = GameConfig.WebApiBaseUrl + "/WeChat/GetJsSignature";
    /**
     * 获取APPID
     */
    export const GetAppIDApi = GameConfig.WebApiBaseUrl + "/WeChat/GetAppID";   
}