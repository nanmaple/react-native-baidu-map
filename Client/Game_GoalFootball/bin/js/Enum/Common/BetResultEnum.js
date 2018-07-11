var Enum;
(function (Enum) {
    /**
     * 投注结果类型
     */
    var BetResultEnum;
    (function (BetResultEnum) {
        /**
         * 投注成功
         */
        BetResultEnum[BetResultEnum["Success"] = 0] = "Success";
        /**
         * 余额不足
         */
        BetResultEnum[BetResultEnum["InsufficientBalance"] = 1] = "InsufficientBalance";
        /**
         * 超过限额
         */
        BetResultEnum[BetResultEnum["OverLimit"] = 2] = "OverLimit";
        /**
        * 参数错误
        */
        BetResultEnum[BetResultEnum["ParameterError"] = 3] = "ParameterError";
        /**
         * 系统错误
         */
        BetResultEnum[BetResultEnum["SystemError"] = 4] = "SystemError";
    })(BetResultEnum = Enum.BetResultEnum || (Enum.BetResultEnum = {}));
})(Enum || (Enum = {}));
//# sourceMappingURL=BetResultEnum.js.map