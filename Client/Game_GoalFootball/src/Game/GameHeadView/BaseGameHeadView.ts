/**
 * BaseView主要用于写固定的UI渲染方法和不同功能的UI处理方法,动画
 * 命名规则：BasexxxView
 */
abstract class BaseGameHeadView {
    protected ui: ui.GameHeadViewUI;
    /**
     * 金币改变动画
     */
    protected moneyEffect: NumberGradualChangeEffect;
    /**
     * 用户余额
     */
    protected balance:number = 0;
    constructor() {

    }

    /**
     * 重置屏幕
     */
    public ResetScreen() {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.GameHeadViewUI();
        this.ui.zOrder = 4;
        Laya.stage.addChild(this.ui);
        this.moneyEffect = new NumberGradualChangeEffect(this.ui.balance);
    }
    
}
