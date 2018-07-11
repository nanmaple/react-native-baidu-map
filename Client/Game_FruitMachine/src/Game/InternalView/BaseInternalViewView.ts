/*
* name;
*/
abstract class BaseInternalView{
    protected ui: ui.InternalViewUI;
    protected ListenEventKey:string;
    
    constructor(){
    }

    /**
     * 重置屏幕
     */
    public ResetScreen() {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.InternalViewUI();
        this.ui.zOrder = 1;
        // this.ui.cacheAs = "bitmap";
        Laya.stage.addChild(this.ui);
    }
    
}