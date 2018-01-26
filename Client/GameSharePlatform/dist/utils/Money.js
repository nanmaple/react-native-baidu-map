"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Money {
    static Format(money, places, symbol, thousand, decimal) {
        money = money || 0;
        places = !isNaN(places = Math.abs(places)) ? places : 2;
        symbol = symbol !== undefined ? symbol : "";
        thousand = thousand || ",";
        decimal = decimal || ".";
        var negative = money < 0 ? "-" : "";
        let i = parseInt(money = Math.abs(+money || 0).toFixed(places), 10) + "";
        let j = 0;
        j = (j = i.length) > 3 ? j % 3 : 0;
        return symbol + negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) + (places ? decimal + Math.abs(money - i).toFixed(places).slice(2) : "");
    }
}
exports.default = Money;
//# sourceMappingURL=Money.js.map