/**
 * 弹出框类型
 */
enum AlertType {
    None = 0,  //无按钮
    OlnySure = 1,    //确定按钮
    All = 2,    //确定、取消按钮
}

abstract class BaseAlertView {
    protected ui: ui.AlertViewUI;
    protected alertType: AlertType;   //显示类型
    protected alertShow: boolean = false;   //是否显示
    protected alertTxt: string = null;  //显示文本内容
    constructor() {

    }
    /**
     * 切换横竖屏
     * @param isHor 是否为横屏
     */
    public ResetScreen(isVer?: boolean) {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.AlertViewUI();
        //将提示UI类缓存为静态图像
        this.ui.zOrder = 8;
        this.ui.cacheAs = "bitmap";
        //确认、取消按钮绑定点击事件
        this.ui.close.on(Laya.Event.CLICK, this, this.Hide);
        this.ui.sure.on(Laya.Event.CLICK, this, this.OnClickSure);
        this.ui.cancel.on(Laya.Event.CLICK, this, this.OnClickCancel);
        this.AlertType(this.alertType);
        this.ui.visible = this.alertShow;
        this.ui.txt.text = this.alertTxt;
        Laya.stage.addChild(this.ui);
    }
    /**
     * 隐藏
     */
    abstract Hide(): void;
    /**
     * 确认处理
     */
    abstract OnClickSure(): void;
    /**
     * 取消处理
     */
    abstract OnClickCancel(): void;
    /**
     * 弹出框类型判断
     * @param type 
     */
    abstract AlertType(type: number): void;
}
