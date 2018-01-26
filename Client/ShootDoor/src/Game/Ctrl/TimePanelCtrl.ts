class TimePanelCtrl extends Laya.Sprite{
    private timePanel:ScenePanel.TimePanel;   //时间面板
    constructor(timePanel:ScenePanel.TimePanel){
        super();
        this.timePanel = timePanel;
    }
    /**
     * 开始游戏时间
     * @param time 当局游戏时间
     */
    public StartGameTime(time: number): void {
        this.timePanel.timeEffect.StartGameTime(time);
        this.pos(1190,100);
    }
    /**
     * 游戏时间结束
     */
    public EndGameTime(): void {
        this.timePanel.timeEffect.EndGameTime();
    }
}