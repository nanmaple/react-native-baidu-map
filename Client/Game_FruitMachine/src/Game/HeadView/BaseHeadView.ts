/*
* name;
*/
abstract class BaseHeadView{
    protected ui: ui.HeadViewUI;
    protected ListenEventKey:string;
    protected effect:Effect.NumberGradualChangeEffect;
    /**余额 */
    protected balance:number = 0;
    /**赚取 */
    protected winAmount:number = 0;
    
    constructor(){
    }

    /**
     * 重置屏幕
     */
    public ResetScreen() {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.HeadViewUI();
        this.effect = new Effect.NumberGradualChangeEffect(this.ui.balance);
        this.ui.zOrder = 1;
        // this.ui.cacheAs = "bitmap";
        Laya.stage.addChild(this.ui);
        this.Init();
    }

    /**初始化事件绑定 */
    private Init():void{
        this.ui.goHome.on(Laya.Event.CLICK,this,this.OnGoHome);
        this.ui.balanceBox.on(Laya.Event.CLICK,this,this.OnRefreshBalance);
    }

    /**返回首页 */
    abstract OnGoHome():void;

    /**刷新余额 */
    abstract OnRefreshBalance():void;
    
}