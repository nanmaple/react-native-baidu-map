var GameUIData = (function () {
    function GameUIData() {
        this.loadingShow = false;
        this.loadingTxt = null;
        this.alertShow = false;
        this.alertTxt = null;
        this.alertType = null;
        this.progress = "0%";
    }
    GameUIData.GetInstance = function () {
        if (!this.instance) {
            this.instance = new GameUIData();
        }
        return this.instance;
    };
    return GameUIData;
}());
//# sourceMappingURL=GameUIData.js.map