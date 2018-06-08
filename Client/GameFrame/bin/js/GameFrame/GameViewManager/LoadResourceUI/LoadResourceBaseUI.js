var LoadResourceBaseUI = /** @class */ (function () {
    /**
     * 构造函数
     */
    function LoadResourceBaseUI() {
        this.progress = 0; //进度
    }
    /**
     * 切换横竖屏
     * @param isHor 是否为横屏
     */
    LoadResourceBaseUI.prototype.ResetScreen = function (isVer) {
        Laya.stage.removeChild(this.ui);
        if (isVer) {
            this.ui = new ui.GameLoadVUI();
            if (GameConfig.RatioType) {
                this.ui.progressLabel.scale(GameConfig.LengthShort, 1);
            }
            else {
                this.ui.progressLabel.scale(1, GameConfig.ShortLength);
            }
        }
        else {
            this.ui = new ui.GameLoadHUI();
            if (GameConfig.RatioType) {
                this.ui.progressLabel.scale(1, GameConfig.LengthShort);
            }
            else {
                this.ui.progressLabel.scale(GameConfig.ShortLength, 1);
            }
        }
        this.ui.zOrder = 1;
        this.ui.cacheAs = "bitmap";
        this.ui.progressLabel.text = Math.round(this.progress * 100) + "%";
        Laya.stage.addChild(this.ui);
    };
    return LoadResourceBaseUI;
}());
//# sourceMappingURL=LoadResourceBaseUI.js.map