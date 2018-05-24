var GameEnum;
(function (GameEnum) {
    var GameCommand;
    (function (GameCommand) {
        /**
         * 游戏初始化（用户进入时发送）
         */
        GameCommand[GameCommand["MSG_GAME_INIT"] = 1] = "MSG_GAME_INIT";
        /**
         * 开始（用户开始游戏才返回赔率的游戏）
         */
        GameCommand[GameCommand["MSG_GAME_START"] = 2] = "MSG_GAME_START";
        /**
         * 投注
         */
        GameCommand[GameCommand["MSG_GAME_BET"] = 3] = "MSG_GAME_BET";
        /**
         * 投注结果（成功/失败）
         */
        GameCommand[GameCommand["MSG_GAME_BETRESULT"] = 4] = "MSG_GAME_BETRESULT";
        /**
         * 停止下注
         */
        GameCommand[GameCommand["MSG_GAME_STOPBET"] = 5] = "MSG_GAME_STOPBET";
        /**
         * 游戏结果
         */
        GameCommand[GameCommand["MSG_GAME_GAMERESULT"] = 6] = "MSG_GAME_GAMERESULT";
        /**
         * 结算结果
         */
        GameCommand[GameCommand["MSG_GAME_SETTLERESULT"] = 7] = "MSG_GAME_SETTLERESULT";
        /**
         * 其他命令（需要游戏逻辑自己解析下层命令）
         */
        GameCommand[GameCommand["MSG_GAME_OTHER"] = 100] = "MSG_GAME_OTHER";
    })(GameCommand = GameEnum.GameCommand || (GameEnum.GameCommand = {}));
})(GameEnum || (GameEnum = {}));
//# sourceMappingURL=GameCommand.js.map