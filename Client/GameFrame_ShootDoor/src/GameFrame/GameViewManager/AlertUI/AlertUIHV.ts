
class AlertHV extends AlertBaseUI implements IUI{
    constructor() {
        super();
        
    }
        /**
     * 点击确定
     */
    public OnClickSure():void{
        this.Hide();
    }
    /**
     * 点击取消
     */
    public OnClickCancel():void{
        this.Hide();
    }
    /**
     * 弹出框类型判断
     * @param type 
     */
    public AlertType(type:number):void{
        if (!this.ui) {
            return;
        }
        if(type == AlertType.None){
            this.ui.sure.visible = false;
            this.ui.cancel.visible = false;
        }
        if(type == AlertType.OlnySure){
            this.ui.cancel.visible = false;
            this.ui.sure.centerX = 0;
        }
        if(type == AlertType.All){
            this.ui.sure.visible = true;
            this.ui.cancel.visible = true;
        }
    }
    /**
     * 弹出提示框
     * @param txt 显示内容
     */
    public Show(type:any = 0, txt: string): void {
        let language: LanguageUtils.Language = new LanguageUtils.Language();
        if (!this.ui) {
            return;
        }
        this.alertType = type;
        this.AlertType(type);
        this.ui.prompt.scale(0,0);
        this.alertShow = true;
        this.alertTxt = language.GetLanguage(txt);
        this.ui.visible = this.alertShow;
        this.ui.txt.text = this.alertTxt;
        Laya.Tween.to(this.ui.prompt,{scaleX:1,scaleY:1},500,Laya.Ease.backOut);
    }
    /**
     * 关闭弹出框
     */
    public Hide(): void {
        if (!this.ui) {
            return;
        }
        Laya.Tween.to(this.ui.prompt,{scaleX:0,scaleY:0},500,Laya.Ease.backIn,Laya.Handler.create(this,()=>{
            this.alertShow = false;
            this.ui.visible = this.alertShow;
        },null,false));
    }
    /**
     * 刷新
     */
    public Refresh():void{

    }
    /**
     * 设置显示文本内容
     * @param data 
     */
    public Set(data:any):void{
        this.alertTxt = data;
        this.ui.txt.text = this.alertTxt;
    }
}
