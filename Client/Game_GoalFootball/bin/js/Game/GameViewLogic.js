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
        this.CtrlHandler.runWith([Enum.GameViewHandlerEnum.StartSocket, {}]);
    };
    /**
     * UI监听
     * @param data
     */
    GameViewLogic.prototype.ListenUI = function (data) {
        var betAmount = 0; //投注金额
        var propAmount = 0; //使用道具金额
        switch (data.Type) {
            case Enum.ListenViewEnum.GameLoadComplate:
                this.CheckLoad();
                break;
            case Enum.ListenViewEnum.ShootDoor:
                betAmount = this.GameChipsView.GetBetAmount();
                propAmount = this.GameAniView.GetPropUseAmount();
                var balance = this.GameHeadView.GetBalance();
                var gameBet = new Dto.GameBetDto();
                gameBet.Amount = betAmount;
                gameBet.Props = this.GameAniView.GetPropUseStatus();
                this.CtrlHandler.runWith([Enum.GameViewHandlerEnum.BetPos, gameBet]);
                this.GameHeadView.SetBalance(balance - betAmount - propAmount);
                break;
            case Enum.ListenViewEnum.GameResult:
                this.GameChipsView.Reset();
                this.GameHeadView.Refresh();
                break;
            case Enum.ListenViewEnum.ChooseChip:
                betAmount = this.GameChipsView.GetBetAmount();
                this.GameAniView.SetPropAmount(betAmount);
                propAmount = this.GameAniView.GetPropUseAmount();
                this.GameChipsView.SetBetTotalAmount(betAmount, propAmount);
                break;
            case Enum.ListenViewEnum.ChooseProp:
                betAmount = this.GameChipsView.GetBetAmount();
                propAmount = this.GameAniView.GetPropUseAmount();
                this.GameChipsView.SetBetTotalAmount(betAmount, propAmount);
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
            case Enum.GameViewLogicEnum.ChangMoney:
                break;
            case Enum.GameViewLogicEnum.GetMemberInfo:
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
            case Enum.GameCommand.MSG_GAME_INIT:
                this.OnGameInit(data.Data);
                break;
            case Enum.GameCommand.MSG_GAME_SETTLERESULT:
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
        this.GameHeadView.Set({ Type: Enum.GameCommand.MSG_GAME_INIT, Data: data });
        this.GameAniView.Set({ Type: Enum.GameCommand.MSG_GAME_INIT, Data: data });
        this.GameChipsView.Set({ Type: Enum.GameCommand.MSG_GAME_INIT, Data: data });
    };
    /**
     * 投注结果命令处理
     * @param data 游戏投注结果
     */
    GameViewLogic.prototype.OnGameResult = function (data) {
        this.Log(data, "GameResult");
        console.log(data);
        this.GameHeadView.Set({ Type: Enum.GameCommand.MSG_GAME_SETTLERESULT, Data: data });
        this.GameAniView.Set({ Type: Enum.GameCommand.MSG_GAME_SETTLERESULT, Data: data });
        this.GameChipsView.Set({ Type: Enum.GameCommand.MSG_GAME_SETTLERESULT, Data: data });
    };
    return GameViewLogic;
}(BaseGameViewLogic));
//# sourceMappingURL=GameViewLogic.js.map