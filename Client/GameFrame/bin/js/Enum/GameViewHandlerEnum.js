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
    })(GameViewHandlerEnum = Enum.GameViewHandlerEnum || (Enum.GameViewHandlerEnum = {}));
})(Enum || (Enum = {}));
//# sourceMappingURL=GameViewHandlerEnum.js.map