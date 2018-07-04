class BaseBetNumPanel {
    protected ui: ui.BetNumPanelUI;
    constructor() {

    }

    /**
     * 重置屏幕
     */
    public ResetScreen() {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.BetNumPanelUI();
        this.ui.zOrder = 5;
        this.ui.cacheAs = "bitmap";
        //设置组件位置
        this.ui.y=872;
        Laya.stage.addChild(this.ui);
    }
    private OnButton(){
        this.ui.maxBtn.on(Laya.Event.CLICK,this,()=>{
        })
        this.ui.decreaseBtn.on(Laya.Event.CLICK,this,()=>{
            
        })
        this.ui.addBtn.on(Laya.Event.CLICK,this,()=>{
            
        })
    }
}
