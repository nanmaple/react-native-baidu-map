var Enum;
(function (Enum) {
    /**
     * 游戏总界面逻辑向游戏逻辑通知枚举
     */
    var GameViewHandlerEnum;
    (function (GameViewHandlerEnum) {
        /**
         * 启动socket
         */
        GameViewHandlerEnum[GameViewHandlerEnum["StartSocket"] = 0] = "StartSocket";
        /**********扩展***********/
        /**
         * 投注操作
        */
        GameViewHandlerEnum[GameViewHandlerEnum["BetPos"] = 1] = "BetPos";
        /**
         * 获取投注记录
        */
        GameViewHandlerEnum[GameViewHandlerEnum["GetBetRecord"] = 2] = "GetBetRecord";
        /**
         * 获取最新余额
         */
        GameViewHandlerEnum[GameViewHandlerEnum["ChangeMoney"] = 3] = "ChangeMoney";
        /**
         * 获取记录
         */
        GameViewHandlerEnum[GameViewHandlerEnum["GetRecord"] = 4] = "GetRecord";
    })(GameViewHandlerEnum = Enum.GameViewHandlerEnum || (Enum.GameViewHandlerEnum = {}));
})(Enum || (Enum = {}));
//# sourceMappingURL=GameViewHandlerEnum.js.map