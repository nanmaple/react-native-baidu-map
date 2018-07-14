/*
* name;
*/
var Enum;
(function (Enum) {
    var GameViewHandlerEnum;
    (function (GameViewHandlerEnum) {
        /**
         * 投注操作
        */
        GameViewHandlerEnum[GameViewHandlerEnum["BetPos"] = 0] = "BetPos";
        /**
         * 获取最新余额
         */
        GameViewHandlerEnum[GameViewHandlerEnum["GetBalance"] = 1] = "GetBalance";
        /**
         * 修改投注基数
         */
        GameViewHandlerEnum[GameViewHandlerEnum["ChangBaseAmount"] = 2] = "ChangBaseAmount";
        /**清除所有投注信息 */
        GameViewHandlerEnum[GameViewHandlerEnum["ClearBet"] = 3] = "ClearBet";
        /**全部投注位置+1 */
        GameViewHandlerEnum[GameViewHandlerEnum["AddAll"] = 4] = "AddAll";
        /** 猜大小*/
        GameViewHandlerEnum[GameViewHandlerEnum["GuessSize"] = 5] = "GuessSize";
        /**游戏开始滚动 */
        GameViewHandlerEnum[GameViewHandlerEnum["GameStart"] = 6] = "GameStart";
        /**游戏结束滚动 */
        GameViewHandlerEnum[GameViewHandlerEnum["GameEnd"] = 7] = "GameEnd";
        /**socket连接 */
        GameViewHandlerEnum[GameViewHandlerEnum["StartSocket"] = 8] = "StartSocket";
        /**收分操作 */
        GameViewHandlerEnum[GameViewHandlerEnum["GatherFraction"] = 9] = "GatherFraction";
        /**加大竞猜筹码 */
        GameViewHandlerEnum[GameViewHandlerEnum["AddGuessSum"] = 10] = "AddGuessSum";
        /**减小竞猜筹码 */
        GameViewHandlerEnum[GameViewHandlerEnum["ReduceGuessSum"] = 11] = "ReduceGuessSum";
        /** 随机数动画结束*/
        GameViewHandlerEnum[GameViewHandlerEnum["RandomEnd"] = 12] = "RandomEnd";
    })(GameViewHandlerEnum = Enum.GameViewHandlerEnum || (Enum.GameViewHandlerEnum = {}));
})(Enum || (Enum = {}));
//# sourceMappingURL=GameViewHandlerEnum.js.map