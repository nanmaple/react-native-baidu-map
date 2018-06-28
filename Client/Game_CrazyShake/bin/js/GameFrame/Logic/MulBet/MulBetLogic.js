/// <reference path="./MulBetInfoDto.ts" />
var MulBet;
(function (MulBet) {
    /**
     * 多位置投注逻辑
     */
    var MulBetLogic = /** @class */ (function () {
        function MulBetLogic() {
            this.betInfo = new MulBet.BetDataDto();
        }
        /**
         * 投注
         * @param memScore 游戏分数
         * @param currentBet 本次投注信息
         */
        MulBetLogic.prototype.Bet = function (memScore, currentBet) {
            //用户状态判断
            //游戏状态判断
            //用户余额是否大于最小投注限额，用户已投分数与余额之差大于最小限额
            //取投注位置已投注数据(成功投分数，已投注分数，正在投注分数)
            //比较新投注数据和已投注数据,是否超过
            memScore = memScore - (this.betInfo.BetSocre + this.betInfo.BetingSocre);
            var alreadyBet = this.BeforeAmount(currentBet);
            var pos = currentBet.Pos;
            if (memScore == 0) {
                return { success: false, data: MulBet.BetReult.InsufficientBalance };
            }
            if (alreadyBet == 0 && currentBet.Amount < currentBet.MinLimit) {
                return { success: false, data: MulBet.BetReult.LowLimit };
            }
            if (alreadyBet != 0 || memScore >= currentBet.MinLimit) {
                if (alreadyBet < currentBet.MaxLimit) {
                    if (currentBet.Amount + alreadyBet > currentBet.MaxLimit) {
                        currentBet.Amount = currentBet.MaxLimit - alreadyBet;
                    }
                    if (memScore < currentBet.Amount) {
                        currentBet.Amount = memScore;
                    }
                    if (this.betInfo.NoBetSuceessData[pos]) {
                        this.betInfo.NoBetSuceessData[pos].Amount += currentBet.Amount;
                    }
                    else {
                        var bet = new MulBet.BetDto();
                        bet.Amount = currentBet.Amount;
                        bet.BetPos = currentBet.Pos;
                        bet.Odds = currentBet.Odds;
                        this.betInfo.NoBetSuceessData[pos] = bet;
                    }
                    this.betInfo.BetSocre += currentBet.Amount;
                    return { success: true, data: (currentBet.Amount + alreadyBet) };
                }
                else {
                    return { success: false, data: MulBet.BetReult.OverLimit };
                }
            }
            else {
                return { success: false, data: MulBet.BetReult.InsufficientBalance };
            }
        };
        /**
         * 之前的投注额
         * @param currentBet 本次投注信息
         * @param betInfo 注单信息
         */
        MulBetLogic.prototype.BeforeAmount = function (currentBet) {
            var pos = currentBet.Pos;
            var alreadyBet = 0;
            if (this.betInfo.NoBetSuceessData[pos]) {
                alreadyBet += this.betInfo.NoBetSuceessData[pos].Amount;
            }
            if (this.betInfo.BetSuccessData && this.betInfo.BetSuccessData[pos]) {
                alreadyBet += this.betInfo.BetSuccessData[pos];
            }
            for (var i in this.betInfo.SendingBetData) {
                if (JSON.stringify(this.betInfo.SendingBetData[i]) != "{}" && this.betInfo.SendingBetData[i].Data[pos]) {
                    alreadyBet += this.betInfo.SendingBetData[i].Data[pos].Amount;
                }
            }
            return alreadyBet;
        };
        /**
         * 撤销未提交投注
         */
        MulBetLogic.prototype.RetractBet = function () {
            this.betInfo.BetSocre = 0;
            this.betInfo.NoBetSuceessData = new Object();
            return this.betInfo;
        };
        /**
         * 确认投注
         */
        MulBetLogic.prototype.ConfirmBet = function () {
            if (!this.betInfo.NoBetSuceessData || JSON.stringify(this.betInfo.NoBetSuceessData) == "{}") {
                return;
            }
            return Object.values(this.betInfo.NoBetSuceessData);
        };
        /**
         * 设置当前投注注单的guid
         * @param betID 消息guid
         */
        MulBetLogic.prototype.SetMsgID = function (betID) {
            //将当前局投注注单赋值到已发送的队列中;
            this.betInfo.SendingBetData[betID] = { Socre: this.betInfo.BetSocre, Data: this.betInfo.NoBetSuceessData };
            this.betInfo.BetingSocre += this.betInfo.BetSocre;
            this.betInfo.BetSocre = 0;
            this.betInfo.NoBetSuceessData = new Object();
        };
        /**
         * 投注Ack回调
         * @param id 消息guid
         */
        MulBetLogic.prototype.BetAck = function (id) {
            if (this.betInfo.SendingBetData[id]) {
                this.betInfo.SendingBetData[id] = new Object();
                this.betInfo.BetingSocre = 0;
            }
        };
        /**
         * 设置成功投注数据，默认重置为空数据
         * @param data 投注成功数据
         */
        MulBetLogic.prototype.SetBetSuccessData = function (data) {
            if (data === void 0) { data = new Object(); }
            this.betInfo.BetSuccessData = data;
        };
        /**
         * 重置新一局游戏的投注数据
         */
        MulBetLogic.prototype.SetNewRound = function () {
            this.betInfo.BetSuccessData = new Object();
            this.betInfo.NoBetSuceessData = new Object();
            this.betInfo.BetSocre = 0;
        };
        /**
         * 重置所有投注数据
         */
        MulBetLogic.prototype.ResetData = function () {
            this.betInfo.NoBetSuceessData = new Object();
            this.betInfo.BetSocre = 0;
            this.betInfo.BetingSocre = 0;
            this.betInfo.SendingBetData = new Object();
        };
        /**
         * 获取当前局投注值
         */
        MulBetLogic.prototype.GetBetScore = function () {
            return this.betInfo.BetSocre + this.betInfo.BetingSocre;
        };
        return MulBetLogic;
    }());
    MulBet.MulBetLogic = MulBetLogic;
})(MulBet || (MulBet = {}));
//# sourceMappingURL=MulBetLogic.js.map