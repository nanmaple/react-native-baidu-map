/*
* name;
*/

class RuleUIHV extends RuleBaseUI{
    constructor(){
        super();
        
    }

    public ShowRule(): void{
        this.isShow = true;
        this.ui.visible = this.isShow;
    } 

    public CloseRule(): void {
        this.isShow = false;
        this.ui.visible = this.isShow;
    }
    
}
