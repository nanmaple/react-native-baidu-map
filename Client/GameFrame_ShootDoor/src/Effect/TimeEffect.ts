class TimeEffect {
    private timeUI: Laya.Box;   //游戏时间容器
    private gameTime: number;   //游戏时间
    constructor(time: Laya.Box) {
        this.timeUI = time;
    }

    /**
     * 游戏时间UI显示
     * @param time 时间
     */
    private GameTimeUI(time: number): void {
        let data: any = {};
        let timeNum: number = time;
        for (let i: number = 1; i >= 0; i--) {
            data["item" + i] = { index: Math.floor(timeNum % 10) };
            timeNum /= 10;
        }
        this.timeUI.dataSource = data;
    }
    /**
     * 模拟游戏时间倒计时
     */
    private SetGameTime(): void {
        this.gameTime--;
        if (this.gameTime <= 0) {
            //游戏时间结束
            this.EndGameTime();
        }
        this.GameTimeUI(this.gameTime);
    }
    /**
     * 游戏时间开始
     */
    public StartGameTime(time: number): void {
        this.gameTime = time;
        this.GameTimeUI(this.gameTime);
        Laya.timer.loop(1000, this, this.SetGameTime);
    }
    /**
     * 游戏时间结束
     */
    public EndGameTime(): void {
        //清除定时器
        Laya.timer.clear(this, this.SetGameTime);
        //计时器归零
        this.gameTime = 0;
        this.GameTimeUI(this.gameTime);
    }

    /**
     * 返回当前倒计时
     */
    public GetGameTime(): number {
        return this.gameTime;
    }
}