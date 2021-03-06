namespace Utils {
    /**
     * Socket初始化参数
     */
    export class SocketParam {
        /**
         * 连接成功回调
         */
        OnConnect: Laya.Handler;

        /**
         * 连接关闭回调
         */
        OnClosed: Laya.Handler;

        /**
         * Socket错误回调
         */
        OnError: Laya.Handler;

        /**
         * 收到消息回调
         */
        OnMessage: Laya.Handler;

        /**
         * 准备重新连接(网络已经断开)
         */
        OnWillReconnect: Laya.Handler;
        /**
         * 是否重连
         */
        ResetConnect: boolean;

        constructor(resetConnect = true) {
            this.ResetConnect = resetConnect;
        }
    }

    /**
     * Socket接口
     */
    export interface ISocket {
        /**
         * 初始化
         */
        Init(params: SocketParam): void;
        /**
         * 连接
         */
        Connect(socketUrl: string): void;
        /**
         * 关闭连接
         */
        Close(): void;
        /**
         * 发送消息
         */
        Send(message: string): boolean;
        /**
         * 获取连接状态
         */
        GetConnectState(): boolean;
        /**
         * 设置网络状态，网络通畅，则可以重连，网络连接断开，则不重连
         * @param status 网络是否通畅 
         */
        SetNetwork(status: boolean): void;
    }
}