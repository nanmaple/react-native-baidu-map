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
        /**修改游戏状态 */
        GameViewLogicEnum[GameViewLogicEnum["ChangGameStatus"] = 103] = "ChangGameStatus";
        /**修改当前投注分数 */
        GameViewLogicEnum[GameViewLogicEnum["ChangeCurrBet"] = 104] = "ChangeCurrBet";
        /**本次滚动开始 */
        GameViewLogicEnum[GameViewLogicEnum["GameStart"] = 105] = "GameStart";
        /**本次滚动结束 */
        GameViewLogicEnum[GameViewLogicEnum["GameEnd"] = 106] = "GameEnd";
        /**清理投注记录 */
        GameViewLogicEnum[GameViewLogicEnum["ClearBet"] = 107] = "ClearBet";
        /**猜大小结束 */
        GameViewLogicEnum[GameViewLogicEnum["GuessEnd"] = 108] = "GuessEnd";
    })(GameViewLogicEnum = Enum.GameViewLogicEnum || (Enum.GameViewLogicEnum = {}));
})(Enum || (Enum = {}));
//# sourceMappingURL=GameViewLogicEnum.js.map