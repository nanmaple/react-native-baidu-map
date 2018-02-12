namespace GameConfig {
    export const GameID = 1;
    export const IsDebug = false;

    export const DeviceType = "MOBILE";
    export const DeviceId = "123456";
    export const CacheType = 0; //0 localstorage , 1 cookie ,2 session

    export const Domain = IsDebug ? "www.zyyft.cn" : "eg.s1.natapp.cc";
    export const WebApiBaseUrl = IsDebug ? "http://192.168.0.143:8200" : `http://${Domain}/api`;
    export const BetWebApiBaseUrl = IsDebug ? "http://192.168.0.143:8201" : `http://${Domain}/report`;

    export const DesignWidth = 1334;
    export const DesignHeight = 750;
    export let HeightRatio = 1;
    export let WidthRatio = 1;
    export let HeightWidth = 1;
    export let WidthHeight = 1;
    export let RatioType: boolean = true;// true 宽比率大,false 高比率大

    export function GetDomainUrl(parentId: string) {
        parentId = parentId ? `&parentid=${parentId}` : "";
        return `http://${Domain}?gameid=${GameID}${parentId}`;
    }
    export const DebugToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNZW1iZXJJZCI6NTAsIkRldmljZUlEIjoiMTIzNDU2IiwiRGV2aWNlVHlwZSI6MSwiZXhwIjoxNTE2Nzc3NDk0LCJpYXQiOjE1MTYxNzI2OTR9.o_bo9T4qe_NwqKCxK0YknrQvCoK70jAxqV5-Yj-lJnM";
    export function GetSocketUrl(memberId: number, token: string) {
        if (IsDebug) {
            return `ws://192.168.0.143:9800?GameId=${this.GameID}&MemberId=${memberId}&Device=${this.DeviceType}&DeviceId=${this.DeviceId}&Token=${token}`;
        }
        return `ws://s1.natapp.cc:9111?GameId=${this.GameID}&MemberId=${memberId}&Device=${this.DeviceType}&DeviceId=${this.DeviceId}&Token=${token}`;
    }
    //微信相关
    export const AppId = IsDebug ? "wxbb5416518880be41" : "wx406c2ba47e252e53";
    export function GetWeChatUrl(parentID: string, isAuthorize: boolean = true) {
        if (isAuthorize) {
            return `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${this.AppId}&redirect_uri=http%3A%2F%2F${this.Domain}%3fgameid%3d${this.GameID}%26parentid%3d${parentID}&response_type=code&scope=snsapi_base&state={state}#wechat_redirect`;
        } else {
            return `http://${this.Domain}?gameid=${this.GameID}&parentid=${parentID}`;
        }
    }

    export const WeChatTitle = "";
    export const WeChatDesc = "";
    export const WeChatImgUrl = "";
    export function GetWeChatShareDto(parentID: string, isAuthorize: boolean = true) {
        let dto: any = {
            Title: "射龙门",
            Desc: "射龙门H5游戏",
            ImgUrl: "",
            Link: ""
        }
        if (isAuthorize) {
            dto.Link = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${this.AppId}&redirect_uri=http%3A%2F%2F${this.Domain}%3fgameid%3d${this.GameID}%26parentid%3d${parentID}&response_type=code&scope=snsapi_base&state={state}#wechat_redirect`;
        } else {
            dto.Link = `http://${this.Domain}?gameid=${this.GameID}&parentid=${parentID}`;
        }
        return dto;
    }
}