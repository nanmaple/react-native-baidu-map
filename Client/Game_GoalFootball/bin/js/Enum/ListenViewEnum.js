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
         * 选择道具
         */
        ListenViewEnum[ListenViewEnum["ChooseProp"] = 5] = "ChooseProp";
    })(ListenViewEnum = Enum.ListenViewEnum || (Enum.ListenViewEnum = {}));
})(Enum || (Enum = {}));
//# sourceMappingURL=ListenViewEnum.js.map