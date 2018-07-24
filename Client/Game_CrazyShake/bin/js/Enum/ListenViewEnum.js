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
        /***********扩展***********/
        /**
         * 投注按钮点击
         */
        ListenViewEnum[ListenViewEnum["BetPos"] = 1] = "BetPos";
        /**
         * 动画播放完成
         */
        ListenViewEnum[ListenViewEnum["AniPlayComplete"] = 2] = "AniPlayComplete";
        /**
         * 关闭规则
         */
        ListenViewEnum[ListenViewEnum["CloseRule"] = 3] = "CloseRule";
        /**
         * 打开游戏规则
         */
        ListenViewEnum[ListenViewEnum["OpenRule"] = 4] = "OpenRule";
        /**
         * 获取记录
         */
        ListenViewEnum[ListenViewEnum["GetRecord"] = 5] = "GetRecord";
        /**
         * 打开记录
         */
        ListenViewEnum[ListenViewEnum["OpenRecord"] = 6] = "OpenRecord";
    })(ListenViewEnum = Enum.ListenViewEnum || (Enum.ListenViewEnum = {}));
})(Enum || (Enum = {}));
//# sourceMappingURL=ListenViewEnum.js.map