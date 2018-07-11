var OnceBet;
(function (OnceBet) {
    /**
     * 投注相关内容
     */
    var BetDataDto = /** @class */ (function () {
        function BetDataDto() {
            /**
             * 当前总投注信息
             */
            this.BetSuccessData = new Object();
            /**
             * 当前投注的总数
             */
            this.BetNumber = 0;
            /**
             * 当前投注基数
             */
            this.BaseAmount = 100;
            /**上一次投注位置、个数信息 */
            this.LastBet = new Object();
        }
        return BetDataDto;
    }());
    OnceBet.BetDataDto = BetDataDto;
    /**
     * 投注提交内容
     */
    var BetDto = /** @class */ (function () {
        function BetDto() {
        }
        return BetDto;
    }());
    OnceBet.BetDto = BetDto;
    /**
     * 投注位置投注后数据
    */
    var BetPosAmountDto = /** @class */ (function () {
        function BetPosAmountDto() {
        }
        return BetPosAmountDto;
    }());
    OnceBet.BetPosAmountDto = BetPosAmountDto;
})(OnceBet || (OnceBet = {}));
//# sourceMappingURL=BetInfoDto.js.map