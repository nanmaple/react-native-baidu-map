/**
 * BaseView主要用于写固定的UI渲染方法和不同功能的UI处理方法,动画
 * 命名规则：BasexxxView
 */
var BaseGameBgView = (function () {
    function BaseGameBgView() {
    }
    /**
     * 重置屏幕
     */
    BaseGameBgView.prototype.ResetScreen = function () {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.GameBgViewUI();
        this.ui.zOrder = 1;
        this.ui.cacheAs = "bitmap";
        Laya.stage.addChild(this.ui);
    };
    return BaseGameBgView;
}());
//# sourceMappingURL=BaseGameBgView.js.map