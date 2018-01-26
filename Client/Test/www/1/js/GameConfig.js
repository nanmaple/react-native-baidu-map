var GameConfig;
(function (GameConfig) {
    GameConfig.GameID = 1;
    GameConfig.Device = "MOBILE";
    GameConfig.IsDebug = false;
    GameConfig.CacheType = 0; //0 localstorage , 1 cookie ,2 session
    GameConfig.WebApiBaseUrl = "http://192.168.0.143:8201";
    GameConfig.Domain = "www.zyyft.cn";
    GameConfig.DesignWidth = 1334;
    GameConfig.DesignHeight = 750;
    GameConfig.DebugToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNZW1iZXJJZCI6NTAsIkRldmljZUlEIjoiMTIzNDU2IiwiRGV2aWNlVHlwZSI6MSwiZXhwIjoxNTE2Nzc3NDk0LCJpYXQiOjE1MTYxNzI2OTR9.o_bo9T4qe_NwqKCxK0YknrQvCoK70jAxqV5-Yj-lJnM";
    function GetSocketUrl(memberId, deviceId, token) {
        if (GameConfig.IsDebug) {
            memberId = 45;
            token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJEZXZpY2VUeXBlIjoxLCJEZXZpY2VJRCI6IjEyMzQ1NiIsIk1lbWJlcklEIjo0NSwiZXhwIjoxNTE2OTU5Mjk3LCJpYXQiOjE1MTYzNTQ0OTd9.XV4SW7IaR2qeJvxvZIBvyIWPBAGMUgKIu5R7GzKB3Tk";
        }
        return "ws://192.168.0.2:9110?GameId=" + this.GameID + "&MemberId=" + memberId + "&Device=" + this.Device + "&DeviceId=" + deviceId + "&Token=" + token;
    }
    GameConfig.GetSocketUrl = GetSocketUrl;
    GameConfig.AppId = "wxbb5416518880be41";
    function GetWeChatUrl(gameID, parentID) {
        return "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + this.AppId + "&redirect_uri=http%3A%2F%2F" + this.Domain + "%2fgamelobby%3fgameID%3d" + gameID + "%26parentID%3d" + parentID + "&response_type=code&scope=snsapi_base&state={state}#wechat_redirect";
    }
    GameConfig.GetWeChatUrl = GetWeChatUrl;
    GameConfig.HeightRatio = 1;
    GameConfig.WidthRatio = 1;
    GameConfig.HeightWidth = 1;
    GameConfig.WidthHeight = 1;
    GameConfig.RatioType = true; // true 宽比率大,false 高比率大
})(GameConfig || (GameConfig = {}));
