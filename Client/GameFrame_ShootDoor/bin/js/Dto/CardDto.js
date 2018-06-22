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
        /**
         * 隐藏
         */
        PokerStatus[PokerStatus["Hide"] = 0] = "Hide";
        /**
         * 正常显示
         */
        PokerStatus[PokerStatus["Show"] = 1] = "Show";
        /**
         * 反面
         */
        PokerStatus[PokerStatus["Obverse"] = 2] = "Obverse";
        /**
         * 翻转
         */
        PokerStatus[PokerStatus["Flip"] = 3] = "Flip";
        /**
         * 飞动
         */
        PokerStatus[PokerStatus["Fly"] = 4] = "Fly";
        /**
         * 缩小在历史面板
         */
        PokerStatus[PokerStatus["End"] = 5] = "End";
    })(PokerStatus = Dto.PokerStatus || (Dto.PokerStatus = {}));
})(Dto || (Dto = {}));
//# sourceMappingURL=CardDto.js.map