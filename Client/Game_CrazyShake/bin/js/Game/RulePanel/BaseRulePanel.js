/**
 * 游戏规则基类
 */
var BaseRulePanel = /** @class */ (function () {
    function BaseRulePanel(eventKey) {
        this.listenEventKey = eventKey;
    }
    /**
     * 重置屏幕
     */
    BaseRulePanel.prototype.ResetScreen = function () {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.RulePanelUI();
        this.ui.zOrder = 666;
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
    BaseRulePanel.prototype.EventNotification = function () {
        Laya.SoundManager.playSound("sound/btnSound.mp3");
        var data = new Dto.EventNotificationDto();
        data.Value = {};
        data.Type = Enum.ListenViewEnum.CloseRule;
        var event = new CustomEvent(this.listenEventKey, { detail: data });
        document.dispatchEvent(event);
    };
    return BaseRulePanel;
}());
//# sourceMappingURL=BaseRulePanel.js.map