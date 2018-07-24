class BaseBetNumPanel {
    protected ui: ui.BetNumPanelUI;
    public currentBetNum: number = 100;         //默认投注额
    protected maxBetNum: number = 0;            //最大投注额
    constructor() {

    }

    /**
     * 重置屏幕
     */
    public ResetScreen(): void {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.BetNumPanelUI();
        this.ui.zOrder = 4;
        this.ui.cacheAs = "bitmap";
        //设置组件位置
        this.ui.y = 915;
        Laya.stage.addChild(this.ui);
        this.OnButton();
        // 禁用按钮
        this.EnableButton(false);
    }

    /**
     * 绑定按钮
     */
    private OnButton(): void {
        //根据语言切换最大按钮信息
        this.ui.maxWord.changeText(LanguageUtils.Language.Get("MaxBtnNote"))
        this.OnMouseDown();
        this.OnMouseUp();
    }
    /**
     * 鼠标按下事件
     */
    private OnMouseDown(): void {
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
     * 鼠标抬起事件
     */
    private OnMouseUp(): void {
        this.ui.maxBtn.on(Laya.Event.MOUSE_UP, this, () => {
            this.ui.maxBtn.skin = "ui/maxBtn1.png";
            Laya.SoundManager.playSound("sound/btnSound.mp3");
            this.currentBetNum = this.maxBetNum;
            if (this.currentBetNum < 100) this.currentBetNum = 100;
            this.ui.betNumText.changeText(JSON.stringify(this.currentBetNum));
        })
        this.ui.decreaseBtn.on(Laya.Event.MOUSE_UP, this, () => {
            this.ui.decreaseBtn.skin = "ui/decreaseBtn1.png";
            Laya.SoundManager.playSound("sound/btnSound.mp3");
            this.currentBetNum = this.DecreaseBetNum(this.currentBetNum);
            if (this.currentBetNum < 100) this.currentBetNum = 100;
            this.ui.betNumText.changeText(JSON.stringify(this.currentBetNum));
        })
        this.ui.addBtn.on(Laya.Event.MOUSE_UP, this, () => {
            this.ui.addBtn.skin = "ui/addBtn1.png";
            Laya.SoundManager.playSound("sound/btnSound.mp3");
            this.currentBetNum=this.AddBetNum(this.currentBetNum);
            if (this.currentBetNum > this.maxBetNum) this.currentBetNum = this.maxBetNum;
            if (this.currentBetNum < 100) this.currentBetNum = 100;
            this.ui.betNumText.changeText(JSON.stringify(this.currentBetNum));
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
    private AddBetNum(currentBetNum: number):number {
        let current = currentBetNum.toString().split("");
        let maxNum = Number(current[0]);
        maxNum += 1;
        current[0] = maxNum.toString();
        return Number(current.join(""));
    }

    /**
     * 启用按钮
     * @param isEnabled 
     */
    public EnableButton(isEnabled: boolean = true): void {
        this.ui.maxBtn.mouseEnabled = isEnabled;
        this.ui.decreaseBtn.mouseEnabled = isEnabled;
        this.ui.addBtn.mouseEnabled = isEnabled;
    }
}
