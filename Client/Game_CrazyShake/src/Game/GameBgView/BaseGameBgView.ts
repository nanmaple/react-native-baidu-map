/**
 * BaseView主要用于写固定的UI渲染方法和不同功能的UI处理方法,动画
 * 命名规则：BasexxxView
 */
class BaseGameBgView {
    protected ui: ui.GameBgViewUI;
    constructor() {
         Laya.SoundManager.playMusic("sound/bgSound.mp3");
    }

    /**
     * 重置屏幕
     */
    public ResetScreen(): void {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.GameBgViewUI();
        this.ui.zOrder = 1;
        this.ui.cacheAs = "bitmap";
        Laya.stage.addChild(this.ui);
       

    }
}
