var BaseFunReChargePanel = /** @class */ (function () {
    function BaseFunReChargePanel() {
    }
    /**
     * 重置屏幕
     */
    BaseFunReChargePanel.prototype.ResetScreen = function () {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.FunRechargePanelUI();
        this.ui.zOrder = 3;
        this.ui.cacheAs = "bitmap";
        Laya.stage.addChild(this.ui);
    };
    return BaseFunReChargePanel;
}());
//# sourceMappingURL=BaseFunRechargePanel.js.map