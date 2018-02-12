var ScenePanel;
(function (ScenePanel) {
    var GameLoadBaseUI = /** @class */ (function () {
        /**
         * 构造函数
         * @param isHor 是否横版
         */
        function GameLoadBaseUI(isHor) {
            if (isHor) {
                this.ui = new ui.GameLoadUI();
            }
            else {
                this.ui = new ui.GameLoad_VerUI();
            }
            this.ui.cacheAs = "bitmap";
            this.uiData = ScenePanel.GameLoadUIData.GetInstance();
            this.ui.progressLabel.text = this.uiData.progress;
        }
        GameLoadBaseUI.prototype.GetUI = function () {
            return this.ui;
        };
        //处理进度条
        GameLoadBaseUI.prototype.LoadProgress = function (progress) {
            this.uiData.progress = Math.round(progress * 100) + "%";
            this.ui.progressLabel.text = this.uiData.progress;
        };
        GameLoadBaseUI.prototype.LoadError = function (error) {
            Laya.Browser.window.alert("用户登录错误");
        };
        return GameLoadBaseUI;
    }());
    ScenePanel.GameLoadBaseUI = GameLoadBaseUI;
})(ScenePanel || (ScenePanel = {}));
