var BaseBetPanel = /** @class */ (function () {
    function BaseBetPanel() {
    }
    /**
     * 重置屏幕
     */
    BaseBetPanel.prototype.ResetScreen = function () {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.BetPanelUI();
        this.ui.zOrder = 6;
        this.ui.cacheAs = "bitmap";
        //设置组件位置
        this.ui.y = 1019;
        Laya.stage.addChild(this.ui);
        this.OnButton();
    };
    /**
     * 绑定按钮
     */
    BaseBetPanel.prototype.OnButton = function () {
        this.ui.littleBtn.on(Laya.Event.CLICK, this, function () { });
        this.ui.jaguarBtn.on(Laya.Event.CLICK, this, function () { });
        this.ui.bigBtn.on(Laya.Event.CLICK, this, function () { });
    };
    return BaseBetPanel;
}());
//# sourceMappingURL=BaseBetPanel.js.map