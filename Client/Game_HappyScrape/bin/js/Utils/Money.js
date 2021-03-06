/**
 * 工具类-货币格式转换
 */
var Utils;
(function (Utils) {
    var Money = (function () {
        function Money() {
        }
        Money.Format = function (money, places, symbol, thousand, decimal) {
            money = money || 0;
            places = !isNaN(places = Math.abs(places)) ? places : 0;
            symbol = symbol !== undefined ? symbol : "";
            thousand = thousand || ",";
            decimal = decimal || ".";
            var negative = money < 0 ? "-" : "";
            var i = parseInt(money = Math.abs(+money || 0).toFixed(places), 10) + "";
            var j = 0;
            j = (j = i.length) > 3 ? j % 3 : 0;
            return symbol + negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) + (places ? decimal + Math.abs(money - i).toFixed(places).slice(2) : "");
        };
        return Money;
    }());
    Utils.Money = Money;
})(Utils || (Utils = {}));
//# sourceMappingURL=Money.js.map