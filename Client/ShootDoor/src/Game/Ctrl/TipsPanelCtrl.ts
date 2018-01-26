class TipsPanelCtrl {
    private statedPanel: ScenePanel.TipsPanel;
    constructor(statePanel: ScenePanel.TipsPanel) {
        this.statedPanel = statePanel;
    }

    /**
     * 显示
     */
    public Show(){
        this.statedPanel.ShowTip();
    }
}