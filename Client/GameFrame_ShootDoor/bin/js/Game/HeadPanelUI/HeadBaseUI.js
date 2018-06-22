/*
* name;
*/
var HeadBaseUI = /** @class */ (function () {
    function HeadBaseUI() {
    }
    /**
     * 切换横竖屏
     * @param isHor 是否为横屏
     */
    HeadBaseUI.prototype.ResetScreen = function (isVer) {
        Laya.stage.removeChild(this.ui);
        if (isVer) {
            this.ui = new ui.HeadVUI();
        }
        else {
            this.ui = new ui.HeadHUI();
        }
        //基础样式
        this.ui.zOrder = 5;
        this.ui.cacheAs = "bitmap";
        var language = new LanguageUtils.Language();
        var lang = language.GetLanguageType();
        if (lang == LanguageUtils.LanguageType.CH) {
            this.ui.attention.skin = "ui/attention.png";
        }
        else {
            this.ui.attention.skin = "ui/attention_EN.png";
        }
        //ui事件绑定
        this.ui.btnRule.on(Laya.Event.CLICK, this, this.onRuleHandler);
        this.ui.btnGR.on(Laya.Event.CLICK, this, this.onGRHandler);
        this.ui.attention.on(Laya.Event.CLICK, this, this.onAttention);
        this.ui.money.on(Laya.Event.CLICK, this, this.OnBalanceHander);
        Laya.stage.addChild(this.ui);
        this.GetInfo();
    };
    HeadBaseUI.prototype.GetInfo = function () {
        var data = new Dto.BroadcastDto();
        data.Value = '';
        data.Type = Enum.ListenUIEnum.GetMemberInfo;
        var event = new CustomEvent("GameUI", { detail: data });
        document.dispatchEvent(event);
    };
    return HeadBaseUI;
}());
//# sourceMappingURL=HeadBaseUI.js.map