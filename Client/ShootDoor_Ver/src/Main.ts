// 程序入口
class GameMain {
    private gameLoadCtrl: ScenePanel.GameLoadCtrl;
    private Storage: Utils.Storage;
    public GameCtrl: GameCtrl;
    static version:number;
    constructor() {
    
        // 初始化舞台,配置信息
        let init: InitState = new InitState();    
        // 加载游戏的资源
        let gameLoadCtrl: ScenePanel.GameLoadCtrl = new ScenePanel.GameLoadCtrl(Laya.Handler.create(this, this.onGameLoadSuccess));
    }
    /**
     * GameLoadCtrl界面功能完成回调
     */
    private onGameLoadSuccess() {
        // Utils.BackgroundMusic.PlayMusic("sound/bkmusic.wav");
        this.GameCtrl = new GameCtrl(Laya.Handler.create(this, this.onGameLoadSuccess));
    }

}
new GameMain();