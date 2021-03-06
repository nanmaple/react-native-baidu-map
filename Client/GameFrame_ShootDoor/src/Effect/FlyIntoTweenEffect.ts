/**
 * 构造函数传入DataChange对象
 * 缓动结束调用DataChange对象法法
 */
class FlyIntoTweenEffect {
    public text: Laya.Text;
    private x2: number;
    private y2: number;
    private changeEffect: NumberGradualChangeEffect;
    private FlyCallBack: Laya.Handler;
    constructor() {
    }
    /**
     * 初始化位置并启动缓动动画
     * @param x1 起点x坐标
     * @param y1 起点y坐标
     * @param x2 终点x坐标
     * @param y2 终点y坐标
     * @param txt 移动的文本内容
     * @param obj 回调事件对象
     */
    public FlyInto(x1, y1, x2, y2, txt = "100", obj: NumberGradualChangeEffect) {     //params 移动的数字x1,y1起始点坐标，x2,y2结束点的坐标，txt文字内容
        this.changeEffect = obj;
        this.text = Laya.Pool.getItemByClass("text", Laya.Text);
        Laya.stage.addChild(this.text);
        this.text.color = "blue";
        this.text.fontSize = 40;
        this.x2 = x2;
        this.y2 = y2;
        this.text.text = txt;
        this.text.pos(x1, y1);
        this.Tween(this.callback);
    }
    /**
     * 缓动动画
     * @param callback 缓动动画结束回到函数 此处调用DataChange对象方法实现数字变化
     */
    private Tween(callback) {
        Laya.Tween.to(this.text, { x: this.x2, y: this.y2, alpha: 1 }, 200, Laya.Ease.cubicInOut, Laya.Handler.create(this, callback));
    }

    /**
     * 动画结束处理
     * 移除文本对象
     * 启动数字变化
     * 回收对象池
     */
    private callback() {

        this.text.removeSelf();
        //this.text.destroy();
        Laya.Pool.recover("text", this.text);
        //总数开始变化
        this.changeEffect.start(Number(this.text.text));

        //将此对象回收到对象池
        Laya.Pool.recover("tweens", this);
    }

}