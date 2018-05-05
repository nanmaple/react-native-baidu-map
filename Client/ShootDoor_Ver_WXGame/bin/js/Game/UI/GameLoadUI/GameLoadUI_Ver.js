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
    var GameLoadScenes_Ver = /** @class */ (function (_super) {
        __extends(GameLoadScenes_Ver, _super);
        function GameLoadScenes_Ver() {
            var _this = _super.call(this, false) || this;
            if (GameConfig.RatioType) {
                _this.ui.progressLabel.scale(GameConfig.LengthShort, 1);
            }
            else {
                _this.ui.progressLabel.scale(1, GameConfig.ShortLength);
            }
            return _this;
        }
        return GameLoadScenes_Ver;
    }(ScenePanel.GameLoadBaseUI));
    ScenePanel.GameLoadScenes_Ver = GameLoadScenes_Ver;
})(ScenePanel || (ScenePanel = {}));
