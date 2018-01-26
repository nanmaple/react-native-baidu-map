namespace ScenePanel {
    export class CardPanel extends ui.CardPanelUI {
        private pokerNum: number = 3;  //扑克的数量
        public pokerCards: Array<PokerEffect> = [];   //扑克类数组
        constructor() {
            super();
            let box: Laya.Box = <Laya.Box>this.goal;
            //循环创建扑克牌数组
            for (let i: number = 0; i < this.pokerNum; i++) {
                let poker: PokerEffect = new PokerEffect(box.getChildByName("poker" + i) as Laya.Image);
                this.pokerCards.push(poker);
            }
            if (GameConfig.RatioType) {
                this.goal.scale(GameConfig.HeightWidth, 1);
            } else {
                this.goal.scale(1, GameConfig.WidthHeight);
            }
        }
    }
}