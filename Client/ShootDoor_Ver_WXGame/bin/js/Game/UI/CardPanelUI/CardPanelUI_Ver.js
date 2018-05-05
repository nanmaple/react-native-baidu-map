var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ScenePanel;
(function (ScenePanel) {
    var CardPanelVer = /** @class */ (function (_super) {
        __extends(CardPanelVer, _super);
        function CardPanelVer() {
            var _this = _super.call(this, false) || this;
            if (GameConfig.RatioType) {
                _this.ui.goal.scale(GameConfig.LengthShort, 1);
            }
            else {
                _this.ui.goal.scale(1, GameConfig.ShortLength);
            }
            return _this;
        }
        /**
         * 获取牌面原始位置和宽高
         */
        CardPanelVer.prototype.GetFlyPoker = function (isChange) {
            // if (!this.flyPoker || isChange) {
            this.flyPoker = [{ x: 0, y: 0, width: 0, height: 0 }, { x: 0, y: 0, width: 0, height: 0 }, { x: 0, y: 0, width: 0, height: 0 }];
            //循环创建扑克牌数组
            for (var i = 0; i < this.pokerNum; i++) {
                var poker = this.ui.goal.getChildByName("poker" + i);
                if (GameConfig.RatioType) {
                    this.flyPoker[i].width = poker.width * GameConfig.LengthShort;
                    this.flyPoker[i].height = poker.height;
                    this.flyPoker[i].x = 375 - this.ui.goal.width * GameConfig.LengthShort / 2 + poker.x * GameConfig.LengthShort;
                    this.flyPoker[i].y = poker.y + this.ui.goal.y;
                }
                else {
                    this.flyPoker[i].width = poker.width;
                    this.flyPoker[i].height = poker.height * GameConfig.ShortLength;
                    this.flyPoker[i].x = 94.5 + poker.x;
                    this.flyPoker[i].y = 539 - 155 * GameConfig.ShortLength;
                }
            }
            // }
            return this.flyPoker;
        };
        return CardPanelVer;
    }(ScenePanel.CardPanelBaseUI));
    ScenePanel.CardPanelVer = CardPanelVer;
})(ScenePanel || (ScenePanel = {}));
