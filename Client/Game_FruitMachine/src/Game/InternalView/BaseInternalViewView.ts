/**中心信息面板基类 */
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
        this.ui.currentbet.text = LanguageUtils.Language.Get('CurrentCoin');
        this.ui.zOrder = 2;
        this.ui.cacheAs = "bitmap";
        Laya.stage.addChild(this.ui);
    }
    
}