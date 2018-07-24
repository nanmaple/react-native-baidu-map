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
        //根据语言切换最大按钮信息
        this.ui.maxWord.changeText(LanguageUtils.Language.Get("MaxBtnNote"));
        this.OnMouseDown();
        this.OnMouseUp();
    };
    /**
     * 鼠标按下事件
     */
    BaseBetNumPanel.prototype.OnMouseDown = function () {
        var _this = this;
        this.ui.maxBtn.on(Laya.Event.MOUSE_DOWN, this, function () {
            _this.ui.maxBtn.skin = "ui/maxBtn2.png";
        });
        this.ui.decreaseBtn.on(Laya.Event.MOUSE_DOWN, this, function () {
            _this.ui.decreaseBtn.skin = "ui/decreaseBtn2.png";
        });
        this.ui.addBtn.on(Laya.Event.MOUSE_DOWN, this, function () {
            _this.ui.addBtn.skin = "ui/addBtn2.png";
        });
    };
    /**
     * 鼠标抬起事件
     */
    BaseBetNumPanel.prototype.OnMouseUp = function () {
        var _this = this;
        this.ui.maxBtn.on(Laya.Event.MOUSE_UP, this, function () {
            _this.ui.maxBtn.skin = "ui/maxBtn1.png";
            Laya.SoundManager.playSound("sound/btnSound.mp3");
            _this.currentBetNum = _this.maxBetNum;
            if (_this.currentBetNum < 100)
                _this.currentBetNum = 100;
            _this.ui.betNumText.changeText(JSON.stringify(_this.currentBetNum));
        });
        this.ui.decreaseBtn.on(Laya.Event.MOUSE_UP, this, function () {
            _this.ui.decreaseBtn.skin = "ui/decreaseBtn1.png";
            Laya.SoundManager.playSound("sound/btnSound.mp3");
            _this.currentBetNum = _this.DecreaseBetNum(_this.currentBetNum);
            if (_this.currentBetNum < 100)
                _this.currentBetNum = 100;
            _this.ui.betNumText.changeText(JSON.stringify(_this.currentBetNum));
        });
        this.ui.addBtn.on(Laya.Event.MOUSE_UP, this, function () {
            _this.ui.addBtn.skin = "ui/addBtn1.png";
            Laya.SoundManager.playSound("sound/btnSound.mp3");
            _this.currentBetNum = _this.AddBetNum(_this.currentBetNum);
            if (_this.currentBetNum > _this.maxBetNum)
                _this.currentBetNum = _this.maxBetNum;
            if (_this.currentBetNum < 100)
                _this.currentBetNum = 100;
            _this.ui.betNumText.changeText(JSON.stringify(_this.currentBetNum));
        });
    };
    /**
     * 减少投注额逻辑
     * @param currentBetNum 临时投注额
     */
    BaseBetNumPanel.prototype.DecreaseBetNum = function (currentBetNum) {
        var current = currentBetNum.toString().split("");
        var maxNum = Number(current[0]);
        if (maxNum > 1) {
            maxNum -= 1;
            current[0] = maxNum.toString();
            return Number(current.join(""));
        }
        current[0] = "";
        current[1] = "9";
        return Number(current.join(""));
    };
    /**
     * 增加投注额逻辑
     * @param currentBetNum 临时投注额
     */
    BaseBetNumPanel.prototype.AddBetNum = function (currentBetNum) {
        var current = currentBetNum.toString().split("");
        var maxNum = Number(current[0]);
        maxNum += 1;
        current[0] = maxNum.toString();
        return Number(current.join(""));
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