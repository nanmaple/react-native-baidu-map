var Dto;
(function (Dto) {
    var BetRecordParamsDto = (function () {
        function BetRecordParamsDto() {
            /**
             * 上一次拉取数据最后一条数据的id
             */
            this.LastId = null;
            /**
             * 每页个数
             */
            this.PageSize = 10;
        }
        return BetRecordParamsDto;
    }());
    Dto.BetRecordParamsDto = BetRecordParamsDto;
})(Dto || (Dto = {}));
//# sourceMappingURL=BetRecordParamsDto.js.map