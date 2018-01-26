var CutScreen = /** @class */ (function () {
    function CutScreen() {
        this.Browser = Laya.Browser;
        this.Event = Laya.Event;
        this.HTMLCanvas = Laya.HTMLCanvas;
        this.Texture = Laya.Texture;
        // this.LayaAirDemo();
    }
    /**
     * 截图
     * @param sprite 裁切对象
     * @param width 裁切宽度
     * @param height 裁切高度
     * @param offsetX x方向偏移
     * @param offsetY y方向偏移
     * @param callBack 裁切后回调
     */
    CutScreen.prototype.CutScreen = function (sprite, width, height, offsetX, offsetY, callBack) {
        var htmlC = sprite.drawToCanvas(width, height, offsetX, offsetY);
        var _texture = new this.Texture(htmlC);
        var sp2 = new Laya.Sprite();
        sp2.graphics.drawTexture(_texture, 0, 0, width, height);
        Laya.stage.addChild(sp2);
        if (callBack) {
            callBack.run();
        }
    };
    /**
     * 测试用例
     */
    CutScreen.prototype.LayaAirDemo = function () {
        //初始化引擎
        Laya.init(this.Browser.width, this.Browser.height, Laya.WebGL);
        //设置背景颜色
        Laya.stage.bgColor = "#000";
        //设置舞台CLICK，该CLICK作为截屏的开关，点击舞台，对舞台对应的canvas区域进行截屏
        Laya.stage.on(this.Event.CLICK, this, this.onClick);
        //随意绘制显示对象
        this.sp = new Laya.Sprite();
        this.sp.loadImage("ui/other/blue.png");
        Laya.stage.addChild(this.sp);
    };
    CutScreen.prototype.onClick = function () {
        //HTMLCanvas 是 Html Canvas 的代理类，封装了 Canvas 的属性和方法。。请不要直接使用 new HTMLCanvas！
        //此处将canvas指定区域进行截屏
        var htmlC = this.sp.drawToCanvas(50, 45, 0, 0);
        //获取截屏区域的texture
        var _texture = new this.Texture(htmlC);
        //将截屏的texture进行draw绘制并显示到舞台
        var sp2 = new Laya.Sprite();
        sp2.graphics.drawTexture(_texture, 0, 0, 50, 45);
        Laya.stage.addChild(sp2);
        Laya.timer.once(1000, this, this.FlyTo, [sp2]);
    };
    CutScreen.prototype.FlyTo = function (sp2) {
        Laya.Tween.to(sp2, { x: 500, y: 500, scaleX: 0.5, scaleY: 0.5 }, 1000, Laya.Ease.linearIn, null);
    };
    return CutScreen;
}());
