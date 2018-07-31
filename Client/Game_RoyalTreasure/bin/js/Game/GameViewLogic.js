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
        this.HeadPanel = new HeadPanel(this.GameViewEventKey);
        this.HeadPanel.ResetScreen();
        this.TreasurePanel = new TreasurePanel(this.GameViewEventKey);
        this.TreasurePanel.ResetScreen();
        this.FootPanel = new FootPanel(this.GameViewEventKey);
        this.FootPanel.ResetScreen();
        this.ToyPanel = new ToyPanel(this.GameViewEventKey);
        this.ToyPanel.ResetScreen();
        this.CtrlHandler.runWith([Enum.GameViewHandlerEnum.StartSocket, {}]);
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
            // case Enum.ListenViewEnum.ShowRule:
            //     this.RuleUIHV.ShowRule();
            //     break;
            case Enum.ListenViewEnum.BetPos:
                var betData = new Dto.GameBetDto();
                betData.Amount = this.FootPanel.BetNumber();
                this.ToyPanel.DigWhere(data.Value);
                this.CtrlHandler.runWith([Enum.GameViewHandlerEnum.BetPos, betData]);
                break;
            case Enum.ListenViewEnum.NextTime:
                this.OnNextTime();
                break;
            case Enum.ListenViewEnum.DigAniComplete:
                this.OnDigAniComplete();
                break;
            // case Enum.ListenViewEnum.GameAniOver:
            //     this.OnGameAniOver();
            // break;
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
            //扩展数据分发类型
            case Enum.GameViewLogicEnum.BetPos:
                this.OnBetPos(data);
                break;
            case Enum.GameViewLogicEnum.GameRefreshBtn:
                this.OnGameRefreshBtn();
                break;
            case Enum.GameViewLogicEnum.SetRecord:
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
        this.HeadPanel.Set(data.Balance, Enum.HeadPanel.GameInit);
        this.FootPanel.Set(data, Enum.FootPanel.GameInit);
        this.TreasurePanel.Set(data, Enum.TreasurePanel.GameInit);
    };
    /**
     * 投注按钮按下后
     * @param data
     */
    GameViewLogic.prototype.OnBetPos = function (data) {
        this.TreasurePanel.Set(data, Enum.TreasurePanel.GameBetPos);
        this.FootPanel.Set(null, Enum.FootPanel.GameBetPos);
    };
    /**
     * 结算命令
     * @param data 游戏结算数据
     */
    GameViewLogic.prototype.OnSettleResult = function (data) {
        this.Log(data, "SettleResult");
        //更改余额显示
        this.HeadPanel.Set(data, Enum.HeadPanel.GameSettleResult);
        //开始挖矿
        this.ToyPanel.Set(data.WinAmount, Enum.ToyPanel.GameSettleResult);
        //预设置最大投注额
        this.FootPanel.Set(data.Balance, Enum.FootPanel.GameSettleResult);
        //预设置所得矿石结果
        this.TreasurePanel.Set(data, Enum.TreasurePanel.GameSettleResult);
    };
    GameViewLogic.prototype.OnDigAniComplete = function () {
        this.TreasurePanel.Set(null, Enum.TreasurePanel.GameDigAniComplete);
    };
    GameViewLogic.prototype.OnNextTime = function () {
        this.HeadPanel.Set(null, Enum.HeadPanel.GameNextTime);
        this.FootPanel.Set(null, Enum.FootPanel.GameNextTime);
        this.ToyPanel.Set(null, Enum.ToyPanel.GameNextTime);
        this.TreasurePanel.Set(null, Enum.TreasurePanel.GameNextTime);
    };
    /**
     * 刷新按钮
     */
    GameViewLogic.prototype.OnGameRefreshBtn = function () {
        this.TreasurePanel.Set(null, Enum.TreasurePanel.GameRefreshBtn);
        this.FootPanel.Set(null, Enum.FootPanel.GameRefreshBtn);
    };
    return GameViewLogic;
}(BaseGameViewLogic));
//# sourceMappingURL=GameViewLogic.js.map