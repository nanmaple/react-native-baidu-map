var RoundPanelCtrl = /** @class */ (function () {
    function RoundPanelCtrl() {
    }
    /**
     * 显示roundID
     * @param round 游戏RoundID
     */
    RoundPanelCtrl.prototype.SetGameRound = function (round) {
        ScenePanel.GameUI.GetInstance().GetRoundPanel().SetGameRound(round);
    };
    /**
     * 更新游戏状态
     * @param state 游戏状态
     */
    RoundPanelCtrl.prototype.SetGameState = function (state) {
        ScenePanel.GameUI.GetInstance().GetRoundPanel().SetGameState(state);
    };
    return RoundPanelCtrl;
}());
