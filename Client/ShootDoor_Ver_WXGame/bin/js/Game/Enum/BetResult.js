var Enum;
(function (Enum) {
    var BetResult;
    (function (BetResult) {
        /// <summary>
        /// 无效
        /// </summary>
        BetResult[BetResult["INVALID"] = 0] = "INVALID";
        /// <summary>
        /// 打和
        /// </summary>
        BetResult[BetResult["DRAW"] = 1] = "DRAW";
        /// <summary>
        /// 赢
        /// </summary>
        BetResult[BetResult["WIN"] = 2] = "WIN";
        /// <summary>
        /// 输
        /// </summary>
        BetResult[BetResult["LOSE"] = 3] = "LOSE";
        /// <summary>
        /// 赢半
        /// </summary>
        BetResult[BetResult["WIN_HALF"] = 4] = "WIN_HALF";
        /// <summary>
        /// 输半
        /// </summary>
        BetResult[BetResult["LOSE_HALF"] = 5] = "LOSE_HALF";
    })(BetResult = Enum.BetResult || (Enum.BetResult = {}));
})(Enum || (Enum = {}));
