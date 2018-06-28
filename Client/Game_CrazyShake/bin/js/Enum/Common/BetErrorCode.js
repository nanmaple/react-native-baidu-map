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
        BetErrorCode[BetErrorCode["Success"] = 0] = "Success";
        /**
         * 赔率错误
         */
        BetErrorCode[BetErrorCode["OddsError"] = 1] = "OddsError";
        /**
         * 金额错误
         */
        BetErrorCode[BetErrorCode["AmountError"] = 2] = "AmountError";
        /**
         * 余额不足
         */
        BetErrorCode[BetErrorCode["InsufficientBalance"] = 3] = "InsufficientBalance";
        /**
         * 投注位置错误
         */
        BetErrorCode[BetErrorCode["BetPosError"] = 4] = "BetPosError";
        /**
         * 不在投注状态
         */
        BetErrorCode[BetErrorCode["NotBetting"] = 5] = "NotBetting";
        /**
         * 超过限额
         */
        BetErrorCode[BetErrorCode["OverQuota"] = 6] = "OverQuota";
    })(BetErrorCode = Enum.BetErrorCode || (Enum.BetErrorCode = {}));
})(Enum || (Enum = {}));
//# sourceMappingURL=BetErrorCode.js.map