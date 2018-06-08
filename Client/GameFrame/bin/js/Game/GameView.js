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
var GameView = /** @class */ (function (_super) {
    __extends(GameView, _super);
    function GameView(Handler) {
        var _this = _super.call(this) || this;
        _this.Handler = Handler;
        _this.GameLoad();
        return _this;
    }
    /**
     * 横竖屏监听
     */
    GameView.prototype.ListenScreen = function () {
        var isVer = this.ScreenStatus == ScreenStatus.Ver;
        if (this.onLoadSuccess && this.onLoginSucess) {
            this.GameBgUI.ResetScreen(isVer);
        }
    };
    /**
     * UI监听
     * @param data
     */
    GameView.prototype.ListenUI = function (data) {
        switch (data.Type) {
            case Enum.ListenUIEnum.GameLoadComplate:
                this.CheckLoad();
                break;
            case Enum.ListenUIEnum.OnGameBgClick:
                this.ShowAlert(1, "点击关闭");
                break;
            case Enum.ListenUIEnum.BetPos:
                this.Handler.runWith([Enum.GameViewHandlerEnum.BetPos, '']);
                console.log(data.value);
                break;
            default:
                break;
        }
    };
    /**
     * 启动游戏资源页面，开始加载游戏资源
     */
    GameView.prototype.GameLoad = function () {
        var isVer = this.ScreenStatus == ScreenStatus.Ver;
        this.LoadResourceUI = new LoadResourceHV();
        this.LoadResourceUI.ResetScreen(isVer);
        //设置版本控制类型为使用文件名映射的方式
        // Laya.ResourceVersion.type = Laya.ResourceVersion.FILENAME_VERSION;
        //加载版本信息文件
        // Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, ()=>{
        this.LoadResourceUI.StartLoad(GameResourceConfig.LoadResourcesConfig);
        // },null,false)); 
    };
    /**
     * 游戏资源加载完成，检查登录状态
     */
    GameView.prototype.CheckLoad = function () {
        this.onLoadSuccess = true;
        if (this.onLoginSucess) {
            this.LoadResourceUI.Remove();
            //加载主界面
            this.GameMainUI();
        }
    };
    /**
     * 加载游戏主界面
     */
    GameView.prototype.GameMainUI = function () {
        var isVer = this.ScreenStatus == ScreenStatus.Ver;
        this.GameBgUI = new GameBgHV();
        this.GameBgUI.ResetScreen(isVer);
        this.AlertUI = new AlertHV();
        this.AlertUI.ResetScreen(isVer);
        this.LoadingUI = new LoadingHV();
        this.LoadingUI.ResetScreen(isVer);
    };
    /**
     * 设置分发数据
     * @param type
     * @param data
     */
    GameView.prototype.SetData = function (type, data) {
        switch (type) {
            case GameEnum.GameViewEnum.Alert:
                this.ShowAlert(0, data);
                break;
            case GameEnum.GameViewEnum.Error:
                console.log(data);
                break;
            case GameEnum.GameViewEnum.Loading:
                this.LoadingUI.LoadingHandle(data);
                break;
            case GameEnum.GameViewEnum.LoginComplete:
                this.GameLoginComplete();
                break;
            case GameEnum.GameViewEnum.GameData:
                this.OnMessageHandler(data);
                break;
            case GameEnum.GameViewEnum.BetPos:
                console.log(data);
                break;
            default:
                break;
        }
    };
    /**
     * 游戏登录完成，检查游戏资源加载状态
     */
    GameView.prototype.GameLoginComplete = function () {
        this.onLoginSucess = true;
        if (this.onLoadSuccess) {
            this.LoadResourceUI.Remove();
            //加载主界面
            this.GameMainUI();
        }
    };
    /**
     * 侦听游戏命令
     * @param data
     */
    GameView.prototype.OnMessageHandler = function (data) {
        switch (data.Command) {
            case GameEnum.GameCommand.MSG_GAME_INIT:
                this.OnGameInit(data.Data);
                break;
            case GameEnum.GameCommand.MSG_GAME_START:
                this.OnGameStart(data.Data);
                break;
            case GameEnum.GameCommand.MSG_GAME_BETRESULT:
                this.OnBetResult(data.Data);
                break;
            case GameEnum.GameCommand.MSG_GAME_STOPBET:
                this.OnStopBet();
                break;
            case GameEnum.GameCommand.MSG_GAME_GAMERESULT:
                this.OnGameResult(data.Data);
                break;
            case GameEnum.GameCommand.MSG_GAME_SETTLERESULT:
                this.OnSettleResult(data.Data);
                break;
            case GameEnum.GameCommand.MSG_GAME_OTHER:
                this.OnGameOther(data.Data);
                break;
            default:
        }
    };
    GameView.prototype.OnGameInit = function (data) {
    };
    GameView.prototype.OnGameStart = function (data) {
    };
    GameView.prototype.OnBetResult = function (data) {
    };
    GameView.prototype.OnStopBet = function () {
    };
    GameView.prototype.OnGameResult = function (data) {
    };
    GameView.prototype.OnSettleResult = function (data) {
    };
    GameView.prototype.OnGameOther = function (data) {
    };
    return GameView;
}(GameViewManager));
//# sourceMappingURL=GameView.js.map