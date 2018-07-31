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
var GameViewLogic = (function (_super) {
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
    /**
     * 加载游戏主界面
     */
    GameViewLogic.prototype.GameMainUI = function () {
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
        Laya.loader.load(GameResourceConfig.LoadResSoundConfig, Laya.Handler.create(this, function () {
            Utils.BackgroundMusic.PlayMusic("sound/bg.mp3");
        }, null, false));
    };
    /**
     * UI监听
     * @param data
     */
    GameViewLogic.prototype.ListenUI = function (data) {
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
    };
    /**
     * 设置分发数据
     * @param type
     * @param data
     */
    GameViewLogic.prototype.SetData = function (type, data) {
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
    };
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
                this.OnSettleResult(data.Data);
                break;
            default:
                break;
        }
    };
    /***************游戏具体逻辑***************/
    /**
     * 游戏初始化命令处理
     * @param data 游戏初始化数据
     */
    GameViewLogic.prototype.OnGameInit = function (data) {
        this.Log(data, "GameInit");
        this.GameHeadView.Set(data, Enum.GameCommand.MsgGameInit);
        this.GameScrapeView.Set(data, Enum.GameCommand.MsgGameInit);
        this.GameBetPosView.Set(data, Enum.GameCommand.MsgGameInit);
    };
    /**
     * 结算命令
     * @param data 游戏结算数据
     */
    GameViewLogic.prototype.OnSettleResult = function (data) {
        this.Log(data, "SettleResult");
        this.GameHeadView.Set(data, Enum.GameCommand.MsgGameSettleResult);
        this.GameScrapeView.Set(data, Enum.GameCommand.MsgGameSettleResult);
        this.GameBetPosView.Set(data, Enum.GameCommand.MsgGameSettleResult);
    };
    return GameViewLogic;
}(BaseGameViewLogic));
//# sourceMappingURL=GameViewLogic.js.map