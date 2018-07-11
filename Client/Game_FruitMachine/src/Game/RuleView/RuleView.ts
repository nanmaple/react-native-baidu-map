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
        this.ui.visible = true;
    }


    public OnCloseRule():void{
        this.ui.visible = false;
    }
}