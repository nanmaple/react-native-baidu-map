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
var GameView = (function (_super) {
    __extends(GameView, _super);
    function GameView() {
        var _this = _super.call(this) || this;
        _this.onLoginSucess = false; //登录是否成功
        _this.onLoadSuccess = false; //加载资源是否完成
        _this.progress = 0; //加载资源进程
        _this.GameLoad();
        document.addEventListener("GameUI", function (data) {
            _this.ListenUI(data.Data);
        });
        return _this;
    }
    /**
     * 横竖屏切换控制
     */
    GameView.prototype.ChangeModeUI = function () {
        if (GameConfig.ScreenMode == ScreenStatus.Ver) {
            this.VerUI();
        }
        else {
            this.HorUI();
        }
    };
    /**
     * 横竖屏监听
     */
    GameView.prototype.ListenScreen = function () {
        var _this = this;
        document.addEventListener("screenMode", function () {
            _this.ChangeModeUI();
        });
    };
    /**
     * UI监听
     * @param data
     */
    GameView.prototype.ListenUI = function (data) {
        switch (data.Type) {
            case "OnClickBg":
                this.ShowAlert(0, "点击关闭");
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
    GameView.prototype.SetData = function (type, data) {
        switch (type) {
            case Enum.GameCommand.MSG_GAME_INIT:
                break;
            default:
                break;
        }
    };
    /**
     * 隐藏弹出提示
     */
    GameView.prototype.HideAlert = function () {
        this.AlertUI.HideAlert();
    };
    /**
     * 隐藏loading
     */
    GameView.prototype.HideLoading = function () {
        this.LoadingUI.HideLoading();
    };
    /**
     * 隐藏资源加载
     */
    GameView.prototype.HideLoadResource = function () {
        this.LoadResourceUI.HideLoadRes();
    };
    /**
     * 显示弹出提示
     * @param type 类型
     * @param msg 内容
     */
    GameView.prototype.ShowAlert = function (type, msg) {
        this.AlertUI.ShowAlert(type, msg);
    };
    /**
     * 显示loading
     * @param msg 内容
     */
    GameView.prototype.ShowLoading = function (msg) {
        this.LoadingUI.ShowLoading(msg);
    };
    /**
     * 显示资源加载
     */
    GameView.prototype.ShowLoadResource = function () {
        this.LoadResourceUI.ShowLoadRes();
    };
    /**
     * 游戏资源加载
     */
    GameView.prototype.GameLoad = function () {
        var _this = this;
        document.addEventListener("screenMode", function () {
            if (GameConfig.ScreenMode == ScreenStatus.Ver) {
                _this.LoadResourceUI = new LoadResourceVer();
                _this.LoadResourceUI.Set(_this.progress);
            }
            else {
                _this.LoadResourceUI = new LoadResourceHor();
                _this.LoadResourceUI.Set(_this.progress);
            }
            Laya.stage.addChild(_this.LoadResourceUI.GetUI());
        });
        if (GameConfig.ScreenMode == ScreenStatus.Ver) {
            this.LoadResourceUI = new LoadResourceVer();
        }
        else {
            this.LoadResourceUI = new LoadResourceHor();
        }
        Laya.stage.addChild(this.LoadResourceUI.GetUI());
        var dataArr = GameResourceConfig.LoadResourcesConfig;
        Laya.loader.load(dataArr, Laya.Handler.create(this, this.onLoadResource), Laya.Handler.create(this, this.onProgress, null, false));
    };
    /**
     * 加载游戏资源的进度回调
     * @param progress 进度
     */
    GameView.prototype.onProgress = function (progress) {
        this.progress = progress;
        this.LoadResourceUI.Set(this.progress);
    };
    /**
     * 游戏资源加载完成
     */
    GameView.prototype.onLoadResource = function () {
        this.onLoadSuccess = true;
        console.log(2);
        if (this.onLoginSucess) {
            this.ChangeModeUI();
            this.ListenScreen();
        }
    };
    /**
     * 切换横屏
     */
    GameView.prototype.HorUI = function () {
        //添加背景 
        this.BgUI = new GameBgHor();
        Laya.stage.addChild(this.BgUI.GetUI());
        this.AlertUI = new AlertHor();
        Laya.stage.addChild(this.AlertUI.GetUI());
    };
    /**
     * 切换竖屏
     */
    GameView.prototype.VerUI = function () {
        //添加背景 
        this.BgUI = new GameBgVer();
        Laya.stage.addChild(this.BgUI.GetUI());
        this.AlertUI = new AlertVer();
        Laya.stage.addChild(this.AlertUI.GetUI());
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
    return GameView;
}(GameViewManager));
//# sourceMappingURL=GameView.js.map