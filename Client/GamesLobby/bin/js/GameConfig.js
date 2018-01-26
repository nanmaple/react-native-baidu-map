var GameConfig;
(function (GameConfig) {
    GameConfig.IsDebug = false;
    GameConfig.Domain = "www.zyyft.cn";
    GameConfig.CacheType = 0; //0 localstorage , 1 cookie ,2 session
    // export const WebApiBaseUrl = "http://192.168.0.2:9113";
    GameConfig.WebApiBaseUrl = "http://192.168.0.143:8200";
    GameConfig.DesignWidth = 1334;
    GameConfig.DesignHeight = 750;
    function GetRedirectUrl(gameID) {
        return "http://" + this.Domain + "/" + gameID + "/";
    }
    GameConfig.GetRedirectUrl = GetRedirectUrl;
})(GameConfig || (GameConfig = {}));
