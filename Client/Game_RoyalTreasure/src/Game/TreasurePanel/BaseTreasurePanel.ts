
/**
 * 宝藏面板基类
 */
class BaseTreasurePanel extends ui.TreasurePanelUI {
    protected ui: ui.TreasurePanelUI;
    protected listenEventKey: string = "";
    protected digX: number = 0;        //挖掘位置
    protected digY: number = 0;
    protected mineX: number = 0;       //动画中出现宝藏位置
    protected mineY: number = 0;
    protected mineOdds: any = new Array();         //矿石赔率数组
    private starPos: any = [[50, 288, 700], [213, 238, 1000], [423, 38, 1200], [666, 255, 1400], [350, 371, 2100]];
    constructor(eventKey: string) {
        super();
        this.listenEventKey = eventKey;
    }

    /**
     * 重置屏幕
     */
    public ResetScreen() {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.TreasurePanelUI();
        this.ui.zOrder = 4;
        this.ui.cacheAs = "bitmap";
        this.ui.y = 264;
        Laya.stage.addChild(this.ui);
        this.ui.mineImg.on(Laya.Event.MOUSE_DOWN, this, this.EventNotification);
        this.ui.mineImg.mouseEnabled = false;
        // this.ui.showStar.on(Laya.Event.COMPLETE,this,this.StarAni)
        // this.StarAni();
        // 
        for (var index = 0; index < 5; index++) {
            this.StarAni(index)
        }
    }

    /**
     * 类型：私有方法
     * 通过事件，向上通知
     * 事件key值，通过构造函数时注入
     */
    private EventNotification(): void {
        this.digX = this.mouseX;
        this.digY = this.mouseY;
        this.mineX = this.mouseX;
        this.mineY = this.mouseY;
        let data: Dto.EventNotificationDto = new Dto.EventNotificationDto();
        data.Value = { x: this.digX, y: this.digY };
        data.Type = Enum.ListenViewEnum.BetPos;
        let event = new CustomEvent(this.listenEventKey, { detail: data });
        document.dispatchEvent(event);
    }
    /**
     * 设置矿石赔率数组
     * @param data 矿石赔率对象
     */
    protected InitMineOdds(data: any): void {
        for (let i in data) {
            this.mineOdds.push(data[i]);
        }
    }

    /**
     * 星星动画
     * @param j 星星坐标数组位置
     */
    private StarAni(j: number) {
        Laya.timer.once(this.starPos[j][2], this, () => {
            let star = new Laya.Animation();
            star.loadAnimation("starAni.ani");
            star.x = this.starPos[j][0];
            star.y = this.starPos[j][1];
            star.visible = true;
            star.play(0, true, "ani1");
            this.ui.addChild(star)
        })
    }
}
