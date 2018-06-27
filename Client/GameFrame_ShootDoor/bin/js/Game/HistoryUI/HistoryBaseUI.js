var HistoryBaseUI = /** @class */ (function () {
    function HistoryBaseUI() {
        this.listBoxH = 0;
    }
    /**
     * 切换横竖屏
     * @param isVer 是否为竖屏
     */
    HistoryBaseUI.prototype.ResetScreen = function (isVer) {
        Laya.stage.removeChild(this.ui);
        if (isVer) {
            this.ui = new ui.HistoryRecordVUI();
        }
        else {
            this.ui = new ui.HistoryRecordHUI();
            this.ui.left = 20;
            this.ui.top = 100;
        }
        this.ui.zOrder = 4;
        this.ui.cacheAs = "bitmap";
        this.listBoxH = this.ui.listPanel.height / 5;
        Laya.stage.addChild(this.ui);
        this.Refresh();
    };
    /**
     * 日志
     * @param msg 日志内容
     * @param key 日志key值
     */
    HistoryBaseUI.prototype.Log = function (msg, key) {
        if (msg === void 0) { msg = ""; }
        if (key === void 0) { key = "log"; }
        if (GameConfig.OpenLog) {
            console.log(Date.now().toString(), key + ":", msg);
        }
    };
    return HistoryBaseUI;
}());
//# sourceMappingURL=HistoryBaseUI.js.map