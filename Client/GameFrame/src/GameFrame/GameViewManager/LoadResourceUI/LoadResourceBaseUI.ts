
abstract class LoadResourceBaseUI{
    protected ui: ui.GameLoadVUI | ui.GameLoadHUI;
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
        if (isVer) {
            this.ui = new ui.GameLoadVUI();
            if (GameConfig.RatioType) {
                this.ui.progressLabel.scale(GameConfig.LengthShort, 1);
            } else {
                this.ui.progressLabel.scale(1, GameConfig.ShortLength);
            } 
        } else {
            this.ui = new ui.GameLoadHUI();
            if (GameConfig.RatioType) {
                this.ui.progressLabel.scale(1, GameConfig.LengthShort);
            } else {
                this.ui.progressLabel.scale(GameConfig.ShortLength, 1);
            }
        }
        this.ui.zOrder = 1;
        this.ui.cacheAs = "bitmap";
        this.ui.progressLabel.text = Math.round(this.progress * 100) + "%";
        Laya.stage.addChild(this.ui);
    }

}
