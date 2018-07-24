namespace BaseEnum {
    
    export enum MainCommand {
        /**
         * 登出
         */
        MSG_KICKOUT = 1,
        /**
         * 服务器收到投注消息，回复客户端
         */
        MSG_ACK = 2,
        /**
         * 错误消息
         */
        MSG_ERROR = 3,
        /**
         * 系统推送消息
         */
        MSG_SYSTEM_PUSH = 4,
        /**
         * 游戏消息
         */
        MSG_GAME = 5,
        /**
         * 会员状态已关闭
         */
        MSG_MEMBERCLOSED = 6
    }
}