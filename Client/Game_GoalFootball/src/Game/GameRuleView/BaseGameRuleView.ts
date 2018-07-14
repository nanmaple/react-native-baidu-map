/**
 * BaseView主要用于写固定的UI渲染方法和不同功能的UI处理方法,动画
 * 命名规则：BasexxxView
 */
abstract class BaseGameRuleView {
    protected ui: ui.GameRuleViewUI;
    /**
     * 是否显示规则
     */
    protected isShow: boolean = false;
    /**
     * 选中的图标皮肤
     */
    protected selectIcoSkin: string = "ui/rule/btn_select.png";
    /**
     * 未选中的图标皮肤
     */
    protected noselectIcoSkin: string = "ui/rule/btn_noselect.png";
    /**
     * 当前滚动位置
     */
    protected scrollEndX: any = null;
    constructor() {

    }

    /**
     * 重置屏幕
     */
    public ResetScreen() {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.GameRuleViewUI();
        this.ui.zOrder = 5;
        this.ui.cacheAs = "bitmap";
        Laya.stage.addChild(this.ui);
        this.ui.visible = this.isShow;
        this.ui.close.on(Laya.Event.CLICK, this, this.HideRule);
        this.Init();
    }
    /**
     * 初始化
     */
    private Init(): void {
        this.ui.rule_1.text = LanguageUtils.Language.Get("GameRuleFirst");
        this.ui.rule_2.text = LanguageUtils.Language.Get("GameRuleSecond");
        this.ui.rule_3.text = LanguageUtils.Language.Get("GameRuleThird");
        this.ui.rule_4.text = LanguageUtils.Language.Get("GameRuleFour");
        this.ui.rulePanel.hScrollBarSkin = "";
        this.ui.rulePanel.hScrollBar.elasticBackTime = 300;
        this.ui.rulePanel.hScrollBar.elasticDistance = 50;
        this.ui.rulePanel.hScrollBar.on(Laya.Event.END, this, this.OnScrollEnd);
    }
    /**
     * 滑块滚动结束
     */
    private OnScrollEnd():void{
        this.scrollEndX = this.ui.rulePanel.hScrollBar.value;
        this.AutoLoop(this.scrollEndX < this.ui.rulePanel.width / 2);
    }
    /**
     * 隐藏规则面板
     */
    private HideRule(): void {
        Effect.AlertEffect.Hide(this.ui.prompt, Laya.Handler.create(this, () => {
            this.isShow = false;
            this.ui.visible = this.isShow;
        }, null, false))
    }
    /**
     * 自动滚动
     * @param data 
     */
    private AutoLoop(data: boolean): void {
        if (data) {
            this.ui.previous.skin = this.selectIcoSkin;
            this.ui.next.skin = this.noselectIcoSkin;
            this.scrollEndX = 0;
        } else {
            this.scrollEndX = 560;
            this.ui.previous.skin = this.noselectIcoSkin;
            this.ui.next.skin = this.selectIcoSkin;
        }
        Laya.Tween.to(this.ui.rulePanel.hScrollBar, {value:this.scrollEndX}, 300, Laya.Ease.circInOut);
    }
}
