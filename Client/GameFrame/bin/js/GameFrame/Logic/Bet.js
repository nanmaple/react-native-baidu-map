var Logic;
(function (Logic) {
    var Bet = /** @class */ (function () {
        function Bet() {
        }
        /**
         * 投注
         * @param gameScore 游戏分数
         * @param betInfo 投注信息
         * @param bettingInfo 目前投注信息
         * @param bettedInfo 投注成功信息
         */
        Bet.prototype.Bet = function (gameScore, betInfo, bettingInfo, bettedInfo) {
            if (this.CalcBalance(gameScore, betInfo)) {
                var pos = betInfo.Pos;
                if (this.CalcBetPosLimit(betInfo, bettingInfo, bettedInfo)) {
                    //投注正常
                    gameScore -= betInfo.Value;
                    bettedInfo[pos].Value += betInfo.Value;
                }
                else {
                    //超出限额
                    var Beyond = betInfo.Limit - (bettedInfo[pos].Value + bettingInfo[pos].Value);
                    gameScore -= Beyond;
                    bettedInfo[pos].Value = Beyond;
                    betInfo.Value = Beyond;
                }
            }
            else {
                //余额不足
            }
        };
        /**
         * 撤销未提交投注
         * @param gameScore 游戏分数
         * @param bettingInfo 目前投注信息
         */
        Bet.prototype.RetractBet = function (gameScore, bettingInfo) {
            for (var i in bettingInfo) {
                if (typeof bettingInfo[i].Value == 'number') {
                    gameScore += bettingInfo[i].Value;
                }
            }
        };
        /**
         * 计算余额
         * @param gameScore 游戏分数
         * @param betInfo 投注信息
         */
        Bet.prototype.CalcBalance = function (gameScore, betInfo) {
            //标胶游戏分数和本次投注额是否足够
            if (gameScore < betInfo.Value) {
                return false;
            }
            return true;
        };
        /**
         * 计算当前位置是否超限
         * @param betInfo 投注信息
         * @param bettingInfo 目前投注信息
         * @param bettedInfo 投注成功信息
         */
        Bet.prototype.CalcBetPosLimit = function (betInfo, bettingInfo, bettedInfo) {
            var pos = betInfo.Pos;
            var alreadyBet = 0;
            if (bettingInfo[pos]) {
                alreadyBet += bettingInfo[pos].Value;
            }
            if (bettedInfo[pos]) {
                alreadyBet += bettedInfo[pos].Value;
            }
            if ((betInfo.Value + alreadyBet) > betInfo.Limit) {
                return false;
            }
            return true;
        };
        return Bet;
    }());
    Logic.Bet = Bet;
})(Logic || (Logic = {}));
//# sourceMappingURL=Bet.js.map