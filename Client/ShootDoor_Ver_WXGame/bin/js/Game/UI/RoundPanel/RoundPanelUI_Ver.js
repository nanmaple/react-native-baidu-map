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
    var RoundPanelVer = /** @class */ (function (_super) {
        __extends(RoundPanelVer, _super);
        function RoundPanelVer() {
            var _this = _super.call(this, false) || this;
            if (GameConfig.RatioType) {
                // this.ui.left = 375 * (1 - GameConfig.LengthShort);
                // this.ui.round.scale(GameConfig.LengthShort, 1);
                _this.ui.roundLabel.scale(GameConfig.LengthShort, 1);
                _this.ui.gameRound.scale(GameConfig.LengthShort, 1);
                _this.ui.gameState.scale(GameConfig.LengthShort, 1);
            }
            else {
                _this.ui.round.scale(1, GameConfig.ShortLength);
            }
            return _this;
        }
        return RoundPanelVer;
    }(ScenePanel.RoundPanelBaseUI));
    ScenePanel.RoundPanelVer = RoundPanelVer;
})(ScenePanel || (ScenePanel = {}));
