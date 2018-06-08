var Bet;
(function (Bet) {
    /**
     * 投注相关内容
     */
    var BetDataDto = /** @class */ (function () {
        function BetDataDto() {
            /**
             * 当前投注成功的投注信息
             */
            this.BetSuccessData = new Object();
            /**
             * 当前一次投注的总分数
             */
            this.BetSocre = 0;
            /**
             * 当前一次未投注成功的注单信息
             */
            this.NoBetSuceessData = new Object();
            /**
             * 正在定时重发的投注总分数
             */
            this.BetingSocre = 0;
            /**
             * 已发送的send注单
             * key: 注单号
             * value:投注信息{Socre:**,Data:**}
             */
            this.SendingBetData = new Object();
        }
        return BetDataDto;
    }());
    Bet.BetDataDto = BetDataDto;
    /**
     * 投注提交内容
     */
    var BetDto = /** @class */ (function () {
        function BetDto() {
        }
        return BetDto;
    }());
    Bet.BetDto = BetDto;
    /**
     * 投注面板UI到Ctrl传递数据Dto
     */
    var BetPosValue = /** @class */ (function () {
        function BetPosValue() {
        }
        return BetPosValue;
    }());
    Bet.BetPosValue = BetPosValue;
})(Bet || (Bet = {}));
//# sourceMappingURL=BetInfoDto.js.map