var LoadingBaseUI = /** @class */ (function () {
    function LoadingBaseUI() {
        this.loadingShow = false;
        this.loadingTxt = null;
    }
    /**
     * 切换横竖屏
     * @param isHor 是否为横屏
     */
    LoadingBaseUI.prototype.ResetScreen = function (isVer) {
        Laya.stage.removeChild(this.ui);
        if (isVer) {
            this.ui = new ui.LoadingVUI();
            if (GameConfig.RatioType) {
                this.ui.txt.scale(GameConfig.LengthShort, 1);
            }
            else {
                this.ui.txt.scale(1, GameConfig.ShortLength);
            }
        }
        else {
            this.ui = new ui.LoadingHUI();
            if (GameConfig.RatioType) {
                this.ui.txt.scale(1, GameConfig.LengthShort);
            }
            else {
                this.ui.txt.scale(GameConfig.ShortLength, 1);
            }
        }
        //将提示UI类缓存为静态图像
        this.ui.zOrder = 9;
        this.ui.cacheAs = "bitmap";
        this.ui.visible = this.loadingShow;
        this.ui.txt.text = this.loadingTxt;
        Laya.stage.addChild(this.ui);
    };
    return LoadingBaseUI;
}());
//# sourceMappingURL=LoadingBaseUI.js.map