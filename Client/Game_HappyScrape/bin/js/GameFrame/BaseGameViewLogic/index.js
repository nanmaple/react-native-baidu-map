/// <reference path="./AlertView/index.ts"/>
/// <reference path="./GameLoadView/index.ts"/>
/// <reference path="./LoadingView/index.ts"/>
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
/**
 * 屏幕横竖屏状态
 */
var ScreenStatus;
(function (ScreenStatus) {
    ScreenStatus[ScreenStatus["Ver"] = 0] = "Ver";
    ScreenStatus[ScreenStatus["Hor"] = 1] = "Hor";
})(ScreenStatus || (ScreenStatus = {}));
/**
 * 游戏界面管理抽象类
 */
var BaseGameViewLogic = (function (_super) {
    __extends(BaseGameViewLogic, _super);
    function BaseGameViewLogic(Handler) {
        var _this = _super.call(this) || this;
        /**
         * 登录是否成功
         */
        _this.isLoginSucess = false;
        /**
         * 加载资源是否完成
         */
        _this.isLoadSuccess = false;
        /**
         * 横竖屏状态
         */
        _this.ScreenStatus = 0;
        /**
         * 游戏横竖屏事件监听key
         */
        _this.ScreeModeEventKey = "ScreeModeKey";
        /**
         * 游戏模块事件监听key
         */
        _this.GameViewEventKey = "GameViewKey";
        //横竖屏监听
        document.addEventListener(_this.ScreeModeEventKey, function () {
            _this.ScreenStatus = GameConfig.ScreenMode;
            _this.ResetBaseScreen();
            _this.ResetScreen();
        });
        //UI事件监听
        document.addEventListener(_this.GameViewEventKey, function (data) {
            _this.ListenUI(data.detail);
        });
        _this.CtrlHandler = Handler;
        _this.GameLoad();
        return _this;
    }
    /**
     * 初始化基本组件
     */
    BaseGameViewLogic.prototype.ResetBaseScreen = function () {
        if (this.isLoadSuccess && this.isLoginSucess) {
            this.alertView.ResetScreen();
            this.loadingView.ResetScreen();
        }
        else {
            this.gameLoadView && this.gameLoadView.ResetScreen();
        }
    };
    /**
    * 启动游戏资源页面，开始加载游戏资源
    */
    BaseGameViewLogic.prototype.GameLoad = function () {
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
    BaseGameViewLogic.prototype.CheckLoad = function () {
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
    BaseGameViewLogic.prototype.GameLoginComplete = function () {
        this.isLoginSucess = true;
        if (this.isLoadSuccess) {
            this.gameLoadView.Remove();
            //加载主界面
            this.GameMainUI();
        }
    };
    /**
     * 日志
     * @param msg 日志内容
     * @param key 日志key值
     */
    BaseGameViewLogic.prototype.Log = function (msg, key) {
        if (msg === void 0) { msg = ""; }
        if (key === void 0) { key = "log"; }
        if (GameConfig.OpenLog) {
            console.log(Date.now().toString(), key + ":", msg);
        }
    };
    /**
     * 显示弹出提示
     * @param type 类型
     * @param msg 内容
     */
    BaseGameViewLogic.prototype.ShowAlert = function (type, msg, handler) {
        if (this.alertView) {
            this.alertView.Show(type, msg, handler);
        }
        else {
            alert(msg);
        }
    };
    /**
     * 隐藏弹出提示
     */
    BaseGameViewLogic.prototype.HideAlert = function () {
        this.alertView && this.alertView.Hide();
    };
    /**
     * 根据传输的数据Dto，显隐Loading
     * @param dto
     */
    BaseGameViewLogic.prototype.SetLoading = function (dto) {
        this.loadingView.Set(dto);
    };
    /**
     * 显示loading
     * @param msg 内容
     */
    BaseGameViewLogic.prototype.ShowLoading = function (msg) {
        this.loadingView.ShowLoading(msg);
    };
    /**
     * 隐藏loading
     */
    BaseGameViewLogic.prototype.HideLoading = function () {
        this.loadingView.HideLoading();
    };
    return BaseGameViewLogic;
}(Laya.EventDispatcher));
//# sourceMappingURL=index.js.map