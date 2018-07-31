var Enum;
(function (Enum) {
    /**
     * 投注错误类型
     */
    var BetErrorCode;
    (function (BetErrorCode) {
        /**
         * 投注成功
         */
        BetErrorCode[BetErrorCode["Success"] = 0] = "Success";
        /**
         * 余额不足
         */
        BetErrorCode[BetErrorCode["BalanceSmall"] = 1] = "BalanceSmall";
        /**
         * 超过限额
         */
        BetErrorCode[BetErrorCode["OverLimit"] = 2] = "OverLimit";
        /**
        * 参数错误
        */
        BetErrorCode[BetErrorCode["InvalidArgument"] = 3] = "InvalidArgument";
        /**
         * 系统错误
         */
        BetErrorCode[BetErrorCode["SystemError"] = 4] = "SystemError";
    })(BetErrorCode = Enum.BetErrorCode || (Enum.BetErrorCode = {}));
})(Enum || (Enum = {}));
//# sourceMappingURL=BetErrorCode.js.map