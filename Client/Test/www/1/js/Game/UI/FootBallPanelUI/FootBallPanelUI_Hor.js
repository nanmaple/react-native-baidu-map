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
    var FootBallPanelHor = /** @class */ (function (_super) {
        __extends(FootBallPanelHor, _super);
        function FootBallPanelHor(goalW, goalH, goalCenterX, goalBottom) {
            var _this = _super.call(this, true) || this;
            _this.goalW = goalW;
            _this.goalH = goalH;
            _this.goalCenterX = goalCenterX;
            _this.goalBottom = goalBottom;
            if (GameConfig.RatioType) {
                _this.ui.football.scale(1, GameConfig.LengthShort);
                _this.ui.shootInfo.scale(1, GameConfig.LengthShort);
                _this.goalH = goalH * GameConfig.LengthShort;
            }
            else {
                _this.ui.football.scale(GameConfig.ShortLength, 1);
                _this.ui.shootInfo.scale(GameConfig.ShortLength, 1);
                _this.goalW = _this.goalW * GameConfig.ShortLength;
            }
            return _this;
        }
        return FootBallPanelHor;
    }(ScenePanel.FootBallPanelBaseUI));
    ScenePanel.FootBallPanelHor = FootBallPanelHor;
})(ScenePanel || (ScenePanel = {}));
