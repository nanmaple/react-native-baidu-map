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
    var CardPanelHor = /** @class */ (function (_super) {
        __extends(CardPanelHor, _super);
        function CardPanelHor() {
            var _this = _super.call(this, true) || this;
            if (GameConfig.RatioType) {
                _this.ui.goal.scale(1, GameConfig.LengthShort);
            }
            else {
                _this.ui.goal.scale(GameConfig.ShortLength, 1);
            }
            return _this;
        }
        /**
        * 获取牌面原始位置和宽高
        */
        CardPanelHor.prototype.GetFlyPoker = function (isChange) {
            // if (!this.flyPoker || isChange) {
            this.flyPoker = [{ x: 0, y: 0, width: 0, height: 0 }, { x: 0, y: 0, width: 0, height: 0 }, { x: 0, y: 0, width: 0, height: 0 }];
            //循环创建扑克牌数组
            for (var i = 0; i < this.pokerNum; i++) {
                var poker = this.ui.goal.getChildByName("poker" + i);
                if (GameConfig.RatioType) {
                    this.flyPoker[i].x = 319.5 + poker.x;
                    this.flyPoker[i].y = poker.y * GameConfig.LengthShort + this.ui.goal.y;
                    this.flyPoker[i].width = poker.width;
                    this.flyPoker[i].height = poker.height * GameConfig.LengthShort;
                }
                else {
                    this.flyPoker[i].width = poker.width * GameConfig.ShortLength;
                    this.flyPoker[i].height = poker.height;
                    this.flyPoker[i].x = 687 - 367.5 * GameConfig.ShortLength + poker.x * GameConfig.ShortLength;
                    this.flyPoker[i].y = 160 + poker.y;
                }
            }
            // }
            return this.flyPoker;
        };
        return CardPanelHor;
    }(ScenePanel.CardPanelBaseUI));
    ScenePanel.CardPanelHor = CardPanelHor;
})(ScenePanel || (ScenePanel = {}));
