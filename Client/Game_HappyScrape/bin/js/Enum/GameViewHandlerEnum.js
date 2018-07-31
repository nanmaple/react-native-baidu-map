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
        /**
         * 获取用户信息
         */
        GameViewHandlerEnum[GameViewHandlerEnum["GetMemberInfo"] = 2] = "GetMemberInfo";
        /**
         * 游戏结束
         */
        GameViewHandlerEnum[GameViewHandlerEnum["GameResult"] = 3] = "GameResult";
        /**
         * 获取余额
         */
        GameViewHandlerEnum[GameViewHandlerEnum["GetBalance"] = 4] = "GetBalance";
        /**
         * 获取游戏记录
         */
        GameViewHandlerEnum[GameViewHandlerEnum["GetRecord"] = 5] = "GetRecord";
        /**
         * 最大金额投注
         */
        GameViewHandlerEnum[GameViewHandlerEnum["MaxBetAmount"] = 6] = "MaxBetAmount";
        /**
         * 设置投注金额
         */
        GameViewHandlerEnum[GameViewHandlerEnum["SetBetAmount"] = 7] = "SetBetAmount";
    })(GameViewHandlerEnum = Enum.GameViewHandlerEnum || (Enum.GameViewHandlerEnum = {}));
})(Enum || (Enum = {}));
//# sourceMappingURL=GameViewHandlerEnum.js.map