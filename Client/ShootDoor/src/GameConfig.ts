namespace GameConfig {
    export const GameID = 1;
    export const Device = "MOBILE";
    export const IsDebug = false;
    export const CacheType = 0; //0 localstorage , 1 cookie ,2 session
    export const WebApiBaseUrl = "http://192.168.0.143:8201";
    export const Domain = "www.zyyft.cn";
    export const DesignWidth = 1334;
    export const DesignHeight = 750;
    export const DebugToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNZW1iZXJJZCI6NTAsIkRldmljZUlEIjoiMTIzNDU2IiwiRGV2aWNlVHlwZSI6MSwiZXhwIjoxNTE2Nzc3NDk0LCJpYXQiOjE1MTYxNzI2OTR9.o_bo9T4qe_NwqKCxK0YknrQvCoK70jAxqV5-Yj-lJnM";
    export function GetSocketUrl(memberId: number, deviceId: string, token: string) {
        if (IsDebug) {
            memberId = 45;
            token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJEZXZpY2VUeXBlIjoxLCJEZXZpY2VJRCI6IjEyMzQ1NiIsIk1lbWJlcklEIjo0NSwiZXhwIjoxNTE2OTU5Mjk3LCJpYXQiOjE1MTYzNTQ0OTd9.XV4SW7IaR2qeJvxvZIBvyIWPBAGMUgKIu5R7GzKB3Tk";
        }
        return `ws://192.168.0.2:9110?GameId=${this.GameID}&MemberId=${memberId}&Device=${this.Device}&DeviceId=${deviceId}&Token=${token}`;
    }
    export const AppId = "wxbb5416518880be41";
    export function GetWeChatUrl(gameID: number, parentID: string) {
        return `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${this.AppId}&redirect_uri=http%3A%2F%2F${this.Domain}%2fgamelobby%3fgameID%3d${gameID}%26parentID%3d${parentID}&response_type=code&scope=snsapi_base&state={state}#wechat_redirect`;
    }
    export let HeightRatio = 1;
    export let WidthRatio = 1;
    export let HeightWidth = 1;
    export let WidthHeight = 1;
    export let RatioType: boolean = true;// true 宽比率大,false 高比率大
}