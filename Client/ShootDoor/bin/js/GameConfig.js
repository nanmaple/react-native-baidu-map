var GameConfig;
(function (GameConfig) {
    GameConfig.GameID = 1;
    GameConfig.IsDebug = false;
    GameConfig.DeviceType = "MOBILE";
    GameConfig.DeviceId = "123456";
    GameConfig.CacheType = 0; //0 localstorage , 1 cookie ,2 session
    GameConfig.Domain = GameConfig.IsDebug ? "www.zyyft.cn" : "eg.s1.natapp.cc";
    GameConfig.WebApiBaseUrl = GameConfig.IsDebug ? "http://192.168.0.143:8200" : "http://" + GameConfig.Domain + "/api";
    GameConfig.BetWebApiBaseUrl = GameConfig.IsDebug ? "http://192.168.0.143:8201" : "http://" + GameConfig.Domain + "/report";
    GameConfig.DesignWidth = 1334;
    GameConfig.DesignHeight = 750;
    GameConfig.HeightRatio = 1;
    GameConfig.WidthRatio = 1;
    GameConfig.HeightWidth = 1;
    GameConfig.WidthHeight = 1;
    GameConfig.RatioType = true; // true 宽比率大,false 高比率大
    function GetDomainUrl(parentId) {
        parentId = parentId ? "&parentid=" + parentId : "";
        return "http://" + GameConfig.Domain + "?gameid=" + GameConfig.GameID + parentId;
    }
    GameConfig.GetDomainUrl = GetDomainUrl;
    GameConfig.DebugToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNZW1iZXJJZCI6NTAsIkRldmljZUlEIjoiMTIzNDU2IiwiRGV2aWNlVHlwZSI6MSwiZXhwIjoxNTE2Nzc3NDk0LCJpYXQiOjE1MTYxNzI2OTR9.o_bo9T4qe_NwqKCxK0YknrQvCoK70jAxqV5-Yj-lJnM";
    function GetSocketUrl(memberId, token) {
        if (GameConfig.IsDebug) {
            return "ws://192.168.0.143:9800?GameId=" + this.GameID + "&MemberId=" + memberId + "&Device=" + this.DeviceType + "&DeviceId=" + this.DeviceId + "&Token=" + token;
        }
        return "ws://s1.natapp.cc:9111?GameId=" + this.GameID + "&MemberId=" + memberId + "&Device=" + this.DeviceType + "&DeviceId=" + this.DeviceId + "&Token=" + token;
    }
    GameConfig.GetSocketUrl = GetSocketUrl;
    //微信相关
    GameConfig.AppId = GameConfig.IsDebug ? "wxbb5416518880be41" : "wx406c2ba47e252e53";
    function GetWeChatUrl(parentID, isAuthorize) {
        if (isAuthorize === void 0) { isAuthorize = true; }
        if (isAuthorize) {
            return "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + this.AppId + "&redirect_uri=http%3A%2F%2F" + this.Domain + "%3fgameid%3d" + this.GameID + "%26parentid%3d" + parentID + "&response_type=code&scope=snsapi_base&state={state}#wechat_redirect";
        }
        else {
            return "http://" + this.Domain + "?gameid=" + this.GameID + "&parentid=" + parentID;
        }
    }
    GameConfig.GetWeChatUrl = GetWeChatUrl;
    GameConfig.WeChatTitle = "";
    GameConfig.WeChatDesc = "";
    GameConfig.WeChatImgUrl = "";
    function GetWeChatShareDto(parentID, isAuthorize) {
        if (isAuthorize === void 0) { isAuthorize = true; }
        var dto = {
            Title: "射龙门",
            Desc: "射龙门H5游戏",
            ImgUrl: "",
            Link: ""
        };
        if (isAuthorize) {
            dto.Link = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + this.AppId + "&redirect_uri=http%3A%2F%2F" + this.Domain + "%3fgameid%3d" + this.GameID + "%26parentid%3d" + parentID + "&response_type=code&scope=snsapi_base&state={state}#wechat_redirect";
        }
        else {
            dto.Link = "http://" + this.Domain + "?gameid=" + this.GameID + "&parentid=" + parentID;
        }
        return dto;
    }
    GameConfig.GetWeChatShareDto = GetWeChatShareDto;
})(GameConfig || (GameConfig = {}));
