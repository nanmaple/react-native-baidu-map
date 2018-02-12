namespace ScenePanel {
    export abstract class CardPanelBaseUI {
        protected ui: ui.CardPanelUI | ui.CardPanel_VerUI;
        protected uiData: CardPanelUIData;
        protected pokerNum: number = 3;  //扑克的数量
        protected pokerCards: Array<PokerEffect> = [];   //扑克类数组
        protected flyPoker: any;
        /**
         * 构造函数
         * @param isHor 是否横版
         */
        constructor(isHor?: boolean) {
            if (isHor) {
                this.ui = new ui.CardPanelUI();
            } else {
                this.ui = new ui.CardPanel_VerUI();
            }
            this.ui.zOrder = 2;
            //循环创建扑克牌数组
            for (let i: number = 0; i < this.pokerNum; i++) {
                let poker: Laya.Image = this.ui.goal.getChildByName("poker" + i) as Laya.Image;
                let pokerEffect: PokerEffect = new PokerEffect(poker);
                this.pokerCards.push(pokerEffect);
            }
        }

        /**
         * 获取UI
         */
        public GetUI(): ui.CardPanelUI | ui.CardPanel_VerUI {
            return this.ui;
        }
        /**
         * 初始化扑克牌
         * @param data 
         * @param index 
         */
        public InitPoker(data: any, index: number): void {
            this.pokerCards[index].InitPoker(data);
        }
        /**
         * 显示扑克牌
         * @param data 
         * @param index 
         */
        public ShowPoker(data: any, index: number): void {
            this.pokerCards[index].ShowPoker(data);
        }
        /**
         * 开始翻转扑克牌
         * @param data 
         * @param index 
         */
        public StartFlipPoker(data: any, index: number): void {
            this.pokerCards[index].StartFlipPoker(data);
        }
        /**
         * 隐藏扑克牌
         * @param index 
         */
        public HidePoker(index: number): void {
            this.pokerCards[index].HidePoker();
        }
        /**
         * 获取球门宽度
         */
        public GetGoalWidth(): number {
            return this.ui.goal.width;
            
        }
        /**
         * 获取球门高度
         */
        public GetGoalHeight(): number {
            return this.ui.goal.height;
        }
        /**
         * 获取球门中心偏移量
         */
        public GetGoalCenterX(): number {
            return this.ui.goal.centerX;
        }
        /**
         * 获取球门距离底部位置
         */
        public GetGoalBottom(): number {
            return this.ui.goal.bottom;
        }

        /**
         * 获取牌面原始位置和宽高
         */
        abstract GetFlyPoker(isChange:boolean): any;
    }
}