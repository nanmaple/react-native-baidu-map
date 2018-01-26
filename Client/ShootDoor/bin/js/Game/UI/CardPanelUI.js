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
    var CardPanel = (function (_super) {
        __extends(CardPanel, _super);
        function CardPanel() {
            var _this = _super.call(this) || this;
            _this.pokerNum = 3; //扑克的数量
            _this.pokerCards = []; //扑克类数组
            var box = _this.goal;
            //循环创建扑克牌数组
            for (var i = 0; i < _this.pokerNum; i++) {
                var poker = new PokerEffect(box.getChildByName("poker" + i));
                _this.pokerCards.push(poker);
            }
            if (GameConfig.RatioType) {
                _this.goal.scale(GameConfig.HeightWidth, 1);
            }
            else {
                _this.goal.scale(1, GameConfig.WidthHeight);
            }
            return _this;
        }
        return CardPanel;
    }(ui.CardPanelUI));
    ScenePanel.CardPanel = CardPanel;
})(ScenePanel || (ScenePanel = {}));
