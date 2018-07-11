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
    })(ListenViewEnum = Enum.ListenViewEnum || (Enum.ListenViewEnum = {}));
})(Enum || (Enum = {}));
//# sourceMappingURL=ListenViewEnum.js.map