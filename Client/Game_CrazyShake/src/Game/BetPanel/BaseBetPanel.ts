class BaseBetPanel {
    protected ui: ui.BetPanelUI;
    constructor() {

    }

    /**
     * 重置屏幕
     */
    public ResetScreen() {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.BetPanelUI();
        this.ui.zOrder = 6;
        this.ui.cacheAs = "bitmap";
        //设置组件位置
        this.ui.y=1019
        Laya.stage.addChild(this.ui);
        this.OnButton();
        
    }
    /**
     * 绑定按钮
     */
    public OnButton(){
        this.ui.littleBtn.on(Laya.Event.CLICK,this,()=>{});
        this.ui.jaguarBtn.on(Laya.Event.CLICK,this,()=>{});
        this.ui.bigBtn.on(Laya.Event.CLICK,this,()=>{});
    }
}
