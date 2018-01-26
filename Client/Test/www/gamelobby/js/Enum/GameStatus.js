var Enum;
(function (Enum) {
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
         * 结算状态
         */
        GameStatus[GameStatus["SETTLE"] = 3] = "SETTLE";
    })(GameStatus = Enum.GameStatus || (Enum.GameStatus = {}));
})(Enum || (Enum = {}));
//# sourceMappingURL=GameStatus.js.map