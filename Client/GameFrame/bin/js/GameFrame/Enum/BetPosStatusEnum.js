var GameEnum;
(function (GameEnum) {
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
    })(BetPosStatus = GameEnum.BetPosStatus || (GameEnum.BetPosStatus = {}));
})(GameEnum || (GameEnum = {}));
//# sourceMappingURL=BetPosStatusEnum.js.map