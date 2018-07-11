/*
* name;
*/
var BaseHeadView = /** @class */ (function () {
    function BaseHeadView() {
        /**余额 */
        this.balance = 0;
        /**赚取 */
        this.winAmount = 0;
    }
    /**
     * 重置屏幕
     */
    BaseHeadView.prototype.ResetScreen = function () {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.HeadViewUI();
        this.ui.zOrder = 1;
        // this.ui.cacheAs = "bitmap";
        Laya.stage.addChild(this.ui);
        this.Init();
    };
    /**初始化事件绑定 */
    BaseHeadView.prototype.Init = function () {
        this.ui.goHome.on(Laya.Event.CLICK, this, this.OnGoHome);
    };
    return BaseHeadView;
}());
//# sourceMappingURL=BaseHeadView.js.map