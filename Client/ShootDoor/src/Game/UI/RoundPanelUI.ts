namespace ScenePanel {
    export const BetStatus = {
        0: "等待开始",
        1: "正在投注",
        2: "结束投注",
        3: "游戏结算"
    }
    export class RoundPanel extends ui.RoundPanelUI {
        constructor() {
            super();
            if (GameConfig.RatioType) {
                this.round.scale(GameConfig.HeightWidth, 1);
            } else {
                this.round.scale(1, GameConfig.WidthHeight);
            }
        }
        /**
         * 显示roundID
         * @param round 游戏RoundID
         */
        public SetGameRound(round): void {
            this.gameRound.text = round;
        }
        /**
         * 更新游戏状态
         * @param state 游戏状态
        */
        public SetGameState(state): void {
            this.gameState.text = BetStatus[state];
        }
    }
}