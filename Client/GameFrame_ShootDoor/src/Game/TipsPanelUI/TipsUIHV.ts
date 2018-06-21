/*
* name;
*/
class TipsUIHV extends TipsBaseUI{
    constructor(){
        super();
        
    }

    /**
     * 显示面板
     */
    public ShowTip(): void {
        this.isShow = true;
        this.ui.visible = this.isShow;
    }
    /**
     * 关闭面板
     */
    public CloseTip(): void {
        this.isShow = false;
        this.ui.visible = this.isShow;
    }
    
}
