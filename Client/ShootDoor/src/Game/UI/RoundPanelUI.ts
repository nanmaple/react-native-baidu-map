namespace ScenePanel {
    export const BetStatus = {
        0: "等待开始",
        1: "正在投注",
        2: "停止投注",
        3: "正在结算",
        4: "已结算"
    }
    export class RoundPanel extends ui.RoundPanelUI {
        private currentState: number = 0;
        private isSettle: boolean = false;
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
        public SetGameRound(round: string): void {
            this.gameRound.text = round;
        }
        /**
         * 更新游戏状态
         * @param state 游戏状态
        */
        public SetGameState(state: number): void {
            if (state == 2) {
                this.isSettle = false;
            }

            if (state < 3) {
                this.currentState = state;
                this.gameState.text = BetStatus[state];
            } else if (state == 3) {
                this.currentState = state;
                if (this.isSettle) {
                    Laya.timer.once(500, this, () => {
                        this.gameState.text = BetStatus[4];
                    })
                }else{
                    this.gameState.text = BetStatus[state];
                }

            } else if (state == 4) {
                this.isSettle = true;
                if (this.currentState==3) {
                    this.gameState.text = BetStatus[state];
                }
            }
        }
    }
}