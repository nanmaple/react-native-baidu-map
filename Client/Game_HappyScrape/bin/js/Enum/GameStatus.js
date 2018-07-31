var Enum;
(function (Enum) {
    var GameStatus;
    (function (GameStatus) {
        /**
         * 默认
         */
        GameStatus[GameStatus["Ddefault"] = 0] = "Ddefault";
        /**
         * 投注状态
         */
        GameStatus[GameStatus["Bet"] = 1] = "Bet";
        /**
         * 结束状态
         */
        GameStatus[GameStatus["End"] = 2] = "End";
        /**
         * 正在结算状态
         */
        GameStatus[GameStatus["Settle"] = 3] = "Settle";
        /**
         * 已结算
         */
        GameStatus[GameStatus["Settleed"] = 4] = "Settleed";
    })(GameStatus = Enum.GameStatus || (Enum.GameStatus = {}));
})(Enum || (Enum = {}));
//# sourceMappingURL=GameStatus.js.map