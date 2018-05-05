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
    var HistoryPanelHor = /** @class */ (function (_super) {
        __extends(HistoryPanelHor, _super);
        function HistoryPanelHor() {
            var _this = _super.call(this, true) || this;
            _this.ui.left = 20;
            _this.ui.top = 100;
            if (GameConfig.RatioType) {
                _this.ui.history.scale(1, GameConfig.LengthShort);
            }
            else {
                _this.ui.history.scale(GameConfig.ShortLength, 1);
            }
            return _this;
        }
        /**
         * 获取牌面结束位置和宽高
         */
        HistoryPanelHor.prototype.GetEndFlyPoker = function (isChange) {
            // if (!this.uiData.flyPoker || isChange) {
            this.uiData.flyPoker = [{ x: 0, y: 0, width: 0, height: 0 }, { x: 0, y: 0, width: 0, height: 0 }, { x: 0, y: 0, width: 0, height: 0 }];
            //循环创建扑克牌数组
            for (var i = 0; i < 3; i++) {
                var poker = this.ui["pokerPos" + i];
                if (GameConfig.RatioType) {
                    this.uiData.flyPoker[i].width = poker.width;
                    this.uiData.flyPoker[i].height = poker.height * GameConfig.LengthShort;
                    this.uiData.flyPoker[i].x = poker.x + 20;
                    this.uiData.flyPoker[i].y = poker.y * GameConfig.LengthShort + 100;
                }
                else {
                    this.uiData.flyPoker[i].width = poker.width * GameConfig.ShortLength;
                    this.uiData.flyPoker[i].height = poker.height;
                    this.uiData.flyPoker[i].x = poker.x * GameConfig.ShortLength + 20;
                    this.uiData.flyPoker[i].y = poker.y + 100;
                }
            }
            // }
            return this.uiData.flyPoker;
        };
        return HistoryPanelHor;
    }(ScenePanel.HistoryPanelBaseUI));
    ScenePanel.HistoryPanelHor = HistoryPanelHor;
})(ScenePanel || (ScenePanel = {}));
