var GameEnum;
(function (GameEnum) {
    /**
     * 游戏管理向游戏界面管理数据通知枚举
     */
    var GameViewEnum;
    (function (GameViewEnum) {
        /**
         * 提示效果
         */
        GameViewEnum[GameViewEnum["Alert"] = 0] = "Alert";
        /**
         * 错误信息
         */
        GameViewEnum[GameViewEnum["Error"] = 1] = "Error";
        /**
         * Loading
         */
        GameViewEnum[GameViewEnum["Loading"] = 2] = "Loading";
        /**
         * 登录处理完成
         */
        GameViewEnum[GameViewEnum["LoginComplete"] = 3] = "LoginComplete";
        /**
         * 游戏数据分发
         */
        GameViewEnum[GameViewEnum["GameData"] = 4] = "GameData";
        /**
         * 投注
         */
        GameViewEnum[GameViewEnum["BetPos"] = 5] = "BetPos";
        /**
         * 添加投注记录
         */
        GameViewEnum[GameViewEnum["SetRecord"] = 6] = "SetRecord";
        /**
         * 改变余额
         */
        GameViewEnum[GameViewEnum["ChangMoney"] = 7] = "ChangMoney";
        /**
         * 获取用户信息
         */
        GameViewEnum[GameViewEnum["GetMemberInfo"] = 8] = "GetMemberInfo";
    })(GameViewEnum = GameEnum.GameViewEnum || (GameEnum.GameViewEnum = {}));
})(GameEnum || (GameEnum = {}));
//# sourceMappingURL=GameViewEnum.js.map