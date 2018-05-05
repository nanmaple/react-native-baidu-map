namespace ScenePanel {
    export class CardPanelHor extends CardPanelBaseUI {
        constructor() {
            super(true);
            if (GameConfig.RatioType) {
                this.ui.goal.scale(1, GameConfig.LengthShort);
            } else {
                this.ui.goal.scale(GameConfig.ShortLength, 1);
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
                    this.flyPoker[i].x = 319.5 + poker.x;
                    this.flyPoker[i].y = poker.y * GameConfig.LengthShort + this.ui.goal.y;
                    this.flyPoker[i].width = poker.width;
                    this.flyPoker[i].height = poker.height * GameConfig.LengthShort;
                } else {
                    this.flyPoker[i].width = poker.width * GameConfig.ShortLength;
                    this.flyPoker[i].height = poker.height;
                    this.flyPoker[i].x = 687 - 367.5 * GameConfig.ShortLength + poker.x * GameConfig.ShortLength;
                    this.flyPoker[i].y = 160 + poker.y;
                }
            }
            // }
            return this.flyPoker;
        }
    }
}