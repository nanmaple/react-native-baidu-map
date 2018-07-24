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
         * 获取余额
         */
        ListenViewEnum[ListenViewEnum["GetBalance"] = 1] = "GetBalance";
        /**
         * 投注按钮点击
         */
        ListenViewEnum[ListenViewEnum["BetPos"] = 2] = "BetPos";
        ListenViewEnum[ListenViewEnum["OnGameBgClick"] = 3] = "OnGameBgClick";
        ListenViewEnum[ListenViewEnum["ConfirmBet"] = 4] = "ConfirmBet";
        ListenViewEnum[ListenViewEnum["CancelBet"] = 5] = "CancelBet";
    })(ListenViewEnum = Enum.ListenViewEnum || (Enum.ListenViewEnum = {}));
})(Enum || (Enum = {}));
//# sourceMappingURL=ListenViewEnum.js.map