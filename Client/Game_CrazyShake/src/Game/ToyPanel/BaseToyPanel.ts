class BaseToyPanel {
    protected ui: ui.ToyPanelUI;
    protected listenEventKey: string;
    protected dices:Array<number>;
    constructor(eventKey: string) {
        this.listenEventKey = eventKey;
    }

    /**
     * 重置屏幕
     */
    public ResetScreen(): void {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.ToyPanelUI();
        this.ui.zOrder = 2;
        //设置组件位置
        this.ui.x = 183;
        this.ui.y = 360
        Laya.stage.addChild(this.ui);
        this.ui.ani4.on(Laya.Event.COMPLETE, this, this.Lottery);
        
    }
    /**
     * 开始摇盅
     */
    protected StartRock(): void {
        Laya.timer.once(400, this, () => { Laya.SoundManager.playSound("sound/duangSound.mp3") });
        Laya.Tween.to(this.ui.cap, { y: 17 }, 500, Laya.Ease.linearIn, Laya.Handler.create(this, () => {
            Laya.timer.once(250, this, () => {
                Laya.SoundManager.playSound("sound/rockDiceSound.mp3");
                this.ui.ani4.play(0, true);
            })
        }))
    }


    /**
     * 开奖
     * @param data 游戏结果
     */
    protected Lottery(): void {
        this.ui.ani4.stop();
        this.ChangeDice(this.dices);
        Laya.timer.once(570, this, () => { Laya.SoundManager.playSound("sound/upCoverSound.mp3") });
        Laya.Tween.to(this.ui.cap, { y: -470 }, 500, Laya.Ease.linearIn, Laya.Handler.create(this, () => {
            this.EventNotification();
        }), 700)
    }


    /**
     * 通知动画播放完成
     * @param value 
     */
    protected EventNotification(): void {
        let dto: Dto.EventNotificationDto = new Dto.EventNotificationDto();
        dto.Type = Enum.ListenViewEnum.AniPlayComplete;
        dto.Value = null;
        let event = new CustomEvent(this.listenEventKey, { detail: dto })
        document.dispatchEvent(event);
    }

    /**
     * 改变骰子图片
     * @param data骰子编号Array 
     */
    protected ChangeDice(data: any): void {
        this.ui.dice1.skin = "ui/point" + data[0] + ".png";
        this.ui.dice2.skin = "ui/point" + data[1] + ".png";
        this.ui.dice3.skin = "ui/point" + data[2] + ".png";
    }
}
