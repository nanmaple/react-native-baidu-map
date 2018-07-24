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
         * 选择道具
         */
        GameViewHandlerEnum[GameViewHandlerEnum["ChooseProp"] = 3] = "ChooseProp";
        /**
         * 选择筹码
         */
        GameViewHandlerEnum[GameViewHandlerEnum["ChooseChip"] = 4] = "ChooseChip";
        /**
         * 选择最大筹码
         */
        GameViewHandlerEnum[GameViewHandlerEnum["ChooseMaxChip"] = 5] = "ChooseMaxChip";
        /**
         * 游戏结束
         */
        GameViewHandlerEnum[GameViewHandlerEnum["GameResult"] = 6] = "GameResult";
        /**
         * 获取余额
         */
        GameViewHandlerEnum[GameViewHandlerEnum["GetBalance"] = 7] = "GetBalance";
        /**
         * 获取游戏记录
         */
        GameViewHandlerEnum[GameViewHandlerEnum["GetRecord"] = 8] = "GetRecord";
    })(GameViewHandlerEnum = Enum.GameViewHandlerEnum || (Enum.GameViewHandlerEnum = {}));
})(Enum || (Enum = {}));
//# sourceMappingURL=GameViewHandlerEnum.js.map