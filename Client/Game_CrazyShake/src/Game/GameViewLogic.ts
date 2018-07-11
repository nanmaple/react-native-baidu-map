/// <reference path="../GameFrame/BaseGameViewLogic/index.ts" />
/// <reference path="./GameBgView/GameBgView.ts" />
class GameViewLogic extends BaseGameViewLogic {
    //组件Demo
    public GameBgView: GameBgView;
    // public HeadPanel: HeadPanel;
    public FunBalancePanel: FunBalancePanel;
    public ToyPanel: ToyPanel;
    public BetNumPanel: BetNumPanel;
    public BetPanel: BetPanel;
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
        //初始化其他主机
        this.GameBgView = new GameBgView(this.GameViewEventKey);
        this.GameBgView.ResetScreen();
        // this.HeadPanel = new HeadPanel();
        // this.HeadPanel.ResetScreen();
        this.FunBalancePanel = new FunBalancePanel();
        this.FunBalancePanel.ResetScreen();
        this.ToyPanel = new ToyPanel(this.GameViewEventKey);
        this.ToyPanel.ResetScreen();
        this.BetNumPanel = new BetNumPanel();
        this.BetNumPanel.ResetScreen();
        this.BetPanel = new BetPanel(this.GameViewEventKey);
        this.BetPanel.ResetScreen();
        this.CtrlHandler.runWith([Enum.GameViewHandlerEnum.StartSocket, {}]);
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
                let betData: Dto.GameBetDto = new Dto.GameBetDto();
                betData.Amount = this.BetNumPanel.GetBetNum();
                betData.BetPos = data.Value;
                this.CtrlHandler.runWith([Enum.GameViewHandlerEnum.BetPos, betData]);
                break;
            case Enum.ListenViewEnum.AniPlayComplete:
                this.OnChangeShow(data.Value.Data);
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
            // 扩展数据分发类型
            // case Enum.GameViewLogicEnum.StartAni:
            //     this.OnGameBet(data);
            //     break;
            default:
                break;
        }
    }
    /**
     * 侦听游戏命令
     * @param data 
     */
    private OnMessageHandler(data: any): void {
        switch (data.Command) {
            case Enum.GameCommand.MSG_GAME_INIT:
                this.OnGameInit(data.Data);
                break;
            case Enum.GameCommand.MSG_GAME_SETTLERESULT:
                this.OnGameBet(data.Data);
                this.OnGameSettleResult(data);
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
    public OnGameInit(data:any): void {
        this.Log(data, "GameInit");
        this.FunBalancePanel.Set(data,Enum.FunBalancePanel.MSG_GAME_INIT);
        this.BetNumPanel.Set(data,Enum.BetNumPanel.MSG_GAME_INIT);
        this.BetPanel.Set(data.PosOdds,Enum.BetPanel.MSG_GAME_INIT);
    }
    /**
     * 投注成功命令处理
     */
    public OnGameBet(data: any): void {
        this.Log(data, "GameBet");
        this.ToyPanel.Set(null,Enum.ToyPanel.MSG_GAME_BET);
        this.FunBalancePanel.Set(data,Enum.FunBalancePanel.MSG_GAME_BET);
        this.BetPanel.Set(null,Enum.BetPanel.MSG_GAME_BET);
        this.BetNumPanel.Set(null,Enum.BetNumPanel.MSG_GAME_BET);
    }
    /**
     * 收到投注结果命令处理
     * @param data游戏结果数据 
     */
    public OnGameSettleResult(data: any): void {
        this.Log(data, "GameGetResult")
        this.ToyPanel.Set(data,Enum.ToyPanel.MSG_GAME_SETTLERESULT)
    }
    /**
     * 动画播放完毕后执行
     * @param data游戏结果数据 
     */
    public OnChangeShow(data: any): void {
        this.FunBalancePanel.Set(data,Enum.FunBalancePanel.MSG_GAME_AniPlayComplete);
        this.BetNumPanel.Set(data,Enum.BetNumPanel.MSG_GAME_AniPlayComplete)
        this.BetPanel.Set(null,Enum.BetPanel.MSG_GAME_AniPlayComplete);
    }
}