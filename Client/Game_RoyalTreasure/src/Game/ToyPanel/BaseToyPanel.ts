/**
 * 底部面板基类
 */
class BaseToyPanel {
    protected ui: ui.ToyPanelUI;
    protected listenEventKey: string = "";
    protected isWin: boolean;
    constructor(eventKey: string) {
        this.listenEventKey = eventKey;
    }

    /**
     * 重置屏幕
     */
    public ResetScreen() {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.ToyPanelUI();
        this.ui.zOrder = 8;
        this.ui.x = 375;
        this.ui.y = 667;
        Laya.stage.addChild(this.ui);
        this.ui.visible = false;
        this.ui.dig.on(Laya.Event.COMPLETE, this,()=>{
            Laya.timer.once(200,this,this.EventNotification)
        })
    }
    /**
     * 挖掘
     */
    protected Dig() {
        this.ui.hammer.visible=true;
        this.ui.dig.play(0, false);
    }
    /**
     * 挖掘位置
     * @param data 位置
     */
    public DigWhere(data: any) {
        this.ui.x = data.x - 71;
        this.ui.y = data.y - 200;
    }

    /**
     * 类型：私有方法
     * 通过事件，向上通知
     * 事件key值，通过构造函数时注入
     */
    private EventNotification(): void {
        this.ui.hammer.visible = false;
        let data: Dto.EventNotificationDto = new Dto.EventNotificationDto();
        data.Value = {};
        if (!this.isWin) {
            data.Type = Enum.ListenViewEnum.NextTime;
            this.ui.hammerSplit.visible = true;
            Laya.timer.once(500, this, () => {
                let event = new CustomEvent(this.listenEventKey, { detail: data });
                document.dispatchEvent(event);
            })
        }
        else {
            data.Type = Enum.ListenViewEnum.DigAniComplete;
            let event = new CustomEvent(this.listenEventKey, { detail: data });
            document.dispatchEvent(event);
        }
    }

}
