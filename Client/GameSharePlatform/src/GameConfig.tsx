
export const IsDebug = false;
export const Domain = IsDebug ? "192.168.0.2:9113" : "m.synjiguang.com";
export const WebApiBaseUrl = `//${Domain}/api`;
export const BetWebApiBaseUrl = `//${Domain}/report`;
export const CacheType = 0; //0 localstorage , 1 cookie ,2 session
export function GetRedirectUrl(gameID: number, local: boolean, token: string, lang: string = 'ch') {
    let backUrl = encodeURIComponent(window.location.href);
    if (local) {
        let v = Math.random();
        return `//${this.Domain}/${gameID}/?v=${v}&backurl=${backUrl}`;
    } else {
        return `//${this.Domain}/Login/Games/${gameID}/?token=${token}&lang=${lang}&backurl=${backUrl}`;
    }
}
export let Language = "CH";

export const DeviceType = "MOBILE";
export const DeviceId = "123456";
//export let AppId = IsDebug ? "wxbb5416518880be41" : localStorage.getItem("AppId");//localStorage.getItem("AppId")"wx9baa444781060c25"
export function GetWeChatShareDto(parentID: string, isAuthorize: boolean = true) {
    let AppId = localStorage.getItem("AppId");
    let dto: any = {
        Link: ""
    }
    let sharGameUrl = `http://${this.Domain}/gameshareplatform/?parentid=${parentID}`;
    if (isAuthorize) {
        sharGameUrl = encodeURIComponent(sharGameUrl);
        dto.Link = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${AppId}&redirect_uri=${sharGameUrl}&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect`;
    } else {
        dto.Link = sharGameUrl;
    }
    return dto;
}