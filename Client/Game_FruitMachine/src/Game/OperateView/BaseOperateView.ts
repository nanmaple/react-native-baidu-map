/**
 * BaseView主要用于写固定的UI渲染方法和不同功能的UI处理方法,动画
 * 命名规则：BasexxxView
 */
abstract class BaseOperateView {
    protected ui: ui.OperateViewUI;
    protected ListenEventKey:string;

    constructor() {

    }

    /**
     * 重置屏幕
     */
    public ResetScreen() {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.OperateViewUI();
        this.ui.zOrder = 20;
        this.ui.cacheAs = "bitmap";
        Laya.stage.addChild(this.ui);
        this.Init();
    }


    /**
     * 初始化事件绑定
     */
    private Init():void{
        this.ui.addChip.on(Laya.Event.CLICK,this,this.OnAddChip);
        this.ui.reduceChip.on(Laya.Event.CLICK,this,this.OnReduceChip);
        this.ui.startOrGather.on(Laya.Event.CLICK,this,this.OnStartOrGather);
        this.ui.clearOrSmall.on(Laya.Event.CLICK,this,this.OnClearOrSmall);
        this.ui.addAllOrBig.on(Laya.Event.CLICK,this,this.OnAddAllOrBig);
    }

    /** 
     * 加大猜大小金额
    */
    abstract OnAddChip():void;

    /** 
     * 减小猜大小金额
    */
    abstract OnReduceChip():void;

    /** 
     * 开始游戏或收获分数
    */
    abstract OnStartOrGather():void;

    /** 
     * 清空投注或选择大小为小
    */
    abstract OnClearOrSmall():void;

    /** 
     * 全部位置+1或选择大小为大
    */
    abstract OnAddAllOrBig():void;
}
