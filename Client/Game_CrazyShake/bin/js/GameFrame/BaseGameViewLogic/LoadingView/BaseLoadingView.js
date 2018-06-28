var BaseLoadingView = /** @class */ (function () {
    function BaseLoadingView() {
        this.loadingShow = false;
        this.loadingTxt = null;
    }
    /**
     * 重置屏幕
     */
    BaseLoadingView.prototype.ResetScreen = function () {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.LoadingViewUI();
        //将提示UI类缓存为静态图像
        this.ui.zOrder = 999;
        this.ui.cacheAs = "bitmap";
        this.ui.visible = this.loadingShow;
        this.ui.txt.text = this.loadingTxt;
        this.ui.on(Laya.Event.CLICK, this, function () {
            return false;
        });
        Laya.stage.addChild(this.ui);
    };
    return BaseLoadingView;
}());
//# sourceMappingURL=BaseLoadingView.js.map