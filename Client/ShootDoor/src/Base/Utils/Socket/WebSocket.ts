/// <reference path="IWebSocket.ts"/>
namespace Utils.Socket {

    export class WebSocket implements Utils.Socket.IWebSocket {
        private socket: Laya.Socket;
        private output: Laya.Byte;
        private url: string;
        private OnConnect: Laya.Handler;
        private OnClosed: Laya.Handler;
        private OnError: Laya.Handler;
        private OnWillReconnect: Laya.Handler;
        private OnMessage: Laya.Handler;
        private isReConnect: boolean = true;//是否重连
        private reConnectTime: number = 2000;

        constructor() {
        }

        /**
         * 初始化socket
         * @param params 事件回调，是否重连 
         */
        public Init(params: Utils.Socket.WebSocketParam): void {
            this.OnError = params.OnError;
            this.OnClosed = params.OnClosed;
            this.OnConnect = params.OnConnect;
            this.OnMessage = params.OnMessage;
            this.OnWillReconnect = params.OnWillReconnect;
            this.isReConnect = params.ResetConnect;
        }

        /**
         * 连接
         * @param url 链接地址，如果不传，默认为连接上一次的地址，进行重连
         */
        public Connect(url: string): void {
            this.url = url;
            if (this.socket) {
                this.Close();
            }
            this.socket = new Laya.Socket();
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
        }

        /**
         * 链接成功回调
         * @param msg 
         */
        private onOpen(msg: any): void {
            Laya.timer.clear(this, this.Connect);
            this.OnConnect.run();
        }

        /**
         * 断开连接回调
         * @param msg 
         */
        private onClose(msg: any): void {
            if (this.isReConnect) {
                this.OnWillReconnect.run();
                Laya.timer.once(this.reConnectTime, this, this.Connect, [this.url]);
            } else {
                this.OnClosed.run();
            }
        }

        /**
         * 链接出现错误
         * @param msg 
         */
        private onError(error: any): void {
            this.OnError.runWith(error.toString());
        }
        /**
         * 接收到消息
         * @param msg 
         */
        private onMessage(msg: any): void {
            this.OnMessage.runWith(msg);
        }

        /**
         * 关闭
         */
        public Close() {
            if (this.socket) {
                //关闭连接
                this.socket.close();
                //清除所有侦听
                this.socket.offAll();
                //清除socket
                this.socket.cleanSocket();
            }
        }

        /**
         * 发送字符串
         */
        public Send(msg: string): boolean {
            if (this.socket.connected) {
                this.socket.send(msg);
                return true;
            }
            return false;
        }

        /**
         * 转二进制发送
         */
        public SendBinary(msg: string) {
            if (this.socket.connected) {
                // 使用output.writeByte发送
                var message: string = msg;
                for (var i: number = 0; i < message.length; ++i) {
                    this.output.writeByte(message.charCodeAt(i));
                }
                //发送缓冲区中的数据
                this.socket.flush();
            }

        }

        /**
         * 获取连接状态
         */
        public GetConnectState(): boolean {
            if (!this.socket) {
                return false;
            }
            return this.socket.connected;
        }


        /**
         * 设置网络状态，网络通畅，则可以重连，网络连接断开，则不重连
         * @param status 网络是否通畅 
         */
        public SetNetwork(status: boolean): void {
            if (this.isReConnect != status) {
                this.isReConnect = status;
            }
        }
    }
}