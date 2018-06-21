var Dto;
(function (Dto) {
    var CardDto = /** @class */ (function () {
        function CardDto() {
            /**
             * 牌面数字
             */
            this.Card = null;
            /**
             * 牌面状态
             */
            this.Status = PokerStatus.Hide;
            this.BaseScale = new ScaleDto();
            /**
             * 缩放属性
             */
            this.Scale = new ScaleDto();
        }
        return CardDto;
    }());
    Dto.CardDto = CardDto;
    var ScaleDto = /** @class */ (function () {
        function ScaleDto() {
            this.x = 0;
            this.y = 0;
            this.scaleX = 1;
            this.scaleY = 1;
        }
        return ScaleDto;
    }());
    var PokerStatus;
    (function (PokerStatus) {
        PokerStatus[PokerStatus["Hide"] = 0] = "Hide";
        PokerStatus[PokerStatus["Show"] = 1] = "Show";
        PokerStatus[PokerStatus["Flip"] = 2] = "Flip";
    })(PokerStatus = Dto.PokerStatus || (Dto.PokerStatus = {}));
})(Dto || (Dto = {}));
//# sourceMappingURL=CardDto.js.map