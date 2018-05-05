namespace ScenePanel {
    export class CardPanelVer extends CardPanelBaseUI {
        constructor() {
            super(false);
            if (GameConfig.RatioType) {
                this.ui.goal.scale(GameConfig.LengthShort, 1);
            } else {
                this.ui.goal.scale(1, GameConfig.ShortLength);
            }
        }

        /**
         * 获取牌面原始位置和宽高
         */
        public GetFlyPoker(isChange: boolean): any {
            // if (!this.flyPoker || isChange) {
            this.flyPoker = [{ x: 0, y: 0, width: 0, height: 0 }, { x: 0, y: 0, width: 0, height: 0 }, { x: 0, y: 0, width: 0, height: 0 }]
            //循环创建扑克牌数组
            for (let i: number = 0; i < this.pokerNum; i++) {
                let poker: Laya.Image = this.ui.goal.getChildByName("poker" + i) as Laya.Image;
                if (GameConfig.RatioType) {
                    this.flyPoker[i].width = poker.width * GameConfig.LengthShort;
                    this.flyPoker[i].height = poker.height;
                    this.flyPoker[i].x = 375 - this.ui.goal.width * GameConfig.LengthShort / 2 + poker.x * GameConfig.LengthShort;
                    this.flyPoker[i].y = poker.y + this.ui.goal.y;
                } else {
                    this.flyPoker[i].width = poker.width;
                    this.flyPoker[i].height = poker.height * GameConfig.ShortLength;
                    this.flyPoker[i].x = 94.5 + poker.x;
                    this.flyPoker[i].y = 539 - 155 * GameConfig.ShortLength;
                }
            }
            // }
            return this.flyPoker;
        }
    }
}