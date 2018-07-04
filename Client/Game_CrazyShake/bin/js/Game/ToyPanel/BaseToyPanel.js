var BaseToyPanel = /** @class */ (function () {
    function BaseToyPanel() {
    }
    /**
     * 重置屏幕
     */
    BaseToyPanel.prototype.ResetScreen = function () {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.ToyPanelUI();
        this.ui.zOrder = 2;
        //设置组件位置
        this.ui.x = 175;
        this.ui.y = 370;
        Laya.stage.addChild(this.ui);
        ;
    };
    return BaseToyPanel;
}());
//# sourceMappingURL=BaseToyPanel.js.map