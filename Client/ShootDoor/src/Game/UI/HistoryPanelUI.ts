namespace ScenePanel {
    export class HistoryPanel extends ui.HistoryRecordUI {
        constructor() {
            super();
            this.cacheAs = "bitmap";
            this.left = 20;
            this.top= 100;
            if (GameConfig.RatioType) {
                this.history.scale(GameConfig.HeightWidth, 1);
            } else {
                this.history.scale(1, GameConfig.WidthHeight);
            }
        }
        /**
         * 设置投注限额
         * @param limit 
         */
        public SetLimit(limit: Dto.LimitDto): void {
            this.maxBetLabel.text = `最大额度:${limit.MaxBet}`;
            this.minBetLabel.text = `最小额度:${limit.MinBet}`;
        }
    }

}