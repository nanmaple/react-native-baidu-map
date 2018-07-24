namespace GameConfig {
    /****************调试*********************/
    //是否为调试状态
    export const IsDebug: boolean = true;
    //是否开启日志
    export const OpenLog: boolean = true;
    //是否使用测试服务器地址
    export const IsTestServer: boolean = true;
    /****************基础信息*****************/
    //游戏ID
    export const GameID: number = 5;
    //登录设备类型
    export const DeviceType: string = "MOBILE";
    //登录设备ID
    export const DeviceId: string = "123456";
    //存储类型 0 localstorage , 1 cookie ,2 session
    export const CacheType: number = 0;

    /****************API信息*****************/
    //api域名
    export const Domain: string = IsTestServer ? "192.168.0.2:9113" : "m.synjiguang.com";
    //socket域名
    export const SocketUrl: string = IsTestServer ? "ws://192.168.0.2:9110" : "ws://m.synjiguang.com:9111";
    //api基本地址
    export const WebApiBaseUrl: string = `http://${Domain}/api`;
    //投注基本地址
    export const BetWebApiBaseUrl: string = `http://${Domain}/report`;

    /***************UI设计信息***************/
    //设计尺寸-长边
    export const DesignLength: number = 1334;
    //设计尺寸-短边
    export const DesignShort: number = 750;
    //横竖屏类型 ：0 竖屏  1横屏，默认竖屏
    export let ScreenMode: number = 0;
	
    /*************配置微信分享信息*************/

    export const WeChatShareMsg: any = {
        Title: "NB.ShootDoor",
        Desc: "ShootDoor is a easy and exciting H5 game that simulated goal of soccer by poker,Please try it now!",
        ImgUrl: `http://${Domain}/logo.jpg`,
        Link: ""
    }

    /***************配置信息方法***************/
    /**
     * 获取游戏token方法
     * @param memberId 会员ID
     * @param token token
     */
    export function GetSocketUrl(memberId: number, token: string) {
        return `${SocketUrl}?GameId=${this.GameID}&MemberId=${memberId}&Device=${this.DeviceType}&DeviceId=${this.DeviceId}&Token=${token}`;
    }

    /**
     * 获取大厅跳转地址
     * @param parentID 
     */
    export function GetHallUrl(parentID: string) {
        return `http://${this.Domain}?gameid=${this.GameID}&parentid=${parentID}`;
    }
}