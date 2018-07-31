var Enum;
(function (Enum) {
    /**
     * 游戏命令
     */
    var GameCommand;
    (function (GameCommand) {
        /**
         * 游戏初始化（用户进入时发送）
         */
        GameCommand[GameCommand["MsgGameInit"] = 1] = "MsgGameInit";
        /**
         * 开始（用户开始游戏才返回赔率的游戏）
         */
        GameCommand[GameCommand["MsgGameStart"] = 2] = "MsgGameStart";
        /**
         * 投注
         */
        GameCommand[GameCommand["MsgGameBet"] = 3] = "MsgGameBet";
        /**
         * 投注结果（成功/失败）
         */
        GameCommand[GameCommand["MsgGameBetResult"] = 4] = "MsgGameBetResult";
        /**
         * 停止下注
         */
        GameCommand[GameCommand["MsgGameStopBet"] = 5] = "MsgGameStopBet";
        /**
         * 游戏结果
         */
        GameCommand[GameCommand["MsgGameResult"] = 6] = "MsgGameResult";
        /**
         * 结算结果
         */
        GameCommand[GameCommand["MsgGameSettleResult"] = 7] = "MsgGameSettleResult";
        /**
         * 其他命令（需要游戏逻辑自己解析下层命令）
         */
        GameCommand[GameCommand["MsgGameOther"] = 100] = "MsgGameOther";
    })(GameCommand = Enum.GameCommand || (Enum.GameCommand = {}));
})(Enum || (Enum = {}));
//# sourceMappingURL=GameCommand.js.map