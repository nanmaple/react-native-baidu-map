abstract class GameBgBaseUI {
    protected ui: ui.GameBgHUI | ui.GameBgVUI;
    constructor() {

    }

    /**
     * 切换横竖屏
     * @param isVer 是否为竖屏
     */
    public ResetScreen(isVer?: boolean) {
        Laya.stage.removeChild(this.ui);
        if (isVer) {
            this.ui = new ui.GameBgVUI();
        } else {
            this.ui = new ui.GameBgHUI();
        }
        this.ui.zOrder = 1;
        this.ui.cacheAs = "bitmap";
        Laya.stage.addChild(this.ui);
    }

}
