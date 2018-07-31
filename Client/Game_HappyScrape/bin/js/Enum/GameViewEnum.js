var Enum;
(function (Enum) {
    /**
     * 游戏管理向游戏界面管理数据通知枚举
     */
    var GameViewEnum;
    (function (GameViewEnum) {
        /**
         * 投注
         */
        GameViewEnum[GameViewEnum["BetPos"] = 101] = "BetPos";
        /**
         * 添加投注记录
         */
        GameViewEnum[GameViewEnum["SetRecord"] = 102] = "SetRecord";
        /**
         * 改变余额
         */
        GameViewEnum[GameViewEnum["ChangMoney"] = 103] = "ChangMoney";
        /**
         * 获取用户信息
         */
        GameViewEnum[GameViewEnum["GetMemberInfo"] = 104] = "GetMemberInfo";
    })(GameViewEnum = Enum.GameViewEnum || (Enum.GameViewEnum = {}));
})(Enum || (Enum = {}));
//# sourceMappingURL=GameViewEnum.js.map