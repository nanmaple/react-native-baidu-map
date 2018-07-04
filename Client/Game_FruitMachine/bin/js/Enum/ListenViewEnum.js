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
        ListenViewEnum[ListenViewEnum["OnGameBgClick"] = 2] = "OnGameBgClick";
        ListenViewEnum[ListenViewEnum["ConfirmBet"] = 3] = "ConfirmBet";
        ListenViewEnum[ListenViewEnum["CancelBet"] = 4] = "CancelBet";
    })(ListenViewEnum = Enum.ListenViewEnum || (Enum.ListenViewEnum = {}));
})(Enum || (Enum = {}));
//# sourceMappingURL=ListenViewEnum.js.map