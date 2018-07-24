/**规则面板类 */
class RuleView extends BaseRuleView implements IView{
    
    constructor() {
        super();
    }

    /** 
     * 刷新UI
    */
    public Refresh():void{
    }

    /**
     * 设置结果
     */
    public Set(data:any):void{
        this.ShowRule();
    }

    /**显示规则栏 */
    private ShowRule():void{
        this.ui.ruleBox.scale(0, 0);
        this.ui.visible = true;
        Effect.AlertEffect.Show(this.ui.ruleBox, null);
    }

    /**
     * 关闭规则栏
    */
    public OnCloseRule():void{
        Laya.SoundManager.playSound(SoundConfig.SounRes.Button);
        Effect.AlertEffect.Hide(this.ui.ruleBox, Laya.Handler.create(this, () => {
            this.ui.visible = false;
        }, null, false))
    }
}