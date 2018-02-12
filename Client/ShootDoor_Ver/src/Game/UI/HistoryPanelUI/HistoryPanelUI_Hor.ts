namespace ScenePanel {
    export class HistoryPanelHor extends HistoryPanelBaseUI {
        constructor() {
            super(true);
            this.ui.left = 20;
            this.ui.top = 100;
            if (GameConfig.RatioType) {
                this.ui.history.scale(1, GameConfig.LengthShort);
            } else {
                this.ui.history.scale(GameConfig.ShortLength, 1);
            }
        }
        /**
         * 获取牌面结束位置和宽高
         */
        public GetEndFlyPoker(isChange: boolean): any {
            // if (!this.uiData.flyPoker || isChange) {
            this.uiData.flyPoker = [{ x: 0, y: 0, width: 0, height: 0 }, { x: 0, y: 0, width: 0, height: 0 }, { x: 0, y: 0, width: 0, height: 0 }]
            //循环创建扑克牌数组
            for (let i: number = 0; i < 3; i++) {
                let poker: Laya.Image = this.ui["pokerPos" + i] as Laya.Image;
                if (GameConfig.RatioType) {
                    this.uiData.flyPoker[i].width = poker.width;
                    this.uiData.flyPoker[i].height = poker.height * GameConfig.LengthShort;
                    this.uiData.flyPoker[i].x = poker.x + 20;
                    this.uiData.flyPoker[i].y = poker.y * GameConfig.LengthShort + 100;
                } else {
                    this.uiData.flyPoker[i].width = poker.width * GameConfig.ShortLength;
                    this.uiData.flyPoker[i].height = poker.height;
                    this.uiData.flyPoker[i].x = poker.x * GameConfig.ShortLength + 20;
                    this.uiData.flyPoker[i].y = poker.y + 100;
                }
            }
            // }
            return this.uiData.flyPoker;
        }
    }

}