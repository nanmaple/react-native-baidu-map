/// <reference path="../GameFrame/BaseGameViewLogic/index.ts" />
/// <reference path="./OperateView/OperateView.ts" />
/// <reference path="./RouletteView/RouletteView.ts" />
/// <reference path="./BetBarView/BetBarView.ts" />
/// <reference path="./HeadView/HeadView.ts" />
/// <reference path="./InternalView/InternalView.ts" />
class GameViewLogic extends BaseGameViewLogic {
    //组件Demo
    public OperateView: OperateView;
    public RouletteView: RouletteView;
    public BetBarView: BetBarView;
    public HeadView: HeadView;
    public InternalView: InternalView;
    public RuleView: RuleView;
    public GameRecordView: GameRecordView;

    constructor(Handler: Laya.Handler) {
        super(Handler);
    }

    /***************游戏基础逻辑***************/
    /**
     * 横竖屏监听
     */
    public ResetScreen(): void {
    }

    /**
     * 加载游戏主界面
     */
    public GameMainUI(): void {
        //初始化基本alert,loading组件的界面
        this.alertView = new AlertView();
        this.alertView.ResetScreen();
        this.loadingView = new LoadingView();
        this.loadingView.ResetScreen();
        //加载其他组件
        this.OperateView = new OperateView(this.GameViewEventKey);
        this.OperateView.ResetScreen();
        this.RouletteView = new RouletteView(this.GameViewEventKey);
        this.RouletteView.ResetScreen();
        this.BetBarView = new BetBarView(this.GameViewEventKey);
        this.BetBarView.ResetScreen();
        this.HeadView = new HeadView(this.GameViewEventKey);
        this.HeadView.ResetScreen();
        this.InternalView = new InternalView(this.GameViewEventKey);
        this.InternalView.ResetScreen();
        this.RuleView = new RuleView();
        this.RuleView.ResetScreen();
        this.GameRecordView = new GameRecordView(this.GameViewEventKey);
        this.GameRecordView.ResetScreen();

        Laya.SoundManager.playMusic(SoundConfig.SounRes.GameBg);

        this.CtrlHandler.runWith([Enum.GameViewHandlerEnum.StartSocket, {}]);
    }

    /**
     * UI监听
     * @param data 
     */
    public ListenUI(data: Dto.EventNotificationDto): void {
        switch (data.Type) {
            case Enum.ListenViewEnum.GameLoadComplate:
                this.CheckLoad();
                break;
            //打开规则
            case Enum.ListenViewEnum.ShowRule:
                this.RuleView.Set(null);
                break;
            //打开记录
            case Enum.ListenViewEnum.ShowRecord:
                this.GameRecordView.Set(null,Enum.GameRecordView.IsRecordShow);
                break;
            //修改投注基数
            case Enum.ListenViewEnum.ChangBaseAmount:
                this.CtrlHandler.runWith([Enum.GameViewHandlerEnum.ChangBaseAmount, data.Value]);
                break;
            //投注
            case Enum.ListenViewEnum.BetPos:
                this.CtrlHandler.runWith([Enum.GameViewHandlerEnum.BetPos, data.Value]);
                break;
            //开始游戏
            case Enum.ListenViewEnum.GameStart:
                this.CtrlHandler.runWith([Enum.GameViewHandlerEnum.GameStart, null]);
                break;
            //收取分数
            case Enum.ListenViewEnum.GatherFraction:
                this.CtrlHandler.runWith([Enum.GameViewHandlerEnum.GatherFraction, null]);
                break;
            //游戏滚动结束
            case Enum.ListenViewEnum.GameEnd:
                this.CtrlHandler.runWith([Enum.GameViewHandlerEnum.GameEnd, data.Value]);
                break;
            //清除投注
            case Enum.ListenViewEnum.ClearBet:
                this.BetBarView.Set(null, Enum.BetBarView.ClearAll);
                this.CtrlHandler.runWith([Enum.GameViewHandlerEnum.ClearBet, data.Value]);
                break;
            //全部投注位置+1
            case Enum.ListenViewEnum.AddAll:
                this.BetBarView.Set(null, Enum.BetBarView.AddAll);
                break;
            //添加竞猜筹码
            case Enum.ListenViewEnum.AddGuessSum:
                this.CtrlHandler.runWith([Enum.GameViewHandlerEnum.AddGuessSum, data.Value]);
                break;
            //减小竞猜筹码
            case Enum.ListenViewEnum.ReduceGuessSum:
                this.CtrlHandler.runWith([Enum.GameViewHandlerEnum.ReduceGuessSum, data.Value]);
                break;
            //猜大小开始
            case Enum.ListenViewEnum.GuessSize:
                this.CtrlHandler.runWith([Enum.GameViewHandlerEnum.GuessSize, data.Value]);
                break;
            //随机数滚动结束
            case Enum.ListenViewEnum.RandomEndm:
                this.CtrlHandler.runWith([Enum.GameViewHandlerEnum.RandomEnd, data.Value]);
                break;
            //获取最新余额
            case Enum.ListenViewEnum.GetBalance:
                this.CtrlHandler.runWith([Enum.GameViewHandlerEnum.GetBalance, null]);
                break;
            //获取历史记录
            case Enum.ListenViewEnum.GetRecord:
                this.CtrlHandler.runWith([Enum.GameViewHandlerEnum.GetRecord, data]);
                break;
            default:
                break;
        }
    }

    /**
     * 设置分发数据
     * @param type 
     * @param data 
     */
    public SetData(type: BaseEnum.GameViewLogicEnum | Enum.GameViewLogicEnum, data: any): void {
        switch (type) {
            //基本分发数据类型
            case BaseEnum.GameViewLogicEnum.Alert:
                this.ShowAlert(0, data);
                break;
            case BaseEnum.GameViewLogicEnum.Error:
                console.log(data);
                break;
            case BaseEnum.GameViewLogicEnum.Loading:
                this.SetLoading(data);
                break;
            case BaseEnum.GameViewLogicEnum.LoginComplete:
                this.GameLoginComplete();
                break;
            case BaseEnum.GameViewLogicEnum.GameData:
                this.OnMessageHandler(data);
                break;
            case BaseEnum.GameViewLogicEnum.Balance:
                this.HeadView.Set(data, Enum.HeadView.Chang);
                break;
            //扩展数据分发类型

            //设置当前已投注金额
            case Enum.GameViewLogicEnum.ChangeCurrBet:
                this.InternalView.Set(data, Enum.InternalView.SetCurrentBet);
                break;
            //投注成功
            case Enum.GameViewLogicEnum.BetSuccess:
                this.BetBarView.Set(data, Enum.BetBarView.SetBet);
                break;
            //修改游戏状态
            case Enum.GameViewLogicEnum.ChangGameStatus:
                this.BetBarView.Set(data, Enum.BetBarView.ChangGameStatus);
                this.OperateView.Set(data, Enum.OperateView.ChangGameStatus);
                break;
            //本次滚动开始
            case Enum.GameViewLogicEnum.GameStart:
                this.RouletteView.Set(null,Enum.RouletteView.StartRoll);
                break;
            //本次滚动结束
            case Enum.GameViewLogicEnum.GameEnd:
                this.BetBarView.Set(data,Enum.BetBarView.GameEnd);
                break;
            //猜大小结束
            case Enum.GameViewLogicEnum.GuessEnd:
                this.InternalView.Set(data,Enum.InternalView.GuessEnd);
                break;
            //清理投注记录
            case Enum.GameViewLogicEnum.ClearBet:
                this.BetBarView.Set(data,Enum.BetBarView.ClearAll);
                break;
            //设置历史记录
            case Enum.GameViewLogicEnum.SetRecord:
                this.GameRecordView.Set(data,Enum.GameRecordView.GetRecordData);
                break;
            default:
                break;
        }
    }
    /**
     * 侦听游戏命令
     * @param data 
     */
    private OnMessageHandler(data: Dto.GameMessageDto): void {
        switch (data.Command) {
            case Enum.GameCommand.MsgGameInit:
                this.OnGameInit(data.Data);
                break;
            case Enum.GameCommand.MsgGameStart:
                break;
            case Enum.GameCommand.MsgGameBetResult:
                break;
            case Enum.GameCommand.MsgGameStopBet:
                break;
            case Enum.GameCommand.MsgGameGameResult:
                break;
            case Enum.GameCommand.MsgGameSettleResult:
                this.OnSettleResult(data.Data);
                break;
            case Enum.GameCommand.MsgGameOther:
                this.OnGameOther(data.Data);
                break;
            default:
                break;
        }
    }

    /***************游戏具体逻辑***************/

    /**
     * 游戏初始化命令处理
     * @param data 游戏初始化数据
     */
    public OnGameInit(data: Dto.InitGameDto): void {
        this.Log(data, "GameInit");
        let dto = new Dto.AmountDto;
        dto.balance = data.Balance;
        this.HeadView.Set(dto, Enum.HeadView.Init);
        this.OperateView.Set(data.BaseAmounts,Enum.OperateView.Init);
        this.OperateView.Set(Enum.GameStatus.Default,Enum.OperateView.ChangGameStatus);
        this.BetBarView.Set(Enum.GameStatus.Default, Enum.BetBarView.ChangGameStatus);
        this.RouletteView.Set(null,Enum.RouletteView.Init);
    }

    /**
     * 结算命令
     * @param data 游戏结算数据
     */
    public OnSettleResult(data: Dto.GameResultDto): void {
        this.Log(data, "SettleResult");
        if (data.Status == Enum.BetResultCode.Success) {
            //是否是猜大小
            if (data.GuessResult) {
                this.InternalView.Set(data.Result, Enum.InternalView.RandomAnimated);
            } else {
                let dto = new Dto.AmountDto();
                dto.balance = data.Balance - data.WinAmount;
                this.HeadView.Set(dto, Enum.HeadView.Chang);
                // this.RouletteView.Set(data.Result);
                this.RouletteView.Set(data.Result,Enum.RouletteView.SetResult);
            }
        } else {
            this.ShowAlert(0, Enum.BetResultCode[data.Status]);
            this.OperateView.Set(Enum.GameStatus.Default,Enum.OperateView.ChangGameStatus);
            this.BetBarView.Set(Enum.GameStatus.Default, Enum.BetBarView.ChangGameStatus);
            this.RouletteView.Set(null,Enum.RouletteView.Init);
        }

    }

    public OnGameOther(data: any): void {

    }
}