namespace ScenePanel {
    export const BetStatus: any = {
        0: "等待开始",
        1: "正在投注",
        2: "停止投注",
        3: "正在结算",
        4: "已结算"
    }
    export abstract class RoundPanelBaseUI {
        protected ui: ui.RoundPanelUI | ui.RoundPanel_VerUI;
        protected uiData: RoundPanelUIData;
        public currentState: number = 0;
        public isSettle: boolean = false;
        /**
         * 构造函数
         * @param isHor 是否横版
         */
        constructor(isHor?: boolean) {
            if (isHor) {
                this.ui = new ui.RoundPanelUI();
            } else {
                this.ui = new ui.RoundPanel_VerUI();
            }
            this.ui.zOrder = 2;
            this.ui.cacheAs = "bitmap";
        }

        public GetUI(): ui.RoundPanelUI | ui.RoundPanel_VerUI {
            return this.ui;
        }
        /**
         * 显示roundID
         * @param round 游戏RoundID
         */
        public SetGameRound(round: string): void {
            this.ui.gameRound.text = round;
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
                this.ui.gameState.text = BetStatus[state];
            } else if (state == 3) {
                this.currentState = state;
                if (this.isSettle) {
                    Laya.timer.once(500, this, () => {
                        this.ui.gameState.text = BetStatus[4];
                    })
                } else {
                    this.ui.gameState.text = BetStatus[state];
                }

            } else if (state == 4) {
                this.isSettle = true;
                if (this.currentState == 3) {
                    this.ui.gameState.text = BetStatus[state];
                }
            }
        }
    }
}