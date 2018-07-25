/**
 * 底部面板基类
 */
class BaseFootPanel {
    protected ui: ui.FootPanelUI;
    protected listenEventKey: string = "";
    public currentBetNum: number = 100;         //默认投注额
    protected maxBetNum: number = 0;            //最大投注额
    constructor(eventKey: string) {
        this.listenEventKey = eventKey;
    }

    /**
     * 重置屏幕
     */
    public ResetScreen() {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.FootPanelUI();
        this.ui.zOrder = 3;
        this.ui.cacheAs = "bitmap";
        this.ui.y = 1134;
        Laya.stage.addChild(this.ui);
        this.OnButton();
        this.EnableButton(false);
    }
    /**
     * 绑定按钮
     */
    protected OnButton() {
        this.MouseDown();
        this.MouseUp();
    }

    /**
     * 鼠标按下
     */
    private MouseDown() {
        this.ui.maxBtn.on(Laya.Event.MOUSE_DOWN, this, () => {
            this.ui.maxBtn.skin = "ui/maxBtn2.png";
        })
        this.ui.decreaseBtn.on(Laya.Event.MOUSE_DOWN, this, () => {
            this.ui.decreaseBtn.skin = "ui/decreaseBtn2.png"
        })
        this.ui.addBtn.on(Laya.Event.MOUSE_DOWN, this, () => {
            this.ui.addBtn.skin = "ui/addBtn2.png"
        })
    }

    /**
     * 鼠标抬起
     */
    private MouseUp() {
        this.ui.maxBtn.on(Laya.Event.MOUSE_UP, this, () => {
            this.ui.maxBtn.skin = "ui/maxBtn1.png";
            // Laya.SoundManager.playSound("sound/btnSound.mp3");
            this.currentBetNum = this.maxBetNum;
            if (this.currentBetNum < 100) this.currentBetNum = 100;
            this.ui.betNum.changeText(JSON.stringify(this.currentBetNum));
        })
        this.ui.decreaseBtn.on(Laya.Event.MOUSE_UP, this, () => {
            this.ui.decreaseBtn.skin = "ui/decreaseBtn1.png";
            // Laya.SoundManager.playSound("sound/btnSound.mp3");
            this.currentBetNum = this.DecreaseBetNum(this.currentBetNum);
            if (this.currentBetNum < 100) this.currentBetNum = 100;
            this.ui.betNum.changeText(JSON.stringify(this.currentBetNum));
        })
        this.ui.addBtn.on(Laya.Event.MOUSE_UP, this, () => {
            this.ui.addBtn.skin = "ui/addBtn1.png";
            // Laya.SoundManager.playSound("sound/btnSound.mp3");
            this.currentBetNum = this.AddBetNum(this.currentBetNum);
            if (this.currentBetNum > this.maxBetNum) this.currentBetNum = this.maxBetNum;
            if (this.currentBetNum < 100) this.currentBetNum = 100;
            this.ui.betNum.changeText(JSON.stringify(this.currentBetNum));
        })
    }

    /**
     * 减少投注额逻辑
     * @param currentBetNum 临时投注额
     */
    private DecreaseBetNum(currentBetNum: number): number {
        let current = currentBetNum.toString().split("");
        let maxNum = Number(current[0]);
        if (maxNum > 1) {
            maxNum -= 1;
            current[0] = maxNum.toString();
            return Number(current.join(""));
        }
        current[0] = "";
        current[1] = "9";
        return Number(current.join(""));
    }

    /**
     * 增加投注额逻辑
     * @param currentBetNum 临时投注额
     */
    private AddBetNum(currentBetNum: number): number {
        let current = currentBetNum.toString().split("");
        let maxNum = Number(current[0]);
        maxNum += 1;
        current[0] = maxNum.toString();
        return Number(current.join(""));
    }
    /**
     * 按钮是否启用（默认启用）
     * @param isEnable默认为true 
     */
    protected EnableButton(isEnable:boolean=true){
        this.ui.maxBtn.mouseEnabled=isEnable;
        this.ui.decreaseBtn.mouseEnabled=isEnable;
        this.ui.addBtn.mouseEnabled=isEnable;
        this.ui.autoDigBtn.mouseEnabled=isEnable;
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
