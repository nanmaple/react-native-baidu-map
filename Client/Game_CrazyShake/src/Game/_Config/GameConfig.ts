namespace GameConfig {
    /****************调试*********************/
    export const IsDebug: boolean = true;
    export const OpenLog: boolean = true;
    /****************基础信息*****************/
    export const GameID: number = 3;//游戏ID
    export const DeviceType: string = "MOBILE";//登录设备类型
    export const DeviceId: string = "123456";//登录设备ID
    export const CacheType: number = 0; //存储类型 0 localstorage , 1 cookie ,2 session

    /****************API信息*****************/
    export const Domain: string = IsDebug ? "192.168.0.2:9113" : "m.synjiguang.com";//api域名
    export const SocketUrl: string = IsDebug ? "ws://192.168.0.120:9800" : "ws://m.synjiguang.com:9111";//socket域名
    export const WebApiBaseUrl: string = `http://${Domain}/api`;//api
    export const BetWebApiBaseUrl: string = `http://${Domain}/report`;

    /***************UI设计信息***************/
    export const DesignLength: number = 1334;//设计尺寸-长边
    export const DesignShort: number = 750;//设计尺寸-短边
    export let ScreenMode: number = 0;//横竖屏类型 ：0 竖屏  1横屏，默认竖屏

    /***************配置信息方法***************/

    /****************微信AppId****************/
    export let AppId: any = null;
    /**
     * 设置APPID
     * @param id 
     */
    export function SetAppID(id: any) {
        this.AppId = id;
    }

    /**
     * 获取游戏token方法
     * @param memberId 会员ID
     * @param token token
     */
    export function GetSocketUrl(memberId: number, token: string) {
        return `${SocketUrl}?GameId=${this.GameID}&MemberId=${memberId}&Device=${this.DeviceType}&DeviceId=${this.DeviceId}&Token=${token}`;
    }

    /**
     * 获取微信地址方法
     * @param parentID 是否为授权地址
     * @param isAuthorize 是否为授权地址
     */
    export function GetWeChatUrl(parentID: string, isAuthorize: boolean = true) {
        let sharGameUrl = `http://${this.Domain}?gameid=${this.GameID}&parentid=${parentID}`;
        if (isAuthorize) {
            sharGameUrl = encodeURIComponent(sharGameUrl);
            return `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${this.AppId}&redirect_uri=${sharGameUrl}&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect`;
        } else {
            return sharGameUrl;
        }
    }

    /**
     * 获取分享信息
     * @param parentID 父级ID 
     * @param isAuthorize 是否为授权地址
     */
    export function GetWeChatShareDto(parentID: string) {
        let dto: any = {
            Title: "NB.ShootDoor",
            Desc: "ShootDoor is a easy and exciting H5 game that simulated goal of soccer by poker,Please try it now!",
            ImgUrl: `http://${this.Domain}/logo.jpg`,
            Link: ""
        }
        dto.Link = GetWeChatUrl(parentID, false);
        return dto;
    }
    /**
     * 获取大厅跳转地址
     * @param parentID 
     */
    export function GetHallUrl(parentID: string) {
        return `http://${this.Domain}?gameid=${this.GameID}&parentid=${parentID}`;
    }
}