var LoadingBaseUI = (function () {
    /**
     * 构造函数
     * @param isHor 是否横版
     */
    function LoadingBaseUI(isHor) {
        if (isHor) {
            this.ui = new ui.LoadingUI();
        }
        else {
            this.ui = new ui.Loading_VerUI();
        }
        this.ui.zOrder = 9;
        this.ui.cacheAs = "bitmap";
        this.ui.visible = false;
        this.ui.visible = this.uiData.loadingShow;
        this.ui.txt.text = this.uiData.loadingTxt;
        this.uiData = GameUIData.GetInstance();
    }
    /**
     * 获取UI
     */
    LoadingBaseUI.prototype.GetUI = function () {
        return this.ui;
    };
    /**
     * 显示Connect Server
     */
    LoadingBaseUI.prototype.ShowLoading = function (txt) {
        this.uiData.loadingShow = true;
        this.uiData.loadingTxt = txt;
        this.ui.visible = this.uiData.loadingShow;
        this.ui.txt.text = this.uiData.loadingTxt;
    };
    /**
     * 隐藏Connect Server
     */
    LoadingBaseUI.prototype.HideLoading = function () {
        this.uiData.loadingShow = false;
        this.ui.visible = this.uiData.loadingShow;
    };
    LoadingBaseUI.prototype.Refresh = function () {
    };
    LoadingBaseUI.prototype.Set = function () {
    };
    return LoadingBaseUI;
}());
//# sourceMappingURL=LoadingBaseUI.js.map