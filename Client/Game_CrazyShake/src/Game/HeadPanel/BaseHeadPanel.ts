/**
 * 界面顶部的基类
 */
class BaseHeadPanel {
    protected ui: ui.HeadPanelUI;
    constructor() {

    }

    /**
     * 重置屏幕
     */
    public ResetScreen() {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.HeadPanelUI();
        this.ui.zOrder = 3;
        this.ui.cacheAs = "bitmap";
        //设置组件位置
        this.ui.y = 40;
        Laya.stage.addChild(this.ui);
        //绑定返回大厅按钮
        this.ui.homeBtn.on(Laya.Event.CLICK, this, () => {
            window.location.href = ""
        })
    }

}
