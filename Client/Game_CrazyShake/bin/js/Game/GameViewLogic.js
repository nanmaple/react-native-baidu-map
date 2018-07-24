var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/// <reference path="../GameFrame/BaseGameViewLogic/index.ts" />
/// <reference path="./GameBgView/GameBgView.ts" />
var GameViewLogic = /** @class */ (function (_super) {
    __extends(GameViewLogic, _super);
    function GameViewLogic(Handler) {
        return _super.call(this, Handler) || this;
    }
    /***************游戏基础逻辑***************/
    /**
     * 横竖屏监听
     */
    GameViewLogic.prototype.ResetScreen = function () {
    };
    /***************游戏基本逻辑***************/
    /***************游戏方法处理（方法名不变，修改方法内部逻辑）***************/
    /**
     * 加载游戏主界面
     */
    GameViewLogic.prototype.GameMainUI = function () {
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
        this.RulePanel = new RulePanel(this.GameViewEventKey);
        this.RulePanel.ResetScreen();
        this.ResultPanel = new ResultPanel();
        this.ResultPanel.ResetScreen();
        this.GameRecordView = new GameRecordView(this.GameViewEventKey);
        this.GameRecordView.ResetScreen();
    };
    /**
     * UI监听
     * @param data
     */
    GameViewLogic.prototype.ListenUI = function (data) {
        switch (data.Type) {
            //基本分发数据类型
            case Enum.ListenViewEnum.GameLoadComplate:
                this.CheckLoad();
                break;
            //扩展数据分发类型
            case Enum.ListenViewEnum.BetPos:
                this.BetNumPanel.EnableButton(false);
                var betData = new Dto.GameBetDto();
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
            case Enum.ListenViewEnum.OpenRecord:
                this.GameRecordView.Set(null, Enum.GameRecordView.IsRecordShow);
                break;
            case Enum.ListenViewEnum.GetRecord:
                this.CtrlHandler.runWith([Enum.GameViewHandlerEnum.GetRecord, data]);
                break;
            default:
                break;
        }
    };
    /**
     * 设置分发数据
     * @param type
     * @param data
     */
    GameViewLogic.prototype.SetData = function (type, data) {
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
                break;
            // 扩展数据分发类型
            case Enum.GameViewLogicEnum.StartAni:
                this.OnStartAni(data);
                break;
            case Enum.GameViewLogicEnum.MsgGameRefreshBtn:
                this.BetPanel.Refresh();
                this.BetNumPanel.Refresh();
                break;
            case Enum.GameViewLogicEnum.GetRecord:
                this.GameRecordView.Set(data, Enum.GameRecordView.GetRecordData);
                break;
            default:
                break;
        }
    };
    /***************游戏方法处理***************/
    /**
     * 侦听游戏命令
     * @param data
     */
    GameViewLogic.prototype.OnMessageHandler = function (data) {
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
    };
    /**
     * 游戏初始化命令处理
     * @param data 游戏初始化数据
     */
    GameViewLogic.prototype.OnGameInit = function (data) {
        this.Log(data, "GameInit");
        this.HeadPanel.Set(data, Enum.HeadPanel.GameInit);
        this.BetNumPanel.Set(data, Enum.BetNumPanel.GameInit);
        this.BetPanel.Set(data.PosOdds);
        this.BetPanel.Refresh();
        this.ToyPanel.Set(null, Enum.ToyPanel.GameInit);
    };
    /**
     * 开始游戏动画
     * @param data投注额
     */
    GameViewLogic.prototype.OnStartAni = function (data) {
        this.GameBgView.Set(null);
        this.HeadPanel.Set(data, Enum.HeadPanel.GameStartAni);
        this.ToyPanel.Set(null, Enum.ToyPanel.GameStartAni);
        this.BetNumPanel.Set(null, Enum.BetNumPanel.GameStartAni);
        this.ResultPanel.Set(null, Enum.ResultPanel.GameStartAni);
    };
    /**
     * 收到投注结果命令后续界面处理
     * @param data游戏结果数据
     */
    GameViewLogic.prototype.OnGameSettleResult = function (data) {
        this.Log(data, "GameGetResult");
        this.ToyPanel.Set(data, Enum.ToyPanel.GameSettleResult);
        this.HeadPanel.Set(data.Data, Enum.HeadPanel.GameSettleResult);
        this.BetNumPanel.Set(data.Data, Enum.BetNumPanel.GameSettleResult);
        this.ResultPanel.Set(data.Data, Enum.ResultPanel.GameSettleResult);
    };
    /**
     * 动画播放完毕后执行
     * @param data游戏结果数据
     */
    GameViewLogic.prototype.OnAniComplete = function () {
        this.HeadPanel.Refresh();
        this.BetNumPanel.Refresh();
        this.BetPanel.Refresh();
        this.GameBgView.Refresh();
        this.ResultPanel.Refresh();
        this.ToyPanel.Refresh();
    };
    return GameViewLogic;
}(BaseGameViewLogic));
//# sourceMappingURL=GameViewLogic.js.map