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
            //用户状态判断
            //游戏状态判断
            //用户余额是否大于最小投注限额，用户已投分数与余额之差大于最小限额
            //取投注位置已投注数据(成功投分数，已投注分数，正在投注分数)
            //比较新投注数据和已投注数据,是否超过
            memScore -= this.betInfo.BetNumber * this.betInfo.BaseAmount;
            if (memScore < this.betInfo.BaseAmount) {
                return { success: false, data: 'InsufficientBalance' };
            }
            this.betInfo.BetNumber += 1;
            if (this.betInfo.BetSuccessData[positon]) {
                if (this.betInfo.BetSuccessData[positon] >= this.betInfo.MaxBetNum) {
                    return { success: false, data: 'OverLimit' };
                }
                this.betInfo.BetSuccessData[positon] += 1;
            }
            else {
                this.betInfo.BetSuccessData[positon] = 1;
            }
            return { success: true, data: this.betInfo.BetSuccessData[positon] };
        };
        /**
         * 设置投注总限额
         * @param MaxBet
         * @param MinBet
         */
        BetLogic.prototype.SetBetLimit = function (MaxBet, MinBet) {
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
            var all = data.Value * this.betInfo.BetNumber;
            if (all > memScore) {
                var chip = Math.floor(memScore / this.betInfo.BetNumber / data.BaseAmount) * data.BaseAmount;
                if (chip == 0)
                    chip = data.BaseAmount;
                this.betInfo.BaseAmount = chip;
                return chip;
            }
            this.betInfo.BaseAmount = data.Value;
            return data.Value;
        };
        return BetLogic;
    }());
    OnceBet.BetLogic = BetLogic;
})(OnceBet || (OnceBet = {}));
//# sourceMappingURL=BetLogic.js.map