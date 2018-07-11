var Enum;
(function (Enum) {
    /**
     * 游戏管理逻辑向游戏界面逻辑数据通知枚举
     */
    var GameViewLogicEnum;
    (function (GameViewLogicEnum) {
        /**
         * 投注成功
         */
        GameViewLogicEnum[GameViewLogicEnum["BetSuccess"] = 101] = "BetSuccess";
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
        /**
         * 修改投注基数
         */
        GameViewLogicEnum[GameViewLogicEnum["ChangBaseAmount"] = 105] = "ChangBaseAmount";
        /**修改游戏状态 */
        GameViewLogicEnum[GameViewLogicEnum["ChangGameStatus"] = 106] = "ChangGameStatus";
        /**修改当前投注分数 */
        GameViewLogicEnum[GameViewLogicEnum["ChangeCurrBet"] = 107] = "ChangeCurrBet";
        /**本次滚动结束 */
        // GameEnd,
    })(GameViewLogicEnum = Enum.GameViewLogicEnum || (Enum.GameViewLogicEnum = {}));
})(Enum || (Enum = {}));
//# sourceMappingURL=GameViewLogicEnum.js.map