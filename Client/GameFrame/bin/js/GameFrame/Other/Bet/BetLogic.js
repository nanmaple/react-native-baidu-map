var Bet;
(function (Bet) {
    var BetLogic = /** @class */ (function () {
        function BetLogic() {
        }
        /**
         * 投注
         * @param memScore 游戏分数
         * @param betInfo 投注信息
         * @param currentBet 本次投注信息
         */
        BetLogic.prototype.Bet = function (memScore, betInfo, currentBet) {
            //用户状态判断
            //游戏状态判断
            //用户余额是否大于最小投注限额，用户已投分数与余额之差大于最小限额
            //取投注位置已投注数据(成功投分数，已投注分数，正在投注分数)
            //比较新投注数据和已投注数据,是否超过
            var alreadyBet = this.BeforeAmount(currentBet, betInfo.NoBetSuceessData, betInfo.BetSuccessData);
            var pos = currentBet.Pos;
            if (memScore == 0) {
                return { success: false, data: '余额不足' };
            }
            if (alreadyBet != 0 || memScore >= currentBet.MinLimit) { //------------1
                if (alreadyBet < currentBet.MaxLimit) { //------------2
                    if (currentBet.Amount + alreadyBet > currentBet.MaxLimit) { //------------3.1
                        currentBet.Amount = currentBet.MaxLimit - alreadyBet;
                    }
                    if (memScore < currentBet.Amount) { //------------3.2
                        currentBet.Amount = memScore;
                    }
                    if (betInfo.NoBetSuceessData[pos]) { //------------3.3
                        betInfo.NoBetSuceessData[pos].Amount += currentBet.Amount;
                    }
                    else {
                        var bet = new Bet.BetDto();
                        bet.Amount = currentBet.Amount;
                        bet.BetPos = currentBet.Pos;
                        bet.Odds = currentBet.Odds;
                        betInfo.NoBetSuceessData[pos] = bet;
                    }
                    betInfo.BetSocre += currentBet.Amount;
                    return { success: true, data: betInfo };
                }
                else {
                    return { success: false, data: '之前投注已达到最大额' };
                }
            }
            else {
                return { success: false, data: '低于最小投注额' };
            }
        };
        /**
         * 计算余额
         */
        BetLogic.prototype.CalcBalance = function () {
        };
        /**
         * 计算当前位置是否超限
         */
        BetLogic.prototype.CalcBetPosLimit = function () {
        };
        /**
         * 之前的投注额
         * @param currentBet 本次投注信息
         * @param NoBetSuceessData 当前一次未投注成功的注单信息
         * @param BetSuccessData 当前投注成功的投注信息
         */
        BetLogic.prototype.BeforeAmount = function (currentBet, NoBetSuceessData, BetSuccessData) {
            var pos = currentBet.Pos;
            var alreadyBet = 0;
            if (NoBetSuceessData[pos]) {
                alreadyBet += NoBetSuceessData[pos].Amount;
            }
            if (BetSuccessData[pos]) {
                alreadyBet += BetSuccessData[pos].Amount;
            }
            return alreadyBet;
        };
        /**
         * 撤销未提交投注
         * @param memScore 游戏分数
         * @param bettingInfo 目前投注信息
         */
        BetLogic.prototype.RetractBet = function (memScore, bettingInfo) {
            for (var i in bettingInfo) {
                if (typeof bettingInfo[i].Value == 'number') {
                    memScore += bettingInfo[i].Value;
                }
            }
        };
        return BetLogic;
    }());
    Bet.BetLogic = BetLogic;
})(Bet || (Bet = {}));
//# sourceMappingURL=BetLogic.js.map