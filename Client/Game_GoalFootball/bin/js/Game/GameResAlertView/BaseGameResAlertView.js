/**
 * BaseView主要用于写固定的UI渲染方法和不同功能的UI处理方法,动画
 * 命名规则：BasexxxView
 */
var BaseGameResAlertView = /** @class */ (function () {
    function BaseGameResAlertView() {
        /**
         * 是否显示
         */
        this.isShow = false;
        /**
         * 显示文字内容
         */
        this.resultTxt = null;
        /**
         * 失败进球提示皮肤
         */
        this.failTipSkin = "ui/failTip.png";
        /**
         * 成功进球提示皮肤
         */
        this.sucTipSkin = "ui/successTip.png";
    }
    /**
     * 重置屏幕
     */
    BaseGameResAlertView.prototype.ResetScreen = function () {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.GameResAlertViewUI();
        this.ui.zOrder = 6;
        this.ui.cacheAs = "bitmap";
        Laya.stage.addChild(this.ui);
        // this.ui.close.on(Laya.Event.CLICK, this, this.Hide);
        // this.ui.sure.on(Laya.Event.CLICK, this, this.Hide);
        this.ui.on(Laya.Event.CLICK, this, function () {
            return;
        });
        this.ui.visible = this.isShow;
    };
    /**
     * 隐藏提示框
     */
    BaseGameResAlertView.prototype.Hide = function () {
        var _this = this;
        Laya.timer.clear(this, this.Hide);
        Effect.AlertEffect.Hide(this.ui.prompt, Laya.Handler.create(this, function () {
            _this.isShow = false;
            _this.ui.visible = _this.isShow;
        }, null, false));
    };
    return BaseGameResAlertView;
}());
//# sourceMappingURL=BaseGameResAlertView.js.map