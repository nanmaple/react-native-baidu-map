var GameBgBaseUI = /** @class */ (function () {
    function GameBgBaseUI() {
    }
    /**
     * 重置屏幕
     */
    GameBgBaseUI.prototype.ResetScreen = function () {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.GameBgViewUI();
        this.ui.zOrder = 1;
        this.ui.cacheAs = "bitmap";
        Laya.stage.addChild(this.ui);
    };
    return GameBgBaseUI;
}());
//# sourceMappingURL=GameBgBaseUI.js.map