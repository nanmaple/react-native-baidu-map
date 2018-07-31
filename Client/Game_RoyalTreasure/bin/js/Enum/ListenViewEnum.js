var Enum;
(function (Enum) {
    /**
     * 监听UI事件类型枚举
     */
    var ListenViewEnum;
    (function (ListenViewEnum) {
        /**
         * 游戏资源加载完成
         */
        ListenViewEnum[ListenViewEnum["GameLoadComplate"] = 0] = "GameLoadComplate";
        /**
         * 投注按钮点击
         */
        ListenViewEnum[ListenViewEnum["BetPos"] = 1] = "BetPos";
        ListenViewEnum[ListenViewEnum["OpenRule"] = 2] = "OpenRule";
        ListenViewEnum[ListenViewEnum["OpenRecord"] = 3] = "OpenRecord";
        ListenViewEnum[ListenViewEnum["DigAniComplete"] = 4] = "DigAniComplete";
        ListenViewEnum[ListenViewEnum["NextTime"] = 5] = "NextTime";
        ListenViewEnum[ListenViewEnum["GameAniOver"] = 6] = "GameAniOver";
        ListenViewEnum[ListenViewEnum["OnGameBgClick"] = 7] = "OnGameBgClick";
        ListenViewEnum[ListenViewEnum["ConfirmBet"] = 8] = "ConfirmBet";
        ListenViewEnum[ListenViewEnum["CancelBet"] = 9] = "CancelBet";
    })(ListenViewEnum = Enum.ListenViewEnum || (Enum.ListenViewEnum = {}));
})(Enum || (Enum = {}));
//# sourceMappingURL=ListenViewEnum.js.map