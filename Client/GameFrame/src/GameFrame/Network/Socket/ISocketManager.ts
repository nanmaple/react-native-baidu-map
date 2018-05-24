namespace Network.Socket {
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
        Send(gameData: any, msgID: string): void,
        /**
         * 设置网络状态
         * @param token 
         */
        SetNetwork(status: boolean)
    }
}