/**规则面板基类 */
abstract class BaseRuleView{
    protected ui: ui.RuleViewUI;

    constructor(){
    }

    /**
     * 重置屏幕
     */
    public ResetScreen() {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.RuleViewUI();
        this.ui.zOrder = 3;
        this.ui.cacheAs = "bitmap";
        Laya.stage.addChild(this.ui);
        this.Init();
    }

    /**初始化事件绑定 */
    private Init():void{
        this.ui.btnClose.on(Laya.Event.CLICK,this,this.OnCloseRule);
    }

    /**关闭规则面板 */
    abstract OnCloseRule():void;
    
}