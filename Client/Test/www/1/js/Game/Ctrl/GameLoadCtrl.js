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
    var GameLoadCtrl = /** @class */ (function (_super) {
        __extends(GameLoadCtrl, _super);
        function GameLoadCtrl(onGameLoadSuccess) {
            var _this = _super.call(this) || this;
            _this.onGameLoadSuccess = onGameLoadSuccess;
            //加载游戏开资源
            _this.onLoaded();
            return _this;
        }
        /**
         * 开始加载游戏资源
         */
        GameLoadCtrl.prototype.onLoaded = function () {
            this.gameLoadScenes = new ScenePanel.GameLoadScenes();
            Laya.stage.addChild(this.gameLoadScenes);
            //加载游戏资源内容
            var dataArr = ScenePanel.LoadResourcesConfig;
            Laya.loader.load(dataArr, Laya.Handler.create(this, this.onLoadResource), Laya.Handler.create(this, this.onProgress, null, false));
        };
        /**
         * 加载游戏资源的进度回调
         * @param progress 进度
         */
        GameLoadCtrl.prototype.onProgress = function (progress) {
            this.gameLoadScenes.LoadProgress(progress);
        };
        /**
         * 游戏资源加载完成
         */
        GameLoadCtrl.prototype.onLoadResource = function () {
            this.onGameLoadSuccess.run();
        };
        return GameLoadCtrl;
    }(Laya.Sprite));
    ScenePanel.GameLoadCtrl = GameLoadCtrl;
})(ScenePanel || (ScenePanel = {}));
