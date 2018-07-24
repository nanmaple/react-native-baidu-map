var Enum;
(function (Enum) {
    var GameStatus;
    (function (GameStatus) {
        /**
         * 默认
         */
        GameStatus[GameStatus["Default"] = 0] = "Default";
        /**
         * 猜大小
         */
        GameStatus[GameStatus["Guess"] = 1] = "Guess";
        /**
         * 进行中
         */
        GameStatus[GameStatus["Execute"] = 2] = "Execute";
        /**等待初始化 */
        GameStatus[GameStatus["WaitInit"] = 3] = "WaitInit";
    })(GameStatus = Enum.GameStatus || (Enum.GameStatus = {}));
})(Enum || (Enum = {}));
//# sourceMappingURL=GameStatus.js.map