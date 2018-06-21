var GameBgBaseUI = /** @class */ (function () {
    function GameBgBaseUI() {
    }
    /**
     * 切换横竖屏
     * @param isHor 是否为横屏
     */
    GameBgBaseUI.prototype.ResetScreen = function (isVer) {
        Laya.stage.removeChild(this.ui);
        if (isVer) {
            this.ui = new ui.GameBgVUI();
            if (GameConfig.RatioType) {
                this.ui.scale(GameConfig.LengthShort, 1);
            }
            else {
                this.ui.scale(1, GameConfig.ShortLength);
            }
        }
        else {
            this.ui = new ui.GameBgHUI();
            if (GameConfig.RatioType) {
                this.ui.scale(1, GameConfig.LengthShort);
            }
            else {
                this.ui.scale(GameConfig.ShortLength, 1);
            }
        }
        this.ui.zOrder = 1;
        this.ui.cacheAs = "bitmap";
        this.ui.close.on(Laya.Event.CLICK, this, this.Close);
        this.ui.btnsure.on(Laya.Event.CLICK, this, this.ConfirmBet);
        Laya.stage.addChild(this.ui);
    };
    return GameBgBaseUI;
}());
//# sourceMappingURL=GameBgBaseUI.js.map