var BaseEnum;
(function (BaseEnum) {
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
    })(GameStatus = BaseEnum.GameStatus || (BaseEnum.GameStatus = {}));
})(BaseEnum || (BaseEnum = {}));
