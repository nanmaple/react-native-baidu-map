var InitState = /** @class */ (function () {
    function InitState() {
        this.event = new Event('ScreeMode');
        this.mode = 0;
        this.layaEvent = new Laya.Event();
        //设置画布是否透明，只对2D(WebGL)、3D有效
        Config.isAlpha = true;
        Laya.init(GameConfig.DesignShort, GameConfig.DesignLength, Laya.WebGL);
        //设置Laya提供的worker.js路径
        // Laya.WorkerLoader.workerPath = "libs/worker.js";
        //开启worker线程
        // Laya.WorkerLoader.enable = true;
        //设置适配模式
        Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
        Laya.stage.screenMode = GameConfig.ScreenMode ? Laya.Stage.SCREEN_HORIZONTAL : Laya.Stage.SCREEN_VERTICAL;
        //设置居中对齐
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        //设置居中对齐
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
        //开启锯齿
        Config.isAntialias = true;
        this.ScreenMonitor();
        // Laya.Stat.show(0, 0);
        /***********调试相关**********/
        //调用DebugPanel调试面板
        // Laya.DebugPanel.init();
        //调用DebugTool调试面板
        // Laya.DebugTool.init();
        //显示FPS
        if (GameConfig.IsDebug) {
            Laya.Stat.show(0, 0);
        }
        /***********调试相关**********/
        /***********舞台设置**********/
        //WebGL模式
        Laya.stage.bgColor = "none";
        //canvas模式
        // Laya.stage.bgColor = null;
        /***********舞台设置**********/
    }
    /**
     * 屏幕横竖屏监听
     */
    InitState.prototype.ScreenMonitor = function () {
        var _this = this;
        var evt = "onorientationchange" in window ? "orientationchange" : "resize";
        Laya.Browser.window.addEventListener("load", function () { _this.listenerCallBack(); });
        //事件监听
        Laya.Browser.window.addEventListener(evt, function () { _this.listenerCallBack(); }, false);
    };
    InitState.prototype.listenerCallBack = function () {
        //判断android或者ios
        if (window.orientation == 0 || window.orientation == 180) {
            // GameConfig.ScreenMode = 0;
        }
        else if (window.orientation == 90 || window.orientation == -90) {
            // GameConfig.ScreenMode = 1;
        }
        else {
            if (Laya.Browser.clientWidth > Laya.Browser.clientHeight) {
                // GameConfig.ScreenMode = 1;
            }
            else {
                // GameConfig.ScreenMode = 0;
            }
        }
        Laya.stage.on(Laya.Event.RESIZE, this, this.VersionSwitch, [GameConfig.ScreenMode]);
    };
    /**
     * 横竖屏切换
     * @param version (0：竖屏  1：横屏)
     */
    InitState.prototype.VersionSwitch = function (version) {
        document.dispatchEvent(this.event);
    };
    return InitState;
}());
//# sourceMappingURL=Init.js.map