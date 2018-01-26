var RoundPanelCtrl = /** @class */ (function () {
    function RoundPanelCtrl(statePanel) {
        this.statedPanel = statePanel;
    }
    /**
     * 显示roundID
     * @param round 游戏RoundID
     */
    RoundPanelCtrl.prototype.SetGameRound = function (round) {
        this.statedPanel.SetGameRound(round);
    };
    /**
     * 更新游戏状态
     * @param state 游戏状态
     */
    RoundPanelCtrl.prototype.SetGameState = function (state) {
        this.statedPanel.SetGameState(state);
    };
    return RoundPanelCtrl;
}());
