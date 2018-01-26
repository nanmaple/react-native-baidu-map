var Enum;
(function (Enum) {
    /**
     * 投注错误类型
     */
    var BetErrorCode;
    (function (BetErrorCode) {
        /**
         * 成功
         */
        BetErrorCode[BetErrorCode["SUCCESS"] = 0] = "SUCCESS";
        /**
         * 赔率错误
         */
        BetErrorCode[BetErrorCode["ODDS_ERROR"] = 1] = "ODDS_ERROR";
        /**
         * 金额错误
         */
        BetErrorCode[BetErrorCode["AMOUNT_ERROR"] = 2] = "AMOUNT_ERROR";
        /**
         * 余额不足
         */
        BetErrorCode[BetErrorCode["BALANCE_SMALL"] = 3] = "BALANCE_SMALL";
        /**
         * 投注位置错误
         */
        BetErrorCode[BetErrorCode["BETPOS_ERROR"] = 4] = "BETPOS_ERROR";
        /**
         * 不在投注状态
         */
        BetErrorCode[BetErrorCode["NOTBET_STATUS"] = 5] = "NOTBET_STATUS";
        /**
         * 超过限额
         */
        BetErrorCode[BetErrorCode["OVER_LIMIT"] = 6] = "OVER_LIMIT";
    })(BetErrorCode = Enum.BetErrorCode || (Enum.BetErrorCode = {}));
})(Enum || (Enum = {}));
//# sourceMappingURL=BetErrorCode.js.map