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
        this.GameRecordView = new GameRecordView(this.GameViewEventKey);
        this.GameRecordView.ResetScreen();
        this.CtrlHandler.runWith([Enum.GameViewHandlerEnum.StartSocket, {}]);
        Laya.loader.load(GameResourceConfig.LoadResSoundConfig, Laya.Handler.create(this, function () {
            Utils.BackgroundMusic.PlayMusic("sound/bgsound.mp3");
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
            case Enum.ListenViewEnum.OpenRecord:
                this.GameRecordView.Set(null, Enum.GameRecordView.IsRecordShow);
                break;
            case Enum.ListenViewEnum.GetRecord:
                this.CtrlHandler.runWith([Enum.GameViewHandlerEnum.GetRecord, data.Value]);
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
                this.GameHeadView.Set(data, Enum.GameHeadView.SetBalance);
                break;
            //扩展数据分发类型
            case Enum.GameViewLogicEnum.ChangMoney:
                this.GameHeadView.Set(data, Enum.GameHeadView.SetBalance);
                break;
            case Enum.GameViewLogicEnum.ChooseChip:
                this.GameAniView.Set(data.betAmount, Enum.GameAniView.SetPropAmount);
                this.GameChipsView.Set(data.betTotalAmount, Enum.GameChipsView.SetBetTotalAmount);
                break;
            case Enum.GameViewLogicEnum.ChooseProp:
                this.GameChipsView.Set(data.betTotalAmount, Enum.GameChipsView.SetBetTotalAmount);
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
                break;
            case Enum.GameViewLogicEnum.GetRecord:
                this.GameRecordView.Set(data, Enum.GameRecordView.GetRecordData);
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
                this.OnGameResult(data.Data);
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
        console.log(data);
        this.GameHeadView.Set(data, Enum.GameCommand.MsgGameInit);
        this.GameAniView.Set(data, Enum.GameCommand.MsgGameInit);
        this.GameChipsView.Set(data, Enum.GameCommand.MsgGameInit);
    };
    /**
     * 投注结果命令处理
     * @param data 游戏投注结果
     */
    GameViewLogic.prototype.OnGameResult = function (data) {
        this.Log(data, "GameResult");
        console.log(data);
        this.GameHeadView.Set(data, Enum.GameCommand.MsgGameSettleResult);
        this.GameAniView.Set(data, Enum.GameCommand.MsgGameSettleResult);
        this.GameChipsView.Set(data, Enum.GameCommand.MsgGameSettleResult);
        this.GameResAlertView.Set(data, Enum.GameCommand.MsgGameSettleResult);
    };
    return GameViewLogic;
}(BaseGameViewLogic));
//# sourceMappingURL=GameViewLogic.js.map