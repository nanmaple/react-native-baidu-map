namespace GameConfig {
    export const GameID: number = 1;
    export const IsDebug: boolean = false;
    
    export const DeviceType: string = "MOBILE";
    export const DeviceId: string = "123456";
    export const CacheType: number = 0; //0 localstorage , 1 cookie ,2 session

    export const Domain: string = IsDebug ? "192.168.0.2:9113" : "m.synjiguang.com";
	export const SocketUrl: string = IsDebug ? "ws://192.168.0.2:9110" : "ws://m.synjiguang.com:9111";
    export const WebApiBaseUrl: string = `http://${Domain}/api`;
    export const BetWebApiBaseUrl: string = `http://${Domain}/report`;

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
        return `//${Domain}?gameid=${GameID}${parentId}`;
    }
    export const DebugToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNZW1iZXJJZCI6NTAsIkRldmljZUlEIjoiMTIzNDU2IiwiRGV2aWNlVHlwZSI6MSwiZXhwIjoxNTE2Nzc3NDk0LCJpYXQiOjE1MTYxNzI2OTR9.o_bo9T4qe_NwqKCxK0YknrQvCoK70jAxqV5-Yj-lJnM";
    export function GetSocketUrl(memberId: number, token: string) {
        return `${SocketUrl}?GameId=${this.GameID}&MemberId=${memberId}&Device=${this.DeviceType}&DeviceId=${this.DeviceId}&Token=${token}`;
    }
    
    //获取APPID
    export function GetAppID(id: any) {
        GameConfig.AppId = id;
    } 

    //微信相关
    export let AppId:any = null;
    export function GetWeChatUrl(parentID: string, isAuthorize: boolean = true) {
        let sharGameUrl = `http://${this.Domain}?gameid=${this.GameID}&parentid=${parentID}`;
        if (isAuthorize) {
            sharGameUrl = encodeURIComponent(sharGameUrl);
            return `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${this.AppId}&redirect_uri=${sharGameUrl}&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect`;
        } else {
            return `http://${this.Domain}?gameid=${this.GameID}&parentid=${parentID}`;
        }
    }
    
    export const WeChatTitle = "";
    export const WeChatDesc = "";
    export const WeChatImgUrl = "";
    export function GetWeChatShareDto(parentID: string, isAuthorize: boolean = true) {
        let dto: any = {
            Title: "NB.ShootDoor",
            Desc: "ShootDoor is a easy and exciting H5 game that simulated goal of soccer by poker,Please try it now!",
            ImgUrl: `http://${this.Domain}/logo.jpg`,
            Link: ""
        }
		let sharGameUrl = `http://${this.Domain}?gameid=${this.GameID}&parentid=${parentID}`;
        if (isAuthorize) {
			sharGameUrl = encodeURIComponent(sharGameUrl);
            dto.Link = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${this.AppId}&redirect_uri=${sharGameUrl}&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect`;
        } else {
            dto.Link = sharGameUrl;
        }
        return dto;
    }
}