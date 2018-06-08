class InitState {
    private event: any = new Event('ScreeMode');
    private mode: number = 0;
    private layaEvent: Laya.Event = new Laya.Event();
    constructor() {
        Laya.init(GameConfig.DesignShort, GameConfig.DesignLength, Laya.WebGL);
        //设置Laya提供的worker.js路径
        // Laya.WorkerLoader.workerPath = "libs/worker.js";
        //开启worker线程
        // Laya.WorkerLoader.enable = true;

        //设置适配模式
        Laya.stage.scaleMode = Laya.Stage.SCALE_EXACTFIT;

        //设置剧中对齐
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        //设置剧中对齐
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
        Laya.stage.bgColor = "#ffffff";
        /***********舞台设置**********/
    }
    /**
     * 屏幕横竖屏监听
     */
    private ScreenMonitor(): void {
        let evt = "onorientationchange" in window ? "orientationchange" : "resize";
        Laya.Browser.window.addEventListener("load", () => { this.listenerCallBack() });
        //事件监听
        Laya.Browser.window.addEventListener(evt, () => { this.listenerCallBack() }, false);
    }

    private listenerCallBack(): void {
        //判断android或者ios
        if (window.orientation == 0 || window.orientation == 180) {
            GameConfig.ScreenMode = 0;
            Laya.stage.size(GameConfig.DesignShort, GameConfig.DesignLength);
            Laya.stage.screenMode = Laya.Stage.SCREEN_VERTICAL;
        }
        else if (window.orientation == 90 || window.orientation == -90) {
            GameConfig.ScreenMode = 1;
            Laya.stage.size(GameConfig.DesignLength, GameConfig.DesignShort);
            Laya.stage.screenMode = Laya.Stage.SCREEN_HORIZONTAL;
        }
        else {
            if (Laya.Browser.clientWidth > Laya.Browser.clientHeight) {
                GameConfig.ScreenMode = 1;
                Laya.stage.size(GameConfig.DesignLength, GameConfig.DesignShort);
                Laya.stage.screenMode = Laya.Stage.SCREEN_HORIZONTAL;
            } else {
                GameConfig.ScreenMode = 0;
                Laya.stage.size(GameConfig.DesignShort, GameConfig.DesignLength);
                Laya.stage.screenMode = Laya.Stage.SCREEN_VERTICAL;
            }
        }
        Laya.stage.on(Laya.Event.RESIZE, this, this.VersionSwitch, [GameConfig.ScreenMode]);
    }

    /**
     * 横竖屏切换
     * @param version (0：竖屏  1：横屏) 
     */
    private VersionSwitch(version: number): void {
        if (version == 0) {
            //设置竖屏
            GameConfig.LengthRatio = Laya.Browser.clientHeight / GameConfig.DesignLength;
            GameConfig.ShortRatio = Laya.Browser.clientWidth / GameConfig.DesignShort;
        } else {
            //设置横屏
            GameConfig.LengthRatio = Laya.Browser.clientWidth / GameConfig.DesignLength;
            GameConfig.ShortRatio = Laya.Browser.clientHeight / GameConfig.DesignShort;
        }
        if (GameConfig.ShortRatio > GameConfig.LengthRatio) {
            //上下压缩了，需要左右压缩成正常比例
            GameConfig.RatioType = true;
            GameConfig.LengthShort = GameConfig.LengthRatio / GameConfig.ShortRatio;
            GameConfig.ShortLength = GameConfig.ShortRatio / GameConfig.LengthRatio;
        } else {
            //左右压缩了，需要上下压缩成正常比例
            GameConfig.RatioType = false;
            GameConfig.LengthShort = GameConfig.LengthRatio / GameConfig.ShortRatio;
            GameConfig.ShortLength = GameConfig.ShortRatio / GameConfig.LengthRatio;
        }
        document.dispatchEvent(this.event);
    }

}