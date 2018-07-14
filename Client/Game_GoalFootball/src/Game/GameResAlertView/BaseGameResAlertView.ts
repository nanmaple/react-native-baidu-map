/**
 * BaseView主要用于写固定的UI渲染方法和不同功能的UI处理方法,动画
 * 命名规则：BasexxxView
 */
abstract class BaseGameResAlertView {
    protected ui: ui.GameResAlertViewUI;
    /**
     * 是否显示
     */
    protected isShow:boolean = false;
    /**
     * 显示文字内容
     */
    protected resultTxt:string = null;
    /**
     * 失败进球提示皮肤
     */
    protected failTipSkin:string = "ui/failTip.png";
    /**
     * 成功进球提示皮肤
     */
    protected sucTipSkin:string = "ui/successTip.png";
    constructor() {

    }

    /**
     * 重置屏幕
     */
    public ResetScreen() {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.GameResAlertViewUI();
        this.ui.zOrder = 6;
        this.ui.cacheAs = "bitmap";
        Laya.stage.addChild(this.ui);
        // this.ui.close.on(Laya.Event.CLICK, this, this.Hide);
        // this.ui.sure.on(Laya.Event.CLICK, this, this.Hide);
        this.ui.on(Laya.Event.CLICK, this, ()=>{
            return;
        })
        this.ui.visible = this.isShow;
    }
    /**
     * 隐藏提示框
     */
    protected Hide():void{
        Laya.timer.clear(this,this.Hide);
        Effect.AlertEffect.Hide(this.ui.prompt, Laya.Handler.create(this, ()=>{
            this.isShow = false;
            this.ui.visible = this.isShow;
        }, null, false))
    }
}
