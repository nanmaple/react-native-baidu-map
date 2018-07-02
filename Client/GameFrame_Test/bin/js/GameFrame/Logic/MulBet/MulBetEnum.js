var MulBet;
(function (MulBet) {
    /*
    * 游戏投注位置状态
    */
    var BetPosStatus;
    (function (BetPosStatus) {
        /**
         * 禁用
         */
        BetPosStatus[BetPosStatus["Forbid"] = 0] = "Forbid";
        /**
         * 正常
        */
        BetPosStatus[BetPosStatus["Allow"] = 1] = "Allow";
        /**
         * 满额
         */
        BetPosStatus[BetPosStatus["Full"] = 2] = "Full";
    })(BetPosStatus = MulBet.BetPosStatus || (MulBet.BetPosStatus = {}));
    /**
     * 投注计算结果
     */
    var BetReult;
    (function (BetReult) {
        /**
         * 成功
         */
        BetReult[BetReult["Success"] = 0] = "Success";
        /**
         * 余额不足
         */
        BetReult[BetReult["InsufficientBalance"] = 1] = "InsufficientBalance";
        /**
         * 低于最小限额
         */
        BetReult[BetReult["LowLimit"] = 2] = "LowLimit";
        /**
         * 超过最大额度
         */
        BetReult[BetReult["OverLimit"] = 3] = "OverLimit";
    })(BetReult = MulBet.BetReult || (MulBet.BetReult = {}));
})(MulBet || (MulBet = {}));
//# sourceMappingURL=MulBetEnum.js.map