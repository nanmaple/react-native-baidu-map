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
    var LoadingPanelVer = /** @class */ (function (_super) {
        __extends(LoadingPanelVer, _super);
        function LoadingPanelVer() {
            var _this = _super.call(this, false) || this;
            if (GameConfig.RatioType) {
                _this.ui.connectServer.scale(GameConfig.LengthShort, 1);
            }
            else {
                _this.ui.connectServer.scale(1, GameConfig.ShortLength);
            }
            return _this;
        }
        return LoadingPanelVer;
    }(ScenePanel.LoadingPanelBaseUI));
    ScenePanel.LoadingPanelVer = LoadingPanelVer;
})(ScenePanel || (ScenePanel = {}));
