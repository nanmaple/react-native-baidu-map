namespace GameConfig {
    export const GameID: number = 1;
    export const IsDebug: boolean = false;
    
    export const DeviceType: string = "MOBILE";
    export const DeviceId: string = "123456";
    export const CacheType: number = 0; //0 localstorage , 1 cookie ,2 session

    export const Domain: string = IsDebug ? "www.zyyft.cn" : "eg.s1.natapp.cc";
    export const WebApiBaseUrl: string = IsDebug ? "http://192.168.0.143:8200" : `http://${Domain}/api`;
    export const BetWebApiBaseUrl: string = IsDebug ? "http://192.168.0.143:8201" : `http://${Domain}/report`;

    export const DesignLength: number = 1334;
    export const DesignShort: number = 750;
    export let LengthRatio: number = 1;
    export let ShortRatio: number = 1;
    export let LengthShort: number = 1;
    export let ShortLength: number = 1;
    //RatioType true 长的一边比率大，短边被压缩，需要再压缩长边；false 短的一边比率大，
    export let RatioType: boolean = true;
    export let ScreenMode: number = 0;

    export let SocketToken="";

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
    //获取APPID
    export function GetAppID(id: any) {
        GameConfig.AppId = id;
    } 

    //微信相关
    export let AppId:any = null;
    export function GetWeChatUrl(parentID: string, isAuthorize: boolean = true) {
        if (isAuthorize) {
            return `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${this.AppId}&redirect_uri=http%3A%2F%2F${this.Domain}%3fgameid%3d${this.GameID}%26parentid%3d${parentID}&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect`;
        } else {
            return `http://${this.Domain}?gameid=${this.GameID}&parentid=${parentID}`;
        }
    }
    
    export const WeChatTitle = "";
    export const WeChatDesc = "";
    export const WeChatImgUrl = "";
    export function GetWeChatShareDto(parentID: string, isAuthorize: boolean = true) {
        let dto: any = {
            Title: "ShootDoor",
            Desc: "射龙门H5游戏",
            ImgUrl: "",
            Link: ""
        }
        if (isAuthorize) {
            dto.Link = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${this.AppId}&redirect_uri=http%3A%2F%2F${this.Domain}%3fgameid%3d${this.GameID}%26parentid%3d${parentID}&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect`;
        } else {
            dto.Link = `http://${this.Domain}?gameid=${this.GameID}&parentid=${parentID}`;
        }
        return dto;
    }
}