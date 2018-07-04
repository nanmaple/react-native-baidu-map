var MulBet;
(function (MulBet) {
    /**
     * 投注相关内容
     */
    var BetDataDto = (function () {
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
    MulBet.BetDataDto = BetDataDto;
    /**
     * 投注提交内容
     */
    var BetDto = (function () {
        function BetDto() {
        }
        return BetDto;
    }());
    MulBet.BetDto = BetDto;
    /**
     * 投注面板UI到Ctrl传递数据Dto
     */
    var BetPosValue = (function () {
        function BetPosValue() {
        }
        return BetPosValue;
    }());
    MulBet.BetPosValue = BetPosValue;
    /**
     * 投注成功后 投注分数及游戏分数
     */
    var BetResultDto = (function () {
        function BetResultDto() {
        }
        return BetResultDto;
    }());
    MulBet.BetResultDto = BetResultDto;
    /**
     * 投注位置投注后数据
    */
    var BetPosAmountDto = (function () {
        function BetPosAmountDto() {
        }
        return BetPosAmountDto;
    }());
    MulBet.BetPosAmountDto = BetPosAmountDto;
})(MulBet || (MulBet = {}));
//# sourceMappingURL=MulBetInfoDto.js.map