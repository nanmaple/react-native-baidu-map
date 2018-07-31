/**
 * 顶部面板基类
 */
class BaseHeadPanel {
    protected ui: ui.HeadPanelUI;
    protected currentBalance: number;
    protected scoreNum: number = 0;
    protected isVoiceOn: boolean = true;
    protected winAmount: number = 0;
    protected listenEventKey: string;
    constructor(eventKey: string) {
        this.listenEventKey = eventKey;
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
        this.ui.ani1.play(0,true)
        this.OnButton();
    }
    /**
     * 绑定按钮
     */
    protected OnButton(): void {
        this.OnMouseDown();
        this.OnMouseUp();
        this.ui.voiceBtn.on(Laya.Event.CLICK, this, () => {
            if (this.isVoiceOn) {
                this.isVoiceOn = false;
                Laya.SoundManager.muted = true;
                this.ui.voiceBtn.skin = "ui/voiceOffBtn.png"
            }
            else {
                this.isVoiceOn = true;
                Laya.SoundManager.muted = false;
                // Laya.SoundManager.playSound("sound/btnSound.mp3")
                this.ui.voiceBtn.skin = "ui/voiceOnBtn.png"
            }
        })
    }
    /**
     * 鼠标按下事件
     */
    private OnMouseDown() {
        this.ui.homeBtn.on(Laya.Event.MOUSE_DOWN, this, () => {
            // Laya.SoundManager.playSound("sound/btnSound.mp3")
            this.ui.homeBtn.skin = "ui/homeBtn2.png"
        })
        this.ui.ruleBtn.on(Laya.Event.MOUSE_DOWN, this, () => {
            // Laya.SoundManager.playSound("sound/btnSound.mp3")
            this.ui.ruleBtn.skin = "ui/ruleBtn2.png"
        })
        this.ui.rechargeBtn.on(Laya.Event.MOUSE_DOWN, this, () => {
            // Laya.SoundManager.playSound("sound/btnSound.mp3")
            this.ui.rechargeBtn.skin = "ui/rechargeBtn2.png"
        })
        this.ui.recordBtn.on(Laya.Event.MOUSE_DOWN, this, () => {
            // Laya.SoundManager.playSound("sound/btnSound.mp3")
            this.ui.recordBtn.skin = "ui/recordBtn2.png"
        })
    }
    /**
     * 鼠标抬起事件
     */
    private OnMouseUp() {
        this.ui.homeBtn.on(Laya.Event.MOUSE_UP, this, () => {
            this.ui.homeBtn.skin = "ui/homeBtn1.png"
            window.location.href = "";
            //返回游戏大厅
        })
        this.ui.ruleBtn.on(Laya.Event.MOUSE_UP, this, () => {
            this.ui.ruleBtn.skin = "ui/ruleBtn1.png"
            this.EventNotification(Enum.ListenViewEnum.OpenRule);
        })
        this.ui.rechargeBtn.on(Laya.Event.MOUSE_UP, this, () => {
            this.ui.rechargeBtn.skin = "ui/rechargeBtn1.png"
            //弹出游戏充值面板
        })
        this.ui.recordBtn.on(Laya.Event.MOUSE_UP, this, () => {
            this.ui.recordBtn.skin = "ui/recordBtn1.png"
            this.EventNotification(Enum.ListenViewEnum.OpenRecord)
        })
    }

    /**
     * 余额显示
     * @param data接收的数据
     */
    protected SetBalance(data: any) {
        this.ui.balance.changeText(data.toString());
    }

    /**
     * 类型：私有方法
     * 通过事件，向上通知
     * 事件key值，通过构造函数时注入
     */
    private EventNotification(Data: any): void {
        let data: Dto.EventNotificationDto = new Dto.EventNotificationDto();
        data.Value = {};
        data.Type = Data;
        let event = new CustomEvent(this.listenEventKey, { detail: data });
        document.dispatchEvent(event);
    }
}
