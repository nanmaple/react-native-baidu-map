/*
* name;
*/
var BaseInternalView = /** @class */ (function () {
    function BaseInternalView() {
    }
    /**
     * 重置屏幕
     */
    BaseInternalView.prototype.ResetScreen = function () {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.InternalViewUI();
        this.ui.zOrder = 1;
        // this.ui.cacheAs = "bitmap";
        Laya.stage.addChild(this.ui);
    };
    return BaseInternalView;
}());
//# sourceMappingURL=BaseInternalViewView.js.map