var WeChatModule;
(function (WeChatModule) {
    /**
     * 初始化微信
     * @param memberId 用户id
     */
    function InitWeChat(memberId) {
        //微信js签名配置
        var wechat = new Laya.Browser.window.Wechat(Network.Http, null, WeChatModule.GetWeChatShareDto(memberId));
        wechat.GetJsSignature(function (appID) {
            WeChatModule.SetAppID(appID);
        });
    }
    WeChatModule.InitWeChat = InitWeChat;
})(WeChatModule || (WeChatModule = {}));
//# sourceMappingURL=WeChat.js.map