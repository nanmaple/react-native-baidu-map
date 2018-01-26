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
    var TimePanel = (function (_super) {
        __extends(TimePanel, _super);
        function TimePanel() {
            var _this = _super.call(this) || this;
            //创建时间效果
            _this.timeEffect = new TimeEffect(_this.time);
            _this.top = 105;
            if (GameConfig.RatioType) {
                _this.right = 20 + 34 * GameConfig.HeightWidth;
                _this.scale(GameConfig.HeightWidth, 1);
            }
            else {
                _this.right = 54;
                _this.scale(1, GameConfig.WidthHeight);
            }
            return _this;
        }
        return TimePanel;
    }(ui.TimeUI));
    ScenePanel.TimePanel = TimePanel;
})(ScenePanel || (ScenePanel = {}));
