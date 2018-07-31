/**
 * 底部面板基类
 */
var BaseFootPanel = /** @class */ (function () {
    function BaseFootPanel(eventKey) {
        this.listenEventKey = "";
        this.currentBetNum = 100; //默认投注额
        this.maxBetNum = 0; //最大投注额
        this.listenEventKey = eventKey;
    }
    /**
     * 重置屏幕
     */
    BaseFootPanel.prototype.ResetScreen = function () {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.FootPanelUI();
        this.ui.zOrder = 3;
        this.ui.cacheAs = "bitmap";
        this.ui.y = 1134;
        Laya.stage.addChild(this.ui);
        this.OnButton();
        this.EnableButton(false);
    };
    /**
     * 绑定按钮
     */
    BaseFootPanel.prototype.OnButton = function () {
        this.MouseDown();
        this.MouseUp();
    };
    /**
     * 鼠标按下
     */
    BaseFootPanel.prototype.MouseDown = function () {
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
     * 鼠标抬起
     */
    BaseFootPanel.prototype.MouseUp = function () {
        var _this = this;
        this.ui.maxBtn.on(Laya.Event.MOUSE_UP, this, function () {
            _this.ui.maxBtn.skin = "ui/maxBtn1.png";
            // Laya.SoundManager.playSound("sound/btnSound.mp3");
            _this.currentBetNum = _this.maxBetNum;
            if (_this.currentBetNum < 100)
                _this.currentBetNum = 100;
            _this.ui.betNum.changeText(JSON.stringify(_this.currentBetNum));
        });
        this.ui.decreaseBtn.on(Laya.Event.MOUSE_UP, this, function () {
            _this.ui.decreaseBtn.skin = "ui/decreaseBtn1.png";
            // Laya.SoundManager.playSound("sound/btnSound.mp3");
            _this.currentBetNum = _this.DecreaseBetNum(_this.currentBetNum);
            if (_this.currentBetNum < 100)
                _this.currentBetNum = 100;
            _this.ui.betNum.changeText(JSON.stringify(_this.currentBetNum));
        });
        this.ui.addBtn.on(Laya.Event.MOUSE_UP, this, function () {
            _this.ui.addBtn.skin = "ui/addBtn1.png";
            // Laya.SoundManager.playSound("sound/btnSound.mp3");
            _this.currentBetNum = _this.AddBetNum(_this.currentBetNum);
            if (_this.currentBetNum > _this.maxBetNum)
                _this.currentBetNum = _this.maxBetNum;
            if (_this.currentBetNum < 100)
                _this.currentBetNum = 100;
            _this.ui.betNum.changeText(JSON.stringify(_this.currentBetNum));
        });
    };
    /**
     * 减少投注额逻辑
     * @param currentBetNum 临时投注额
     */
    BaseFootPanel.prototype.DecreaseBetNum = function (currentBetNum) {
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
    BaseFootPanel.prototype.AddBetNum = function (currentBetNum) {
        var current = currentBetNum.toString().split("");
        var maxNum = Number(current[0]);
        maxNum += 1;
        current[0] = maxNum.toString();
        return Number(current.join(""));
    };
    /**
     * 按钮是否启用（默认启用）
     * @param isEnable默认为true
     */
    BaseFootPanel.prototype.EnableButton = function (isEnable) {
        if (isEnable === void 0) { isEnable = true; }
        this.ui.maxBtn.mouseEnabled = isEnable;
        this.ui.decreaseBtn.mouseEnabled = isEnable;
        this.ui.addBtn.mouseEnabled = isEnable;
        this.ui.autoDigBtn.mouseEnabled = isEnable;
    };
    /**
     * 返回当前投注额
     */
    BaseFootPanel.prototype.BetNumber = function () {
        return this.currentBetNum;
    };
    /**
     * 类型：私有方法
     * 通过事件，向上通知
     * 事件key值，通过构造函数时注入
     */
    BaseFootPanel.prototype.EventNotification = function () {
        var data = new Dto.EventNotificationDto();
        data.Value = {};
        data.Type = Enum.ListenViewEnum.BetPos;
        var event = new CustomEvent(this.listenEventKey, { detail: data });
        document.dispatchEvent(event);
    };
    return BaseFootPanel;
}());
//# sourceMappingURL=BaseFootPanel.js.map