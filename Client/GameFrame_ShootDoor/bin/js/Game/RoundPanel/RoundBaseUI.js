var RoundBaseUI = /** @class */ (function () {
    function RoundBaseUI() {
        this.state = Enum.GameStatus.DEFAULT;
    }
    /**
     * 切换横竖屏
     * @param isHor 是否为横屏
     */
    RoundBaseUI.prototype.ResetScreen = function (isVer) {
        Laya.stage.removeChild(this.ui);
        if (isVer) {
            this.ui = new ui.RoundVUI();
        }
        else {
            this.ui = new ui.RoundHUI();
        }
        //基础样式
        this.ui.zOrder = 2;
        this.ui.cacheAs = "bitmap";
        var language = new LanguageUtils.Language();
        this.ui.roundLabel.text = language.GetLanguage("Issue");
        this.SetGameRound(this.round);
        this.SetGameState(this.state);
        Laya.stage.addChild(this.ui);
    };
    return RoundBaseUI;
}());
//# sourceMappingURL=RoundBaseUI.js.map