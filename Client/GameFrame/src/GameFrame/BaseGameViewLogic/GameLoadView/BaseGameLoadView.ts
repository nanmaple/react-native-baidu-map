abstract class BaseGameLoadView {
    protected ui: ui.GameLoadViewUI;
    protected progress: number = 0;  //进度
    /**
     * 构造函数
     */
    constructor() {
    }
    /**
     * 切换横竖屏
     * @param isHor 是否为横屏
     */
    public ResetScreen(isVer?: boolean) {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.GameLoadViewUI();
        this.ui.zOrder = 1;
        this.ui.cacheAs = "bitmap";
        this.ui.progressLabel.text = Math.round(this.progress * 100) + "%";
        Laya.stage.addChild(this.ui);
    }

}
