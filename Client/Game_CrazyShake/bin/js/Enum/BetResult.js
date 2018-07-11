var Enum;
(function (Enum) {
    /**
     * 投注结果的枚举
     */
    var BetResult;
    (function (BetResult) {
        /**
         * 投注成功
         */
        BetResult[BetResult["Success"] = 0] = "Success";
        /**
         * 余额不足，投注失败
         */
        BetResult[BetResult["InsufficientBalance"] = 1] = "InsufficientBalance";
        /**
         * 投注总金额超过额度限制
         */
        BetResult[BetResult["OverLimit"] = 2] = "OverLimit";
        /**
         * 参数错误
         */
        BetResult[BetResult["ParameterError"] = 3] = "ParameterError";
        /**
         * 系统错误，投注失败
         */
        BetResult[BetResult["SystemError"] = 4] = "SystemError";
    })(BetResult = Enum.BetResult || (Enum.BetResult = {}));
})(Enum || (Enum = {}));
//# sourceMappingURL=BetResult.js.map