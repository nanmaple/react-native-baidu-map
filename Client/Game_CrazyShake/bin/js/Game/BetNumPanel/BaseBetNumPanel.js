var BaseBetNumPanel = /** @class */ (function () {
    function BaseBetNumPanel() {
    }
    /**
     * 重置屏幕
     */
    BaseBetNumPanel.prototype.ResetScreen = function () {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.BetNumPanelUI();
        this.ui.zOrder = 5;
        this.ui.cacheAs = "bitmap";
        //设置组件位置
        this.ui.y = 872;
        Laya.stage.addChild(this.ui);
    };
    return BaseBetNumPanel;
}());
//# sourceMappingURL=BaseBetNumPanel.js.map