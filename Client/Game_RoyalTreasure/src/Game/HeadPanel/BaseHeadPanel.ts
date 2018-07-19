/**
 * 顶部面板基类
 */
class BaseHeadPanel extends ui.HeadPanelUI {
    protected ui: ui.GameBgViewUI;
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
        this.ui = new ui.HeadPanelUI();
        this.ui.zOrder = 2;
        this.ui.cacheAs = "bitmap";
        Laya.stage.addChild(this.ui);
    }
    /**
     * 更改余额显示
     * @param data接收的数据
     */
    protected SetBalance(data:any){
        this.balance.changeText(data.toString());
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
