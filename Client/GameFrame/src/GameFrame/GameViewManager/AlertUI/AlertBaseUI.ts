/**
 * 弹出框类型
 */
enum AlertType{
    None = 0,  //无按钮
    OlnySure = 1,    //确定按钮
    All = 2,    //确定、取消按钮
}
abstract class AlertBaseUI{
    protected ui: ui.AlertHUI | ui.AlertVUI;
    protected alertType:AlertType;   //显示类型
    protected alertShow:boolean = false;   //是否显示
    protected alertTxt:string = null;  //显示文本内容
    constructor() {

    }
    /**
     * 切换横竖屏
     * @param isHor 是否为横屏
     */
    public ResetScreen(isVer?: boolean) {
        Laya.stage.removeChild(this.ui);
        if (isVer) {
            this.ui = new ui.AlertVUI();
            if (GameConfig.RatioType) {
                this.ui.prompt.scale(GameConfig.LengthShort, 1);
            } else {
                this.ui.prompt.scale(1, GameConfig.ShortLength);
            }
        } else {
            this.ui = new ui.AlertHUI();
            if (GameConfig.RatioType) {
                this.ui.prompt.scale(1, GameConfig.LengthShort);
            } else {
                this.ui.prompt.scale(GameConfig.ShortLength, 1);
            }
        }
        //将提示UI类缓存为静态图像
        this.ui.zOrder = 9;
        this.ui.cacheAs = "bitmap";
        //确认、取消按钮绑定点击事件
        this.ui.close.on(Laya.Event.CLICK, this, this.Hide);
        this.ui.sure.on(Laya.Event.CLICK,this,this.OnClickSure);
        this.ui.cancel.on(Laya.Event.CLICK,this,this.OnClickCancel);
        this.AlertType(this.alertType);
        this.ui.visible = this.alertShow;
        this.ui.txt.text = this.alertTxt;
        Laya.stage.addChild(this.ui);
    }
    abstract Hide():void;
    abstract OnClickSure():void;
    abstract OnClickCancel():void;
    /**
     * 弹出框类型判断
     * @param type 
     */
    abstract AlertType(type:number):void;
}
