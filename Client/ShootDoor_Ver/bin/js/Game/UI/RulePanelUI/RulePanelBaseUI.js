var ScenePanel;
(function (ScenePanel) {
    var RulePanelBaseUI = /** @class */ (function () {
        /**
         * 构造函数
         * @param isHor 是否横版
         */
        function RulePanelBaseUI(isHor) {
            var language = new LanguageUtils.Language();
            var htmlD = new Laya.HTMLDivElement();
            htmlD.innerHTML = language.GetLanguage("GameRule");
            htmlD.style.lineHeight = 40;
            htmlD.style.height = 2000;
            if (isHor) {
                this.ui = new ui.RulePanelUI();
                htmlD.style.width = 940;
            }
            else {
                this.ui = new ui.RulePanel_VerUI();
                htmlD.style.width = 660;
            }
            //将提示UI类缓存为静态图像
            this.ui.zOrder = 8;
            //将提示UI类缓存为静态图像
            this.ui.cacheAs = "bitmap";
            this.uiData = ScenePanel.RulePanelUIData.GetInstance();
            this.ui.visible = this.uiData.isShow;
            this.ui.rule.vScrollBarSkin = "";
            this.ui.close.on(Laya.Event.CLICK, this, this.CloseRule);
            this.ui.rule.addChild(htmlD);
            var lang = language.GetLanguageType();
            if (lang == LanguageUtils.LanguageType.CH) {
                this.ui.title.skin = "ui/ruleTitle.png";
            }
            else {
                this.ui.title.skin = "ui/ruleTitle_EN.png";
            }
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
