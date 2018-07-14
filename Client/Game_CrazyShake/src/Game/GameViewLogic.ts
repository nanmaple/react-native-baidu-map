/// <reference path="../GameFrame/BaseGameViewLogic/index.ts" />
/// <reference path="./GameBgView/GameBgView.ts" />
class GameViewLogic extends BaseGameViewLogic {
    //组件Demo
    public GameBgView: GameBgView;
    // public HeadPanel: HeadPanel;
    public HeadPanel: HeadPanel;
    public ToyPanel: ToyPanel;
    public BetNumPanel: BetNumPanel;
    public BetPanel: BetPanel;
    public RulePanel:RulePanel;
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

    /***************游戏基本逻辑***************/

    /***************游戏方法处理（方法名不变，修改方法内部逻辑）***************/
    /**
     * 加载游戏主界面
     */
    private GameMainUI(): void {
        //初始化基本alert,loading组件的界面
        this.alertView = new AlertView();
        this.alertView.ResetScreen();
        this.loadingView = new LoadingView();
        this.loadingView.ResetScreen();
        //初始化其他界面
        this.GameBgView = new GameBgView(this.GameViewEventKey);
        this.GameBgView.ResetScreen();
        this.HeadPanel = new HeadPanel(this.GameViewEventKey);
        this.HeadPanel.ResetScreen();
        this.ToyPanel = new ToyPanel(this.GameViewEventKey);
        this.ToyPanel.ResetScreen();
        this.BetNumPanel = new BetNumPanel();
        this.BetNumPanel.ResetScreen();
        this.BetPanel = new BetPanel(this.GameViewEventKey);
        this.BetPanel.ResetScreen();
        this.CtrlHandler.runWith([Enum.GameViewHandlerEnum.StartSocket, {}]);
        this.RulePanel=new RulePanel(this.GameViewEventKey);
        this.RulePanel.ResetScreen();
    }

    /**
     * UI监听
     * @param data 
     */
    public ListenUI(data: Dto.EventNotificationDto): void {
        switch (data.Type) {
            //基本分发数据类型
            case Enum.ListenViewEnum.GameLoadComplate:
                this.CheckLoad();
                break;
            //扩展数据分发类型
            case Enum.ListenViewEnum.BetPos:
                this.BetNumPanel.EnableButton(false);
                let betData: Dto.GameBetDto = new Dto.GameBetDto();
                betData.Amount = this.BetNumPanel.GetBetNum();
                betData.BetPos = data.Value;
                this.CtrlHandler.runWith([Enum.GameViewHandlerEnum.BetPos, betData]);
                break;
            case Enum.ListenViewEnum.AniPlayComplete:
                this.OnAniComplete();
                break;
            case Enum.ListenViewEnum.CloseRule:
                this.RulePanel.Set();
                break;
            case Enum.ListenViewEnum.OpenRule:
                this.RulePanel.Refresh();
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
                this.ShowAlert(1, data);
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
                break;
            // 扩展数据分发类型
            case Enum.GameViewLogicEnum.MsgGameRefreshBtn:
                this.BetPanel.Refresh();
                this.BetNumPanel.Refresh();
            default:
                break;
        }
    }
    /***************游戏方法处理***************/

    /**
     * 侦听游戏命令
     * @param data 
     */
    private OnMessageHandler(data: any): void {
        switch (data.Command) {
            case Enum.GameCommand.MsgGameInit:
                this.OnGameInit(data.Data);
                break;
            case Enum.GameCommand.MsgGameSettleResult:
                this.OnGameSettleResult(data);
                break;

            default:
                break;
        }
    }

    /**
     * 游戏初始化命令处理
     * @param data 游戏初始化数据
     */
    public OnGameInit(data: any): void {
        this.Log(data, "GameInit");
        this.HeadPanel.Set(data, Enum.HeadPanel.GameInit);
        this.BetNumPanel.Set(data, Enum.BetNumPanel.GameInit);
        this.BetPanel.Set(data.PosOdds);
    }

    /**
     * 收到投注结果命令后续界面处理
     * @param data游戏结果数据 
     */
    public OnGameSettleResult(data: any): void {
        this.Log(data, "GameGetResult");
        this.ToyPanel.Set(data);
        this.HeadPanel.Set(data.Data, Enum.HeadPanel.GameSettleResult);
        this.BetNumPanel.Set(data.Data, Enum.BetNumPanel.GameSettleResult);
    }

    /**
     * 动画播放完毕后执行
     * @param data游戏结果数据 
     */
    public OnAniComplete(): void {
        this.HeadPanel.Refresh();
        this.BetNumPanel.Refresh();
        this.BetPanel.Refresh();
    }
}