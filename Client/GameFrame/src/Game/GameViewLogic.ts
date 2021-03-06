/// <reference path="../GameFrame/BaseGameViewLogic/index.ts" />
/// <reference path="./GameBgView/GameBgView.ts" />
class GameViewLogic extends BaseGameViewLogic {
    //组件Demo
    public GameBgView: GameBgView;

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
        
        //启动游戏socket
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
            case Enum.ListenViewEnum.BetPos:
                this.CtrlHandler.runWith([Enum.GameViewHandlerEnum.BetPos, null]); 
                break;
            case Enum.ListenViewEnum.GetBalance:
                this.CtrlHandler.runWith([Enum.GameViewHandlerEnum.GetBalance, null]); 
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
            //↑↑↑↑↑↑↑↑
            //扩展数据分发类型
            case Enum.GameViewLogicEnum.ChangMoney:
                break;
            case Enum.GameViewLogicEnum.GetMemberInfo:
                break;
            case Enum.GameViewLogicEnum.BetPos:
                break;
            case Enum.GameViewLogicEnum.GetRecord:
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
    public OnGameInit(data: Dto.GameInitDto): void {
        this.Log(data, "GameInit");

    }

    /**
     * 游戏开始命令处理
     * @param data 游戏开始数据
     */
    public OnGameStart(data: Dto.GameStartDto): void {
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
    public OnGameResult(data: Dto.GameEndDto): void {
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