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
var Scene;
(function (Scene) {
    var GameLoadScenes = /** @class */ (function (_super) {
        __extends(GameLoadScenes, _super);
        function GameLoadScenes() {
            var _this = _super.call(this) || this;
            _this.cacheAs = "bitmap";
            _this.btnStart.visible = false;
            _this.progressBar.visible = true;
            //计算缩放比例 舞台宽高与设计图宽高比
            var scaleX = Laya.stage.width / 667;
            var scaleY = Laya.stage.height / 375;
            //平铺背景图为舞台宽高
            _this.scale(scaleX, scaleY);
            return _this;
        }
        /**
         * 开始游戏
         */
        GameLoadScenes.prototype.onStartGame = function () {
            this.startGame.run();
        };
        //处理进度条
        GameLoadScenes.prototype.LoadProgress = function (progress) {
            this.progress.value = progress;
            this.progressLabel.text = Math.round(progress * 100) + "%";
            //加载完成
            if (progress == 1) {
                this.btnStart.visible = true;
                this.progressBar.visible = false;
                this.btnStart.on(Laya.Event.CLICK, this, this.onStartGame);
            }
        };
        /**
         * 绑定事件
         * @param startGameHandler 开始按钮绑定回调
         * @param weChatLoginHandler 微信登录绑定回调
         */
        GameLoadScenes.prototype.BindHandler = function (startGameHandler) {
            this.startGame = startGameHandler;
        };
        return GameLoadScenes;
    }(ui.GameLoadUI));
    Scene.GameLoadScenes = GameLoadScenes;
})(Scene || (Scene = {}));
//# sourceMappingURL=UI.js.map