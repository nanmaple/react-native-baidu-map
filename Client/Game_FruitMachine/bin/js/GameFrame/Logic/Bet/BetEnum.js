var OnceBet;
(function (OnceBet) {
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
    })(BetPosStatus = OnceBet.BetPosStatus || (OnceBet.BetPosStatus = {}));
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
    })(BetReult = OnceBet.BetReult || (OnceBet.BetReult = {}));
})(OnceBet || (OnceBet = {}));
//# sourceMappingURL=BetEnum.js.map