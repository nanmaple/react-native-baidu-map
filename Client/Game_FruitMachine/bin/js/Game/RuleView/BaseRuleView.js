/**规则面板基类 */
var BaseRuleView = /** @class */ (function () {
    function BaseRuleView() {
    }
    /**
     * 重置屏幕
     */
    BaseRuleView.prototype.ResetScreen = function () {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.RuleViewUI();
        this.ui.zOrder = 3;
        this.ui.cacheAs = "bitmap";
        Laya.stage.addChild(this.ui);
        this.Init();
    };
    /**初始化事件绑定 */
    BaseRuleView.prototype.Init = function () {
        this.ui.btnClose.on(Laya.Event.CLICK, this, this.OnCloseRule);
    };
    return BaseRuleView;
}());
//# sourceMappingURL=BaseRuleView.js.map