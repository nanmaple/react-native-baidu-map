/**
 * SocketManager 事件
 */
namespace Network.Socket.SocketEvent {
    /**
     * Socket连接事件
     */
    export const OnConnect: string = "OnConnectEvent";
    /**
     * Socket关闭事件
     */
    export const OnClose: string = "OnCloseEvent";
    /**
     * Socket错误事件
     */
    export const OnError: string = "OnErrorEvent";
    /**
     * Socket重连事件
     */
    export const OnWillReconnect: string = "OnWillReconnectEvent";
    /**
     * Socket游戏消息事件
     */
    export const OnGame: string = "OnGameEvent";
    /**
     * 登出事件
     */
    export const OnLogout: string = "OnLogoutEvent";
    /**
     * 事件推送
     */
    export const OnSystemPush: string = "OnSystemPushEvent";
    /**
     * ACK
     */
    export const OnAck: string = "OnAckEvent";
    /**
     * 会员状态关闭
     */
     export const OnMemberClose: string = "OnMemberClose";
}