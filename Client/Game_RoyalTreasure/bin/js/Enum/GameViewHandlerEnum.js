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
         * 启动连接
         */
        GameViewHandlerEnum[GameViewHandlerEnum["StartSocket"] = 7] = "StartSocket";
    })(GameViewHandlerEnum = Enum.GameViewHandlerEnum || (Enum.GameViewHandlerEnum = {}));
})(Enum || (Enum = {}));
//# sourceMappingURL=GameViewHandlerEnum.js.map