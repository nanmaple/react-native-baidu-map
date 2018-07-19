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
var Network;
(function (Network) {
    /**
     * Socket类
     */
    var SocketManager = /** @class */ (function (_super) {
        __extends(SocketManager, _super);
        function SocketManager() {
            var _this = _super.call(this) || this;
            _this.socket = new Network.Socket();
            var params = new Network.SocketParam();
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
            //设置网络状态
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
            //关闭连接
            this.socket.Close();
        };
        /**
         * 发送消息
         * @param gameData 游戏命令组装的数据
         * @param msgID 消息ID
         */
        SocketManager.prototype.Send = function (gameData, msgID) {
            if (gameData === void 0) { gameData = null; }
            //组装消息dto
            var msgDto = new BaseDto.MessageDto();
            msgDto.MSGID = msgID;
            msgDto.Command = BaseEnum.MainCommand.MsgGame;
            msgDto.Data = gameData;
            var msg = JSON.stringify(msgDto);
            //发送
            this.socket.Send(msg);
        };
        /**
        * 连接回调
        */
        SocketManager.prototype.OnConnect = function () {
            //广播上层-连接成功
            this.event(Network.SocketEvent.OnConnect);
        };
        /**
         * 关闭链接
         */
        SocketManager.prototype.OnClosed = function (message) {
            //广播上层-关闭连接
            this.event(Network.SocketEvent.OnClose, message);
        };
        /**
         * 错误
         */
        SocketManager.prototype.OnError = function (message) {
            //广播上层-错误
            this.event(Network.SocketEvent.OnError, message);
        };
        /**
         * 正在重连
         */
        SocketManager.prototype.OnWillReconnect = function () {
            //广播上层-重连
            this.event(Network.SocketEvent.OnWillReconnect);
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
                case BaseEnum.MainCommand.MsgAck:
                    //广播上层-ACK
                    this.event(Network.SocketEvent.OnAck, messageDto.Data);
                    break;
                case BaseEnum.MainCommand.MsgGame:
                    //广播上层-游戏命令
                    this.event(Network.SocketEvent.OnGame, messageDto.Data);
                    break;
                case BaseEnum.MainCommand.MsgError:
                    //广播上层-错误
                    this.event(Network.SocketEvent.OnError, messageDto.Data);
                    break;
                case BaseEnum.MainCommand.MsgKickout:
                    //登出，断开连接
                    this.socket.Close();
                    //广播上层-登出
                    this.event(Network.SocketEvent.OnLogout);
                    break;
                case BaseEnum.MainCommand.MsgSystemPush:
                    //系统推送消息
                    this.event(Network.SocketEvent.OnSystemPush, messageDto.Data);
                    break;
                case BaseEnum.MainCommand.MsgMemberClosed:
                    //断开连接
                    this.socket.Close();
                    //广播上层-会员状态已经关闭
                    this.event(Network.SocketEvent.OnMemberClose);
                    break;
                default:
                    break;
            }
        };
        SocketManager.prototype.Log = function () {
        };
        return SocketManager;
    }(Laya.EventDispatcher));
    Network.SocketManager = SocketManager;
})(Network || (Network = {}));
//# sourceMappingURL=index.js.map