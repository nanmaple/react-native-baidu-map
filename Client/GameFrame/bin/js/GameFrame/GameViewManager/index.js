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
var GameViewManager = /** @class */ (function (_super) {
    __extends(GameViewManager, _super);
    function GameViewManager() {
        var _this = _super.call(this) || this;
        /**
         * 登录是否成功
         */
        _this.onLoginSucess = false;
        /**
         * 加载资源是否完成
         */
        _this.onLoadSuccess = false;
        /**
         * 横竖屏状态
         */
        _this.ScreenStatus = 0;
        //横竖屏监听
        document.addEventListener("ScreeMode", function () {
            _this.ScreenStatus = GameConfig.ScreenMode;
            var isVer = _this.ScreenStatus == ScreenStatus.Ver;
            if (_this.onLoadSuccess && _this.onLoginSucess) {
                _this.AlertUI.ResetScreen(isVer);
                _this.LoadingUI.ResetScreen(isVer);
            }
            else {
                _this.LoadResourceUI.ResetScreen(isVer);
            }
            _this.ResetScreen();
        });
        //UI事件监听
        document.addEventListener("GameUI", function (data) {
            _this.ListenUI(data.detail);
        });
        return _this;
    }
    /**
     * 日志
     * @param msg 日志内容
     * @param key 日志key值
     */
    GameViewManager.prototype.Log = function (msg, key) {
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
    GameViewManager.prototype.ShowAlert = function (type, msg) {
        if (this.AlertUI) {
            this.AlertUI.Show(type, msg);
        }
        else {
            alert(msg);
        }
    };
    /**
     * 显示loading
     * @param msg 内容
     */
    GameViewManager.prototype.ShowLoading = function (msg) {
        this.LoadingUI.ShowLoading(msg);
    };
    /**
     * 隐藏弹出提示
     */
    GameViewManager.prototype.HideAlert = function () {
        this.AlertUI.Hide();
    };
    /**
     * 隐藏loading
     */
    GameViewManager.prototype.HideLoading = function () {
        this.LoadingUI.HideLoading();
    };
    return GameViewManager;
}(Laya.EventDispatcher));
//# sourceMappingURL=index.js.map