var Utils;
(function (Utils) {
    var Money = /** @class */ (function () {
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
        /**
         * 千元制转换
         * @param money
         */
        Money.TransforK = function (money) {
            if (money >= 1000 && typeof money == "number") {
                money = Math.floor(money / 1000) + "K";
            }
            else if (typeof money == "string" && money.indexOf("K") != -1) {
                money = Number(money.slice(0, -1)) * 1000;
            }
            else {
                money = Number(money);
            }
            return money;
        };
        return Money;
    }());
    Utils.Money = Money;
})(Utils || (Utils = {}));
//# sourceMappingURL=Money.js.map