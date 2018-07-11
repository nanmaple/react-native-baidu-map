var BaseBetNumPanel = /** @class */ (function () {
    function BaseBetNumPanel() {
        this.currentBetNum = 100; //默认投注额
        this.maxBetNum = 0; //最大投注额
    }
    /**
     * 重置屏幕
     */
    BaseBetNumPanel.prototype.ResetScreen = function () {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.BetNumPanelUI();
        this.ui.zOrder = 4;
        this.ui.cacheAs = "bitmap";
        //设置组件位置
        this.ui.y = 915;
        Laya.stage.addChild(this.ui);
        this.OnButton();
        // 禁用按钮
        this.EnableButton(false);
    };
    /**
     * 绑定按钮
     */
    BaseBetNumPanel.prototype.OnButton = function () {
        var _this = this;
        //最大投注
        this.ui.maxBtn.on(Laya.Event.CLICK, this, function () {
            Laya.SoundManager.playSound("sound/btnSound.mp3");
            _this.currentBetNum = _this.maxBetNum;
            if (_this.currentBetNum < 100)
                _this.currentBetNum = 100;
            _this.ui.betNumText.changeText(JSON.stringify(_this.currentBetNum));
        });
        //减少投注
        this.ui.decreaseBtn.on(Laya.Event.CLICK, this, function () {
            Laya.SoundManager.playSound("sound/btnSound.mp3");
            _this.currentBetNum -= 100;
            if (_this.currentBetNum < 100)
                _this.currentBetNum = 100;
            _this.ui.betNumText.changeText(JSON.stringify(_this.currentBetNum));
        });
        //增加投注
        this.ui.addBtn.on(Laya.Event.CLICK, this, function () {
            Laya.SoundManager.playSound("sound/btnSound.mp3");
            _this.currentBetNum += 100;
            if (_this.currentBetNum > _this.maxBetNum)
                _this.currentBetNum = _this.maxBetNum;
            if (_this.currentBetNum < 100)
                _this.currentBetNum = 100;
            _this.ui.betNumText.changeText(JSON.stringify(_this.currentBetNum));
        });
    };
    /**
     * 启用按钮
     * @param isEnabled
     */
    BaseBetNumPanel.prototype.EnableButton = function (isEnabled) {
        if (isEnabled === void 0) { isEnabled = true; }
        this.ui.maxBtn.mouseEnabled = isEnabled;
        this.ui.decreaseBtn.mouseEnabled = isEnabled;
        this.ui.addBtn.mouseEnabled = isEnabled;
    };
    return BaseBetNumPanel;
}());
//# sourceMappingURL=BaseBetNumPanel.js.map