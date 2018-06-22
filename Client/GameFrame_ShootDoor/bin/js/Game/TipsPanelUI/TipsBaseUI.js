/*
* name;
*/
var TipsBaseUI = /** @class */ (function () {
    function TipsBaseUI() {
        this.isShow = true;
    }
    /**
     * 切换横竖屏
     * @param isHor 是否为横屏
     */
    TipsBaseUI.prototype.ResetScreen = function (isVer) {
        Laya.stage.removeChild(this.ui);
        var language = new LanguageUtils.Language();
        var htmlD = new Laya.HTMLDivElement();
        htmlD.innerHTML = language.GetLanguage("GameTips");
        htmlD.style.width = 360;
        htmlD.style.height = 250;
        if (isVer) {
            this.ui = new ui.TipsVUI();
        }
        else {
            this.ui = new ui.TipsHUI();
        }
        //基础样式
        this.ui.zOrder = 7;
        this.ui.cacheAs = "bitmap";
        this.ui.visible = this.isShow;
        this.ui.tips.vScrollBarSkin = "";
        //ui事件绑定
        this.ui.closeBtn.on(Laya.Event.CLICK, this, this.CloseTip);
        this.ui.tips.addChild(htmlD);
        Laya.stage.addChild(this.ui);
    };
    return TipsBaseUI;
}());
//# sourceMappingURL=TipsBaseUI.js.map