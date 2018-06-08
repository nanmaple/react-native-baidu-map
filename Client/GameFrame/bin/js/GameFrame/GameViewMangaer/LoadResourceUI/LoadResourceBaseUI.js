var LoadResourceBaseUI = (function () {
    /**
     * 构造函数
     * @param isHor 是否横版
     */
    function LoadResourceBaseUI(isHor) {
        this.progress = 0; //进度
        if (isHor) {
            this.ui = new ui.GameLoadUI();
        }
        else {
            this.ui = new ui.GameLoad_VerUI();
        }
        this.ui.cacheAs = "bitmap";
        this.ui.visible = true;
    }
    LoadResourceBaseUI.prototype.GetUI = function () {
        return this.ui;
    };
    /**
     * 设置进度
     * @param data
     */
    LoadResourceBaseUI.prototype.Set = function (data) {
        this.progress = data;
        this.Refresh();
    };
    LoadResourceBaseUI.prototype.Refresh = function () {
        this.ui.progressLabel.text = Math.round(this.progress * 100) + "%";
    };
    /**
     * 显示加载资源
     */
    LoadResourceBaseUI.prototype.ShowLoadRes = function () {
        this.ui.visible = true;
    };
    /**
     * 隐藏加载资源
     */
    LoadResourceBaseUI.prototype.HideLoadRes = function () {
        this.ui.visible = false;
    };
    return LoadResourceBaseUI;
}());
//# sourceMappingURL=LoadResourceBaseUI.js.map