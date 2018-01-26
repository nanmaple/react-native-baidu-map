
export const IsDebug = false;
export const Domain = "www.zyyft.cn";
export const CacheType = 0; //0 localstorage , 1 cookie ,2 session
export const WebApiBaseUrl = "http://192.168.0.143:8200";
export function GetRedirectUrl(gameID: number) {
    return `http://${this.Domain}/${gameID}/`;
}
export let Language = "CH";