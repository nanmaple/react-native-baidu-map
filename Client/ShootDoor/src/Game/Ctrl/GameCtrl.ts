class GameCtrl extends BaseCtrl {
    //关闭当前页面的回调
    private onClose: Laya.Handler;
    private gameScenes: ScenePanel.GameScenes;
    private BetCtrl: BetPanelCtrl;
    private CardPanelCtrl: CardPanelCtrl;   //扑克面板控制类
    private HeadPanelCtrl: HeadPanelCtrl;   //游戏头部面板控制类
    private HistoryPanelCtrl: HistoryPanelCtrl;   //历史记录面板控制类
    private TimePanelCtrl: TimePanelCtrl;   //时间面板控制类
    private RoundPanelCtrl: RoundPanelCtrl;
    /**
     * 页面关闭回调
     * @param onClose 回调Handler
     */
    constructor(onClose?: Laya.Handler) {
        super(GameConfig.GameID);
        //绑定关闭页面事件回调
        this.onClose = onClose;
        //添加UI到舞台
        this.gameScenes = new ScenePanel.GameScenes();

        Net.WebApi.instance.SetToken();

        //创建游戏状态控制类实例
        this.RoundPanelCtrl = new RoundPanelCtrl(this.gameScenes.roundPanel); 
        //创建扑克牌面板控制类实例
        this.CardPanelCtrl = new CardPanelCtrl(this.gameScenes.cardPanel, this.gameScenes.footballPanel);
        //创建投注控制实例
        this.BetCtrl = new BetPanelCtrl(this.gameScenes.betPanel, Laya.Handler.create(this, this.SendHandelr, null, false), this.authorizationInfo.IsClose,this.memberInfo);
        //创建历史记录面板控制类实例
        this.HistoryPanelCtrl = new HistoryPanelCtrl(this.gameScenes.historyPanel);
        //创建时间面板控制类实例
        this.TimePanelCtrl = new TimePanelCtrl(this.gameScenes.timePanel);
        //创建游戏头部面板控制类实例
        this.HeadPanelCtrl = new HeadPanelCtrl(this.gameScenes.headPanel, this.gameScenes.noteReocrdPanel, this.gameScenes.rulePanel, this.memberInfo, this.parentID);
        //创建tipCtrl
        if (!this.memberInfo) {
            let tipsCtrl: TipsPanelCtrl = new TipsPanelCtrl(this.gameScenes.tipsPanel);
            tipsCtrl.Show();
        }
    }

    /**
     * 侦听Socket连接事件
     * @param data 
     */
    public OnConnectHandler(): void {
        console.log("侦听:Socket连接");
    }

    /**
     * 侦听Socket关闭事件
     * @param data 
     */
    public OnCloseHandler(): void {
        console.log("侦听:Socket关闭");
    }

    /**
     * 侦听Socket错误事件
     * @param data 
     */
    public OnErrorHandler(message: string): void {
        console.log("侦听:Socket错误");
    }

    /**
     * 侦听Socket连接事件
     * @param data 
     */
    public OnWillReconnectHandler(): void {
        console.log("侦听:Socket重连");
    }

    /**
     * 侦听登出事件
     * @param data 
     */
    public OnLogoutHandler(): void {
        console.log("侦听:登出");
    }

    /**
     * Ack回调
     * @param data 
     */
    public OnAckHandler(data: any): void {
        console.log("侦听:Ack");
        this.BetCtrl.BetAck(data);
    }


    /**
     * 系统推送（预留）
     * @param data 
     */
    public OnSystemPushHandler(data: any): void {

    }


    public SendHandelr(dto: Dto.HandlerDto): void {
        let msgID: string = dto.MsgID ? dto.MsgID : Utils.Guid.Create();
        this.BetCtrl.SetMsgID(msgID);
        this.Send(dto.Data, msgID);
    }

    /**
     * 游戏初始化回调
     * @param data 游戏初始化信息
     */
    public OnGameInit(data: Dto.InitGameDto): void {
        if (data && data.RoundID) {
            this.RoundPanelCtrl.SetGameRound(data.RoundID);
        }

        if (data.Status == 0) {
            this.RoundPanelCtrl.SetGameState(0);
        }        
        //投注状态
        //1.显示当前剩余投注时间data.BetTime
        if (data.Status == 1 && data.BetTime >= 0) {
            this.TimePanelCtrl.StartGameTime(data.BetTime);
            this.RoundPanelCtrl.SetGameState(1);
        }
        //2.初始化投注界面
        if (data) {
            this.BetCtrl.GameInit(data);
        }
        //3.显示当前牌面data.Cards
        if (data && data.Cards) {
            this.CardPanelCtrl.InitGame(data.Cards);
        }

        //4.显示历史记录data.History
        if (data && data.History) {
            this.HistoryPanelCtrl.SetHistoryData(data.History);
        }

        if(data&&data.Limit){
            this.HistoryPanelCtrl.SetLimit(data.Limit);
        }
        console.log("MSG:游戏初始化", data);
    }

    /**
     * 游戏开始回调
     * @param data 游戏开始信息
     */
    public OnGameStart(data: Dto.StartGameDto): void {
        if (data && data.RoundID) {
            this.RoundPanelCtrl.SetGameRound(data.RoundID);
        }
        this.RoundPanelCtrl.SetGameState(1);        //计时开始
        console.log("MSG:游戏开始", data);
        //1.显示赔率
        if (data && data.Odds) {
            //开始游戏
            this.BetCtrl.GameStart(data.Odds);
        }

        //2.重置倒计时并显示时间
        if (data && data.BetTime) {
            this.TimePanelCtrl.StartGameTime(data.BetTime);
        }
        //3.重置牌面，显示第一和第二张牌
        this.CardPanelCtrl.StartGame(data);

    }
    /**
     * 游戏投注结果回调
     * @param data 游戏投注结果信息
     */
    public OnBetResult(data: Dto.BetResultDto): void {
        console.log("MSG:游戏投注结果", data);
        //投注结果返回
        this.BetCtrl.BetResult(data);
        if (!this.authorizationInfo.IsClose && data.Success) {
            //改变总金额
            this.HeadPanelCtrl.ChangeMoney(data.Balance);
        }
    }

    /**
     * 游戏停止投注回调
     */
    public OnStopBet(): void {
        console.log("MSG:游戏停止投注");
    }

    /**
     * 游戏结束回调
     * @param data 游戏结束结果信息
     */
    public OnGameResult(data: Dto.CardInfoDto): void {
        this.RoundPanelCtrl.SetGameState(2);
        console.log("MSG:游戏结束", data);
        //禁用面板按钮
        this.BetCtrl.GameResult();
        //翻转第三张牌及足球效果
        this.CardPanelCtrl.EndGame(data);
        //停止时间
        this.TimePanelCtrl.EndGameTime();
        //第三张牌翻转结束回调
        this.CardPanelCtrl.EndGameHander(Laya.Handler.create(this,()=>{
            //添加历史记录
            this.HistoryPanelCtrl.AddHistoryList(data);
        }))
    }
    /**
     * 游戏结算回调
     * @param data 游戏结算结果信息
     */
    public OnSettleResult(data: Dto.GameResultDto): void {
        this.RoundPanelCtrl.SetGameState(3);
        console.log("MSG:游戏结算", data);
        //显示输赢效果
        this.BetCtrl.SettleResult(data);
        if (!this.authorizationInfo.IsClose) {
            //改变总金额
            this.HeadPanelCtrl.ChangeMoney(data.Balance);
        }
    }

    /**
     * 游戏其他信息回调
     * @param data 游戏其他信息
     */
    public OnGameOther(data: any): void {
        console.log("MSG:游戏其他信息", data);
    }
}