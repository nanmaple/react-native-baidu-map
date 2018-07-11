/*
* name;
*/
var Enum;
(function (Enum) {
    var GameViewHandlerEnum;
    (function (GameViewHandlerEnum) {
        /**
         * 启动socket
         */
        GameViewHandlerEnum[GameViewHandlerEnum["StartSocket"] = 0] = "StartSocket";
        /**
         * 投注操作
        */
        GameViewHandlerEnum[GameViewHandlerEnum["BetPos"] = 1] = "BetPos";
        GameViewHandlerEnum[GameViewHandlerEnum["ConfirmBet"] = 2] = "ConfirmBet";
        GameViewHandlerEnum[GameViewHandlerEnum["CancelBet"] = 3] = "CancelBet";
        GameViewHandlerEnum[GameViewHandlerEnum["GetNoBetSucData"] = 4] = "GetNoBetSucData";
        /**
         * 获取投注记录
        */
        GameViewHandlerEnum[GameViewHandlerEnum["GetBetRecord"] = 5] = "GetBetRecord";
        /**
         * 获取最新余额
         */
        GameViewHandlerEnum[GameViewHandlerEnum["ChangeMoney"] = 6] = "ChangeMoney";
        /**
         * 获取用户信息
         */
        GameViewHandlerEnum[GameViewHandlerEnum["GetMemberInfo"] = 7] = "GetMemberInfo";
    })(GameViewHandlerEnum = Enum.GameViewHandlerEnum || (Enum.GameViewHandlerEnum = {}));
})(Enum || (Enum = {}));
//# sourceMappingURL=GameViewHandlerEnum.js.map