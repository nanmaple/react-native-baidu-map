/// <reference path="../GameFrame/BaseGameViewLogic/index.ts" />
/// <reference path="./GameBgView/GameBgView.ts" />
class GameViewLogic extends BaseGameViewLogic {
    //组件Demo
    public GameBgView: GameBgView;
    public HeadPanel: HeadPanel;
    public TreasurePanel: TreasurePanel;
    public FootPanel: FootPanel;
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
        this.gameLoadView = new GameLoadView(this.GameViewEventKey);
        this.gameLoadView.ResetScreen();
        this.gameLoadView.StartLoad(GameResourceConfig.LoadResourcesConfig);
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
        this.alertView = new AlertView();
        this.alertView.ResetScreen();
        this.loadingView = new LoadingView();
        this.loadingView.ResetScreen();
        //加载其他组件
        this.GameBgView = new GameBgView(this.GameViewEventKey);
        this.GameBgView.ResetScreen();
        this.HeadPanel = new HeadPanel(this.GameViewEventKey);
        this.HeadPanel.ResetScreen();
        this.TreasurePanel = new TreasurePanel(this.GameViewEventKey);
        this.TreasurePanel.ResetScreen();
        this.FootPanel = new FootPanel(this.GameViewEventKey);
        this.FootPanel.ResetScreen();
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
            case Enum.ListenViewEnum.BetPos:
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
            case Enum.GameCommand.MsgGameInit:
                this.OnGameInit(data.Data);
                break;
            case Enum.GameCommand.MsgGameStart:
                this.OnGameStart(data.Data);
                break;
            case Enum.GameCommand.MsgGameBetResult:
                this.OnBetResult(data.Data);
                break;
            case Enum.GameCommand.MsgGameStopBet:
                this.OnStopBet(data);
                break;
            case Enum.GameCommand.MsgGameResult:
                this.OnGameResult(data.Data);
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
    public OnGameInit(data: any): void {
        this.Log(data, "GameInit");
        this.HeadPanel.Set(data.Balance);
    }

    /**
     * 游戏开始命令处理
     * @param data 游戏开始数据
     */
    public OnGameStart(data: any): void {
        this.Log(data, "GameStart");
    }

    /**
     * 投注结果命令处理
     * @param data 游戏投注结果
     */
    public OnBetResult(data: any): void {
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
    public OnGameResult(data: any): void {
        this.Log(data, "GameResult");
    }

    /**
     * 结算命令
     * @param data 游戏结算数据
     */
    public OnSettleResult(data: any): void {
        this.Log(data, "SettleResult");
    }

    public OnGameOther(data: any): void {

    }
}