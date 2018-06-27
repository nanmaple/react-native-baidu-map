/// <reference path="../GameFrame/BaseGameViewLogic/index.ts" />
class GameViewLogic extends BaseGameViewLogic {
    //组件Demo
    public GameBgView: GameBgHV;

    constructor(Handler: Laya.Handler) {
        super();
        this.CtrlHandler = Handler;
        this.GameLoad();
    }

    /**
     * 横竖屏监听
     */
    public ResetScreen(): void {
    }

    /**
    * 启动游戏资源页面，开始加载游戏资源
    */
    public GameLoad(): void {
        let isVer = this.ScreenStatus == ScreenStatus.Ver;
        this.alertView = new AlertView();
        this.loadingView = new LoadingView();
        this.gameLoadView = new GameLoadView(this.GameViewEventKey);
        this.gameLoadView.ResetScreen(isVer);
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
        this.onLoadSuccess = true;
        if (this.onLoginSucess) {
            this.gameLoadView.Remove();
            //加载主界面
            this.GameMainUI();
        }
    }

    /**
     * 游戏登录完成，检查游戏资源加载状态
     */
    private GameLoginComplete(): void {
        this.onLoginSucess = true;
        if (this.onLoadSuccess) {
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
        this.GameBgView = new GameBgHV();
        this.GameBgView.ResetScreen();
    }

    /**
     * UI监听
     * @param data 
     */
    public ListenUI(data: Dto.BroadcastDto): void {
        switch (data.Type) {
            case Enum.ListenViewEnum.GameLoadComplate:
                this.CheckLoad();
                break;
            // case Enum.ListenViewEnum.ShowRule:
            //     this.RuleUIHV.ShowRule();
            //     break;
            case Enum.ListenViewEnum.BetPos:
                // this.ChipPrice = this.BetUI.GetChipPrice();
                // data.Value.Amount = this.ChipPrice;
                // this.CtrlHandler.runWith([Enum.GameViewHandlerEnum.BetPos, data.Value]);
                break;
            case Enum.ListenViewEnum.ConfirmBet:
                // this.BetUI.Confirm();
                // this.BetMoreUI.Confirm();
                // this.CtrlHandler.runWith([Enum.GameViewHandlerEnum.ConfirmBet, null]);
                break;
            case Enum.ListenViewEnum.CancelBet:
                // this.BetUI.Cancel();
                // this.BetMoreUI.Cancel();
                // this.CtrlHandler.runWith([Enum.GameViewHandlerEnum.CancelBet, null]);
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
                break;
            case Enum.GameViewLogicEnum.GetMemberInfo:
                break;
            case Enum.GameViewLogicEnum.BetPos:
                break;
            case Enum.GameViewLogicEnum.SetRecord:
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
                this.OnGameStart(data.Data);
                break;
            case Enum.GameCommand.MSG_GAME_BETRESULT:
                this.OnBetResult(data.Data);
                break;
            case Enum.GameCommand.MSG_GAME_STOPBET:
                this.OnStopBet(data);
                break;
            case Enum.GameCommand.MSG_GAME_GAMERESULT:
                this.OnGameResult(data.Data);
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

    /**
     * 游戏初始化命令处理
     * @param data 游戏初始化数据
     */
    public OnGameInit(data: Dto.InitGameDto): void {
        this.Log(data, "GameInit");

    }

    /**
     * 游戏开始命令处理
     * @param data 游戏开始数据
     */
    public OnGameStart(data: Dto.StartGameDto): void {
        this.Log(data, "GameStart");
    }

    /**
     * 投注结果命令处理
     * @param data 游戏投注结果
     */
    public OnBetResult(data: Dto.BetResultDto): void {
        this.Log(data, "BetResult");

    }

    /**
     * 停止投注
     * @param data 
     */
    public OnStopBet(data: any): void {

    }

    /**
     * 游戏结果
     * @param data 游戏结果数据
     */
    public OnGameResult(data: Dto.EndGameDto): void {
        this.Log(data, "GameResult");
    }

    /**
     * 结算命令
     * @param data 游戏结算数据
     */
    public OnSettleResult(data: Dto.GameResultDto): void {
        this.Log(data, "SettleResult");
    }

    public OnGameOther(data: any): void {

    }
}