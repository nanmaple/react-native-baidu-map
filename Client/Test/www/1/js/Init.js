var InitState = /** @class */ (function () {
    function InitState() {
        //初始化引擎，不支持WebGL时自动切换到Canvas,宽高定义的越大，内存使用暴增
        Laya.init(GameConfig.DesignWidth, GameConfig.DesignHeight, Laya.WebGL);
        //设置Laya提供的worker.js路径
        Laya.WorkerLoader.workerPath = "libs/worker.js";
        //开启worker线程
        Laya.WorkerLoader.enable = true;
        var width = Laya.Browser.clientHeight >= Laya.Browser.clientWidth ? Laya.Browser.clientHeight : Laya.Browser.clientWidth;
        var height = Laya.Browser.clientHeight >= Laya.Browser.clientWidth ? Laya.Browser.clientWidth : Laya.Browser.clientHeight;
        GameConfig.HeightRatio = height / GameConfig.DesignHeight;
        GameConfig.WidthRatio = width / GameConfig.DesignWidth;
        GameConfig.HeightWidth = GameConfig.HeightRatio / GameConfig.WidthRatio;
        GameConfig.WidthHeight = GameConfig.WidthRatio / GameConfig.HeightRatio;
        if (GameConfig.WidthRatio > GameConfig.HeightRatio) {
            GameConfig.RatioType = true;
        }
        else {
            GameConfig.RatioType = false;
        }
        //设置适配模式
        Laya.stage.scaleMode = Laya.Stage.SCALE_EXACTFIT;
        //设置剧中对齐
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        //设置剧中对齐
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
        //设置横竖屏
        Laya.stage.screenMode = Laya.Stage.SCREEN_HORIZONTAL;
        //开启锯齿
        Config.isAntialias = true;
        /***********调试相关**********/
        //调用DebugPanel调试面板
        // Laya.DebugPanel.init();
        //调用DebugTool调试面板
        // Laya.DebugTool.init();
        //显示FPS
        // if (GameConfig.IsDebug) {
        //     Laya.Stat.show(0, 0);
        // }
        /***********调试相关**********/
        /***********舞台设置**********/
        Laya.stage.bgColor = "#ffffff";
        /***********舞台设置**********/
    }
    return InitState;
}());
