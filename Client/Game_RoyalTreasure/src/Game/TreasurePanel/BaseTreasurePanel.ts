/**
 * 宝藏面板基类
 */
class BaseTreasurePanel extends ui.TreasurePanelUI {
    protected ui: ui.TreasurePanelUI;
    protected listenEventKey: string = "";
    constructor(eventKey:string) {
        super();
        this.listenEventKey=eventKey;
    }

    /**
     * 重置屏幕
     */
    public ResetScreen() {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.TreasurePanelUI();
        this.ui.zOrder = 4;
        this.ui.cacheAs = "bitmap";
        this.ui.y=264;
        Laya.stage.addChild(this.ui);
    }

    /**
     * 类型：私有方法
     * 通过事件，向上通知
     * 事件key值，通过构造函数时注入
     */
    private EventNotification(): void {
        let data: Dto.EventNotificationDto = new Dto.EventNotificationDto();
        data.Value = {};
        data.Type = Enum.ListenViewEnum.BetPos;

        let event = new CustomEvent(this.listenEventKey, { detail: data });
        document.dispatchEvent(event);
    }
}
