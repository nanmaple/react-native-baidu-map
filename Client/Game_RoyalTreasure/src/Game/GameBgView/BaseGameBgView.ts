/**
 * BaseView主要用于写固定的UI渲染方法和不同功能的UI处理方法,动画
 * 命名规则：BasexxxView
 */
class BaseGameBgView {
    protected ui: ui.GameBgViewUI;
    protected listenEventKey: string = "";
    constructor(eventKey:string) {
        this.listenEventKey=eventKey
    }

    /**
     * 重置屏幕
     */
    public ResetScreen() {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.GameBgViewUI();
        this.ui.zOrder = 1;
        this.ui.cacheAs = "bitmap";
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
