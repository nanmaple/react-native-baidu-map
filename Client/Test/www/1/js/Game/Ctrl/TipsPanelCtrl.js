var TipsPanelCtrl = /** @class */ (function () {
    function TipsPanelCtrl(statePanel) {
        this.statedPanel = statePanel;
    }
    /**
     * 显示
     */
    TipsPanelCtrl.prototype.Show = function () {
        this.statedPanel.ShowTip();
    };
    return TipsPanelCtrl;
}());
