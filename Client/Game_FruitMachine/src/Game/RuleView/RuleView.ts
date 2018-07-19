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
        Laya.Tween.to(this.ui.ruleBox, { scaleX: 1, scaleY: 1 }, 300, Laya.Ease.backOut);
    }

    /**
     * 关闭规则栏
    */
    public OnCloseRule():void{
        Laya.SoundManager.playSound(SoundConfig.SounRes.Button);
        Laya.Tween.to(this.ui.ruleBox, { scaleX: 0, scaleY: 0 }, 300, Laya.Ease.backIn, Laya.Handler.create(this, () => {
            this.ui.visible = false;
        }, null, false));
    }
}