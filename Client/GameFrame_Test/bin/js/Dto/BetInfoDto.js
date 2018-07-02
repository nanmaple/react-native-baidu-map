var Dto;
(function (Dto) {
    /**
     * 投注相关内容
     */
    var BetInfoDto = /** @class */ (function () {
        function BetInfoDto() {
            /**
             * 当前投注成功的投注信息
             */
            this.BetSuccessData = new Object();
            /**
             * 当前未投注成功的注单信息
             */
            this.NoBetSuceessData = new Object();
            /**
             * 当前赔率
             */
            this.currentOdds = new Object();
            /**
             * 当前投注分数
             */
            this.currentBetSocre = 0;
            /**
             * 已发送的send注单
             */
            this.SendingBetData = new Object();
        }
        return BetInfoDto;
    }());
    Dto.BetInfoDto = BetInfoDto;
    /**
     * 投注提交内容
     */
    var BetDto = /** @class */ (function () {
        function BetDto() {
        }
        return BetDto;
    }());
    Dto.BetDto = BetDto;
    /**
     * 限额
     */
    var LimitDto = /** @class */ (function () {
        function LimitDto() {
        }
        return LimitDto;
    }());
    Dto.LimitDto = LimitDto;
})(Dto || (Dto = {}));
//# sourceMappingURL=BetInfoDto.js.map