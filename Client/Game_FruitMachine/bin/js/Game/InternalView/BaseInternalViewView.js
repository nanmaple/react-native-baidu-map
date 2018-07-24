/**中心信息面板基类 */
var BaseInternalView = /** @class */ (function () {
    function BaseInternalView() {
    }
    /**
     * 重置屏幕
     */
    BaseInternalView.prototype.ResetScreen = function () {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.InternalViewUI();
        this.ui.currentbet.text = LanguageUtils.Language.Get('CurrentCoin');
        this.ui.zOrder = 2;
        this.ui.cacheAs = "bitmap";
        Laya.stage.addChild(this.ui);
    };
    return BaseInternalView;
}());
//# sourceMappingURL=BaseInternalViewView.js.map