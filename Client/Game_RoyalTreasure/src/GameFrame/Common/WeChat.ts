namespace WeChatModule {
    /**
     * 初始化微信
     * @param memberId 用户id 
     */
    export function InitWeChat(memberId: any) {
        //微信js签名配置
        let wechat = new Laya.Browser.window.Wechat(Network.Http, null, WeChatModule.GetWeChatShareDto(memberId));
        wechat.GetJsSignature((appID: any) => {
            WeChatModule.SetAppID(appID);
        });
    }
}