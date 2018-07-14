var BaseEnum;
(function (BaseEnum) {
    /**
     * 游戏管理向游戏界面管理数据通知枚举
     */
    var GameViewLogicEnum;
    (function (GameViewLogicEnum) {
        /**
         * 提示效果
         */
        GameViewLogicEnum[GameViewLogicEnum["Alert"] = 0] = "Alert";
        /**
         * 错误信息
         */
        GameViewLogicEnum[GameViewLogicEnum["Error"] = 1] = "Error";
        /**
         * Loading
         */
        GameViewLogicEnum[GameViewLogicEnum["Loading"] = 2] = "Loading";
        /**
         * 登录处理完成
         */
        GameViewLogicEnum[GameViewLogicEnum["LoginComplete"] = 3] = "LoginComplete";
        /**
         * 游戏数据分发
         */
        GameViewLogicEnum[GameViewLogicEnum["GameData"] = 4] = "GameData";
        /**
         * 余额
         */
        GameViewLogicEnum[GameViewLogicEnum["Balance"] = 5] = "Balance";
    })(GameViewLogicEnum = BaseEnum.GameViewLogicEnum || (BaseEnum.GameViewLogicEnum = {}));
})(BaseEnum || (BaseEnum = {}));
//# sourceMappingURL=GameViewLogicEnum.js.map