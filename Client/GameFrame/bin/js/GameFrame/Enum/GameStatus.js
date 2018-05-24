var GameEnum;
(function (GameEnum) {
    var GameStatus;
    (function (GameStatus) {
        /**
         * 默认
         */
        GameStatus[GameStatus["DEFAULT"] = 0] = "DEFAULT";
        /**
         * 投注状态
         */
        GameStatus[GameStatus["BET"] = 1] = "BET";
        /**
         * 结束状态
         */
        GameStatus[GameStatus["END"] = 2] = "END";
        /**
         * 正在结算状态
         */
        GameStatus[GameStatus["SETTLE"] = 3] = "SETTLE";
        /**
         * 已结算
         */
        GameStatus[GameStatus["SETTLEED"] = 4] = "SETTLEED";
    })(GameStatus = GameEnum.GameStatus || (GameEnum.GameStatus = {}));
})(GameEnum || (GameEnum = {}));
//# sourceMappingURL=GameStatus.js.map