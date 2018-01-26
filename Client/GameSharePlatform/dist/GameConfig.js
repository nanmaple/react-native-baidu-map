"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsDebug = false;
exports.Domain = "www.zyyft.cn";
exports.CacheType = 0; //0 localstorage , 1 cookie ,2 session
exports.WebApiBaseUrl = "http://192.168.0.143:8200";
function GetRedirectUrl(gameID) {
    return `http://${this.Domain}/${gameID}/`;
}
exports.GetRedirectUrl = GetRedirectUrl;
exports.Language = "CH";
//# sourceMappingURL=GameConfig.js.map