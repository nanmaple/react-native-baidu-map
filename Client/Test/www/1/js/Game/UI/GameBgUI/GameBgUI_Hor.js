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
    var GameBgHor = /** @class */ (function (_super) {
        __extends(GameBgHor, _super);
        function GameBgHor() {
            return _super.call(this, true) || this;
        }
        return GameBgHor;
    }(ScenePanel.GameBgBaseUI));
    ScenePanel.GameBgHor = GameBgHor;
})(ScenePanel || (ScenePanel = {}));
