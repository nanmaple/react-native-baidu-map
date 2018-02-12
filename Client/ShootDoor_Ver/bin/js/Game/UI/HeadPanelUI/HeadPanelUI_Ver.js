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
    var HeadPanelVer = /** @class */ (function (_super) {
        __extends(HeadPanelVer, _super);
        function HeadPanelVer() {
            var _this = _super.call(this, false) || this;
            if (GameConfig.RatioType) {
                _this.ui.btnGR.right = 375 * (1 - GameConfig.LengthShort) + 90 * GameConfig.LengthShort;
                _this.ui.btnRule.right = 375 * (1 - GameConfig.LengthShort);
                _this.ui.headBg.scale(GameConfig.LengthShort, 1);
                _this.ui.btnGR.scale(GameConfig.LengthShort, 1);
                _this.ui.btnRule.scale(GameConfig.LengthShort, 1);
            }
            else {
                _this.ui.headBg.scale(1, GameConfig.ShortLength);
                _this.ui.btnGR.scale(1, GameConfig.ShortLength);
                _this.ui.btnRule.scale(1, GameConfig.ShortLength);
            }
            return _this;
        }
        return HeadPanelVer;
    }(ScenePanel.HeadPanelBaseUI));
    ScenePanel.HeadPanelVer = HeadPanelVer;
})(ScenePanel || (ScenePanel = {}));
