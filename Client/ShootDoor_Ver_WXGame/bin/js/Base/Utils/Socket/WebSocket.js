/// <reference path="IWebSocket.ts"/>
var Utils;
(function (Utils) {
    var Socket;
    (function (Socket) {
        var WebSocket = /** @class */ (function () {
            function WebSocket() {
                this.isReConnect = true; //是否重连
                this.reConnectTime = 3000;
            }
            /**
             * 初始化socket
             * @param params 事件回调，是否重连
             */
            WebSocket.prototype.Init = function (params) {
                this.OnError = params.OnError;
                this.OnClosed = params.OnClosed;
                this.OnConnect = params.OnConnect;
                this.OnMessage = params.OnMessage;
                this.OnWillReconnect = params.OnWillReconnect;
                this.isReConnect = params.ResetConnect;
                this.socket = new Laya.Socket();
                this.socket.timeout = 3000;
            };
            /**
             * 连接
             * @param url 链接地址，如果不传，默认为连接上一次的地址，进行重连
             */
            WebSocket.prototype.Connect = function (url, isReConnect) {
                if (isReConnect === void 0) { isReConnect = false; }
                this.url = url;
                this.Close();
                if (isReConnect) {
                    this.OnWillReconnect.run();
                }
                this.socket.connectByUrl(this.url);
                //缓冲区
                this.output = this.socket.output;
                //连接成功
                this.socket.on(Laya.Event.OPEN, this, this.onOpen);
                //连接关闭
                this.socket.on(Laya.Event.CLOSE, this, this.onClose);
                //接收消息
                this.socket.on(Laya.Event.MESSAGE, this, this.onMessage);
                //错误
                this.socket.on(Laya.Event.ERROR, this, this.onError);
            };
            /**
             * 链接成功回调
             * @param msg
             */
            WebSocket.prototype.onOpen = function (msg) {
                Laya.timer.clear(this, this.Connect);
                this.OnConnect.run();
            };
            /**
             * 断开连接回调
             * @param msg
             */
            WebSocket.prototype.onClose = function (msg) {
                this.OnClosed.runWith(msg);
                if (this.isReConnect) {
                    Laya.timer.clear(this, this.Connect);
                    Laya.timer.once(this.reConnectTime, this, this.Connect, [this.url, true]);
                }
            };
            /**
             * 链接出现错误
             * @param msg
             */
            WebSocket.prototype.onError = function (error) {
                this.OnError.runWith(error);
            };
            /**
             * 接收到消息
             * @param msg
             */
            WebSocket.prototype.onMessage = function (msg) {
                this.OnMessage.runWith(msg);
            };
            /**
             * 关闭
             */
            WebSocket.prototype.Close = function () {
                if (this.socket && this.socket.connected) {
                    //清除socket
                    this.socket.close();
                }
            };
            /**
             * 发送字符串
             */
            WebSocket.prototype.Send = function (msg) {
                if (this.socket.connected) {
                    this.socket.send(msg);
                    return true;
                }
                return false;
            };
            /**
             * 转二进制发送
             */
            WebSocket.prototype.SendBinary = function (msg) {
                if (this.socket.connected) {
                    // 使用output.writeByte发送
                    var message = msg;
                    for (var i = 0; i < message.length; ++i) {
                        this.output.writeByte(message.charCodeAt(i));
                    }
                    //发送缓冲区中的数据
                    this.socket.flush();
                }
            };
            /**
             * 获取连接状态
             * 0 ：对应常量CONNECTING (numeric value 0)， 正在建立连接连接，还没有完成。The connection has not yet been established.
             * 1 ：对应常量OPEN (numeric value 1)，       连接成功建立，可以进行通信。The WebSocket connection is established and communication is possible.
             * 2 ：对应常量CLOSING (numeric value 2)      连接正在进行关闭握手，即将关闭。The connection is going through the closing handshake.
             * 3 : 对应常量CLOSED (numeric value 3)       连接已经关闭或者根本没有建立。The connection has been closed or could not be opened.
             */
            WebSocket.prototype.GetConnectState = function () {
                if (!this.socket) {
                    return false;
                }
                return this.socket.connected;
            };
            /**
             * 设置网络状态，网络通畅，则可以重连，网络连接断开，则不重连
             * @param status 网络是否通畅
             */
            WebSocket.prototype.SetNetwork = function (status) {
                if (this.isReConnect == false && status && this.socket && !this.socket.connected) {
                    this.Connect(this.url);
                }
                if (this.isReConnect != status) {
                    this.isReConnect = status;
                }
            };
            return WebSocket;
        }());
        Socket.WebSocket = WebSocket;
    })(Socket = Utils.Socket || (Utils.Socket = {}));
})(Utils || (Utils = {}));
