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
/// <reference path="./OperateView/OperateView.ts" />
/// <reference path="./RouletteView/RouletteView.ts" />
/// <reference path="./ChipView/ChipView.ts" />
/// <reference path="./BetBarView/BetBarView.ts" />
/// <reference path="./HeadView/HeadView.ts" />
/// <reference path="./InternalView/InternalView.ts" />
var GameViewLogic = /** @class */ (function (_super) {
    __extends(GameViewLogic, _super);
    function GameViewLogic(Handler) {
        var _this = _super.call(this) || this;
        _this.CtrlHandler = Handler;
        _this.GameLoad();
        return _this;
    }
    /***************游戏基础逻辑***************/
    /**
     * 横竖屏监听
     */
    GameViewLogic.prototype.ResetScreen = function () {
    };
    /**
    * 启动游戏资源页面，开始加载游戏资源
    */
    GameViewLogic.prototype.GameLoad = function () {
        this.alertView = new AlertView();
        this.loadingView = new LoadingView();
        this.gameLoadView = new GameLoadView(this.GameViewEventKey);
        this.gameLoadView.ResetScreen();
        //设置版本控制类型为使用文件名映射的方式
        // Laya.ResourceVersion.type = Laya.ResourceVersion.FILENAME_VERSION;
        //加载版本信息文件
        // Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, ()=>{
        this.gameLoadView.StartLoad(GameResourceConfig.LoadResourcesConfig);
        // },null,false)); 
    };
    /**
     * 游戏资源加载完成，检查登录状态
     */
    GameViewLogic.prototype.CheckLoad = function () {
        this.isLoadSuccess = true;
        if (this.isLoginSucess) {
            this.gameLoadView.Remove();
            //加载主界面
            this.GameMainUI();
        }
    };
    /**
     * 游戏登录完成，检查游戏资源加载状态
     */
    GameViewLogic.prototype.GameLoginComplete = function () {
        this.isLoginSucess = true;
        if (this.isLoadSuccess) {
            this.gameLoadView.Remove();
            //加载主界面
            this.GameMainUI();
        }
    };
    /**
     * 加载游戏主界面
     */
    GameViewLogic.prototype.GameMainUI = function () {
        //初始化基本alert,loading组件的界面
        this.alertView.ResetScreen();
        this.loadingView.ResetScreen();
        //加载其他组件
        this.OperateView = new OperateView(this.GameViewEventKey);
        this.OperateView.ResetScreen();
        this.RouletteView = new RouletteView(this.GameViewEventKey);
        this.RouletteView.ResetScreen();
        this.ChipView = new ChipView(this.GameViewEventKey);
        this.ChipView.ResetScreen();
        this.BetBarView = new BetBarView(this.GameViewEventKey);
        this.BetBarView.ResetScreen();
        this.HeadView = new HeadView(this.GameViewEventKey);
        this.HeadView.ResetScreen();
        this.InternalView = new InternalView(this.GameViewEventKey);
        this.InternalView.ResetScreen();
        this.RuleView = new RuleView();
        this.RuleView.ResetScreen();
        // SoundManage.PlayMusic(SoundConfig.SounRes.GameBg);
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
            //打开规则
            case Enum.ListenViewEnum.ShowRule:
                this.RuleView.Set(null);
                break;
            //修改投注基数
            case Enum.ListenViewEnum.ChangBaseAmount:
                this.CtrlHandler.runWith([Enum.GameViewHandlerEnum.ChangBaseAmount, data.Value]);
                break;
            //投注
            case Enum.ListenViewEnum.BetPos:
                this.CtrlHandler.runWith([Enum.GameViewHandlerEnum.BetPos, data.Value]);
                break;
            //开始游戏
            case Enum.ListenViewEnum.GameStart:
                this.CtrlHandler.runWith([Enum.GameViewHandlerEnum.GameStart, null]);
                break;
            //收取分数
            case Enum.ListenViewEnum.GatherFraction:
                this.CtrlHandler.runWith([Enum.GameViewHandlerEnum.GatherFraction, null]);
                break;
            //游戏滚动结束
            case Enum.ListenViewEnum.GameEnd:
                this.CtrlHandler.runWith([Enum.GameViewHandlerEnum.GameEnd, data.Value]);
                break;
            //清除投注
            case Enum.ListenViewEnum.ClearBet:
                this.BetBarView.Set(null, Enum.BetBarView.ClearAll);
                this.CtrlHandler.runWith([Enum.GameViewHandlerEnum.ClearBet, data.Value]);
                break;
            //全部投注位置+1
            case Enum.ListenViewEnum.AddAll:
                this.BetBarView.Set(null, Enum.BetBarView.AddAll);
                break;
            //添加竞猜筹码
            case Enum.ListenViewEnum.AddGuessSum:
                this.CtrlHandler.runWith([Enum.GameViewHandlerEnum.AddGuessSum, data.Value]);
                break;
            //减小竞猜筹码
            case Enum.ListenViewEnum.ReduceGuessSum:
                this.CtrlHandler.runWith([Enum.GameViewHandlerEnum.ReduceGuessSum, data.Value]);
                break;
            //猜大小开始
            case Enum.ListenViewEnum.GuessSize:
                this.CtrlHandler.runWith([Enum.GameViewHandlerEnum.GuessSize, data.Value]);
                break;
            //随机数滚动结束
            case Enum.ListenViewEnum.RandomEndm:
                this.CtrlHandler.runWith([Enum.GameViewHandlerEnum.RandomEnd, data.Value]);
                break;
            //获取最新余额
            case Enum.ListenViewEnum.GetBalance:
                this.CtrlHandler.runWith([Enum.GameViewHandlerEnum.GetBalance, null]);
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
                this.HeadView.Set(data, Enum.HeadView.Chang);
                break;
            //扩展数据分发类型
            //设置当前已投注金额
            case Enum.GameViewLogicEnum.ChangeCurrBet:
                this.InternalView.Set(data, Enum.InternalView.SetCurrentBet);
                break;
            //投注成功
            case Enum.GameViewLogicEnum.BetSuccess:
                this.BetBarView.Set(data, Enum.BetBarView.SetBet);
                break;
            //修改投注基数
            case Enum.GameViewLogicEnum.ChangBaseAmount:
                this.ChipView.Set(data, Enum.ChipView.SetBaseAmonut);
                break;
            //修改游戏状态
            case Enum.GameViewLogicEnum.ChangGameStatus:
                this.OperateView.Set(data);
                this.BetBarView.Set(data, Enum.BetBarView.ChangGameStatus);
                this.ChipView.Set(data, Enum.ChipView.ChangGameStatus);
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
            case Enum.GameCommand.MsgGameStart:
                break;
            case Enum.GameCommand.MsgGameBetResult:
                break;
            case Enum.GameCommand.MsgGameStopBet:
                break;
            case Enum.GameCommand.MsgGameGameResult:
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
    };
    /***************游戏具体逻辑***************/
    /**
     * 游戏初始化命令处理
     * @param data 游戏初始化数据
     */
    GameViewLogic.prototype.OnGameInit = function (data) {
        this.Log(data, "GameInit");
        var dto = new Dto.AmountDto;
        dto.balance = data.Balance;
        this.HeadView.Set(dto, Enum.HeadView.Init);
        this.ChipView.Set(data.BaseAmounts, Enum.ChipView.Init);
    };
    /**
     * 结算命令
     * @param data 游戏结算数据
     */
    GameViewLogic.prototype.OnSettleResult = function (data) {
        this.Log(data, "SettleResult");
        if (data.Status == Enum.BetResultCode.Success) {
            //是否是猜大小
            if (data.GuessResult) {
                this.InternalView.Set(data.Result, Enum.InternalView.RandomAnimated);
            }
            else {
                var dto = new Dto.AmountDto();
                dto.balance = data.Balance - data.WinAmount;
                this.HeadView.Set(dto, Enum.HeadView.Chang);
                this.RouletteView.Set(data.Result);
            }
        }
        else {
            this.ShowAlert(0, Enum.BetResultCode[data.Status]);
            this.OperateView.Set(Enum.GameStatus.Default);
            this.BetBarView.Set(Enum.GameStatus.Default, Enum.BetBarView.ChangGameStatus);
            this.ChipView.Set(Enum.GameStatus.Default, Enum.ChipView.ChangGameStatus);
        }
    };
    GameViewLogic.prototype.OnGameOther = function (data) {
    };
    return GameViewLogic;
}(BaseGameViewLogic));
//# sourceMappingURL=GameViewLogic.js.map