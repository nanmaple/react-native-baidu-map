var GameConfig;
(function (GameConfig) {
    /****************调试*********************/
    //是否为调试状态
    GameConfig.IsDebug = true;
    //是否开启日志
    GameConfig.OpenLog = true;
    /****************基础信息*****************/
    //游戏ID
    GameConfig.GameID = 5;
    //登录设备类型
    GameConfig.DeviceType = "MOBILE";
    //登录设备ID
    GameConfig.DeviceId = "123456";
    //存储类型 0 localstorage , 1 cookie ,2 session
    GameConfig.CacheType = 0;
    /****************API信息*****************/
    //api域名
    GameConfig.Domain = GameConfig.IsDebug ? "192.168.0.2:9113" : "m.synjiguang.com";
    //socket域名
    GameConfig.SocketUrl = GameConfig.IsDebug ? "ws://192.168.0.120:9800" : "ws://m.synjiguang.com:9111";
    //api基本地址
    GameConfig.WebApiBaseUrl = "http://" + GameConfig.Domain + "/api";
    //投注基本地址
    GameConfig.BetWebApiBaseUrl = "http://" + GameConfig.Domain + "/report";
    /***************UI设计信息***************/
    //设计尺寸-长边
    GameConfig.DesignLength = 1334;
    //设计尺寸-短边
    GameConfig.DesignShort = 750;
    //横竖屏类型 ：0 竖屏  1横屏，默认竖屏
    GameConfig.ScreenMode = 0;
    /*************配置微信分享信息*************/
    GameConfig.WeChatShareMsg = {
        Title: "NB.ShootDoor",
        Desc: "ShootDoor is a easy and exciting H5 game that simulated goal of soccer by poker,Please try it now!",
        ImgUrl: "http://" + GameConfig.Domain + "/logo.jpg",
        Link: ""
    };
    /***************配置信息方法***************/
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
     * 获取大厅跳转地址
     * @param parentID
     */
    function GetHallUrl(parentID) {
        return "http://" + this.Domain + "?gameid=" + this.GameID + "&parentid=" + parentID;
    }
    GameConfig.GetHallUrl = GetHallUrl;
})(GameConfig || (GameConfig = {}));
//# sourceMappingURL=GameConfig.js.map