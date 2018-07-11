var Enum;
(function (Enum) {
    var GameStatus;
    (function (GameStatus) {
        /**
         * 默认
         */
        GameStatus[GameStatus["DEFAULT"] = 0] = "DEFAULT";
        /**
         * 猜大小
         */
        GameStatus[GameStatus["GUESS"] = 1] = "GUESS";
        /**
         * 进行中
         */
        GameStatus[GameStatus["EXECUTE"] = 2] = "EXECUTE";
    })(GameStatus = Enum.GameStatus || (Enum.GameStatus = {}));
})(Enum || (Enum = {}));
//# sourceMappingURL=GameStatus.js.map