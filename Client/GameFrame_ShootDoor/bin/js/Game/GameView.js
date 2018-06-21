var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GameView = /** @class */ (function (_super) {
    __extends(GameView, _super);
    function GameView(Handler) {
        var _this = _super.call(this) || this;
        _this.ChipPrice = 5; //筹码值(默认为5)
        _this.CtrlHandler = Handler;
        _this.GameLoad();
        return _this;
    }
    /**
     * 横竖屏监听
     */
    GameView.prototype.ResetScreen = function () {
        var isVer = this.ScreenStatus == ScreenStatus.Ver;
        if (this.onLoadSuccess && this.onLoginSucess) {
            this.GameBgUI.ResetScreen(isVer);
            this.BetUI.ResetScreen(isVer);
            this.CardUI.ResetScreen(isVer);
            this.HeadUIHV.ResetScreen(isVer);
            this.RuleUIHV.ResetScreen(isVer);
            this.NoteRecordUIHV.ResetScreen(isVer);
            this.TimeUI.ResetScreen(isVer);
            this.HistoryUI.ResetScreen(isVer);
            this.BetMoreUI.ResetScreen(isVer);
            this.TipsUI.ResetScreen(isVer);
        }
    };
    /**
     * 获取未投注成功的数据
     * @param data
     */
    GameView.prototype.GetNoBetPos = function (data) {
        this.BetUI.SetNoBetPos(data);
        this.BetMoreUI.SetNoBetPos(data);
    };
    /**
    * 启动游戏资源页面，开始加载游戏资源
    */
    GameView.prototype.GameLoad = function () {
        var isVer = this.ScreenStatus == ScreenStatus.Ver;
        this.LoadResourceUI = new LoadResourceHV();
        this.LoadResourceUI.ResetScreen(isVer);
        //设置版本控制类型为使用文件名映射的方式
        // Laya.ResourceVersion.type = Laya.ResourceVersion.FILENAME_VERSION;
        //加载版本信息文件
        // Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, ()=>{
        this.LoadResourceUI.StartLoad(GameResourceConfig.LoadResourcesConfig);
        // },null,false)); 
    };
    /**
     * 游戏资源加载完成，检查登录状态
     */
    GameView.prototype.CheckLoad = function () {
        this.onLoadSuccess = true;
        if (this.onLoginSucess) {
            this.LoadResourceUI.Remove();
            //加载主界面
            this.GameMainUI();
        }
    };
    /**
     * 游戏登录完成，检查游戏资源加载状态
     */
    GameView.prototype.GameLoginComplete = function () {
        this.onLoginSucess = true;
        if (this.onLoadSuccess) {
            this.LoadResourceUI.Remove();
            //加载主界面
            this.GameMainUI();
        }
    };
    /**
     * 加载游戏主界面
     */
    GameView.prototype.GameMainUI = function () {
        var isVer = this.ScreenStatus == ScreenStatus.Ver;
        this.GameBgUI = new GameBgHV();
        this.GameBgUI.ResetScreen(isVer);
        this.AlertUI = new AlertHV();
        this.AlertUI.ResetScreen(isVer);
        this.LoadingUI = new LoadingHV();
        this.LoadingUI.ResetScreen(isVer);
        this.BetUI = new BetUIHV();
        this.BetUI.ResetScreen(isVer);
        this.CardUI = new CardUIHV();
        this.CardUI.ResetScreen(isVer);
        this.HistoryUI = new HistoryUIHV();
        this.HistoryUI.ResetScreen(isVer);
        this.HeadUIHV = new HeadUIHV();
        this.HeadUIHV.ResetScreen(isVer);
        this.RuleUIHV = new RuleUIHV();
        this.RuleUIHV.ResetScreen(isVer);
        this.NoteRecordUIHV = new NoteRecordUIHV();
        this.NoteRecordUIHV.ResetScreen(isVer);
        this.TimeUI = new TimeHV();
        this.TimeUI.ResetScreen(isVer);
        this.BetMoreUI = new BetMoreUIHV();
        this.BetMoreUI.ResetScreen(isVer);
        this.TipsUI = new TipsUIHV();
        this.TipsUI.ResetScreen(isVer);
    };
    /**
     * UI监听
     * @param data
     */
    GameView.prototype.ListenUI = function (data) {
        switch (data.Type) {
            case Enum.ListenUIEnum.GameLoadComplate:
                this.CheckLoad();
                break;
            case Enum.ListenUIEnum.BetPos:
                this.ChipPrice = this.BetUI.GetChipPrice();
                data.Value.Amount = this.ChipPrice;
                this.CtrlHandler.runWith([Enum.GameViewHandlerEnum.BetPos, data.Value]);
                break;
            case Enum.ListenUIEnum.ConfirmBet:
                this.CtrlHandler.runWith([Enum.GameViewHandlerEnum.ConfirmBet, null]);
                break;
            case Enum.ListenUIEnum.CancelBet:
                this.CtrlHandler.runWith([Enum.GameViewHandlerEnum.CancelBet, null]);
                break;
            case Enum.ListenUIEnum.ShowRule:
                this.RuleUIHV.ShowRule();
                break;
            case Enum.ListenUIEnum.BetHistory:
                this.NoteRecordUIHV.ShowNoteRecord();
                break;
            case Enum.ListenUIEnum.GetBetRecord:
                this.CtrlHandler.runWith([Enum.GameViewHandlerEnum.GetBetRecord, data.Value]);
                break;
            case Enum.ListenUIEnum.ChangeMoney:
                this.CtrlHandler.runWith([Enum.GameViewHandlerEnum.ChangeMoney, null]);
                break;
            case Enum.ListenUIEnum.GetMemberInfo:
                this.CtrlHandler.runWith([Enum.GameViewHandlerEnum.GetMemberInfo, null]);
                break;
            case Enum.ListenUIEnum.ShowMoreBet:
                this.BetMoreUI.Show();
            default:
                break;
        }
    };
    /**
     * 设置分发数据
     * @param type
     * @param data
     */
    GameView.prototype.SetData = function (type, data) {
        switch (type) {
            case GameEnum.GameViewEnum.Alert:
                this.ShowAlert(0, data);
                break;
            case GameEnum.GameViewEnum.Error:
                console.log(data);
                break;
            case GameEnum.GameViewEnum.Loading:
                this.LoadingUI.Set(data);
                break;
            case GameEnum.GameViewEnum.LoginComplete:
                this.GameLoginComplete();
                break;
            case GameEnum.GameViewEnum.GameData:
                this.OnMessageHandler(data);
                break;
            case GameEnum.GameViewEnum.BetPos:
                if (data.Pos <= 13) {
                    this.BetUI.ChipsFly(data);
                }
                else {
                    this.BetMoreUI.Bet(data);
                }
                break;
            case GameEnum.GameViewEnum.SetRecord:
                this.NoteRecordUIHV.AddRecordData(data);
                break;
            case GameEnum.GameViewEnum.ChangMoney:
                this.HeadUIHV.ChangeMoney(data);
                break;
            case GameEnum.GameViewEnum.GetMemberInfo:
                this.HeadUIHV.SetInfo(data.memberInfo, data.isTourists);
                break;
            default:
                break;
        }
    };
    /**
     * 侦听游戏命令
     * @param data
     */
    GameView.prototype.OnMessageHandler = function (data) {
        switch (data.Command) {
            case GameEnum.GameCommand.MSG_GAME_INIT:
                this.OnGameInit(data.Data);
                break;
            case GameEnum.GameCommand.MSG_GAME_START:
                this.OnGameStart(data.Data);
                break;
            case GameEnum.GameCommand.MSG_GAME_BETRESULT:
                this.OnBetResult(data.Data);
                break;
            case GameEnum.GameCommand.MSG_GAME_STOPBET:
                this.OnStopBet(data);
                break;
            case GameEnum.GameCommand.MSG_GAME_GAMERESULT:
                this.OnGameResult(data.Data);
                break;
            case GameEnum.GameCommand.MSG_GAME_SETTLERESULT:
                this.OnSettleResult(data.Data);
                break;
            case GameEnum.GameCommand.MSG_GAME_OTHER:
                this.OnGameOther(data.Data);
                break;
            default:
                break;
        }
    };
    /**
     * 游戏初始化命令处理
     * @param data 游戏初始化数据
     */
    GameView.prototype.OnGameInit = function (data) {
        this.Log(data, "GameInit");
        if (data) {
            this.BetUI.Set({ Type: GameEnum.GameCommand.MSG_GAME_INIT, Data: data });
            this.CardUI.Set({ Type: GameEnum.GameCommand.MSG_GAME_INIT, Data: data.Cards });
            this.HistoryUI.Set({ Type: GameEnum.GameCommand.MSG_GAME_INIT, Data: data.History });
            this.BetMoreUI.Set({ Type: GameEnum.GameCommand.MSG_GAME_INIT, Data: data });
        }
        if (data.Status == 1 && data.BetTime > 0) {
            this.TimeUI.StartGameTime(data.BetTime);
        }
    };
    /**
     * 游戏开始命令处理
     * @param data 游戏开始数据
     */
    GameView.prototype.OnGameStart = function (data) {
        this.Log(data, "GameStart");
        if (data && data.Odds) {
            this.BetUI.Set({ Type: GameEnum.GameCommand.MSG_GAME_START, Data: data });
            this.BetMoreUI.Set({ Type: GameEnum.GameCommand.MSG_GAME_START, Data: data });
        }
        //2.重置倒计时并显示时间
        if (data && data.BetTime) {
            this.TimeUI.StartGameTime(data.BetTime);
        }
        //3.重置牌面，显示第一和第二张牌
        this.CardUI.Set({ Type: GameEnum.GameCommand.MSG_GAME_START, Data: { FirstCard: data.FirstCard, SecondCard: data.SecondCard, ThirdCard: 0 } });
        //4.处理历史面板
        this.HistoryUI.Set({ Type: GameEnum.GameCommand.MSG_GAME_START, Data: data.History });
    };
    /**
     * 投注结果命令处理
     * @param data 游戏投注结果
     */
    GameView.prototype.OnBetResult = function (data) {
        this.Log(data, "BetResult");
        this.BetUI.Set({ Type: GameEnum.GameCommand.MSG_GAME_BETRESULT, Data: data });
        this.BetMoreUI.Set({ Type: GameEnum.GameCommand.MSG_GAME_BETRESULT, Data: data });
        if (data.Success) {
            //改变总金额
        }
    };
    /**
     * 停止投注
     * @param data
     */
    GameView.prototype.OnStopBet = function (data) {
    };
    /**
     * 游戏结果
     * @param data 游戏结果数据
     */
    GameView.prototype.OnGameResult = function (data) {
        this.Log(data, "GameResult");
        this.BetUI.Set({ Type: GameEnum.GameCommand.MSG_GAME_GAMERESULT, Data: data });
        this.CardUI.Set({ Type: GameEnum.GameCommand.MSG_GAME_GAMERESULT, Data: { FirstCard: data.FirstCard, SecondCard: data.SecondCard, ThirdCard: data.ThirdCard } });
        var historyDto = new Dto.HistoryRoundDto();
        historyDto.RoundID = data.RoundID;
        historyDto.FirstCard = data.FirstCard;
        historyDto.SecondCard = data.SecondCard;
        historyDto.ThirdCard = data.ThirdCard;
        this.HistoryUI.Set({ Type: GameEnum.GameCommand.MSG_GAME_GAMERESULT, Data: historyDto });
        this.BetMoreUI.Set({ Type: GameEnum.GameCommand.MSG_GAME_GAMERESULT, Data: data });
        this.TimeUI.EndGameTime();
    };
    /**
     * 结算命令
     * @param data 游戏结算数据
     */
    GameView.prototype.OnSettleResult = function (data) {
        var _this = this;
        this.Log(data, "SettleResult");
        Laya.timer.once(5000, this, function () {
            _this.BetUI.Set({ Type: GameEnum.GameCommand.MSG_GAME_SETTLERESULT, Data: data });
            _this.BetMoreUI.Set({ Type: GameEnum.GameCommand.MSG_GAME_SETTLERESULT, Data: data });
            _this.HeadUIHV.ChangeMoney(data.Balance);
        });
    };
    GameView.prototype.OnGameOther = function (data) {
    };
    return GameView;
}(GameViewManager));
//# sourceMappingURL=GameView.js.map