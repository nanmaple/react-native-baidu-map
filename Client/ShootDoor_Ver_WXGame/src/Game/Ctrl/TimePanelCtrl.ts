class TimePanelCtrl extends Laya.Sprite{
    private timePanel:ScenePanel.TimePanelHor|ScenePanel.TimePanelVer;   //时间面板
    constructor(){
        super();
    }
    /**
     * 开始游戏时间
     * @param time 当局游戏时间
     */
    public StartGameTime(time: number): void {
        ScenePanel.GameUI.GetInstance().GetTimePanel().StartGameTime(time);
    }
    /**
     * 游戏时间结束
     */
    public EndGameTime(): void {
        ScenePanel.GameUI.GetInstance().GetTimePanel().EndGameTime();
    }
    /**
     * 隐藏游戏时间
     */
    public HideGameTime():void{
        ScenePanel.GameUI.GetInstance().GetTimePanel().HideGameTime();
    }
}