/**
 * 游戏规则基类
 */
var BaseRecordPanel = /** @class */ (function () {
    function BaseRecordPanel(eventKey) {
        this.listenEventKey = eventKey;
    }
    /**
     * 重置屏幕
     */
    BaseRecordPanel.prototype.ResetScreen = function () {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.RulePanelUI();
        this.ui.zOrder = 777;
        this.ui.cacheAs = "bitmap";
        Laya.stage.addChild(this.ui);
        this.ui.closeBtn.on(Laya.Event.CLICK, this, this.EventNotification);
        this.ui.visible = false;
    };
    /**
     * 类型：私有方法
     * 通过事件，向上通知
     * 事件key值，通过构造函数时注入
     */
    BaseRecordPanel.prototype.EventNotification = function () {
        var data = new Dto.EventNotificationDto();
        data.Value = {};
        data.Type = Enum.ListenViewEnum.CloseRule;
        var event = new CustomEvent(this.listenEventKey, { detail: data });
        document.dispatchEvent(event);
    };
    return BaseRecordPanel;
}());
//# sourceMappingURL=BaseRulePanel.js.map