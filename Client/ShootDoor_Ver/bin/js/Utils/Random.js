var Utils;
(function (Utils) {
    var Random = /** @class */ (function () {
        function Random() {
        }
        /**
         * 生成一个随机数
         * @param start 随机数开始数，包含该数
         * @param end 随机数结尾数，包含该数
         */
        Random.Get = function (start, end) {
            return Math.round(Math.random() * (end - start) + start);
        };
        return Random;
    }());
    Utils.Random = Random;
})(Utils || (Utils = {}));
