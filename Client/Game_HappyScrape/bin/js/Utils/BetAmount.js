var Utils;
(function (Utils) {
    /**
     * 投注金额加减
     */
    var BetAmount = (function () {
        function BetAmount() {
        }
        /**
         * 减少投注额
         * @param nowBet 当前投注额
         * @param minBet 最小投注额
         */
        BetAmount.ReduceBet = function (nowBet, minBet) {
            var money = 0;
            var len = nowBet.toString().length;
            money = nowBet > Math.pow(10, len - 1) ? nowBet - Math.pow(10, len - 1) : nowBet - Math.pow(10, len - 2);
            money = money < minBet ? nowBet : money;
            return money;
        };
        /**
         * 增加投注额
         * @param nowBet 当前投注额
         * @param maxBet 最大投注额
         */
        BetAmount.AddBet = function (nowBet, maxBet) {
            var money = 0;
            var len = nowBet.toString().length;
            money = nowBet + Math.pow(10, len - 1);
            money = money > maxBet ? nowBet : money;
            return money;
        };
        return BetAmount;
    }());
    Utils.BetAmount = BetAmount;
})(Utils || (Utils = {}));
//# sourceMappingURL=BetAmount.js.map