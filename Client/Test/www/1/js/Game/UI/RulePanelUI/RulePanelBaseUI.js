var ScenePanel;
(function (ScenePanel) {
    var RulePanelBaseUI = /** @class */ (function () {
        /**
         * 构造函数
         * @param isHor 是否横版
         */
        function RulePanelBaseUI(isHor) {
            if (isHor) {
                this.ui = new ui.RulePanelUI();
            }
            else {
                this.ui = new ui.RulePanel_VerUI();
            }
            //将提示UI类缓存为静态图像
            this.ui.zOrder = 8;
            //将提示UI类缓存为静态图像
            this.ui.cacheAs = "bitmap";
            this.uiData = ScenePanel.RulePanelUIData.GetInstance();
            this.ui.visible = this.uiData.isShow;
            this.ui.txt.vScrollBarSkin = "";
            this.ui.close.on(Laya.Event.CLICK, this, this.CloseRule);
        }
        /**
         * 获取UI
         */
        RulePanelBaseUI.prototype.GetUI = function () {
            return this.ui;
        };
        /**
         * 显示游戏规则
         */
        RulePanelBaseUI.prototype.ShowRule = function () {
            this.uiData.isShow = true;
            this.ui.visible = this.uiData.isShow;
        };
        /**
         * 关闭游戏规则
         */
        RulePanelBaseUI.prototype.CloseRule = function () {
            this.uiData.isShow = false;
            this.ui.visible = this.uiData.isShow;
            this.ClearTextureRes();
        };
        /**
         * 销毁投注面板资源，释放内存
         */
        RulePanelBaseUI.prototype.ClearTextureRes = function () {
            Laya.loader.clearTextureRes("ui/mask.png");
            Laya.loader.clearTextureRes("ui/bg_record.png");
            Laya.loader.clearTextureRes("ui/recordLine.png");
        };
        return RulePanelBaseUI;
    }());
    ScenePanel.RulePanelBaseUI = RulePanelBaseUI;
})(ScenePanel || (ScenePanel = {}));
