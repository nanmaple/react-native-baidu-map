/// <reference path="../GameFrame/BaseGameViewLogic/index.ts" />
/// <reference path="./OperateView/OperateView.ts" />
/// <reference path="./RouletteView/RouletteView.ts" />
/// <reference path="./ChipView/ChipView.ts" />
/// <reference path="./BetBarView/BetBarView.ts" />
/// <reference path="./HeadView/HeadView.ts" />
/// <reference path="./InternalView/InternalView.ts" />
class GameViewLogic extends BaseGameViewLogic {
    //组件Demo
    public OperateView: OperateView;
    public RouletteView: RouletteView;
    public ChipView: ChipView;
    public BetBarView: BetBarView;
    public HeadView: HeadView;
    public InternalView: InternalView

    constructor(Handler: Laya.Handler) {
        super();
        this.CtrlHandler = Handler;
        this.GameLoad();
    }

    /***************游戏基础逻辑***************/
    /**
     * 横竖屏监听
     */
    public ResetScreen(): void {
    }

    /**
    * 启动游戏资源页面，开始加载游戏资源
    */
    public GameLoad(): void {
        this.alertView = new AlertView();
        this.loadingView = new LoadingView();
        this.gameLoadView = new GameLoadView(this.GameViewEventKey);
        this.gameLoadView.ResetScreen();
        //设置版本控制类型为使用文件名映射的方式
        // Laya.ResourceVersion.type = Laya.ResourceVersion.FILENAME_VERSION;
        //加载版本信息文件
        // Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, ()=>{
        this.gameLoadView.StartLoad(GameResourceConfig.LoadResourcesConfig);
        // },null,false)); 
    }

    /**
     * 游戏资源加载完成，检查登录状态
     */
    public CheckLoad(): void {
        this.isLoadSuccess = true;
        if (this.isLoginSucess) {
            this.gameLoadView.Remove();
            //加载主界面
            this.GameMainUI();
        }
    }

    /**
     * 游戏登录完成，检查游戏资源加载状态
     */
    private GameLoginComplete(): void {
        this.isLoginSucess = true;
        if (this.isLoadSuccess) {
            this.gameLoadView.Remove();
            //加载主界面
            this.GameMainUI();
        }
    }

    /**
     * 加载游戏主界面
     */
    private GameMainUI(): void {
        //初始化基本alert,loading组件的界面
        this.alertView.ResetScreen();
        this.loadingView.ResetScreen();
        //加载其他组件
        this.OperateView = new OperateView(this.GameViewEventKey);
        this.OperateView.ResetScreen();
        this.RouletteView = new RouletteView(this.GameViewEventKey);
        this.RouletteView.ResetScreen();
        this.ChipView = new ChipView(this.GameViewEventKey);
        this.ChipView.ResetScreen();
        this.BetBarView = new BetBarView(this.GameViewEventKey);
        this.BetBarView.ResetScreen();
        this.HeadView = new HeadView(this.GameViewEventKey);
        this.HeadView.ResetScreen();
        this.InternalView = new InternalView(this.GameViewEventKey);
        this.InternalView.ResetScreen();

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
            // case Enum.ListenViewEnum.ShowRule:
            //     this.RuleUIHV.ShowRule();
            //     break;
            case Enum.ListenViewEnum.ChangBaseAmount:
                this.CtrlHandler.runWith([Enum.GameViewHandlerEnum.ChangBaseAmount, data.Value]);
                break;
            case Enum.ListenViewEnum.BetPos:
                this.CtrlHandler.runWith([Enum.GameViewHandlerEnum.BetPos, data.Value]);
                break;
            case Enum.ListenViewEnum.GameStart:
                this.CtrlHandler.runWith([Enum.GameViewHandlerEnum.GameStart, null]);
                break;
            case Enum.ListenViewEnum.GatherFraction:
                this.CtrlHandler.runWith([Enum.GameViewHandlerEnum.GatherFraction, null]);
                break;
            case Enum.ListenViewEnum.GameEnd:
                this.CtrlHandler.runWith([Enum.GameViewHandlerEnum.GameEnd, data.Value]);
                break;
            case Enum.ListenViewEnum.ClearBet:
                this.BetBarView.Set(null,Enum.BetBarView.CLEAR_ALL);
                this.CtrlHandler.runWith([Enum.GameViewHandlerEnum.ClearBet, data.Value]);
                break;
            case Enum.ListenViewEnum.AddAll:
                this.BetBarView.Set(null,Enum.BetBarView.ADD_ALL);
                break;
            case Enum.ListenViewEnum.AddGuessSum:
                this.CtrlHandler.runWith([Enum.GameViewHandlerEnum.AddGuessSum, data.Value]);
                break;
            case Enum.ListenViewEnum.ReduceGuessSum:
                this.CtrlHandler.runWith([Enum.GameViewHandlerEnum.ReduceGuessSum, data.Value]);
                break;
            case Enum.ListenViewEnum.GuessSize:
                this.CtrlHandler.runWith([Enum.GameViewHandlerEnum.GuessSize, data.Value]);
                break;
            case Enum.ListenViewEnum.RandomEndm:
                this.CtrlHandler.runWith([Enum.GameViewHandlerEnum.RandomEnd, data.Value]);
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
            //扩展数据分发类型
            case Enum.GameViewLogicEnum.ChangMoney:
                this.HeadView.Set(data,Enum.HeadView.CHANGE)
                break;
            // case Enum.GameViewLogicEnum.GameEnd:
            //     this.HeadView.Refresh();
            //     break;
            //设置当前已投注金额
            case Enum.GameViewLogicEnum.ChangeCurrBet:
                this.InternalView.Set(data,Enum.InternalView.SET_CURRENT_BET);
                break;
            case Enum.GameViewLogicEnum.GetMemberInfo:
                break;
            case Enum.GameViewLogicEnum.BetSuccess:
                this.BetBarView.Set(data,Enum.BetBarView.SET_BET);
                break;
            case Enum.GameViewLogicEnum.ChangBaseAmount:
                this.ChipView.Set(data,Enum.ChipView.SET_BASE_AMOUNT);
                break;
            case Enum.GameViewLogicEnum.ChangGameStatus:
                this.OperateView.Set(data);
                this.BetBarView.Set(data,Enum.BetBarView.CHANG_GAME_STATUS);
                this.ChipView.Set(data,Enum.ChipView.CHANG_GAME_STATUS);
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
            case Enum.GameCommand.MSG_GAME_INIT:
                this.OnGameInit(data.Data);
                break;
            case Enum.GameCommand.MSG_GAME_START:
                // this.OnGameStart(data.Data);
                break;
            case Enum.GameCommand.MSG_GAME_BETRESULT:
                // this.OnBetResult(data.Data);
                break;
            case Enum.GameCommand.MSG_GAME_STOPBET:
                // this.OnStopBet(data);
                break;
            case Enum.GameCommand.MSG_GAME_GAMERESULT:
                // this.OnGameResult(data.Data);
                break;
            case Enum.GameCommand.MSG_GAME_SETTLERESULT:
                this.OnSettleResult(data.Data);
                break;
            case Enum.GameCommand.MSG_GAME_OTHER:
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
        this.HeadView.Set(dto,Enum.HeadView.INIT);
    }

    /**
     * 游戏开始命令处理
     * @param data 游戏开始数据
     */
    // public OnGameStart(data: Dto.StartGameDto): void {
    //     this.Log(data, "GameStart");
    // }

    /**
     * 投注结果命令处理
     * @param data 游戏投注结果
     */
    // public OnBetResult(data: Dto.BetResultDto): void {
    //     this.Log(data, "BetResult");

    // }

    /**
     * 停止投注
     * @param data 
     */
    // public OnStopBet(data: any): void {

    // }

    /**
     * 游戏结果
     * @param data 游戏结果数据
     */
    // public OnGameResult(data: Dto.EndGameDto): void {
    //     this.Log(data, "GameResult");
    // }

    /**
     * 结算命令
     * @param data 游戏结算数据
     */
    public OnSettleResult(data: Dto.GameResultDto): void {
        this.Log(data, "SettleResult");
        if(data.Status == Enum.BetResultCode.Success){
            //是否是猜大小
            if(data.GuessResult){
                this.InternalView.Set(data.Result,Enum.InternalView.RANDOM_ANIMATED);
            }else{
                let dto = new Dto.AmountDto();
                dto.balance = data.Balance - data.WinAmount;
                // dto.winAmount = data.WinAmount;
                this.HeadView.Set(dto,Enum.HeadView.CHANGE);
                this.RouletteView.Set(data.Result);
            }
        }else{
            this.ShowAlert(0,Enum.BetResultCode[data.Status]);
            this.OperateView.Set(Enum.GameStatus.DEFAULT);
            this.BetBarView.Set(Enum.GameStatus.DEFAULT,Enum.BetBarView.CHANG_GAME_STATUS);
            this.ChipView.Set(Enum.GameStatus.DEFAULT,Enum.ChipView.CHANG_GAME_STATUS);
        }

    }

    public OnGameOther(data: any): void {

    }
}