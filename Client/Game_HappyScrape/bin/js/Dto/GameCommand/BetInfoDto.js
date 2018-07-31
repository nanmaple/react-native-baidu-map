var Dto;
(function (Dto) {
    /**
     * 投注信息Dto
     */
    var BetInfoDto = (function () {
        function BetInfoDto() {
            /**
             * 投注金额
             */
            this.betAmount = null;
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