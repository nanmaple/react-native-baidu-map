namespace ServiceManager {
    export interface ISocketManager {
        /**
         * 连接
         */
        Connect(token: string): void,
        /**
         * 关闭
         */
        Close(): void,
        /**
         * 发送投注
         */
        Send(data: any): void
    }
}