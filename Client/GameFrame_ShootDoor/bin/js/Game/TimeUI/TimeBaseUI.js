var TimeBaseUI = /** @class */ (function () {
    function TimeBaseUI() {
        this.time = 0; //时间
        this.timeStamp = 0; //时间戳
    }
    /**
     * 切换横竖屏
     * @param isVer 是否为竖屏
     */
    TimeBaseUI.prototype.ResetScreen = function (isVer) {
        Laya.stage.removeChild(this.ui);
        if (isVer) {
            this.ui = new ui.TimeVUI();
        }
        else {
            this.ui = new ui.TimeHUI();
        }
        this.ui.zOrder = 5;
        this.ui.cacheAs = "bitmap";
        Laya.stage.addChild(this.ui);
        this.timeEffect = new TimeEffect(this.ui.time);
        //创建时间效果
        this.ui.visible = false;
        this.time = this.Set();
        if (this.time > 0) {
            this.StartGameTime(this.time);
        }
    };
    return TimeBaseUI;
}());
//# sourceMappingURL=TimeBaseUI.js.map