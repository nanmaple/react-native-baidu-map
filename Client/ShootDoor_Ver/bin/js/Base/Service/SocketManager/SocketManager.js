var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/// <reference path='ISocketManager.ts'/>
/// <reference path='EventEnum.ts'/>
/**
 * Socket管理类
 */
var ServiceManager;
(function (ServiceManager) {
    /**
     * Socket类
     */
    var SocketManager = /** @class */ (function (_super) {
        __extends(SocketManager, _super);
        function SocketManager() {
            var _this = _super.call(this) || this;
            _this.socket = new Utils.Socket.WebSocket();
            var params = new Utils.Socket.WebSocketParam();
            params.OnConnect = Laya.Handler.create(_this, _this.OnConnect, null, false);
            params.OnError = Laya.Handler.create(_this, _this.OnError, null, false);
            params.OnClosed = Laya.Handler.create(_this, _this.OnClosed, null, false);
            params.OnMessage = Laya.Handler.create(_this, _this.OnMessage, null, false);
            params.OnWillReconnect = Laya.Handler.create(_this, _this.OnWillReconnect, null, false);
            _this.socket.Init(params);
            return _this;
        }
        /**
         * 连接
         * @param token
         */
        SocketManager.prototype.SetNetwork = function (status) {
            //启动连接
            this.socket.SetNetwork(status);
        };
        /**
         * 连接
         * @param token
         */
        SocketManager.prototype.Connect = function (url) {
            //启动连接
            this.socket.Connect(url);
        };
        /**
         * 关闭
         */
        SocketManager.prototype.Close = function () {
            //启动连接
            this.socket.Close();
        };
        /**
         * 发送消息
         * @param command 命令枚举
         * @param data 数据
         */
        SocketManager.prototype.Send = function (data, msgID) {
            if (data === void 0) { data = null; }
            if (msgID === void 0) { msgID = Utils.Guid.Create(); }
            //组装游戏命令Dto
            var gameDto = new BaseDto.GameMessageDto();
            gameDto.Command = BaseEnum.GameCommand.MSG_GAME_BET;
            gameDto.Data = data;
            //组装消息dto
            var msgDto = new BaseDto.MessageDto();
            msgDto.MSGID = msgID;
            msgDto.Command = BaseEnum.MainCommand.MSG_GAME;
            msgDto.Data = gameDto;
            var msg = JSON.stringify(msgDto);
            //发送
            this.socket.Send(msg);
            return msgDto.MSGID;
        };
        /**
        * 连接回调
        */
        SocketManager.prototype.OnConnect = function () {
            //广播上层-连接成功
            this.event(ServiceManager.SocketEvent.OnConnect);
        };
        /**
         * 关闭链接
         */
        SocketManager.prototype.OnClosed = function () {
            //广播上层-关闭连接
            this.event(ServiceManager.SocketEvent.OnClose);
        };
        /**
         * 错误
         */
        SocketManager.prototype.OnError = function (message) {
            //广播上层-错误
            this.event(ServiceManager.SocketEvent.OnError, message);
        };
        /**
         * 正在重连
         */
        SocketManager.prototype.OnWillReconnect = function () {
            //广播上层-重连
            this.event(ServiceManager.SocketEvent.OnWillReconnect);
        };
        /**
         * 接收消息
         */
        SocketManager.prototype.OnMessage = function (message) {
            if (!message)
                return;
            var messageDto;
            try {
                messageDto = JSON.parse(message);
            }
            catch (error) {
                return;
            }
            switch (messageDto.Command) {
                case BaseEnum.MainCommand.MSG_ACK:
                    //广播上层-ACK
                    this.event(ServiceManager.SocketEvent.OnAck, messageDto.Data);
                    break;
                case BaseEnum.MainCommand.MSG_GAME:
                    //广播上层-游戏命令
                    this.event(ServiceManager.SocketEvent.OnGame, messageDto.Data);
                    break;
                case BaseEnum.MainCommand.MSG_ERROR:
                    //广播上层-错误
                    this.event(ServiceManager.SocketEvent.OnError, messageDto.Data);
                    break;
                case BaseEnum.MainCommand.MSG_KICKOUT:
                    console.log("登出");
                    //登出，断开连接
                    this.socket.Close();
                    //广播上层-登出
                    this.event(ServiceManager.SocketEvent.OnLogout);
                    break;
                case BaseEnum.MainCommand.MSG_SYSTEM_PUSH:
                    //系统推送消息
                    this.event(ServiceManager.SocketEvent.OnSystemPush, messageDto.Data);
                    break;
                default:
                    break;
            }
        };
        return SocketManager;
    }(Laya.EventDispatcher));
    ServiceManager.SocketManager = SocketManager;
})(ServiceManager || (ServiceManager = {}));
