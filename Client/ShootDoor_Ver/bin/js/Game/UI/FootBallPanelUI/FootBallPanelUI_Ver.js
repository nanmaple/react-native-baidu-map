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
    var FootBallPanelVer = /** @class */ (function (_super) {
        __extends(FootBallPanelVer, _super);
        function FootBallPanelVer(goalW, goalH, goalCenterX, goalBottom) {
            var _this = _super.call(this, false) || this;
            _this.goalW = goalW;
            _this.goalH = goalH;
            _this.goalCenterX = goalCenterX;
            _this.goalBottom = goalBottom;
            if (GameConfig.RatioType) {
                _this.ui.football.scale(GameConfig.LengthShort, 1);
                _this.ui.shootInfo.scale(GameConfig.LengthShort, 1);
                _this.goalW = _this.goalW * GameConfig.LengthShort;
            }
            else {
                _this.ui.football.scale(1, GameConfig.ShortLength);
                _this.ui.shootInfo.scale(1, GameConfig.ShortLength);
                _this.goalH = _this.goalH * GameConfig.ShortLength;
            }
            return _this;
        }
        return FootBallPanelVer;
    }(ScenePanel.FootBallPanelBaseUI));
    ScenePanel.FootBallPanelVer = FootBallPanelVer;
})(ScenePanel || (ScenePanel = {}));
