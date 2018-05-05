var ScenePanel;
(function (ScenePanel) {
    var GameBgBaseUI = /** @class */ (function () {
        /**
         * 构造函数
         * @param isHor 是否横版
         */
        function GameBgBaseUI(isHor) {
            if (isHor) {
                this.ui = new ui.GameBgUI();
            }
            else {
                this.ui = new ui.GameBg_VerUI();
            }
            this.ui.zOrder = 1;
            this.ui.cacheAs = "bitmap";
        }
        /**
         * 获取UI
         */
        GameBgBaseUI.prototype.GetUI = function () {
            return this.ui;
        };
        return GameBgBaseUI;
    }());
    ScenePanel.GameBgBaseUI = GameBgBaseUI;
})(ScenePanel || (ScenePanel = {}));
