
abstract class BaseLoadingView {
    protected ui: ui.LoadingViewUI;
    protected loadingShow: boolean = false;
    protected loadingTxt: string = null;
    constructor() {

    }

    /**
     * 重置屏幕
     */
    public ResetScreen() {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.LoadingViewUI();
        //将提示UI类缓存为静态图像
        this.ui.zOrder = 999;
        this.ui.cacheAs = "bitmap";
        this.ui.visible = this.loadingShow;
        this.ui.txt.text = this.loadingTxt;
        this.ui.on(Laya.Event.CLICK, this, () => {
            return false;
        })
        Laya.stage.addChild(this.ui);
    }
}