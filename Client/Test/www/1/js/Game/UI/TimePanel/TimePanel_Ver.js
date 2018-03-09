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
    var TimePanelVer = /** @class */ (function (_super) {
        __extends(TimePanelVer, _super);
        function TimePanelVer() {
            var _this = _super.call(this, false) || this;
            if (GameConfig.RatioType) {
                _this.ui.scale(GameConfig.LengthShort, 1);
            }
            else {
                _this.ui.scale(1, GameConfig.ShortLength);
            }
            return _this;
        }
        return TimePanelVer;
    }(ScenePanel.TimePanelBaseUI));
    ScenePanel.TimePanelVer = TimePanelVer;
})(ScenePanel || (ScenePanel = {}));
