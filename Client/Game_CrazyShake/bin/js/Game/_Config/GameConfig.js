var GameConfig;
(function (GameConfig) {
    /****************调试*********************/
    GameConfig.IsDebug = true;
    GameConfig.OpenLog = true;
    /****************基础信息*****************/
    GameConfig.GameID = 3; //游戏ID
    GameConfig.DeviceType = "MOBILE"; //登录设备类型
    GameConfig.DeviceId = "123456"; //登录设备ID
    GameConfig.CacheType = 0; //存储类型 0 localstorage , 1 cookie ,2 session
    /****************API信息*****************/
    GameConfig.Domain = GameConfig.IsDebug ? "192.168.0.2:9113" : "m.synjiguang.com"; //api域名
    GameConfig.SocketUrl = GameConfig.IsDebug ? "ws://192.168.0.120:9800" : "ws://m.synjiguang.com:9111"; //socket域名
    GameConfig.WebApiBaseUrl = "http://" + GameConfig.Domain + "/api"; //api
    GameConfig.BetWebApiBaseUrl = "http://" + GameConfig.Domain + "/report";
    /***************UI设计信息***************/
    GameConfig.DesignLength = 1334; //设计尺寸-长边
    GameConfig.DesignShort = 750; //设计尺寸-短边
    GameConfig.ScreenMode = 0; //横竖屏类型 ：0 竖屏  1横屏，默认竖屏
    /***************配置信息方法***************/
    /****************微信AppId****************/
    GameConfig.AppId = null;
    /**
     * 设置APPID
     * @param id
     */
    function SetAppID(id) {
        this.AppId = id;
    }
    GameConfig.SetAppID = SetAppID;
    /**
     * 获取游戏token方法
     * @param memberId 会员ID
     * @param token token
     */
    function GetSocketUrl(memberId, token) {
        return GameConfig.SocketUrl + "?GameId=" + this.GameID + "&MemberId=" + memberId + "&Device=" + this.DeviceType + "&DeviceId=" + this.DeviceId + "&Token=" + token;
    }
    GameConfig.GetSocketUrl = GetSocketUrl;
    /**
     * 获取微信地址方法
     * @param parentID 是否为授权地址
     * @param isAuthorize 是否为授权地址
     */
    function GetWeChatUrl(parentID, isAuthorize) {
        if (isAuthorize === void 0) { isAuthorize = true; }
        var sharGameUrl = "http://" + this.Domain + "?gameid=" + this.GameID + "&parentid=" + parentID;
        if (isAuthorize) {
            sharGameUrl = encodeURIComponent(sharGameUrl);
            return "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + this.AppId + "&redirect_uri=" + sharGameUrl + "&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect";
        }
        else {
            return sharGameUrl;
        }
    }
    GameConfig.GetWeChatUrl = GetWeChatUrl;
    /**
     * 获取分享信息
     * @param parentID 父级ID
     * @param isAuthorize 是否为授权地址
     */
    function GetWeChatShareDto(parentID) {
        var dto = {
            Title: "NB.ShootDoor",
            Desc: "ShootDoor is a easy and exciting H5 game that simulated goal of soccer by poker,Please try it now!",
            ImgUrl: "http://" + this.Domain + "/logo.jpg",
            Link: ""
        };
        dto.Link = GetWeChatUrl(parentID, false);
        return dto;
    }
    GameConfig.GetWeChatShareDto = GetWeChatShareDto;
    /**
     * 获取大厅跳转地址
     * @param parentID
     */
    function GetHallUrl(parentID) {
        return "http://" + this.Domain + "?gameid=" + this.GameID + "&parentid=" + parentID;
    }
    GameConfig.GetHallUrl = GetHallUrl;
})(GameConfig || (GameConfig = {}));
//# sourceMappingURL=GameConfig.js.map