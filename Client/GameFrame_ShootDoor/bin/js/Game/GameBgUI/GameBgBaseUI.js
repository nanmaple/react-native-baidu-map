var GameBgBaseUI = /** @class */ (function () {
    function GameBgBaseUI() {
    }
    /**
     * 切换横竖屏
     * @param isVer 是否为竖屏
     */
    GameBgBaseUI.prototype.ResetScreen = function (isVer) {
        Laya.stage.removeChild(this.ui);
        if (isVer) {
            this.ui = new ui.GameBgVUI();
        }
        else {
            this.ui = new ui.GameBgHUI();
        }
        this.ui.zOrder = 1;
        this.ui.cacheAs = "bitmap";
        Laya.stage.addChild(this.ui);
    };
    return GameBgBaseUI;
}());
//# sourceMappingURL=GameBgBaseUI.js.map