/**筹码面板基类 */
var BaseChipView = /** @class */ (function () {
    function BaseChipView() {
        /**循环标记 */
        this.loopMark = false;
        /**更改状态 加/减 */
        this.type = true;
    }
    /**
     * 重置屏幕
     */
    BaseChipView.prototype.ResetScreen = function () {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.ChipViewUI();
        this.ui.zOrder = 1;
        // this.ui.cacheAs = "bitmap";
        Laya.stage.addChild(this.ui);
        this.Init();
    };
    /**
     * 初始化事件绑定
    */
    BaseChipView.prototype.Init = function () {
        this.ui.btnleft.on(Laya.Event.CLICK, this, this.OnSetChip, [this.smallFast]);
        this.ui.btnright.on(Laya.Event.CLICK, this, this.OnSetChip, [this.bigFast]);
        this.ui.improve.on(Laya.Event.MOUSE_DOWN, this, this.OnMouseDown, [true]);
        this.ui.improve.on(Laya.Event.MOUSE_UP, this, this.OnMouseUp);
        this.ui.improve.on(Laya.Event.MOUSE_OUT, this, this.OnMouseUp);
        this.ui.reduce.on(Laya.Event.MOUSE_DOWN, this, this.OnMouseDown, [false]);
        this.ui.reduce.on(Laya.Event.MOUSE_UP, this, this.OnMouseUp);
        this.ui.reduce.on(Laya.Event.MOUSE_OUT, this, this.OnMouseUp);
    };
    return BaseChipView;
}());
//# sourceMappingURL=BaseChipView.js.map