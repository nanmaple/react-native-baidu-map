"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * * 配置微信分享
     */
function ConfigWechat() {
    var wechat = new Laya.Browser.window.Wechat(Network.Http, null, null);
    var appID = wechat.GetAppIDByLocal("AppId", 0);
    if (appID) {
        GameConfig.SetAppID(appID);
    }
    else {
        wechat.GetAppID().then(function (appID) {
            GameConfig.SetAppID(appID);
        });
    }
}
exports.ConfigWechat = ConfigWechat;
//# sourceMappingURL=index.js.map