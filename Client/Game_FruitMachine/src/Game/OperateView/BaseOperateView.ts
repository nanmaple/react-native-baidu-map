/**操作面板基类 */
abstract class BaseOperateView {
    protected ui: ui.OperateViewUI;
    protected ListenEventKey:string;

    /**当前筹码对应列表位置 */
    protected currChip:number = 0;
    /**筹码列表 */
    protected chipArray:any = [];

    constructor() {

    }

    /**
     * 重置屏幕
     */
    public ResetScreen() {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.OperateViewUI();
        this.ui.clear.label = LanguageUtils.Language.Get('ClearBet');
        this.ui.start.label = LanguageUtils.Language.Get('GameStart');
        this.ui.addAll.label = LanguageUtils.Language.Get('AddAll');
        this.ui.zOrder = 2;
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
        this.ui.start.on(Laya.Event.CLICK,this,this.OnStart);
        this.ui.clear.on(Laya.Event.CLICK,this,this.OnClear);
        this.ui.addAll.on(Laya.Event.CLICK,this,this.OnAddAll);
        this.ui.small.on(Laya.Event.CLICK,this,this.OnSmall);
        this.ui.big.on(Laya.Event.CLICK,this,this.OnBig);
        this.ui.increase.on(Laya.Event.CLICK,this,this.OnIncrease);
        this.ui.decrease.on(Laya.Event.CLICK,this,this.OnDecrease);
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
    abstract OnStart():void;

    /** 
     * 清空投注
    */
    abstract OnClear():void;

    /** 
     * 选择大小为小
    */
    abstract OnSmall():void;

    /** 
     * 全部位置+1
    */
    abstract OnAddAll():void;

    /** 
     * 选择大小为大
    */
    abstract OnBig():void;

    /** 
     * 增加投注基数
    */
    abstract OnIncrease():void;

    /** 
     * 减少投注基数
    */
    abstract OnDecrease():void;


}
