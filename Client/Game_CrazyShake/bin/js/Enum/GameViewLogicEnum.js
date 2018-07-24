var Enum;
(function (Enum) {
    /**
     * 游戏逻辑向游戏总界面逻辑通知枚举
     */
    var GameViewLogicEnum;
    (function (GameViewLogicEnum) {
        /**
         * 刷新按钮
         */
        GameViewLogicEnum[GameViewLogicEnum["MsgGameRefreshBtn"] = 6000] = "MsgGameRefreshBtn";
        /**
         * 获取记录
         */
        GameViewLogicEnum[GameViewLogicEnum["GetRecord"] = 6001] = "GetRecord";
        /**
         * 开始动画
         */
        GameViewLogicEnum[GameViewLogicEnum["StartAni"] = 6002] = "StartAni";
    })(GameViewLogicEnum = Enum.GameViewLogicEnum || (Enum.GameViewLogicEnum = {}));
})(Enum || (Enum = {}));
//# sourceMappingURL=GameViewLogicEnum.js.map