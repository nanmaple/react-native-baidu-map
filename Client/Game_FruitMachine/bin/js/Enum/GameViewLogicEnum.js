var Enum;
(function (Enum) {
    /**
     * 游戏管理逻辑向游戏界面逻辑数据通知枚举
     */
    var GameViewLogicEnum;
    (function (GameViewLogicEnum) {
        /**
         * 投注
         */
        GameViewLogicEnum[GameViewLogicEnum["BetPos"] = 101] = "BetPos";
        /**
         * 添加投注记录
         */
        GameViewLogicEnum[GameViewLogicEnum["SetRecord"] = 102] = "SetRecord";
        /**
         * 改变余额
         */
        GameViewLogicEnum[GameViewLogicEnum["ChangMoney"] = 103] = "ChangMoney";
        /**
         * 获取用户信息
         */
        GameViewLogicEnum[GameViewLogicEnum["GetMemberInfo"] = 104] = "GetMemberInfo";
    })(GameViewLogicEnum = Enum.GameViewLogicEnum || (Enum.GameViewLogicEnum = {}));
})(Enum || (Enum = {}));
//# sourceMappingURL=GameViewLogicEnum.js.map