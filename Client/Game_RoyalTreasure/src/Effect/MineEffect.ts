/**
 * 矿石动画效果类
 */
class MineEffect extends ui.MineEffectUI {
    public ShowAll: number;
    public Price: number;
    public ShowSkin: string;
    public Pos1: any;
    public Pos2: any;
    public Pos3: any;
    public PoolKey: string;
    public listenEventKey: string = "";
    //贝塞尔曲线参数
    public counts = 0;
    //贝塞尔曲线运动结束参数  
    public t=0;
    public Start(data?: any) {
        this.mineScore.text = "+" + this.Price.toString();
        this.mine.skin = this.ShowSkin;
        this.pos(this.Pos1[0], this.Pos1[1]);
        this.zOrder = 100;
        Laya.stage.addChild(this);
        Laya.timer.frameLoop(1, this, this.BezierMove, [0.002,data])//主控制  0.0003自己调整
    }

    /**
     * 动画结束操作
     */
    private AniEnd() {
        Laya.stage.removeChild(this);
        Laya.Pool.recover(this.PoolKey, this);

    }

    /**
     * 得分飞翔动画
     */
    private ScoreFlyAni() {
        this.mine.visible = false;
        this.mineScore.fontSize = 30;
        this.mineScore.text = "+" + this.ShowAll.toString();
        Laya.Tween.to(this, { y: this.Pos3[1] - 100 }, 800, Laya.Ease.circOut, Laya.Handler.create(this, () => {
            this.mine.visible = true;
            this.mineScore.fontSize = 24;
            this.AniEnd();
            this.EventNotification()
        })
        )
    }
    
    /**
     * 类型：私有方法
     * 通过事件，向上通知
     */
    private EventNotification(): void {
        let data: Dto.EventNotificationDto = new Dto.EventNotificationDto();
        data.Value = {};
        data.Type = Enum.ListenViewEnum.NextTime;
        let event = new CustomEvent(this.listenEventKey, { detail: data });
        document.dispatchEvent(event);
    }

    /**
     *  贝塞尔曲线运动
     * @param arg 
     * @param data 
     */
    private BezierMove(arg,data) {
        this.t = arg * this.counts;
        if(this.t>1){
            Laya.timer.clear(this,this.BezierMove)
            Laya.Tween.to(this, { x: this.Pos3[0], y: this.Pos3[1] }, 800, Laya.Ease.sineOut, Laya.Handler.create(this, () => {
                if (data) this.ScoreFlyAni();
                else this.AniEnd()
            }))
        }
        let stX = this.Pos1[0];
        let stY = this.Pos1[1];
        let kzX = (this.Pos1[0] + this.Pos2[0])/2;
        let kzY = this.Pos1[1] - 220;
        let endX = this.Pos2[0];
        let endY = this.Pos2[1];
        let point = this.Bezier(this.t, stX, stY, kzX, kzY, endX, endY);
        this.x = point.x;
        this.y = point.y;
        this.counts += 10;
    }

    //贝塞尔曲线动画依赖的坐标
    //t->(0,1)  stx:起始位置     kongzhiX：拉力点   endX ：终点
    private Bezier(t: number, stx: number = 0, stY: number = 0, kongzhiX: number, kongzhiY: number, endX: number, endY: number): any {
        var tem = 1 - t;
        var tx = tem * tem * stx + 2 * t * tem * kongzhiX + t * t * endX
        var ty = tem * tem * stY + 2 * t * tem * kongzhiY + t * t * endY
        return { x: tx, y: ty };//返回坐标位置
    }
}