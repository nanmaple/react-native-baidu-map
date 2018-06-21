var Dto;
(function (Dto) {
    var BetRecordPageDto = /** @class */ (function () {
        function BetRecordPageDto() {
            /**
             * 上一次拉取数据最后一条数据的id
             */
            this.LastId = null;
            /**
             * 每页个数
             */
            this.PageSize = 20;
            /**
             * 游戏ID
             */
            this.GameId = GameConfig.GameID;
        }
        ;
        return BetRecordPageDto;
    }());
    Dto.BetRecordPageDto = BetRecordPageDto;
})(Dto || (Dto = {}));
//# sourceMappingURL=BetRecordPageDto.js.map