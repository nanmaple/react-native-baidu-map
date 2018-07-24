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
         * 获取投注记录
         */
        GameViewLogicEnum[GameViewLogicEnum["GetRecord"] = 102] = "GetRecord";
        /**
         * 改变余额
         */
        GameViewLogicEnum[GameViewLogicEnum["ChangMoney"] = 103] = "ChangMoney";
        /**
         * 获取用户信息
         */
        GameViewLogicEnum[GameViewLogicEnum["GetMemberInfo"] = 104] = "GetMemberInfo";
        /**
         * 选择道具
         */
        GameViewLogicEnum[GameViewLogicEnum["ChooseProp"] = 105] = "ChooseProp";
        /**
         * 选择筹码
         */
        GameViewLogicEnum[GameViewLogicEnum["ChooseChip"] = 106] = "ChooseChip";
        /**
         * 选择最大筹码
         */
        GameViewLogicEnum[GameViewLogicEnum["ChooseMaxChip"] = 107] = "ChooseMaxChip";
        /**
         * 游戏结束
         */
        GameViewLogicEnum[GameViewLogicEnum["GameResult"] = 108] = "GameResult";
        /**
         * 投注失败
         */
        GameViewLogicEnum[GameViewLogicEnum["BetPosError"] = 109] = "BetPosError";
    })(GameViewLogicEnum = Enum.GameViewLogicEnum || (Enum.GameViewLogicEnum = {}));
})(Enum || (Enum = {}));
//# sourceMappingURL=GameViewLogicEnum.js.map