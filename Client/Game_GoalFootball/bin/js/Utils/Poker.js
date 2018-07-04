var Utils;
(function (Utils) {
    /**
     * 牌数据转换类
     */
    var Poker = (function () {
        function Poker() {
        }
        /**
         * 获取花色
         */
        // static GetCardColor(type: number): Enum.CardColor {
        //     return (type - 1) / 13;
        // }
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
//# sourceMappingURL=Poker.js.map