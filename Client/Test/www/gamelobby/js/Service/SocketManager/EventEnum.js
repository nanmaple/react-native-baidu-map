/**
 * SocketManager 事件
 */
var SocketManager;
(function (SocketManager) {
    var Event;
    (function (Event) {
        /**
         * Socket连接事件
         */
        Event.OnConnect = "OnConnectEvent";
        /**
         * Socket关闭事件
         */
        Event.OnClose = "OnCloseEvent";
        /**
         * Socket错误事件
         */
        Event.OnError = "OnErrorEvent";
        /**
         * Socket重连事件
         */
        Event.OnWillReconnect = "OnWillReconnectEvent";
        /**
         * Socket游戏消息事件
         */
        Event.OnGame = "OnGameEvent";
        /**
         * 登出事件
         */
        Event.OnLogout = "OnLogoutEvent";
        /**
         * 事件推送
         */
        Event.OnSystemPush = "OnSystemPushEvent";
        /**
         * ACK
         */
        Event.OnAck = "OnAckEvent";
    })(Event = SocketManager.Event || (SocketManager.Event = {}));
})(SocketManager || (SocketManager = {}));
//# sourceMappingURL=EventEnum.js.map