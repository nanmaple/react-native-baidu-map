var BaseGameLoadView = /** @class */ (function () {
    /**
     * 构造函数
     */
    function BaseGameLoadView() {
        this.progress = 0; //进度
    }
    /**
     * 切换横竖屏
     * @param isHor 是否为横屏
     */
    BaseGameLoadView.prototype.ResetScreen = function () {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.GameLoadViewUI();
        this.ui.zOrder = 1;
        this.ui.cacheAs = "bitmap";
        this.ui.progressLabel.text = Math.round(this.progress * 100) + "%";
        Laya.stage.addChild(this.ui);
    };
    return BaseGameLoadView;
}());
//# sourceMappingURL=BaseGameLoadView.js.map