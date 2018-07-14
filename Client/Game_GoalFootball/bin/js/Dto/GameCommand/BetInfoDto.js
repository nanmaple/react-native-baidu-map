var Dto;
(function (Dto) {
    /**
     * 投注信息Dto
     */
    var BetInfoDto = /** @class */ (function () {
        function BetInfoDto() {
            /**
             * 投注金额
             */
            this.betAmount = null;
            /**
             * 投注总金额
             */
            this.betTotalAmount = 0;
            /**
             * 道具使用总金额
             */
            this.propTotalAmount = 0;
            /**
             * 道具使用状态
             */
            this.propStatus = [0, 0, 0];
            /**
             * 最大投注
             */
            this.MaxBet = 0;
            /**
             * 最小投注
             */
            this.MinBet = 0;
        }
        return BetInfoDto;
    }());
    Dto.BetInfoDto = BetInfoDto;
})(Dto || (Dto = {}));
//# sourceMappingURL=BetInfoDto.js.map