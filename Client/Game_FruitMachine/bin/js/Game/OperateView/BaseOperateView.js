/**操作面板基类 */
var BaseOperateView = /** @class */ (function () {
    function BaseOperateView() {
    }
    /**
     * 重置屏幕
     */
    BaseOperateView.prototype.ResetScreen = function () {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.OperateViewUI();
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
        this.ui.startOrGather.on(Laya.Event.CLICK, this, this.OnStartOrGather);
        this.ui.clearOrSmall.on(Laya.Event.CLICK, this, this.OnClearOrSmall);
        this.ui.addAllOrBig.on(Laya.Event.CLICK, this, this.OnAddAllOrBig);
    };
    return BaseOperateView;
}());
//# sourceMappingURL=BaseOperateView.js.map