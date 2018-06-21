var Enum;
(function (Enum) {
    /**
     * 监听UI事件类型枚举
     */
    var ListenUIEnum;
    (function (ListenUIEnum) {
        /**
         * 游戏资源加载完成
         */
        ListenUIEnum[ListenUIEnum["GameLoadComplate"] = 0] = "GameLoadComplate";
        /**
         * 投注按钮点击
         */
        ListenUIEnum[ListenUIEnum["BetPos"] = 1] = "BetPos";
        ListenUIEnum[ListenUIEnum["OnGameBgClick"] = 2] = "OnGameBgClick";
        ListenUIEnum[ListenUIEnum["ConfirmBet"] = 3] = "ConfirmBet";
        ListenUIEnum[ListenUIEnum["CancelBet"] = 4] = "CancelBet";
    })(ListenUIEnum = Enum.ListenUIEnum || (Enum.ListenUIEnum = {}));
})(Enum || (Enum = {}));
//# sourceMappingURL=ListenUIEnum.js.map