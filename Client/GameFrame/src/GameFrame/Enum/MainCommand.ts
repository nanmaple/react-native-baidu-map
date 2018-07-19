namespace BaseEnum {
    
    export enum MainCommand {
        /**
         * 登出
         */
        MsgKickout = 1,
        /**
         * 服务器收到投注消息，回复客户端
         */
        MsgAck= 2,
        /**
         * 错误消息
         */
        MsgError = 3,
        /**
         * 系统推送消息
         */
        MsgSystemPush = 4,
        /**
         * 游戏消息
         */
        MsgGame = 5,
        /**
         * 会员状态已关闭
         */
        MsgMemberClosed = 6
    }
}