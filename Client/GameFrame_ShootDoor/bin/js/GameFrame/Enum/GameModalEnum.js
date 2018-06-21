var GameEnum;
(function (GameEnum) {
    /**
     * Modal类型枚举
     */
    var GameModalEnum;
    (function (GameModalEnum) {
        /**
         * 开启
         */
        GameModalEnum[GameModalEnum["Open"] = 0] = "Open";
        /**
         * 关闭
         */
        GameModalEnum[GameModalEnum["Close"] = 1] = "Close";
        /**
         * 消息
         */
        GameModalEnum[GameModalEnum["Msg"] = 2] = "Msg";
        /**
         * 登出
         */
        GameModalEnum[GameModalEnum["LoginOut"] = 3] = "LoginOut";
        /**
         * 会员关闭
         */
        GameModalEnum[GameModalEnum["MemClose"] = 4] = "MemClose";
    })(GameModalEnum = GameEnum.GameModalEnum || (GameEnum.GameModalEnum = {}));
})(GameEnum || (GameEnum = {}));
//# sourceMappingURL=GameModalEnum.js.map