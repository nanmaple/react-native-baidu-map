/// <reference path="../GameFrame/BaseGameViewLogic/index.ts" />
/// <reference path="./GameBgView/GameBgView.ts" />
class GameViewLogic extends BaseGameViewLogic {
    //组件Demo
    public GameBgView: GameBgView;
    public GameAniView: GameAniView;
    public GameChipsView: GameChipsView;
    public GameHeadView: GameHeadView;
    public GameResAlertView: GameResAlertView;
    public GameRuleView: GameRuleView;

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
        this.alertView = new AlertView();
        this.alertView.ResetScreen();
        this.loadingView = new LoadingView();
        this.loadingView.ResetScreen();
        //加载其他组件
        this.GameBgView = new GameBgView(this.GameViewEventKey);
        this.GameBgView.ResetScreen();
        this.GameAniView = new GameAniView(this.GameViewEventKey);
        this.GameAniView.ResetScreen();
        this.GameChipsView = new GameChipsView(this.GameViewEventKey);
        this.GameChipsView.ResetScreen();
        this.GameHeadView = new GameHeadView(this.GameViewEventKey);
        this.GameHeadView.ResetScreen();
        this.GameResAlertView = new GameResAlertView(this.GameViewEventKey);
        this.GameResAlertView.ResetScreen();
        this.GameRuleView = new GameRuleView(this.GameViewEventKey);
        this.GameRuleView.ResetScreen();

        this.CtrlHandler.runWith([Enum.GameViewHandlerEnum.StartSocket, {}]);

        Laya.loader.load(GameResourceConfig.LoadResSoundConfig,Laya.Handler.create(this,()=>{
            Utils.BackgroundMusic.PlayMusic("sound/bgsound.mp3");
        },null,false));

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
            case Enum.ListenViewEnum.ShootDoor:
                this.CtrlHandler.runWith([Enum.GameViewHandlerEnum.BetPos, null]); 
                break;
            case Enum.ListenViewEnum.GameResult:
                this.CtrlHandler.runWith([Enum.GameViewHandlerEnum.GameResult, null]); 
                break;
            case Enum.ListenViewEnum.ChooseChip:                                                         
                this.CtrlHandler.runWith([Enum.GameViewHandlerEnum.ChooseChip, data.Value]); 
                break;
            case Enum.ListenViewEnum.ChooseMaxChip:                                                         
                this.CtrlHandler.runWith([Enum.GameViewHandlerEnum.ChooseMaxChip, null]); 
                break;
            case Enum.ListenViewEnum.ChooseProp:
                this.CtrlHandler.runWith([Enum.GameViewHandlerEnum.ChooseProp, data.Value]); 
                break;
            case Enum.ListenViewEnum.GetBalance:
                this.CtrlHandler.runWith([Enum.GameViewHandlerEnum.GetBalance, null]); 
                break;
            case Enum.ListenViewEnum.OpenRule:
                this.GameRuleView.Set(true);
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
                this.GameHeadView.Set(data, Enum.GameHeadView.SetBalance);
                break;
            //扩展数据分发类型
            case Enum.GameViewLogicEnum.ChangMoney:
                this.GameHeadView.Set(data, Enum.GameHeadView.SetBalance);
                break;
            case Enum.GameViewLogicEnum.ChooseChip:
                this.GameAniView.Set((data as Dto.BetInfoDto).betAmount, Enum.GameAniView.SetPropAmount);
                this.GameChipsView.Set((data as Dto.BetInfoDto).betTotalAmount, Enum.GameChipsView.SetBetTotalAmount);
                break;
            case Enum.GameViewLogicEnum.ChooseProp:
                this.GameChipsView.Set((data as Dto.BetInfoDto).betTotalAmount, Enum.GameChipsView.SetBetTotalAmount);
                break;
            case Enum.GameViewLogicEnum.ChooseMaxChip:
                this.GameChipsView.Set(data, Enum.GameChipsView.SetMaxChip);
                break;
            case Enum.GameViewLogicEnum.GameResult:
                this.GameChipsView.Refresh();
                this.GameHeadView.Refresh();
                this.GameResAlertView.Refresh();
                break;
            case Enum.GameViewLogicEnum.BetPosError:
                this.ShowAlert(0, data);
                this.GameChipsView.Set(null, Enum.GameChipsView.BetPosError);
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
            case Enum.GameCommand.MsgGameSettleResult:
                this.OnGameResult(data.Data);
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
    public OnGameInit(data: Dto.GameInitDto): void {
        this.Log(data, "GameInit");
        console.log(data);
        this.GameHeadView.Set(data, Enum.GameCommand.MsgGameInit);
        this.GameAniView.Set(data, Enum.GameCommand.MsgGameInit);
        this.GameChipsView.Set(data, Enum.GameCommand.MsgGameInit);
    }

    /**
     * 投注结果命令处理
     * @param data 游戏投注结果
     */
    public OnGameResult(data: Dto.BetResultDto): void {
        this.Log(data, "GameResult");
        console.log(data);
        this.GameHeadView.Set(data, Enum.GameCommand.MsgGameSettleResult);
        this.GameAniView.Set(data, Enum.GameCommand.MsgGameSettleResult);
        this.GameChipsView.Set(data, Enum.GameCommand.MsgGameSettleResult);
        this.GameResAlertView.Set(data, Enum.GameCommand.MsgGameSettleResult);
    }

}