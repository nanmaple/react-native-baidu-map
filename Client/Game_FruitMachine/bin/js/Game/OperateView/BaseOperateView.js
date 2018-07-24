/**操作面板基类 */
var BaseOperateView = /** @class */ (function () {
    function BaseOperateView() {
        /**当前筹码对应列表位置 */
        this.currChip = 0;
        /**筹码列表 */
        this.chipArray = [];
    }
    /**
     * 重置屏幕
     */
    BaseOperateView.prototype.ResetScreen = function () {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.OperateViewUI();
        this.ui.clear.label = LanguageUtils.Language.Get('ClearBet');
        this.ui.start.label = LanguageUtils.Language.Get('GameStart');
        this.ui.addAll.label = LanguageUtils.Language.Get('AddAll');
        this.ui.zOrder = 2;
        this.ui.cacheAs = "bitmap";
        Laya.stage.addChild(this.ui);
        this.Init();
    };
    /**
     * 初始化事件绑定
     */
    BaseOperateView.prototype.Init = function () {
        this.ui.addChip.on(Laya.Event.CLICK, this, this.OnAddChip);
        this.ui.reduceChip.on(Laya.Event.CLICK, this, this.OnReduceChip);
        this.ui.start.on(Laya.Event.CLICK, this, this.OnStart);
        this.ui.clear.on(Laya.Event.CLICK, this, this.OnClear);
        this.ui.addAll.on(Laya.Event.CLICK, this, this.OnAddAll);
        this.ui.small.on(Laya.Event.CLICK, this, this.OnSmall);
        this.ui.big.on(Laya.Event.CLICK, this, this.OnBig);
        this.ui.increase.on(Laya.Event.CLICK, this, this.OnIncrease);
        this.ui.decrease.on(Laya.Event.CLICK, this, this.OnDecrease);
    };
    return BaseOperateView;
}());
//# sourceMappingURL=BaseOperateView.js.map