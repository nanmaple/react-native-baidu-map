var Enum;
(function (Enum) {
    /**
     * 投注结果类型
     */
    var BetResultCode;
    (function (BetResultCode) {
        /**
         * 成功
         */
        BetResultCode[BetResultCode["Success"] = 0] = "Success";
        /**
         * 余额不足，投注失败
         */
        BetResultCode[BetResultCode["InsufficientBalance"] = 1] = "InsufficientBalance";
        /**
         * 超过限额
         */
        BetResultCode[BetResultCode["OverLimit"] = 2] = "OverLimit";
        /**
         * 参数错误
         */
        BetResultCode[BetResultCode["ParmeterError"] = 3] = "ParmeterError";
        /**
         * 系统错误，投注失败
         */
        BetResultCode[BetResultCode["SystemError"] = 4] = "SystemError";
    })(BetResultCode = Enum.BetResultCode || (Enum.BetResultCode = {}));
})(Enum || (Enum = {}));
//# sourceMappingURL=BetResultCode.js.map