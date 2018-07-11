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
        this.ui.zOrder = 6;
        this.ui.cacheAs = "bitmap";
        //设置组件位置
        this.ui.y = 1019;
        Laya.stage.addChild(this.ui);
        this.OnButton();
        //禁用按钮
        this.EnableButton(false);
    };
    /**
     * 绑定按钮
     */
    BaseBetPanel.prototype.OnButton = function () {
        this.ui.littleBtn.on(Laya.Event.CLICK, this, this.EventNotification, [Enum.GameBetType.Little]);
        this.ui.jaguarBtn.on(Laya.Event.CLICK, this, this.EventNotification, [Enum.GameBetType.Jaguar]);
        this.ui.bigBtn.on(Laya.Event.CLICK, this, this.EventNotification, [Enum.GameBetType.Big]);
        console.log(Enum.GameBetType.Jaguar);
    };
    /**
     * 投注点击事件
     * @param value
     */
    BaseBetPanel.prototype.EventNotification = function (value) {
        var dto = new Dto.EventNotificationDto();
        dto.Type = Enum.ListenViewEnum.BetPos;
        // dto.Type = Enum.ListenViewEnum.TestBet;
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
    return BaseBetPanel;
}());
//# sourceMappingURL=BaseBetPanel.js.map