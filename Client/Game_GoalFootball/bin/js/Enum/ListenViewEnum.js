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
         * 投注
         */
        ListenViewEnum[ListenViewEnum["BetPos"] = 1] = "BetPos";
        /**
         * 点击射门
         */
        ListenViewEnum[ListenViewEnum["ShootDoor"] = 2] = "ShootDoor";
        /**
         * 游戏结束(动画完成)
         */
        ListenViewEnum[ListenViewEnum["GameResult"] = 3] = "GameResult";
        /**
         * 选择筹码
         */
        ListenViewEnum[ListenViewEnum["ChooseChip"] = 4] = "ChooseChip";
        /**
         * 选择最大筹码
         */
        ListenViewEnum[ListenViewEnum["ChooseMaxChip"] = 5] = "ChooseMaxChip";
        /**
         * 选择道具
         */
        ListenViewEnum[ListenViewEnum["ChooseProp"] = 6] = "ChooseProp";
        /**
         * 获取余额
         */
        ListenViewEnum[ListenViewEnum["GetBalance"] = 7] = "GetBalance";
        /**
         * 打开规则面板
         */
        ListenViewEnum[ListenViewEnum["OpenRule"] = 8] = "OpenRule";
        /**
         * 打开游戏记录面板
         */
        ListenViewEnum[ListenViewEnum["OpenRecord"] = 9] = "OpenRecord";
        /**
         * 获取游戏记录
         */
        ListenViewEnum[ListenViewEnum["GetRecord"] = 10] = "GetRecord";
    })(ListenViewEnum = Enum.ListenViewEnum || (Enum.ListenViewEnum = {}));
})(Enum || (Enum = {}));
//# sourceMappingURL=ListenViewEnum.js.map