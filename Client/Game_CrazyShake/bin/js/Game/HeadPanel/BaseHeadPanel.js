/**
 * 界面顶部的基类
 */
var BaseHeadPanel = /** @class */ (function () {
    function BaseHeadPanel() {
    }
    /**
     * 重置屏幕
     */
    BaseHeadPanel.prototype.ResetScreen = function () {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.HeadPanelUI();
        this.ui.zOrder = 3;
        this.ui.cacheAs = "bitmap";
        //设置组件位置
        this.ui.y = 40;
        Laya.stage.addChild(this.ui);
        //绑定返回大厅按钮
        this.ui.homeBtn.on(Laya.Event.CLICK, this, function () {
            window.location.href = "";
        });
    };
    return BaseHeadPanel;
}());
//# sourceMappingURL=BaseHeadPanel.js.map