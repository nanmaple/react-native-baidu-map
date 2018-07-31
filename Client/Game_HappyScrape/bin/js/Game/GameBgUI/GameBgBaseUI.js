var GameBgBaseUI = (function () {
    function GameBgBaseUI() {
    }
    /**
     * 切换横竖屏
     * @param isHor 是否为横屏
     */
    GameBgBaseUI.prototype.ResetScreen = function (isVer) {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.GameBgViewUI();
        this.ui.zOrder = 1;
        this.ui.cacheAs = "bitmap";
        Laya.stage.addChild(this.ui);
    };
    return GameBgBaseUI;
}());
//# sourceMappingURL=GameBgBaseUI.js.map