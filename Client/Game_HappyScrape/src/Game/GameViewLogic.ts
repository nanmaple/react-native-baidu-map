/// <reference path="../GameFrame/BaseGameViewLogic/index.ts" />
/// <reference path="./GameBgView/GameBgView.ts" />
class GameViewLogic extends BaseGameViewLogic {
    //组件Demo
    public GameBgView: GameBgView;
    public GameScrapeView: GameScrapeView;
    public GameHeadView: GameHeadView;
    public GameRecordView: GameRecordView;
    public GameRuleView: GameRuleView;
    public GameBetPosView: GameBetPosView;

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
        this.GameBgView = new GameBgView(this.GameViewEventKey);
        this.GameBgView.ResetScreen();
        this.GameScrapeView = new GameScrapeView(this.GameViewEventKey);
        this.GameScrapeView.ResetScreen();
        this.GameHeadView = new GameHeadView(this.GameViewEventKey);
        this.GameHeadView.ResetScreen();
        this.GameRecordView = new GameRecordView(this.GameViewEventKey);
        this.GameRecordView.ResetScreen();
        this.GameRuleView = new GameRuleView(this.GameViewEventKey);
        this.GameRuleView.ResetScreen();
        this.GameBetPosView = new GameBetPosView(this.GameViewEventKey);
        this.GameBetPosView.ResetScreen();
        //启动游戏socket
        this.CtrlHandler.runWith([Enum.GameViewHandlerEnum.StartSocket, {}]);
        //加载音乐资源
        Laya.loader.load(GameResourceConfig.LoadResSoundConfig,Laya.Handler.create(this,()=>{
            Utils.BackgroundMusic.PlayMusic("sound/bg.mp3");
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
            case Enum.ListenViewEnum.BetPos:
                this.CtrlHandler.runWith([Enum.GameViewHandlerEnum.BetPos, null]); 
                break;
            case Enum.ListenViewEnum.GetBalance:
                this.CtrlHandler.runWith([Enum.GameViewHandlerEnum.GetBalance, null]); 
                break;
            case Enum.ListenViewEnum.MaxBetAmount:
                this.CtrlHandler.runWith([Enum.GameViewHandlerEnum.MaxBetAmount, null]); 
                break;
            case Enum.ListenViewEnum.SetBetAmount:
                this.CtrlHandler.runWith([Enum.GameViewHandlerEnum.SetBetAmount, data.Value]); 
                break;
            case Enum.ListenViewEnum.OpenRule:
                this.GameRuleView.Set(true);
                break;
            case Enum.ListenViewEnum.OpenRecord:
                this.GameRecordView.Set(null, Enum.GameRecordView.IsRecordShow);
                break;
            case Enum.ListenViewEnum.GetRecord:
                this.CtrlHandler.runWith([Enum.GameViewHandlerEnum.GetRecord, data.Value]); 
                break;   
            case Enum.ListenViewEnum.GameResult:
                this.GameScrapeView.Set(null, Enum.GameScrapeView.GameResult);
                this.GameHeadView.Refresh();
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
            //↓↓↓↓基本分发数据类型↓↓↓↓
            case BaseEnum.GameViewLogicEnum.Alert:
                this.ShowAlert(0, data);
                break;
            case BaseEnum.GameViewLogicEnum.Error:
                this.ShowAlert(0, data);
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
            //↑↑↑↑↑↑↑↑
            //扩展数据分发类型
            case Enum.GameViewLogicEnum.ChangMoney:
                this.GameHeadView.Set(data, Enum.GameHeadView.SetBalance);
                break;
            case Enum.GameViewLogicEnum.GetRecord:
                this.GameRecordView.Set(data, Enum.GameRecordView.GetRecordData);
                break;
            case Enum.GameViewLogicEnum.MaxBetAmount:
                this.GameBetPosView.Set(data, Enum.GameBetPosView.MaxBetAmount);
                break;
            case Enum.GameViewLogicEnum.BetPosError:
                this.ShowAlert(0, data);
                this.GameBetPosView.Refresh();
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
            case Enum.GameCommand.MsgGameSettleResult:
                this.OnSettleResult(data.Data);
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
        this.GameHeadView.Set(data, Enum.GameCommand.MsgGameInit);
        this.GameScrapeView.Set(data, Enum.GameCommand.MsgGameInit);
        this.GameBetPosView.Set(data, Enum.GameCommand.MsgGameInit);
    }

    /**
     * 结算命令
     * @param data 游戏结算数据
     */
    public OnSettleResult(data: Dto.GameResultDto): void {
        this.Log(data, "SettleResult");
        this.GameHeadView.Set(data, Enum.GameCommand.MsgGameSettleResult);
        this.GameScrapeView.Set(data, Enum.GameCommand.MsgGameSettleResult);
        this.GameBetPosView.Set(data, Enum.GameCommand.MsgGameSettleResult);
    }

}