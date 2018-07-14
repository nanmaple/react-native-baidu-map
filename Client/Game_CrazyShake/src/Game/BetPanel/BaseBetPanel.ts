class BaseBetPanel {
    protected ui: ui.BetPanelUI;
    protected listenEventKey: string;
    constructor(eventKey: string) {
        this.listenEventKey = eventKey;
    }

    /**
     * 重置屏幕
     */
    public ResetScreen() :void{
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.BetPanelUI();
        this.ui.zOrder = 5;
        this.ui.cacheAs = "bitmap";
        //设置组件位置
        this.ui.y = 1053;
        Laya.stage.addChild(this.ui);
        this.OnButton();
        //禁用按钮
        this.EnableButton(false);
    }
    /**
     * 绑定按钮
     */
    protected OnButton() :void{
        this.OnChangBtnImg();
        this.ui.littleBtn.on(Laya.Event.MOUSE_UP, this, this.EventNotification, [Enum.GameBetType.Little]);
        this.ui.jaguarBtn.on(Laya.Event.MOUSE_UP, this, this.EventNotification, [Enum.GameBetType.Jaguar]);
        this.ui.bigBtn.on(Laya.Event.MOUSE_UP, this, this.EventNotification, [Enum.GameBetType.Big]);
    }
    /**
     * 投注点击事件
     * @param value 
     */
    protected EventNotification(value: number) :void{
        this.EnableButton(false);
        Laya.SoundManager.playSound("sound/betSound.mp3");
        let dto: Dto.EventNotificationDto = new Dto.EventNotificationDto();
        dto.Type = Enum.ListenViewEnum.BetPos;
        dto.Value = value;
        let event = new CustomEvent(this.listenEventKey, { detail: dto })
        document.dispatchEvent(event);
    }

    /**
     * 启用按钮
     */
    protected EnableButton(isEnabled: boolean = true) :void{
        this.ui.littleBtn.mouseEnabled = isEnabled;
        this.ui.jaguarBtn.mouseEnabled = isEnabled;
        this.ui.bigBtn.mouseEnabled = isEnabled;
    }
    /**
     * 投注按钮文字渲染(根据语言类型)
     * @param data 赔率
     */
    protected NotePosOdds(data: any) :void{
        this.ui.littleOdds.changeText(LanguageUtils.Language.Get("BetNote") + data[Enum.GameBetType.Little].toString());
        this.ui.littleRule.changeText(LanguageUtils.Language.Get("LittleRule"));
        this.ui.jaguarOdds.changeText(LanguageUtils.Language.Get("BetNote") + data[Enum.GameBetType.Jaguar].toString());
        this.ui.jaguarRule.changeText(LanguageUtils.Language.Get("JaguarRule"));
        this.ui.bigOdds.changeText(LanguageUtils.Language.Get("BetNote") + data[Enum.GameBetType.Big].toString());
        this.ui.bigRule.changeText(LanguageUtils.Language.Get("BigRule"));
    }
    /**
     * 按钮样式复原
     */
    protected RecoverBtnImg() :void{
        this.ui.littleBtn.skin = "ui/littleBtn1.png";
        this.ui.jaguarBtn.skin = "ui/jaguarBtn1.png";
        this.ui.bigBtn.skin = "ui/bigBtn1.png";
        this.ui.littleOdds.scale(1, 1);
        this.ui.jaguarOdds.scale(1, 1);
        this.ui.bigOdds.scale(1, 1)
        this.ui.littleRule.scale(1, 1);
        this.ui.jaguarRule.scale(1, 1);
        this.ui.jaguarRule.scale(1, 1)
    }
    /**
     * 按钮样式的绑定
     */
    protected OnChangBtnImg():void{
        this.ui.littleBtn.on(Laya.Event.MOUSE_DOWN, this, () => {
            this.ui.littleBtn.skin = "ui/littleBtn2.png";
            this.ui.littleOdds.scale(0.9, 0.9);
            this.ui.littleRule.scale(0.9, 0.9)
        });

        this.ui.jaguarBtn.on(Laya.Event.MOUSE_DOWN, this, () => {
            this.ui.jaguarBtn.skin = "ui/jaguarBtn2.png";
            this.ui.jaguarOdds.scale(0.9, 0.9);
            this.ui.jaguarRule.scale(0.9, 0.9)
        });

        this.ui.bigBtn.on(Laya.Event.MOUSE_DOWN, this, () => {
            this.ui.bigBtn.skin = "ui/bigBtn2.png";
            this.ui.bigOdds.scale(0.9, 0.9);
            this.ui.bigRule.scale(0.9, 0.9)
        });
    }
}
