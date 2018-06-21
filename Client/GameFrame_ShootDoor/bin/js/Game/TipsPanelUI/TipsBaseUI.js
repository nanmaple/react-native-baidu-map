/*
* name;
*/
var TipsBaseUI = /** @class */ (function () {
    function TipsBaseUI() {
        this.isShow = false;
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
            if (GameConfig.RatioType) {
                this.ui.tipmsg.scale(GameConfig.LengthShort, 1);
            }
            else {
                this.ui.tipmsg.scale(1, GameConfig.ShortLength);
            }
        }
        else {
            this.ui = new ui.TipsHUI();
            if (GameConfig.RatioType) {
                this.ui.tipmsg.scale(1, GameConfig.LengthShort);
            }
            else {
                this.ui.tipmsg.scale(GameConfig.ShortLength, 1);
            }
        }
        //基础样式
        this.ui.zOrder = 10;
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