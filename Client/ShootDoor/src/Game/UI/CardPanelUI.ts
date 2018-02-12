namespace ScenePanel {
    export class CardPanel extends ui.CardPanelUI {
        private pokerNum: number = 3;  //扑克的数量
        public pokerArr: Laya.Sprite;
        public pokerCards: Array<PokerEffect> = [];   //扑克类数组
        public flyPoker: any;
        constructor() {
            super();
            this.pokerArr = <Laya.Sprite>this.goal;
            //循环创建扑克牌数组
            for (let i: number = 0; i < this.pokerNum; i++) {
                let poker: Laya.Image = this.goal.getChildByName("poker" + i) as Laya.Image;
                let pokerEffect: PokerEffect = new PokerEffect(poker);
                this.pokerCards.push(pokerEffect);
            }
            if (GameConfig.RatioType) {
                this.goal.scale(GameConfig.HeightWidth, 1);
            } else {
                this.goal.scale(1, GameConfig.WidthHeight);
            }
        }

        /**
         * 获取牌面原始位置和宽高
         */
        public GetFlyPoker(): void {
            if (!this.flyPoker) {
                this.flyPoker = [{ x: 0, y: 0, width: 0, height: 0 }, { x: 0, y: 0, width: 0, height: 0 }, { x: 0, y: 0, width: 0, height: 0 }]
                //循环创建扑克牌数组
                for (let i: number = 0; i < this.pokerNum; i++) {
                    let poker: Laya.Image = this.goal.getChildByName("poker" + i) as Laya.Image;
                    if (GameConfig.RatioType) {
                        this.flyPoker[i].x = poker.x * GameConfig.HeightWidth + this.goal.x;
                        this.flyPoker[i].y = poker.y + this.goal.y;
                        this.flyPoker[i].width = poker.width * GameConfig.HeightWidth;
                        this.flyPoker[i].height = poker.height;
                        
                    } else {
                        this.flyPoker[i].x = poker.x + this.goal.x;
                        this.flyPoker[i].y = poker.y + this.goal.y * GameConfig.WidthHeight;
                        this.flyPoker[i].width = poker.width;
                        this.flyPoker[i].height = poker.height * GameConfig.WidthHeight;
                    }
                }
            }
            return this.flyPoker;
        }
    }
}