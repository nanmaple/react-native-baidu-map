/// <reference path="GameManager/index.ts"/>

class GameMain extends GameManager {
    /**
    * 侦听Socket连接事件
    */
    public OnNoNetwork(): void {
        
    };

    /**
     * 侦听Socket连接事件
     */
    public OnConnectHandler(): void {

    };

    /**
     * 侦听Socket关闭事件
     */
    public OnCloseHandler(message: string): void {

    };
    /**
     * 侦听会员状态关闭事件
     */
    public OnMemberCloseHandler(): void {

    };
    /**
     * 侦听Socket错误事件
     * @param message 错误信息
     */
    public OnErrorHandler(message: string): void {

    };

    /**
     * 侦听Socket重新连接事件
     */
    public OnWillReconnectHandler(): void {

    };

    /**
     * 侦听游戏命令
     * @param data 
     */
    public OnMessageHandler(data: any): void {

    };

    /**
     * 侦听登出事件
     */
    public OnLogoutHandler(): void {

    };

    /**
     * Ack回调
     * @param data ack信息，一般为之前发送信息的消息id
     */
    public OnAckHandler(data: any): void {

    };

    /**
     * 系统推送（预留）
     * @param data 
     */
    public OnSystemPushHandler(data: any): void {

    };

    /********************* Socket *********************/
} 