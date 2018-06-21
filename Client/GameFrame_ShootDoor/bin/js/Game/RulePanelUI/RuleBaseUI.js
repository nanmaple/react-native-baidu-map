/*
* name;
*/
var RuleBaseUI = /** @class */ (function () {
    function RuleBaseUI() {
        /**
         * 显示/隐藏
         */
        this.isShow = false;
    }
    /**
     * 切换横竖屏
     * @param isHor 是否为横屏
     */
    RuleBaseUI.prototype.ResetScreen = function (isVer) {
        Laya.stage.removeChild(this.ui);
        var language = new LanguageUtils.Language();
        var htmlD = new Laya.HTMLDivElement();
        htmlD.innerHTML = language.GetLanguage("GameRule");
        htmlD.style.lineHeight = 40;
        htmlD.style.height = 2000;
        if (isVer) {
            this.ui = new ui.RuleVUI();
            htmlD.style.width = 660;
            if (GameConfig.RatioType) {
                this.ui.prompt.scale(GameConfig.LengthShort, 1);
            }
            else {
                this.ui.prompt.scale(1, GameConfig.ShortLength);
            }
        }
        else {
            this.ui = new ui.RuleHUI();
            htmlD.style.width = 940;
            if (GameConfig.RatioType) {
                this.ui.prompt.scale(1, GameConfig.LengthShort);
            }
            else {
                this.ui.prompt.scale(GameConfig.ShortLength, 1);
            }
        }
        //基础样式
        this.ui.zOrder = 8;
        this.ui.cacheAs = "bitmap";
        this.ui.rule.addChild(htmlD);
        this.ui.rule.vScrollBarSkin = "";
        this.ui.visible = this.isShow;
        var lang = language.GetLanguageType();
        if (lang == LanguageUtils.LanguageType.CH) {
            this.ui.title.skin = "ui/ruleTitle.png";
        }
        else {
            this.ui.title.skin = "ui/ruleTitle_EN.png";
        }
        //事件绑定
        this.ui.close.on(Laya.Event.CLICK, this, this.CloseRule);
        Laya.stage.addChild(this.ui);
    };
    return RuleBaseUI;
}());
//# sourceMappingURL=RuleBaseUI.js.map