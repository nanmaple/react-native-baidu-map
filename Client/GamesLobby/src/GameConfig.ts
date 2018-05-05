namespace GameConfig {
    export const IsDebug = false;

    export const Domain = IsDebug ? "www.zyyft.cn" : "m.17guess.cn";
    export const WebApiBaseUrl = IsDebug ? "https://192.168.0.143:8200" : "https://eg.s1.natapp.cc/api";

    export const DesignWidth = 1334;
    export const DesignHeight = 750;
    export const CacheType = 0; //0 localstorage , 1 cookie ,2 session
    export function GetRedirectUrl(gameID: number,parentID: string) {
        return `http://${this.Domain}/${gameID}?parentid=${parentID}`;
    }
}