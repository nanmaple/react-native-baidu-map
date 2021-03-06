var Utils;
(function (Utils) {
    /**
     * 牌数据转换类
     */
    var Poker = /** @class */ (function () {
        function Poker() {
        }
        /**
         * 获取花色
         */
        Poker.GetCardColor = function (type) {
            return (type - 1) / 13;
        };
        /**
         * 获取牌的值
         */
        Poker.GetNumber = function (type) {
            var num = (type - 1) % 13;
            num++;
            return num;
        };
        return Poker;
    }());
    Utils.Poker = Poker;
})(Utils || (Utils = {}));
