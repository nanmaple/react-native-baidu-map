/**
 * SocketManager 事件
 */
var Network;
(function (Network) {
    var Socket;
    (function (Socket) {
        var SocketEvent;
        (function (SocketEvent) {
            /**
             * Socket连接事件
             */
            SocketEvent.OnConnect = "OnConnectEvent";
            /**
             * Socket关闭事件
             */
            SocketEvent.OnClose = "OnCloseEvent";
            /**
             * Socket错误事件
             */
            SocketEvent.OnError = "OnErrorEvent";
            /**
             * Socket重连事件
             */
            SocketEvent.OnWillReconnect = "OnWillReconnectEvent";
            /**
             * Socket游戏消息事件
             */
            SocketEvent.OnGame = "OnGameEvent";
            /**
             * 登出事件
             */
            SocketEvent.OnLogout = "OnLogoutEvent";
            /**
             * 事件推送
             */
            SocketEvent.OnSystemPush = "OnSystemPushEvent";
            /**
             * ACK
             */
            SocketEvent.OnAck = "OnAckEvent";
            /**
             * 会员状态关闭
             */
            SocketEvent.OnMemberClose = "OnMemberClose";
        })(SocketEvent = Socket.SocketEvent || (Socket.SocketEvent = {}));
    })(Socket = Network.Socket || (Network.Socket = {}));
})(Network || (Network = {}));
//# sourceMappingURL=EventEnum.js.map