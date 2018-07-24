/**
 * 游戏规则基类
 */
class BaseRulePanel {
    protected ui: ui.RulePanelUI;
    protected listenEventKey:string;
    constructor(eventKey: string) {
        this.listenEventKey = eventKey;
    }

    /**
     * 重置屏幕
     */
    public ResetScreen(): void {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.RulePanelUI();
        this.ui.zOrder = 666;
        this.ui.cacheAs = "bitmap";
        Laya.stage.addChild(this.ui);
        this.ui.closeBtn.on(Laya.Event.CLICK,this,this.EventNotification)
        this.ui.visible=false
    }

    /**
     * 类型：私有方法
     * 通过事件，向上通知
     * 事件key值，通过构造函数时注入
     */
    private EventNotification(): void {
        Laya.SoundManager.playSound("sound/btnSound.mp3")
        let data: Dto.EventNotificationDto = new Dto.EventNotificationDto();
        data.Value = {};
        data.Type = Enum.ListenViewEnum.CloseRule;
        let event = new CustomEvent(this.listenEventKey, { detail: data });
        document.dispatchEvent(event);
    }
}
