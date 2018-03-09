class GameCtrl extends BaseCtrl {
    //关闭当前页面的回调
    private onClose: Laya.Handler;
    private gameUI: ScenePanel.GameUI;
    private BetCtrl: BetPanelCtrl;
    private CardPanelCtrl: CardPanelCtrl;   //扑克面板控制类
    private HeadPanelCtrl: HeadPanelCtrl;   //游戏头部面板控制类
    private HistoryPanelCtrl: HistoryPanelCtrl;   //历史记录面板控制类
    private TimePanelCtrl: TimePanelCtrl;   //时间面板控制类
    private RoundPanelCtrl: RoundPanelCtrl;
    private isAnimateEnd: boolean = false;
    private settleData: Dto.GameResultDto = null;
    private cacheData: Dto.CacheGameDto = null;
    private ChangeMoneyHander: Laya.Handler;
    private roundID: string = null;  //当前局号
    private currentStatus = 0;
    /**
     * 页面关闭回调
     * @param onClose 回调Handler
     */
    constructor(onClose?: Laya.Handler) {
        super(GameConfig.GameID);
        //绑定关闭页面事件回调
        this.onClose = onClose;
        //添加UI到舞台
        this.gameUI = ScenePanel.GameUI.GetInstance();
        this.gameUI.ChangeModeHanler(Laya.Handler.create(this, this.ReInit, null, false));
        ScenePanel.GameUI.GetInstance().GetLoadingPanel().ShowConnect();
        // 创建游戏状态控制类实例
        this.RoundPanelCtrl = new RoundPanelCtrl();
        //创建扑克牌面板控制类实例
        this.CardPanelCtrl = new CardPanelCtrl();
        // //第三张牌翻转结束回调
        this.CardPanelCtrl.EndGameHander(Laya.Handler.create(this, this.FlipEnd, null, false));
        // //创建投注控制实例
        this.BetCtrl = new BetPanelCtrl(Laya.Handler.create(this, this.SendHandelr, null, false), this.authorizationInfo.IsClose, this.memberInfo);
        // //创建历史记录面板控制类实例
        this.HistoryPanelCtrl = new HistoryPanelCtrl();
        // //创建时间面板控制类实例
        this.TimePanelCtrl = new TimePanelCtrl();
        // //创建游戏头部面板控制类实例
        this.HeadPanelCtrl = new HeadPanelCtrl();
        this.HeadPanelCtrl.SetInfo(this.memberInfo, this.parentID, this.authorizationInfo.IsTourists);
        //创建tipCtrl
        if (this.authorizationInfo.IsTourists) {
            let tipsCtrl: TipsPanelCtrl = new TipsPanelCtrl();
            tipsCtrl.Show();
        }

    }

    private ReInit(): void {
        let nowDate: number = new Date().getTime();
        let date: number;
        if (!this.cacheData) {
            return;
        }
        date = this.cacheData.BetTime - (nowDate - this.cacheData.BetTimeStamp) / 1000;   //相差秒数
        this.cacheData.BetTimeStamp = nowDate;
        this.cacheData.BetTime = date < 0 ? 0 : date;
        this.OnGameInit(this.cacheData, true);
        this.HeadPanelCtrl.SetInfo(this.memberInfo, this.parentID, this.authorizationInfo.IsTourists);
    }

    /**
     * 分享回调
     * @param status 分享结果类型 1.分享成功 0.取消分享 -1.分享失败
     */
    public WeChatShareHandler(status: number): void {
    }

    /**
     * 网络状态
     * @param networkType 网络状态
     */
    public OnNoNetwork(): void {

    }

    /**
     * 侦听Socket连接事件
     * @param data 
     */
    public OnConnectHandler(): void {

    }

    /**
     * 侦听Socket关闭事件
     * @param data 
     */
    public OnCloseHandler(message: string): void {
        ScenePanel.GameUI.GetInstance().GetLoadingPanel().ShowConnect();
        console.log(message)
    }

    /**
     * 侦听Socket错误事件
     * @param data 
     */
    public OnErrorHandler(message: string): void {
        console.log(message)
    }

    /**
     * 侦听Socket连接事件
     * @param data 
     */
    public OnWillReconnectHandler(): void {
        console.log("将要重连")
    }

    /**
     * 侦听登出事件
     * @param data 
     */
    public OnLogoutHandler(): void {
        ScenePanel.GameUI.GetInstance().GetLoadingPanel().HideConnect();
    }

    /**
     * Ack回调
     * @param data 
     */
    public OnAckHandler(data: any): void {
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
    public OnGameInit(data: Dto.InitGameDto, isReInit: boolean = false): void {
        console.log("初始化", data);
        ScenePanel.GameUI.GetInstance().GetLoadingPanel().HideConnect();
        this.cacheData = <Dto.CacheGameDto>data;
        if (!this.roundID || this.roundID <= data.RoundID) {
            this.roundID = data.RoundID;
        }
        this.cacheData.BetTimeStamp = new Date().getTime();
        if (data && data.RoundID) {
            this.RoundPanelCtrl.SetGameRound(data.RoundID);
        }

        if (data.Status == 0 && !isReInit) {
            this.RoundPanelCtrl.SetGameState(0);
        } else {
            this.RoundPanelCtrl.SetGameState(this.cacheData.Status);
        }
        //投注状态
        //1.显示当前剩余投注时间data.BetTime
        if (data.Status == 1 && data.BetTime > 0) {
            this.TimePanelCtrl.StartGameTime(data.BetTime);
            this.RoundPanelCtrl.SetGameState(1);
        }
        if (data.Cards == null) {
            this.TimePanelCtrl.HideGameTime();
        }
        //2.初始化投注界面
        if (data) {
            this.BetCtrl.GameInit(data, isReInit);
            this.cacheData.RoundID = data.RoundID;
        }
        //3.显示当前牌面data.Cards
        if (data && data.Cards) {
            this.CardPanelCtrl.InitGame({ RoundID: data.RoundID, Cards: data.Cards, BetTime: data.BetTime });
        }

        //4.显示历史记录data.History
        if (data && data.History) {
            this.HistoryPanelCtrl.SetHistoryData(data.History);
        }

        if (data && data.Balance) {
            //改变总金额
            this.HeadPanelCtrl.ChangeMoney(data.Balance);
        }
    }

    /**
     * 游戏开始回调
     * @param data 游戏开始信息
     */
    public OnGameStart(data: Dto.StartGameDto): void {
        ScenePanel.GameUI.GetInstance().ClearPokerFly();
        this.CardPanelCtrl.ClearPokerFlip();
        if (!this.roundID || this.roundID < data.RoundID) {
            console.log("开始-不同局", data, this.roundID, data.RoundID, new Date().getTime());
            this.roundID = data.RoundID;
        } else if (this.roundID == data.RoundID) {
            console.log("开始-同一局", data, this.roundID, data.RoundID, new Date().getTime());
            this.roundID = data.RoundID;
        } else {
            console.log("开始 return ", data, this.roundID, data.RoundID, new Date().getTime());
            return;
        }
        if (data && data.RoundID) {
            this.cacheData.RoundID = data.RoundID;
            this.RoundPanelCtrl.SetGameRound(data.RoundID);
        }
        this.cacheData.Status = BaseEnum.GameStatus.BET;
        this.RoundPanelCtrl.SetGameState(1);        //计时开始
        this.cacheData.TotalBet = null;
        //1.显示赔率
        if (data && data.Odds) {
            this.cacheData.Odds = data.Odds;
            this.BetCtrl.GameStart(data.Odds);
        }
        //4.显示历史记录data.History
        if (data && data.History) {
            this.HistoryPanelCtrl.SetHistoryData(data.History);
        }
        //2.重置倒计时并显示时间
        if (data && data.BetTime) {
            this.cacheData.BetTime = data.BetTime;
            this.cacheData.BetTimeStamp = new Date().getTime();
            this.TimePanelCtrl.StartGameTime(data.BetTime);
        }
        //3.重置牌面，显示第一和第二张牌
        if (!this.cacheData.Cards) {
            this.cacheData.Cards = new Dto.CardInfoDto();
        }
        this.cacheData.Cards.FirstCard = data.FirstCard;
        this.cacheData.Cards.SecondCard = data.SecondCard;
        this.cacheData.Cards.ThirdCard = 0;
        this.CardPanelCtrl.StartGame(data);
        this.isAnimateEnd = false;
        this.settleData = null;
    }
    /**
     * 游戏投注结果回调
     * @param data 游戏投注结果信息
     */
    public OnBetResult(data: Dto.BetResultDto): void {
        if (!this.roundID || this.roundID < data.RoundID) {
            console.log("投注结果", data, this.roundID, data.RoundID);
            this.roundID = data.RoundID;
        } else if (this.roundID == data.RoundID) {
            console.log("投注结果-同一局", data, this.roundID, data.RoundID);
            this.roundID = data.RoundID;
        } else {
            console.log("投注结果 return ", data, this.roundID, data.RoundID);
            return;
        }
        //投注结果返回
        this.BetCtrl.BetResult(data);
        if (!this.authorizationInfo.IsClose && data.Success) {
            //改变总金额
            this.HeadPanelCtrl.ChangeMoney(data.Balance);
            this.cacheData.Balance = data.Balance;
            this.cacheData.TotalBet = data.TotalBet;
        }
    }

    /**
     * 游戏停止投注回调
     */
    public OnStopBet(): void {
        Utils.BackgroundMusic.PlaySounds("sound/csz1.wav");
    }

    /**
     * 游戏结束回调
     * @param data 游戏结束结果信息
     */
    public OnGameResult(data: Dto.EndGameDto): void {
        if (!this.roundID || this.roundID < data.RoundID) {
            console.log("结束", data, this.roundID, data.RoundID, new Date().getTime());
            this.roundID = data.RoundID;
        } else if (this.roundID == data.RoundID) {
            console.log("结束-同一局", data, this.roundID, data.RoundID, new Date().getTime());
            this.roundID = data.RoundID;
        } else {
            console.log("结束 return ", data, this.roundID, data.RoundID, new Date().getTime());
            return;
        }
        //缓存数据
        // this.roundID = this.cacheData.RoundID;
        this.cacheData.Status = BaseEnum.GameStatus.END;
        let dto: Dto.HistoryRoundDto = new Dto.HistoryRoundDto();
        dto.FirstCard = data.FirstCard;
        dto.SecondCard = data.SecondCard;
        dto.ThirdCard = data.ThirdCard;
        dto.RoundID = data.RoundID;
        this.cacheData.History.push(dto);
        this.cacheData.History.splice(0, 1);
        this.cacheData.Cards.FirstCard = data.FirstCard;
        this.cacheData.Cards.SecondCard = data.SecondCard;
        this.cacheData.Cards.ThirdCard = data.ThirdCard;
        this.RoundPanelCtrl.SetGameState(2);
        Laya.timer.once(5000, this, () => {
            this.cacheData.Status = BaseEnum.GameStatus.SETTLE;
            this.RoundPanelCtrl.SetGameState(3);
            if (this.ChangeMoneyHander) {
                this.ChangeMoneyHander.run();
            }
            this.isAnimateEnd = true;
            if (this.settleData) {
                //显示输赢效果
                this.BetCtrl.SettleResult(this.settleData,data.RoundID);
            }
        })
        //禁用面板按钮
        this.BetCtrl.GameResult();
        //翻转第三张牌及足球效果
        this.CardPanelCtrl.EndGame(data);
        //停止时间
        this.TimePanelCtrl.EndGameTime();
    }

    /**
     * 游戏结束牌翻转
     */
    public FlipEnd(data: any): void {
        //牌飞入
        ScenePanel.GameUI.GetInstance().PokerFly(data.Cards);
        //添加历史记录
        this.HistoryPanelCtrl.AddHistoryList(data);
    }

    /**
     * 游戏结算回调
     * @param data 游戏结算结果信息
     */
    public OnSettleResult(data: Dto.GameResultDto): void {
        if (!this.roundID || this.roundID < data.RoundID) {
            console.log("结算", data, this.roundID, data.RoundID);
            this.roundID = data.RoundID;
        } else if (this.roundID == data.RoundID) {
            console.log("结算-同一局", data, this.roundID, data.RoundID);
            this.roundID = data.RoundID;
        } else {
            console.log("结算 return ", data, this.roundID, data.RoundID);
            return;
        }
        this.cacheData.Status = BaseEnum.GameStatus.SETTLEED;
        this.cacheData.TotalBet = data.SettleResult;
        this.cacheData.Balance = data.Balance;
        this.cacheData.Cards = JSON.parse(data.GameResult);
        this.RoundPanelCtrl.SetGameState(4);
        if (this.isAnimateEnd) {
            //显示输赢效果
            this.BetCtrl.SettleResult(data,data.RoundID);
        } else {
            this.settleData = data;
        }
        if (!this.authorizationInfo.IsClose) {
            //改变总金额
            this.ChangeMoneyHander = Laya.Handler.create(this, () => {
                this.HeadPanelCtrl.ChangeMoney(data.Balance);
            })
        }
    }

    /**
     * 游戏其他信息回调
     * @param data 游戏其他信息
     */
    public OnGameOther(data: any): void {
    }
}