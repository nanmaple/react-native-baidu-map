
class TimeHV extends TimeBaseUI implements IUI {
    constructor() {
        super();
    }
    public Refresh():void{

    }
    /**
     * 开始倒计时
     * @param time 
     */
    public StartGameTime(time: number): void {
        this.time = time;
        this.timeStamp = new Date().getTime();
        this.ui.visible = true;
        this.timeEffect.StartGameTime(time);
    }
    /**
     * 游戏时间结束
     */
    public EndGameTime(): void {
        this.timeEffect.EndGameTime();
        this.ui.visible = false;
        Utils.BackgroundMusic.PlaySounds("sound/csz1.wav");
    }
    /**
     * 设置游戏时间
     * @param time 
     */
    public Set():number{
        let nowDate: number = new Date().getTime();
        let date: number;
        date = this.time - (nowDate - this.timeStamp) / 1000;
        this.time = date < 0 ? 0 : date;
        return this.time;
    }
}
