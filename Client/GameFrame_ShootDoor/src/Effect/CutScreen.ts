class CutScreen {
    private sp:Laya.Sprite;
    constructor() {
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
    public CutScreen(sprite, width, height, offsetX, offsetY, callBack?: Laya.Handler) {
        //HTMLCanvas 是 Html Canvas 的代理类，封装了 Canvas 的属性和方法。。请不要直接使用 new HTMLCanvas！
        //此处将canvas指定区域进行截屏
        let htmlC: Laya.HTMLCanvas = sprite.drawToCanvas(width, height, offsetX, offsetY);
        //获取截屏区域的texture
        let _texture: Laya.Texture = new Laya.Texture(htmlC);
        //将截屏的texture进行draw绘制并显示到舞台
        this.sp = new Laya.Sprite();
        this.sp.graphics.drawTexture(_texture, 0, 0, width, height);
        Laya.stage.addChild(this.sp);
        if(callBack){
            callBack.run();
        } 
        Laya.timer.once(500, this, this.FlyTo, [this.sp]);
    }
    /**
     * 执行飞入动画
     * @param sp 动画对象
     */
    private FlyTo(sp:Laya.Sprite):void{
        Laya.Tween.to(sp, { x: 20, y: 120, scaleX: 0.2, scaleY: 0.2 }, 2000, Laya.Ease.backIn, Laya.Handler.create(this,this.FlyOver));
    }
    private FlyOver():void{
    }
}
