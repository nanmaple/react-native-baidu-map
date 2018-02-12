namespace ScenePanel {
    export class HistoryPanelVer extends HistoryPanelBaseUI {
        constructor() {
            super(false);
            if (GameConfig.RatioType) {
                this.ui.left = 375 * (1 - GameConfig.LengthShort);
                this.ui.bottom = 0;
                this.ui.history.scale(GameConfig.LengthShort, 1);
            } else {
                this.ui.left = 0;
                this.ui.top = 1334 - 635 * GameConfig.ShortLength;
                this.ui.history.scale(1, GameConfig.ShortLength);
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
                    this.uiData.flyPoker[i].width = poker.width * GameConfig.LengthShort;
                    this.uiData.flyPoker[i].height = poker.height;
                    this.uiData.flyPoker[i].x = this.ui.x + poker.x * GameConfig.LengthShort;
                    this.uiData.flyPoker[i].y = this.ui.y + poker.y;
                } else {
                    this.uiData.flyPoker[i].width = poker.width;
                    this.uiData.flyPoker[i].height = poker.height * GameConfig.ShortLength;
                    this.uiData.flyPoker[i].x = this.ui.x + poker.x;
                    this.uiData.flyPoker[i].y = this.ui.y + poker.y * GameConfig.ShortLength;
                }
            }
            // }
            return this.uiData.flyPoker;
        }
    }

}