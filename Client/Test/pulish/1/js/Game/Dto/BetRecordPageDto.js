var Dto;
(function (Dto) {
    var BetRecordPageDto = (function () {
        function BetRecordPageDto() {
            /**
             * 上一次拉取数据最后一条数据的id
             */
            this.LastId = null;
            /**
             * 每页个数
             */
            this.PageSize = 20;
        }
        return BetRecordPageDto;
    }());
    Dto.BetRecordPageDto = BetRecordPageDto;
})(Dto || (Dto = {}));
