/**
 * 底部面板基类
 */
var BaseToyPanel = /** @class */ (function () {
    function BaseToyPanel(eventKey) {
        this.listenEventKey = "";
        this.listenEventKey = eventKey;
    }
    /**
     * 重置屏幕
     */
    BaseToyPanel.prototype.ResetScreen = function () {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.ToyPanelUI();
        this.ui.zOrder = 8;
        this.ui.x = 375;
        this.ui.y = 667;
        Laya.stage.addChild(this.ui);
        this.ui.visible = false;
        this.ui.dig.on(Laya.Event.COMPLETE, this, this.EventNotification);
    };
    /**
     * 挖
     */
    BaseToyPanel.prototype.Dig = function () {
        this.ui.hammer.visible = true;
        this.ui.dig.play(0, false);
    };
    BaseToyPanel.prototype.DigWhere = function (data) {
        this.ui.x = data.x - 71;
        this.ui.y = data.y - 200;
    };
    /**
     * 类型：私有方法
     * 通过事件，向上通知
     * 事件key值，通过构造函数时注入
     */
    BaseToyPanel.prototype.EventNotification = function () {
        var _this = this;
        this.ui.hammer.visible = false;
        var data = new Dto.EventNotificationDto();
        data.Value = {};
        if (!this.isWin) {
            data.Type = Enum.ListenViewEnum.NextTime;
            this.ui.hammerSplit.visible = true;
            Laya.timer.once(500, this, function () {
                var event = new CustomEvent(_this.listenEventKey, { detail: data });
                document.dispatchEvent(event);
            });
        }
        else {
            data.Type = Enum.ListenViewEnum.DigAniComplete;
            var event_1 = new CustomEvent(this.listenEventKey, { detail: data });
            document.dispatchEvent(event_1);
        }
    };
    return BaseToyPanel;
}());
//# sourceMappingURL=BaseToyPanel.js.map