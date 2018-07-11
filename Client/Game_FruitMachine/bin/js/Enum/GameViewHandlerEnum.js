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
        GameViewHandlerEnum[GameViewHandlerEnum["ConfirmBet"] = 1] = "ConfirmBet";
        GameViewHandlerEnum[GameViewHandlerEnum["CancelBet"] = 2] = "CancelBet";
        GameViewHandlerEnum[GameViewHandlerEnum["GetNoBetSucData"] = 3] = "GetNoBetSucData";
        /**
         * 获取投注记录
        */
        GameViewHandlerEnum[GameViewHandlerEnum["GetBetRecord"] = 4] = "GetBetRecord";
        /**
         * 获取最新余额
         */
        GameViewHandlerEnum[GameViewHandlerEnum["ChangeMoney"] = 5] = "ChangeMoney";
        /**
         * 获取用户信息
         */
        GameViewHandlerEnum[GameViewHandlerEnum["GetMemberInfo"] = 6] = "GetMemberInfo";
        /**
         * 修改投注基数
         */
        GameViewHandlerEnum[GameViewHandlerEnum["ChangBaseAmount"] = 7] = "ChangBaseAmount";
        /**清除所有投注信息 */
        GameViewHandlerEnum[GameViewHandlerEnum["ClearBet"] = 8] = "ClearBet";
        /**全部投注位置+1 */
        GameViewHandlerEnum[GameViewHandlerEnum["AddAll"] = 9] = "AddAll";
        /** 猜大小*/
        GameViewHandlerEnum[GameViewHandlerEnum["GuessSize"] = 10] = "GuessSize";
        /**游戏开始滚动 */
        GameViewHandlerEnum[GameViewHandlerEnum["GameStart"] = 11] = "GameStart";
        /**游戏结束滚动 */
        GameViewHandlerEnum[GameViewHandlerEnum["GameEnd"] = 12] = "GameEnd";
        /**socket连接 */
        GameViewHandlerEnum[GameViewHandlerEnum["StartSocket"] = 13] = "StartSocket";
        /**收分操作 */
        GameViewHandlerEnum[GameViewHandlerEnum["GatherFraction"] = 14] = "GatherFraction";
        /**加大竞猜筹码 */
        GameViewHandlerEnum[GameViewHandlerEnum["AddGuessSum"] = 15] = "AddGuessSum";
        /**减小竞猜筹码 */
        GameViewHandlerEnum[GameViewHandlerEnum["ReduceGuessSum"] = 16] = "ReduceGuessSum";
        /** 随机数动画结束*/
        GameViewHandlerEnum[GameViewHandlerEnum["RandomEnd"] = 17] = "RandomEnd";
    })(GameViewHandlerEnum = Enum.GameViewHandlerEnum || (Enum.GameViewHandlerEnum = {}));
})(Enum || (Enum = {}));
//# sourceMappingURL=GameViewHandlerEnum.js.map