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
         * 投注
         */
        ListenViewEnum[ListenViewEnum["BetPos"] = 2] = "BetPos";
        /**
         * 打开规则面板
         */
        ListenViewEnum[ListenViewEnum["OpenRule"] = 3] = "OpenRule";
        /**
         * 打开游戏记录面板
         */
        ListenViewEnum[ListenViewEnum["OpenRecord"] = 4] = "OpenRecord";
        /**
         * 获取游戏记录
         */
        ListenViewEnum[ListenViewEnum["GetRecord"] = 5] = "GetRecord";
        /**
         * 最大金额投注
         */
        ListenViewEnum[ListenViewEnum["MaxBetAmount"] = 6] = "MaxBetAmount";
        /**
         * 设置投注金额
         */
        ListenViewEnum[ListenViewEnum["SetBetAmount"] = 7] = "SetBetAmount";
        /**
         * 游戏结束
         */
        ListenViewEnum[ListenViewEnum["GameResult"] = 8] = "GameResult";
    })(ListenViewEnum = Enum.ListenViewEnum || (Enum.ListenViewEnum = {}));
})(Enum || (Enum = {}));
//# sourceMappingURL=ListenViewEnum.js.map