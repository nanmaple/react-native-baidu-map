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
            _this.pokerArr = _this.goal;
            //循环创建扑克牌数组
            for (var i = 0; i < _this.pokerNum; i++) {
                var poker = _this.goal.getChildByName("poker" + i);
                var pokerEffect = new PokerEffect(poker);
                _this.pokerCards.push(pokerEffect);
            }
            if (GameConfig.RatioType) {
                _this.goal.scale(GameConfig.HeightWidth, 1);
            }
            else {
                _this.goal.scale(1, GameConfig.WidthHeight);
            }
            return _this;
        }
        /**
         * 获取牌面原始位置和宽高
         */
        CardPanel.prototype.GetFlyPoker = function () {
            if (!this.flyPoker) {
                this.flyPoker = [{ x: 0, y: 0, width: 0, height: 0 }, { x: 0, y: 0, width: 0, height: 0 }, { x: 0, y: 0, width: 0, height: 0 }];
                //循环创建扑克牌数组
                for (var i = 0; i < this.pokerNum; i++) {
                    var poker = this.goal.getChildByName("poker" + i);
                    if (GameConfig.RatioType) {
                        this.flyPoker[i].x = poker.x * GameConfig.HeightWidth + this.goal.x;
                        this.flyPoker[i].y = poker.y + this.goal.y;
                        this.flyPoker[i].width = poker.width * GameConfig.HeightWidth;
                        this.flyPoker[i].height = poker.height;
                    }
                    else {
                        this.flyPoker[i].x = poker.x + this.goal.x;
                        this.flyPoker[i].y = poker.y + this.goal.y * GameConfig.WidthHeight;
                        this.flyPoker[i].width = poker.width;
                        this.flyPoker[i].height = poker.height * GameConfig.WidthHeight;
                    }
                }
            }
            return this.flyPoker;
        };
        return CardPanel;
    }(ui.CardPanelUI));
    ScenePanel.CardPanel = CardPanel;
})(ScenePanel || (ScenePanel = {}));
