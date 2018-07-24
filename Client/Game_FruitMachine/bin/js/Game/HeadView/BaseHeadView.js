/**头部面板基类 */
var BaseHeadView = /** @class */ (function () {
    function BaseHeadView() {
        /**余额 */
        this.balance = 0;
        /**赚取 */
        this.winAmount = 0;
        /**静音 */
        this.muted = false;
    }
    /**
     * 重置屏幕
     */
    BaseHeadView.prototype.ResetScreen = function () {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.HeadViewUI();
        this.effect = new Effect.NumberGradualChangeEffect(this.ui.balance);
        this.ui.zOrder = 2;
        this.ui.cacheAs = "bitmap";
        Laya.stage.addChild(this.ui);
        this.Init();
    };
    /**初始化事件绑定 */
    BaseHeadView.prototype.Init = function () {
        this.ui.goHome.on(Laya.Event.CLICK, this, this.OnGoHome);
        this.ui.balanceBox.on(Laya.Event.CLICK, this, this.OnRefreshBalance);
        this.ui.btnSound.on(Laya.Event.CLICK, this, this.OnSetMute);
        this.ui.btnRule.on(Laya.Event.CLICK, this, this.OnShowRule);
        this.ui.btnPay.on(Laya.Event.CLICK, this, this.OnPay);
        this.ui.btnRecord.on(Laya.Event.CLICK, this, this.OnShowRecord);
    };
    return BaseHeadView;
}());
//# sourceMappingURL=BaseHeadView.js.map