/// <reference path="./BetInfoDto.ts" />
var OnceBet;
(function (OnceBet) {
    /**
     * 多位置投注逻辑
     */
    var BetLogic = /** @class */ (function () {
        function BetLogic() {
            this.betInfo = new OnceBet.BetDataDto();
        }
        /**
         * 投注
         * @param memScore 游戏分数
         * @param positon 本次投注位置
         */
        BetLogic.prototype.Bet = function (memScore, positon) {
            memScore -= this.betInfo.BetNumber * this.betInfo.BaseAmount;
            if (memScore < this.betInfo.BaseAmount) {
                return { success: false, data: 'InsufficientBalance' };
            }
            var pos = this.betInfo.BetSuccessData[positon];
            if (pos) {
                if (pos >= this.betInfo.MaxBetNum || pos * this.betInfo.BaseAmount > this.betInfo.MaxBet) {
                    return { success: false, data: 'OverLimit' };
                }
                this.betInfo.BetSuccessData[positon] += 1;
            }
            else {
                this.betInfo.BetSuccessData[positon] = 1;
            }
            this.betInfo.BetNumber += 1;
            return { success: true, data: this.betInfo.BetSuccessData[positon] };
        };
        /**
         * 设置投注总限额
         * @param BaseAmounts
         * @param MaxBet
         * @param MinBet
         */
        BetLogic.prototype.SetBetLimit = function (BaseAmounts, MaxBet, MinBet) {
            this.betInfo.BaseAmount = BaseAmounts[0];
            this.betInfo.MaxBase = BaseAmounts[2];
            this.betInfo.MaxBet = MaxBet;
            this.betInfo.MinBet = MinBet;
        };
        /**
         * 清空投注信息
         */
        BetLogic.prototype.ClearBet = function () {
            this.betInfo.BetNumber = 0;
            this.betInfo.BetSuccessData = new Object();
        };
        /**
         * 获取当前局投注信息
         */
        BetLogic.prototype.GetBetInfo = function () {
            var dto = new OnceBet.BetDto();
            dto.BaseAmount = this.betInfo.BaseAmount;
            dto.BetInfos = this.betInfo.BetSuccessData;
            return dto;
        };
        /**
         * 获取当前局投注总分数
         */
        BetLogic.prototype.GetBetScore = function () {
            var sum = this.betInfo.BaseAmount * this.betInfo.BetNumber;
            return sum;
        };
        /**
         * 修改投注基数
         * @param data
         */
        BetLogic.prototype.ChangBaseAmount = function (memScore, data) {
            if (data > this.betInfo.MaxBase)
                data = this.betInfo.MaxBase;
            var all = data * this.betInfo.BetNumber;
            if (all > memScore) {
                var chip = Math.floor(memScore / this.betInfo.BetNumber / data) * data;
                if (chip == 0)
                    chip = data;
                this.betInfo.BaseAmount = chip;
                return chip;
            }
            this.betInfo.BaseAmount = data;
            return data;
        };
        return BetLogic;
    }());
    OnceBet.BetLogic = BetLogic;
})(OnceBet || (OnceBet = {}));
//# sourceMappingURL=BetLogic.js.map