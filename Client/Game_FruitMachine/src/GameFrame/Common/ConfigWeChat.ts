/**
 * 配置微信分享
 */
function ConfigWechat() {
    let wechat = new Laya.Browser.window.Wechat(Network.Http, null, null);
    let appID: any = wechat.GetAppIDByLocal("AppId", 0);
    if (appID) {
        GameConfig.SetAppID(appID);
    } else {
        wechat.GetAppID().then((appID) => {
            GameConfig.SetAppID(appID);
        });
    }
}