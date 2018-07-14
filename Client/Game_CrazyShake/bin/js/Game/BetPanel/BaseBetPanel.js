var BaseBetPanel = /** @class */ (function () {
    function BaseBetPanel(eventKey) {
        this.listenEventKey = eventKey;
    }
    /**
     * 重置屏幕
     */
    BaseBetPanel.prototype.ResetScreen = function () {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.BetPanelUI();
        this.ui.zOrder = 5;
        this.ui.cacheAs = "bitmap";
        //设置组件位置
        this.ui.y = 1053;
        Laya.stage.addChild(this.ui);
        this.OnButton();
        //禁用按钮
        this.EnableButton(false);
    };
    /**
     * 绑定按钮
     */
    BaseBetPanel.prototype.OnButton = function () {
        this.OnChangBtnImg();
        this.ui.littleBtn.on(Laya.Event.MOUSE_UP, this, this.EventNotification, [Enum.GameBetType.Little]);
        this.ui.jaguarBtn.on(Laya.Event.MOUSE_UP, this, this.EventNotification, [Enum.GameBetType.Jaguar]);
        this.ui.bigBtn.on(Laya.Event.MOUSE_UP, this, this.EventNotification, [Enum.GameBetType.Big]);
    };
    /**
     * 投注点击事件
     * @param value
     */
    BaseBetPanel.prototype.EventNotification = function (value) {
        this.EnableButton(false);
        Laya.SoundManager.playSound("sound/betSound.mp3");
        var dto = new Dto.EventNotificationDto();
        dto.Type = Enum.ListenViewEnum.BetPos;
        dto.Value = value;
        var event = new CustomEvent(this.listenEventKey, { detail: dto });
        document.dispatchEvent(event);
    };
    /**
     * 启用按钮
     */
    BaseBetPanel.prototype.EnableButton = function (isEnabled) {
        if (isEnabled === void 0) { isEnabled = true; }
        this.ui.littleBtn.mouseEnabled = isEnabled;
        this.ui.jaguarBtn.mouseEnabled = isEnabled;
        this.ui.bigBtn.mouseEnabled = isEnabled;
    };
    /**
     * 投注按钮文字渲染(根据语言类型)
     * @param data 赔率
     */
    BaseBetPanel.prototype.NotePosOdds = function (data) {
        this.ui.littleOdds.changeText(LanguageUtils.Language.Get("BetNote") + data[Enum.GameBetType.Little].toString());
        this.ui.littleRule.changeText(LanguageUtils.Language.Get("LittleRule"));
        this.ui.jaguarOdds.changeText(LanguageUtils.Language.Get("BetNote") + data[Enum.GameBetType.Jaguar].toString());
        this.ui.jaguarRule.changeText(LanguageUtils.Language.Get("JaguarRule"));
        this.ui.bigOdds.changeText(LanguageUtils.Language.Get("BetNote") + data[Enum.GameBetType.Big].toString());
        this.ui.bigRule.changeText(LanguageUtils.Language.Get("BigRule"));
    };
    /**
     * 按钮样式复原
     */
    BaseBetPanel.prototype.RecoverBtnImg = function () {
        this.ui.littleBtn.skin = "ui/littleBtn1.png";
        this.ui.jaguarBtn.skin = "ui/jaguarBtn1.png";
        this.ui.bigBtn.skin = "ui/bigBtn1.png";
        this.ui.littleOdds.scale(1, 1);
        this.ui.jaguarOdds.scale(1, 1);
        this.ui.bigOdds.scale(1, 1);
        this.ui.littleRule.scale(1, 1);
        this.ui.jaguarRule.scale(1, 1);
        this.ui.jaguarRule.scale(1, 1);
    };
    /**
     * 按钮样式的绑定
     */
    BaseBetPanel.prototype.OnChangBtnImg = function () {
        var _this = this;
        this.ui.littleBtn.on(Laya.Event.MOUSE_DOWN, this, function () {
            _this.ui.littleBtn.skin = "ui/littleBtn2.png";
            _this.ui.littleOdds.scale(0.9, 0.9);
            _this.ui.littleRule.scale(0.9, 0.9);
        });
        this.ui.jaguarBtn.on(Laya.Event.MOUSE_DOWN, this, function () {
            _this.ui.jaguarBtn.skin = "ui/jaguarBtn2.png";
            _this.ui.jaguarOdds.scale(0.9, 0.9);
            _this.ui.jaguarRule.scale(0.9, 0.9);
        });
        this.ui.bigBtn.on(Laya.Event.MOUSE_DOWN, this, function () {
            _this.ui.bigBtn.skin = "ui/bigBtn2.png";
            _this.ui.bigOdds.scale(0.9, 0.9);
            _this.ui.bigRule.scale(0.9, 0.9);
        });
    };
    return BaseBetPanel;
}());
//# sourceMappingURL=BaseBetPanel.js.map