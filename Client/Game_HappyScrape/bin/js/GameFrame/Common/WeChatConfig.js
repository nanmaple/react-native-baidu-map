var WeChatModule;
(function (WeChatModule) {
    /**
     * appId
     */
    WeChatModule.AppId = null;
    /**
     * 设置APPID
     * @param id
     */
    function SetAppID(id) {
        this.AppId = id;
    }
    WeChatModule.SetAppID = SetAppID;
    /**
     * 获取微信地址方法
     * @param parentID 是否为授权地址
     * @param isAuthorize 是否为授权地址
     */
    function GetWeChatUrl(parentID, isAuthorize) {
        if (isAuthorize === void 0) { isAuthorize = true; }
        var sharGameUrl = GameConfig.GetHallUrl(parentID);
        if (isAuthorize) {
            sharGameUrl = encodeURIComponent(sharGameUrl);
            return "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + this.AppId + "&redirect_uri=" + sharGameUrl + "&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect";
        }
        else {
            return sharGameUrl;
        }
    }
    WeChatModule.GetWeChatUrl = GetWeChatUrl;
    /**
     * 获取分享信息
     * @param parentID 父级ID
     */
    function GetWeChatShareDto(parentID) {
        var dto = GameConfig.WeChatShareMsg;
        dto.Link = GetWeChatUrl(parentID, false);
        return dto;
    }
    WeChatModule.GetWeChatShareDto = GetWeChatShareDto;
})(WeChatModule || (WeChatModule = {}));
//# sourceMappingURL=WeChatConfig.js.map