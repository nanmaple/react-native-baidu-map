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
    var LoadingPanel = (function (_super) {
        __extends(LoadingPanel, _super);
        function LoadingPanel() {
            var _this = _super.call(this) || this;
            //将提示UI类缓存为静态图像
            _this.cacheAs = "bitmap";
            _this.centerX = 0;
            _this.centerY = 0;
            _this.visible = false;
            return _this;
        }
        /**
         * 显示loading
         */
        LoadingPanel.prototype.ShowLoading = function () {
            this.visible = true;
            this.loadingAni.play();
        };
        /**
         * 隐藏loading
         */
        LoadingPanel.prototype.HideLoading = function () {
            this.visible = false;
            this.loadingAni.stop();
        };
        return LoadingPanel;
    }(ui.LoadingUI));
    ScenePanel.LoadingPanel = LoadingPanel;
})(ScenePanel || (ScenePanel = {}));
