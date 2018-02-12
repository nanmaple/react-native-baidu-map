var BaseEnum;
(function (BaseEnum) {
    var MainCommand;
    (function (MainCommand) {
        /**
         * 登出
         */
        MainCommand[MainCommand["MSG_KICKOUT"] = 1] = "MSG_KICKOUT";
        /**
         * 服务器收到投注消息，回复客户端
         */
        MainCommand[MainCommand["MSG_ACK"] = 2] = "MSG_ACK";
        /**
         * 错误消息
         */
        MainCommand[MainCommand["MSG_ERROR"] = 3] = "MSG_ERROR";
        /**
         * 系统推送消息
         */
        MainCommand[MainCommand["MSG_SYSTEM_PUSH"] = 4] = "MSG_SYSTEM_PUSH";
        /**
         * 游戏消息
         */
        MainCommand[MainCommand["MSG_GAME"] = 5] = "MSG_GAME";
    })(MainCommand = BaseEnum.MainCommand || (BaseEnum.MainCommand = {}));
})(BaseEnum || (BaseEnum = {}));
