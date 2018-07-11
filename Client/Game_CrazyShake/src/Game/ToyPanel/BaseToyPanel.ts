class BaseToyPanel {
    protected ui: ui.ToyPanelUI;
    protected listenEventKey: string;
    constructor(eventKey: string) {
        this.listenEventKey = eventKey;
    }

    /**
     * 重置屏幕
     */
    public ResetScreen() {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.ToyPanelUI();
        this.ui.zOrder = 2;
        //设置组件位置
        this.ui.x = 183;
        this.ui.y = 360
        Laya.stage.addChild(this.ui);
    }
    /**
     * 开始摇盅
     */
    public startRock() {
        Laya.timer.once(400,this,()=>{Laya.SoundManager.playSound("sound/duangSound.mp3")});
        Laya.Tween.to(this.ui.cap, { y: 17 }, 500, Laya.Ease.linearIn, Laya.Handler.create(this, () => {
            Laya.timer.once(250, this, () => {
                Laya.SoundManager.playSound("sound/rockDiceSound.mp3");
                this.ui.ani2.play(0, true)
            })
        }))
    }

   
    /**
     * 开奖
     * @param data 游戏结果
     */
    public Lottery(data: any) {
        this.ui.ani2.on(Laya.Event.COMPLETE, this, () => {
            this.ui.ani2.stop();
            this.ChangeDice(data.Data.Dices);
            Laya.timer.once(570, this, () => { Laya.SoundManager.playSound("sound/upCoverSound.mp3") });
            Laya.Tween.to(this.ui.cap, { y: -470 }, 500, Laya.Ease.linearIn, Laya.Handler.create(this, () => {
                this.EventNotification(data)
            }, data), 700)
        }, data)
    }


    /**
     * 通知动画播放完成
     * @param value 
     */
    protected EventNotification(value: number) {
        let dto: Dto.EventNotificationDto = new Dto.EventNotificationDto();
        dto.Type = Enum.ListenViewEnum.AniPlayComplete;
        dto.Value = value;
        let event = new CustomEvent(this.listenEventKey, { detail: dto })
        document.dispatchEvent(event);
    }

    /**
     * 改变骰子图片
     * @param data骰子编号Array 
     */
    protected ChangeDice(data: any) {
        this.ui.dice1.skin = "ui/point" + data[0] + ".png";
        this.ui.dice2.skin = "ui/point" + data[1] + ".png";
        this.ui.dice3.skin = "ui/point" + data[2] + ".png";
    }
}
