var BaseEnum;
(function (BaseEnum) {
    var MainCommand;
    (function (MainCommand) {
        /**
         * 登出
         */
        MainCommand[MainCommand["MsgKickout"] = 1] = "MsgKickout";
        /**
         * 服务器收到投注消息，回复客户端
         */
        MainCommand[MainCommand["MsgAck"] = 2] = "MsgAck";
        /**
         * 错误消息
         */
        MainCommand[MainCommand["MsgError"] = 3] = "MsgError";
        /**
         * 系统推送消息
         */
        MainCommand[MainCommand["MsgSystemPush"] = 4] = "MsgSystemPush";
        /**
         * 游戏消息
         */
        MainCommand[MainCommand["MsgGame"] = 5] = "MsgGame";
        /**
         * 会员状态已关闭
         */
        MainCommand[MainCommand["MsgMemberClosed"] = 6] = "MsgMemberClosed";
    })(MainCommand = BaseEnum.MainCommand || (BaseEnum.MainCommand = {}));
})(BaseEnum || (BaseEnum = {}));
//# sourceMappingURL=MainCommand.js.map