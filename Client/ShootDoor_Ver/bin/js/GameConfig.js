var GameConfig;
(function (GameConfig) {
    GameConfig.GameID = 1;
    GameConfig.IsDebug = false;
    GameConfig.DeviceType = "MOBILE";
    GameConfig.DeviceId = "123456";
    GameConfig.CacheType = 0; //0 localstorage , 1 cookie ,2 session
    GameConfig.Domain = GameConfig.IsDebug ? "192.168.0.2:9113" : "m.synjiguang.com";
    GameConfig.SocketUrl = GameConfig.IsDebug ? "ws://192.168.0.2:9110" : "ws://m.synjiguang.com:9111";
    GameConfig.WebApiBaseUrl = "//" + GameConfig.Domain + "/api";
    GameConfig.BetWebApiBaseUrl = "//" + GameConfig.Domain + "/report";
    GameConfig.DesignLength = 1334;
    GameConfig.DesignShort = 750;
    GameConfig.LengthRatio = 1;
    GameConfig.ShortRatio = 1;
    GameConfig.LengthShort = 1;
    GameConfig.ShortLength = 1;
    //RatioType true 长的一边比率大，短边被压缩，需要再压缩长边；false 短的一边比率大，
    GameConfig.RatioType = true;
    GameConfig.ScreenMode = 0;
    GameConfig.SocketToken = "";
    function GetDomainUrl(parentId) {
        parentId = parentId ? "&parentid=" + parentId : "";
        return "//" + GameConfig.Domain + "?gameid=" + GameConfig.GameID + parentId;
    }
    GameConfig.GetDomainUrl = GetDomainUrl;
    GameConfig.DebugToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNZW1iZXJJZCI6NTAsIkRldmljZUlEIjoiMTIzNDU2IiwiRGV2aWNlVHlwZSI6MSwiZXhwIjoxNTE2Nzc3NDk0LCJpYXQiOjE1MTYxNzI2OTR9.o_bo9T4qe_NwqKCxK0YknrQvCoK70jAxqV5-Yj-lJnM";
    function GetSocketUrl(memberId, token) {
        return GameConfig.SocketUrl + "?GameId=" + this.GameID + "&MemberId=" + memberId + "&Device=" + this.DeviceType + "&DeviceId=" + this.DeviceId + "&Token=" + token;
    }
    GameConfig.GetSocketUrl = GetSocketUrl;
    //获取APPID
    function GetAppID(id) {
        GameConfig.AppId = id;
    }
    GameConfig.GetAppID = GetAppID;
    //微信相关
    GameConfig.AppId = null;
    function GetWeChatUrl(parentID, isAuthorize) {
        if (isAuthorize === void 0) { isAuthorize = true; }
        var sharGameUrl = "http://" + this.Domain + "?gameid=" + this.GameID + "&parentid=" + parentID;
        if (isAuthorize) {
            sharGameUrl = encodeURIComponent(sharGameUrl);
            return "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + this.AppId + "&redirect_uri=" + sharGameUrl + "&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect";
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
            Title: "NB.ShootDoor",
            Desc: "ShootDoor is a easy and exciting H5 game that simulated goal of soccer by poker,Please try it now!",
            ImgUrl: "http://" + this.Domain + "/logo.jpg",
            Link: ""
        };
        var sharGameUrl = "http://" + this.Domain + "?gameid=" + this.GameID + "&parentid=" + parentID;
        if (isAuthorize) {
            sharGameUrl = encodeURIComponent(sharGameUrl);
            dto.Link = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + this.AppId + "&redirect_uri=" + sharGameUrl + "&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect";
        }
        else {
            dto.Link = sharGameUrl;
        }
        return dto;
    }
    GameConfig.GetWeChatShareDto = GetWeChatShareDto;
})(GameConfig || (GameConfig = {}));
