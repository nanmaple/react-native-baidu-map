class BaseBetNumPanel {
    protected ui: ui.BetNumPanelUI;
    public currentBetNum: number = 100;         //默认投注额
    protected maxBetNum: number = 0;            //最大投注额
    constructor() {

    }

    /**
     * 重置屏幕
     */
    public ResetScreen() :void{
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
    private OnButton() :void{
        //根据语言切换最大按钮信息
        // this.ui.maxBtn.skin=LanguageUtils.Language.Get("MaxBtnNote");
        //最大投注
        this.ui.maxBtn.on(Laya.Event.CLICK, this, () => {
            Laya.SoundManager.playSound("sound/btnSound.mp3");
            this.currentBetNum = this.maxBetNum;
            if (this.currentBetNum < 100) this.currentBetNum = 100;
            this.ui.betNumText.changeText(JSON.stringify(this.currentBetNum));
        })
        //减少投注
        this.ui.decreaseBtn.on(Laya.Event.CLICK, this, () => {
            Laya.SoundManager.playSound("sound/btnSound.mp3");
            this.currentBetNum -= 100;
            if (this.currentBetNum < 100) this.currentBetNum = 100;
            this.ui.betNumText.changeText(JSON.stringify(this.currentBetNum));
        })
        //增加投注
        this.ui.addBtn.on(Laya.Event.CLICK, this, () => {
            Laya.SoundManager.playSound("sound/btnSound.mp3");
            this.currentBetNum += 100;
            if (this.currentBetNum > this.maxBetNum) this.currentBetNum = this.maxBetNum;
            if (this.currentBetNum < 100) this.currentBetNum = 100;
            this.ui.betNumText.changeText(JSON.stringify(this.currentBetNum));
        })
    }
    /**
     * 启用按钮
     * @param isEnabled 
     */
    public EnableButton(isEnabled: boolean = true) :void{
        this.ui.maxBtn.mouseEnabled = isEnabled;
        this.ui.decreaseBtn.mouseEnabled = isEnabled;
        this.ui.addBtn.mouseEnabled = isEnabled;
    }
}
