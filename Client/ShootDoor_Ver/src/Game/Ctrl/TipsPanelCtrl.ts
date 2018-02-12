class TipsPanelCtrl {
    constructor() {
    }

    /**
     * 显示
     */
    public Show() {
        ScenePanel.GameUI.GetInstance().GetTipsPanel().ShowTip();
    }
}