var ScenePanel;
(function (ScenePanel) {
    var TipsPanelBaseUI = /** @class */ (function () {
        /**
         * 构造函数
         * @param isHor 是否横版
         */
        function TipsPanelBaseUI(isHor) {
            if (isHor) {
                this.ui = new ui.TipsPanelUI();
            }
            else {
                this.ui = new ui.TipsPanel_VerUI();
            }
            //将提示UI类缓存为静态图像
            this.ui.zOrder = 10;
            this.ui.cacheAs = "bitmap";
            this.ui.closeBtn.on(Laya.Event.CLICK, this, this.CloseTip);
            this.uiData = ScenePanel.TipsPanelUIData.GetInstance();
            this.ui.visible = this.uiData.isShow;
        }
        /**
         * 获取UI
         */
        TipsPanelBaseUI.prototype.GetUI = function () {
            return this.ui;
        };
        /**
         * 显示面板
         */
        TipsPanelBaseUI.prototype.ShowTip = function () {
            this.uiData.isShow = true;
            this.ui.visible = this.uiData.isShow;
        };
        /**
         * 关闭面板
         */
        TipsPanelBaseUI.prototype.CloseTip = function () {
            this.uiData.isShow = false;
            this.ui.visible = this.uiData.isShow;
        };
        return TipsPanelBaseUI;
    }());
    ScenePanel.TipsPanelBaseUI = TipsPanelBaseUI;
})(ScenePanel || (ScenePanel = {}));
