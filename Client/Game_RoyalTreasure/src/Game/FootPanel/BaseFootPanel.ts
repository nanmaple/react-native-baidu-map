/**
 * 底部面板基类
 */
class BaseFootPanel {
    protected ui: ui.FootPanelUI;
    protected listenEventKey: string = "";
    public currentBetNum: number = 100;             //默认投注额
    protected maxBetNum: number = 0;                //最大投注额
    protected isVisible: boolean = false;             //自动挖矿是否可见
    private nowAutoBetTime: number = 0;             //当前自动投注次数
    constructor(eventKey: string) {
        this.listenEventKey = eventKey;
    }

    /**
     * 重置屏幕
     */
    public ResetScreen() {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.FootPanelUI();
        this.ui.zOrder = 4;
        this.ui.cacheAs = "bitmap";
        this.ui.y = 1061;
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
        this.OnAutoDigBtn();
        this.OnStopDigBtn()
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
     * 自动挖矿按钮
     */
    private OnAutoDigBtn(): void {
        this.ui.autoDigBtn.on(Laya.Event.CLICK, this, () => {
            this.isVisible = !this.isVisible;
            Laya.Tween.to(this.ui.autoDigBtn, { scaleX: 0.9, scaleY: 0.9 }, 100, Laya.Ease.backOut, Laya.Handler.create(this, () => {
                this.ui.autoDigTimes.visible = this.isVisible;
                Laya.Tween.to(this.ui.autoDigBtn, { scaleX: 1, scaleY: 1 }, 100, Laya.Ease.backOut);
            }));
        })
        this.ui.times_10.on(Laya.Event.MOUSE_DOWN, this, this.StartAutoDig, [10])
        this.ui.times_20.on(Laya.Event.MOUSE_DOWN, this, this.StartAutoDig, [20])
        this.ui.times_50.on(Laya.Event.MOUSE_DOWN, this, this.StartAutoDig, [50])
        this.ui.times_100.on(Laya.Event.MOUSE_DOWN, this, this.StartAutoDig, [100])
    }
    /**
     * 停止挖矿按钮
     */
    private OnStopDigBtn() {
        this.ui.stopDigBtn.on(Laya.Event.CLICK, this, () => {
            let data: Dto.EventNotificationDto = new Dto.EventNotificationDto();
            data.Value = {};
            data.Type = Enum.ListenViewEnum.StopAutoDig;
            let event = new CustomEvent(this.listenEventKey, { detail: data });
            document.dispatchEvent(event);
            Laya.Tween.to(this.ui.stopDigBtn, { scaleX: 0.9, scaleY: 0.9 }, 100, Laya.Ease.backOut, Laya.Handler.create(this, () => {
                Laya.Tween.to(this.ui.autoDigBtn, { scaleX: 1, scaleY: 1 }, 100, Laya.Ease.backOut, Laya.Handler.create(this, () => {
                    this.ui.stopDigBtn.visible = false;
                    this.ui.autoDigBtn.visible = true;
                }));
            }));
        })

    }

    /**
     * 开始自动挖矿
     * @param digTimes自动挖矿次数 
     */
    private StartAutoDig(digTimes: number): void {
        this.isVisible = !this.isVisible;
        this.ui.autoDigTimes.visible = this.isVisible;
        this.ui.autoDigBtn.visible = false;
        this.ui.stopDigBtn.visible = true;
        this.EventNotification(digTimes);
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
    protected EnableButton(isEnable: boolean = true) {
        this.ui.maxBtn.mouseEnabled = isEnable;
        this.ui.decreaseBtn.mouseEnabled = isEnable;
        this.ui.addBtn.mouseEnabled = isEnable;
        this.ui.autoDigBtn.mouseEnabled = isEnable;
    }

    /**
     * 返回当前投注额
     */
    public BetNumber(): number {
        return this.currentBetNum
    }

    /**
     * 停止按钮文字显示（剩余挖矿次数）
     * @param data 次数参数
     */
    protected ChangeStopBtnWord(data: any): void {
        this.ui.surplusWord.changeText("还剩余" + data + "次");
    }
    /**
     * 自动挖矿结束
     */
    protected AutoDigOver() {
        this.nowAutoBetTime = 0;
        this.ui.stopDigBtn.visible = false;
        this.ui.autoDigBtn.visible = true;
        this.EnableButton();
    }


    /**
     * 类型：私有方法
     * 通过事件，向上通知
     * 事件key值，通过构造函数时注入
     */
    protected EventNotification(digTimes: number): void {
        this.nowAutoBetTime++;
        let data: Dto.EventNotificationDto = new Dto.EventNotificationDto();
        data.Value = { x: 425, y: 420, digTime: digTimes, nowTime: this.nowAutoBetTime };                                                 //自动挖矿坐标
        data.Type = Enum.ListenViewEnum.AutoBet;
        let event = new CustomEvent(this.listenEventKey, { detail: data });
        document.dispatchEvent(event);
    }
}
