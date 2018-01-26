class RoundPanelCtrl {
    private statedPanel: ScenePanel.RoundPanel;
    constructor(statePanel: ScenePanel.RoundPanel) {
        this.statedPanel = statePanel;
    }
    /**
     * 显示roundID
     * @param round 游戏RoundID
     */
    public SetGameRound(round): void {
        this.statedPanel.SetGameRound(round);
    }
    /**
     * 更新游戏状态
     * @param state 游戏状态
     */
    public SetGameState(state):void {
        this.statedPanel.SetGameState(state);
    }
}