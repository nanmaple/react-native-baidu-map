class CardPanelCtrl extends Laya.Sprite {
    private gameUI: ScenePanel.GameUI;
    private cardPanel: ScenePanel.CardPanelHor | ScenePanel.CardPanelVer;   //扑克牌面板
    private footBallPanel: ScenePanel.FootBallPanelHor | ScenePanel.FootBallPanelVer;  //足球动画面板
    private dataCards: Array<any>;  //牌数据
    private pokerNum: number = 3;  //扑克的数量
    private endGameHander: Laya.Handler;  //游戏结束回调
    private roundID:string;   //当前局号
    constructor() {
        super();
        this.gameUI = ScenePanel.GameUI.GetInstance();
    }
    /**
     * 游戏初始化
     * @param data 牌信息
     */
    public InitGame(data: any): void {
        this.roundID = data.RoundID;
        if(data.Cards == null || data.BetTime == 0){
            return;
        }else{
            this.dataCards = [data.Cards.FirstCard, data.Cards.SecondCard, data.Cards.ThirdCard];
            for (let i: number = 0; i < this.pokerNum; i++) {
                this.gameUI.GetCardPanel().InitPoker(this.dataCards[i],i);
            }
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
            this.gameUI.GetCardPanel().ShowPoker(this.dataCards[i],i);
        }
    }
    /**
     * 游戏结束
     * @param data 游戏结束结果信息
     */
    public EndGame(data: Dto.CardInfoDto): void {
        this.dataCards = [data.FirstCard, data.SecondCard, data.ThirdCard];
        //翻转第三张牌
        this.gameUI.GetCardPanel().StartFlipPoker(data.ThirdCard,2);
        Laya.timer.once(2000, this, () => {
            for (let i: number = 0; i < this.pokerNum; i++) {
                this.gameUI.GetCardPanel().HidePoker(i);
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
            this.gameUI.GetFootBallPanel().ShootIn();
        }
        //射偏（左边）
        if ((Third < First && Third < Second && (First < Second || First == Second)) || (Third > First && Third > Second && First > Second)) {
            this.gameUI.GetFootBallPanel().ShootLeft();
        }
        //射偏（右边）
        if ((Third > First && Third > Second && (First < Second || First == Second)) || (Third < First && Third < Second && First > Second)) {
            this.gameUI.GetFootBallPanel().ShootRight();
        }
        //射到门柱左边
        if (Third == First && Third == Second) {
            this.gameUI.GetFootBallPanel().ShootGoalPost(2);
        }
        //射到门柱左边
        if (Third == First) {
            this.gameUI.GetFootBallPanel().ShootGoalPost(0);
        }
        //射到门柱右边
        if (Third == Second) {
            this.gameUI.GetFootBallPanel().ShootGoalPost(1);
        }
        
    }

}