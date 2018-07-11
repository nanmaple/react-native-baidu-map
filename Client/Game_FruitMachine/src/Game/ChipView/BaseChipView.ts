abstract class BaseChipView{
    protected ui: ui.ChipViewUI;
    protected ListenEventKey:string;

    /**当前筹码 */
    protected currChip:number = 100;
    /**循环标记 */
    protected loopMark:boolean = false;
    /**更改状态 加/减 */
    protected type:boolean = true;
    /**最大筹码 */
    protected maxChip:number = 100000;
    /**基础筹码 */
    protected baseChip:number = 100;

    constructor(){
    }

    /**
     * 重置屏幕
     */
    public ResetScreen() {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.ChipViewUI();
        this.ui.zOrder = 1;
        // this.ui.cacheAs = "bitmap";
        Laya.stage.addChild(this.ui);
        this.Init();
    }

    /** 
     * 初始化事件绑定
    */
    private Init():void{
        this.ui.btnThousand.on(Laya.Event.CLICK,this,this.OnSetChip,[1000]);
        this.ui.btnTenThousand.on(Laya.Event.CLICK,this,this.OnSetChip,[10000]);

        this.ui.improve.on(Laya.Event.MOUSE_DOWN,this,this.OnMouseDown,[true]);
        this.ui.improve.on(Laya.Event.MOUSE_UP,this,this.OnMouseUp);
        this.ui.improve.on(Laya.Event.MOUSE_OUT,this,this.OnMouseUp);

        this.ui.reduce.on(Laya.Event.MOUSE_DOWN,this,this.OnMouseDown,[false]);
        this.ui.reduce.on(Laya.Event.MOUSE_UP,this,this.OnMouseUp);
        this.ui.reduce.on(Laya.Event.MOUSE_OUT,this,this.OnMouseUp);
    }

    /**
     * 按下加注或减注
     * @param type 添加或减去
     */
    abstract OnMouseDown(type:boolean):void;

     /**
     * 鼠标移出或抬起结束加减注
     */
    abstract OnMouseUp():void;

    /**
     * 设置筹码事件监听函数
     * @param value 筹码额
     */
    abstract OnSetChip(value:number):void;
    
}