/*
* name;
*/
var BaseRandomNumView = /** @class */ (function () {
    function BaseRandomNumView() {
        Laya.stage.addChild(this.ui);
    }
    /**
     * 重置屏幕
     */
    BaseRandomNumView.prototype.ResetScreen = function () {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.RandomNumViewUI();
        this.ui.zOrder = 1;
        // this.ui.cacheAs = "bitmap";
        Laya.stage.addChild(this.ui);
    };
    /**
    * 滚动结果
    * @param endCallback 结束回调
    */
    BaseRandomNumView.prototype.Roll = function (endCallback) { };
    ;
    return BaseRandomNumView;
}());
//# sourceMappingURL=BaseRandomNumView.js.map