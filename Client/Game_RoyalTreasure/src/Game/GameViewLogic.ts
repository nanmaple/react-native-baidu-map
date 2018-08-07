/// <reference path="../GameFrame/BaseGameViewLogic/index.ts" />
/// <reference path="./GameBgView/GameBgView.ts" />
class GameViewLogic extends BaseGameViewLogic {
    //组件Demo
    public GameBgView: GameBgView;
    public HeadPanel: HeadPanel;
    public TreasurePanel: TreasurePanel;
    public FootPanel: FootPanel;
    public ToyPanel: ToyPanel;
    public RulePanel:RulePanel;
    public GameRecordView:GameRecordView;
    public isAuto:boolean=false;
    public autoDigTimes:number;
    public isStop:boolean=false;
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
        this.HeadPanel = new HeadPanel(this.GameViewEventKey);
        this.HeadPanel.ResetScreen();
        this.TreasurePanel = new TreasurePanel(this.GameViewEventKey);
        this.TreasurePanel.ResetScreen();
        this.FootPanel = new FootPanel(this.GameViewEventKey);
        this.FootPanel.ResetScreen();
        this.ToyPanel = new ToyPanel(this.GameViewEventKey);
        this.ToyPanel.ResetScreen();
        this.GameRecordView = new GameRecordView(this.GameViewEventKey);
        this.GameRecordView.ResetScreen();
        this.RulePanel = new RulePanel(this.GameViewEventKey);
        this.RulePanel.ResetScreen();
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
            case Enum.ListenViewEnum.CloseRule:
                this.RulePanel.Set();
                break;
            case Enum.ListenViewEnum.OpenRule:
                this.RulePanel.Refresh();
                break;
                case Enum.ListenViewEnum.OpenRecord:
                this.GameRecordView.Set(null, Enum.GameRecordView.IsRecordShow);
                break;
            case Enum.ListenViewEnum.GetRecord:
                this.CtrlHandler.runWith([Enum.GameViewHandlerEnum.GetRecord, data]);
                break;
            case Enum.ListenViewEnum.BetPos:
                let betData: Dto.GameBetDto = new Dto.GameBetDto();
                betData.Amount = this.FootPanel.BetNumber();
                this.ToyPanel.DigWhere(data.Value);
                this.CtrlHandler.runWith([Enum.GameViewHandlerEnum.BetPos, betData]);
                break;
                case Enum.ListenViewEnum.StopAutoDig:
                this.isStop=true;
                break;
            case Enum.ListenViewEnum.AutoBet:
                if(this.isStop){
                    this.OnAutoBetComplete();
                    return
                }
                this.autoDigTimes=data.Value.digTime;
                this.isAuto=true;
                let betIndex: Dto.GameBetDto = new Dto.GameBetDto();
                betIndex.Amount = this.FootPanel.BetNumber();
                betIndex.digTimes=data.Value.digTime;
                betIndex.nowTime=data.Value.nowTime;
                this.ToyPanel.DigWhere(data.Value);
                this.TreasurePanel.MineWhere(data.Value);
                this.CtrlHandler.runWith([Enum.GameViewHandlerEnum.AutoBet, betIndex]);
            break;
            case Enum.ListenViewEnum.NextTime:
                this.OnNextTime();            
                break;
            case Enum.ListenViewEnum.DigAniComplete:
                this.OnDigAniComplete();
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
            case Enum.GameViewLogicEnum.BetPos:
                this.OnBetPos(data)
                break;
            case Enum.GameViewLogicEnum.GameRefreshBtn:
                this.OnGameRefreshBtn();
                break;
            case Enum.GameViewLogicEnum.SetRecord:
                break;
                case Enum.GameViewLogicEnum.AutoBetComplete:
                this.OnAutoBetComplete();
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
    public OnGameInit(data: any): void {
        this.Log(data, "GameInit");
        this.HeadPanel.Set(data.Balance, Enum.HeadPanel.GameInit);
        this.FootPanel.Set(data, Enum.FootPanel.GameInit);
        this.TreasurePanel.Set(data, Enum.TreasurePanel.GameInit);
    }

    /**
     * 投注按钮按下后
     * @param data 
     */
    public OnBetPos(data:any): void {
        this.TreasurePanel.Set(data, Enum.TreasurePanel.GameBetPos);
        this.FootPanel.Set(data, Enum.FootPanel.GameBetPos);
    }
    
    /**
     * 结算命令
     * @param data 游戏结算数据
     */
    public OnSettleResult(data: any): void {
        this.Log(data, "SettleResult");
        //更改余额显示
        this.HeadPanel.Set(data, Enum.HeadPanel.GameSettleResult);
        //开始挖矿
        this.ToyPanel.Set(data.WinAmount, Enum.ToyPanel.GameSettleResult);
        //预设置最大投注额
        this.FootPanel.Set(data.Balance,Enum.FootPanel.GameSettleResult);
        //预设置所得矿石结果
        this.TreasurePanel.Set(data,Enum.TreasurePanel.GameSettleResult);
    }

    
    /**
     * 挖掘动作完成
     */
    public OnDigAniComplete() {
        this.TreasurePanel.Set(null,Enum.TreasurePanel.GameDigAniComplete)
    }

    /**
     * 下一局
     */
    public OnNextTime():void{
        this.HeadPanel.Set(null,Enum.HeadPanel.GameNextTime);
        this.ToyPanel.Set(null,Enum.ToyPanel.GameNextTime)
        this.TreasurePanel.Set(null,Enum.TreasurePanel.GameNextTime)
        if(this.isAuto)this.FootPanel.Set(this.autoDigTimes,Enum.FootPanel.GameNextTime);
        else this.FootPanel.Set(null,Enum.FootPanel.GameNextTime)
    }

    /**
     * 自动挖矿结束
     */
    public OnAutoBetComplete(){
        this.isStop=false;
        this.isAuto=false;
        this.autoDigTimes=0;
        this.FootPanel.Set(null,Enum.FootPanel.AutoDigOver);
    }

    /**
     * 刷新按钮
     */
    public OnGameRefreshBtn(): void {
        this.TreasurePanel.Set(null, Enum.TreasurePanel.GameRefreshBtn);
        this.FootPanel.Set(null, Enum.FootPanel.GameRefreshBtn);
    }
}