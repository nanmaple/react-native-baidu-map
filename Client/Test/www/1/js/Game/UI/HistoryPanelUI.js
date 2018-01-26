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
    var HistoryPanel = /** @class */ (function (_super) {
        __extends(HistoryPanel, _super);
        function HistoryPanel() {
            var _this = _super.call(this) || this;
            _this.cacheAs = "bitmap";
            _this.left = 20;
            _this.top = 100;
            if (GameConfig.RatioType) {
                _this.history.scale(GameConfig.HeightWidth, 1);
            }
            else {
                _this.history.scale(1, GameConfig.WidthHeight);
            }
            return _this;
        }
        /**
         * 设置投注限额
         * @param limit
         */
        HistoryPanel.prototype.SetLimit = function (limit) {
            this.maxBetLabel.text = "\u6700\u5927\u989D\u5EA6:" + limit.MaxBet;
            this.minBetLabel.text = "\u6700\u5C0F\u989D\u5EA6:" + limit.MinBet;
        };
        return HistoryPanel;
    }(ui.HistoryRecordUI));
    ScenePanel.HistoryPanel = HistoryPanel;
})(ScenePanel || (ScenePanel = {}));
