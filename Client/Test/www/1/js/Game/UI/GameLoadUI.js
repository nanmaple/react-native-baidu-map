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
    var GameLoadScenes = /** @class */ (function (_super) {
        __extends(GameLoadScenes, _super);
        function GameLoadScenes() {
            var _this = _super.call(this) || this;
            _this.cacheAs = "bitmap";
            return _this;
        }
        //处理进度条
        GameLoadScenes.prototype.LoadProgress = function (progress) {
            this.progressLabel.text = Math.round(progress * 100) + "%";
        };
        GameLoadScenes.prototype.LoadError = function (error) {
            Laya.Browser.window.alert("用户登录错误");
            // Laya.Browser.window.location.href = GameConfig.GetDomainUrl(Utils.Url.GetQuery("parentid"));
        };
        return GameLoadScenes;
    }(ui.GameLoadUI));
    ScenePanel.GameLoadScenes = GameLoadScenes;
})(ScenePanel || (ScenePanel = {}));
