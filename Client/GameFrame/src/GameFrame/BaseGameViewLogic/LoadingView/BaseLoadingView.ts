
abstract class BaseLoadingView {
    protected ui: ui.LoadingViewUI;
    protected loadingShow: boolean = false;
    protected loadingTxt: string = null;
    constructor() {

    }

    /**
     * 切换横竖屏
     * @param isHor 是否为横屏
     */
    public ResetScreen(isVer?: boolean) {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.LoadingViewUI();
        //将提示UI类缓存为静态图像
        this.ui.zOrder = 8;
        this.ui.cacheAs = "bitmap";
        this.ui.visible = this.loadingShow;
        this.ui.txt.text = this.loadingTxt;
        this.ui.on(Laya.Event.CLICK, this, () => {
            return false;
        })
        Laya.stage.addChild(this.ui);
    }
}