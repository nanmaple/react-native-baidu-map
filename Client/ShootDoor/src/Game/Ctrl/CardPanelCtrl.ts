class CardPanelCtrl extends Laya.Sprite {
    private cardPanel: ScenePanel.CardPanel;   //扑克牌面板
    private footBallPanel: ScenePanel.FootBallPanel;  //足球动画面板
    private dataCards: Array<any>;  //牌数据
    private pokerNum: number = 3;  //扑克的数量
    private endGameHander: Laya.Handler;  //游戏结束回调
    private roundID:number;   //当前局号
    constructor(cardPanel: ScenePanel.CardPanel, footBallPanel: ScenePanel.FootBallPanel) {
        super();
        this.cardPanel = cardPanel;
        this.footBallPanel = footBallPanel;
    }
    /**
     * 游戏初始化
     * @param data 牌信息
     */
    public InitGame(data: any): void {
        this.roundID = data.RoundID;
        this.dataCards = [data.Cards.FirstCard, data.Cards.SecondCard, data.Cards.ThirdCard];
        for (let i: number = 0; i < this.pokerNum; i++) {
            this.cardPanel.pokerCards[i].InitPoker(this.dataCards[i]);
        }
    }
    /**
     * 游戏开始
     * @param data 游戏开始信息
     */
    public StartGame(data: Dto.StartGameDto): void {
        this.roundID = data.RoundID;
        this.dataCards = [data.FirstCard, data.SecondCard, null];
        for (let i: number = 0; i < this.pokerNum; i++) {
            this.cardPanel.pokerCards[i].ShowPoker(this.dataCards[i]);
        }
    }
    /**
     * 游戏结束
     * @param data 游戏结束结果信息
     */
    public EndGame(data: Dto.CardInfoDto): void {
        this.dataCards = [data.FirstCard, data.SecondCard, data.ThirdCard];
        //翻转第三张牌
        this.cardPanel.pokerCards[2].StartFlipPoker(data.ThirdCard);
        Laya.timer.once(2000, this, () => {
            for (let i: number = 0; i < this.pokerNum; i++) {
                this.cardPanel.pokerCards[i].HidePoker();
            }
            this.endGameHander.runWith({RoundID:this.roundID,Cards:data});
            //调用足球动画
            this.FootBallAnimation(this.dataCards);
        })
    }

    /**
     * 游戏结束回调
     * @param endGameHander 结束回调
     */
    public EndGameHander(endGameHander: Laya.Handler): void {
        this.endGameHander = endGameHander;
    }

    /**
     * 进球动画
     * @param data 扑克牌数组(三张牌)
     */
    private FootBallAnimation(data: Array<number>): void {
        //定义三张牌
        let First: number = Utils.Poker.GetNumber(data[0]);
        let Second: number = Utils.Poker.GetNumber(data[1]);
        let Third: number = Utils.Poker.GetNumber(data[2]);
        //射进
        if ((Third > First && Third < Second) || (Third < First && Third > Second)) {
            this.footBallPanel.ShootIn();
        }
        //射偏（左边）
        if ((Third < First && Third < Second && (First < Second || First == Second)) || (Third > First && Third > Second && First > Second)) {
            this.footBallPanel.ShootLeft();
        }
        //射偏（右边）
        if ((Third > First && Third > Second && (First < Second || First == Second)) || (Third < First && Third < Second && First > Second)) {
            this.footBallPanel.ShootRight();
        }
        //射到门柱左边
        if (Third == First && Third == Second) {
            this.footBallPanel.ShootGoalPost(2);
        }
        //射到门柱左边
        if (Third == First) {
            this.footBallPanel.ShootGoalPost(0);
        }
        //射到门柱右边
        if (Third == Second) {
            this.footBallPanel.ShootGoalPost(1);
        }
        
    }

}