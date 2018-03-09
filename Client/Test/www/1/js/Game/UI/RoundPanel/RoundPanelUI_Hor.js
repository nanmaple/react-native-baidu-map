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
    var RoundPanelHor = /** @class */ (function (_super) {
        __extends(RoundPanelHor, _super);
        function RoundPanelHor() {
            var _this = _super.call(this, true) || this;
            if (GameConfig.RatioType) {
                _this.ui.round.scale(1, GameConfig.LengthShort);
            }
            else {
                _this.ui.round.scale(GameConfig.ShortLength, 1);
            }
            return _this;
        }
        return RoundPanelHor;
    }(ScenePanel.RoundPanelBaseUI));
    ScenePanel.RoundPanelHor = RoundPanelHor;
})(ScenePanel || (ScenePanel = {}));
