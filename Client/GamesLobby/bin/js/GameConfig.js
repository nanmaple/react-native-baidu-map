var GameConfig;
(function (GameConfig) {
    GameConfig.IsDebug = false;
    GameConfig.Domain = GameConfig.IsDebug ? "www.zyyft.cn" : "m.17guess.cn";
    GameConfig.WebApiBaseUrl = GameConfig.IsDebug ? "http://192.168.0.143:8200" : "http://eg.s1.natapp.cc/api";
    GameConfig.DesignWidth = 1334;
    GameConfig.DesignHeight = 750;
    GameConfig.CacheType = 0; //0 localstorage , 1 cookie ,2 session
    function GetRedirectUrl(gameID, parentID) {
        return "http://" + this.Domain + "/" + gameID + "?parentid=" + parentID;
    }
    GameConfig.GetRedirectUrl = GetRedirectUrl;
})(GameConfig || (GameConfig = {}));
