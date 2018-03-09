var TipsPanelCtrl = /** @class */ (function () {
    function TipsPanelCtrl() {
    }
    /**
     * 显示
     */
    TipsPanelCtrl.prototype.Show = function () {
        ScenePanel.GameUI.GetInstance().GetTipsPanel().ShowTip();
    };
    return TipsPanelCtrl;
}());
