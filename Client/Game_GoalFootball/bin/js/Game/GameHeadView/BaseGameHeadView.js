/**
 * BaseView主要用于写固定的UI渲染方法和不同功能的UI处理方法,动画
 * 命名规则：BasexxxView
 */
var BaseGameHeadView = /** @class */ (function () {
    function BaseGameHeadView() {
        /**
         * 用户余额
         */
        this.balance = 0;
    }
    /**
     * 重置屏幕
     */
    BaseGameHeadView.prototype.ResetScreen = function () {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.GameHeadViewUI();
        this.ui.zOrder = 4;
        Laya.stage.addChild(this.ui);
        this.moneyEffect = new NumberGradualChangeEffect(this.ui.balance);
    };
    /**
     * 设置用户余额
     * @param balance
     */
    BaseGameHeadView.prototype.SetBalance = function (balance) {
        // this.ui.balance.text = String(balance);
        this.moneyEffect.start(balance);
    };
    /**
     * 获取用户余额
     */
    BaseGameHeadView.prototype.GetBalance = function () {
        var balance = this.ui.balance.text;
        return balance;
    };
    return BaseGameHeadView;
}());
//# sourceMappingURL=BaseGameHeadView.js.map