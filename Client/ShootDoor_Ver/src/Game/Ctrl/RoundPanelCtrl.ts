class RoundPanelCtrl {
    constructor() {
    }
    /**
     * 显示roundID
     * @param round 游戏RoundID
     */
    public SetGameRound(round): void {
        ScenePanel.GameUI.GetInstance().GetRoundPanel().SetGameRound(round);
    }
    /**
     * 更新游戏状态
     * @param state 游戏状态
     */
    public SetGameState(state): void {
        ScenePanel.GameUI.GetInstance().GetRoundPanel().SetGameState(state);
    }
}