class GameView extends GameViewManager {
    public GameBgUI: GameBgHV;
    private Handler:Laya.Handler;
    constructor(Handler:Laya.Handler) {
        super();
        this.Handler = Handler;
        this.GameLoad();
    }

    /**
     * 横竖屏监听
     */
    public ListenScreen(): void {
        let isVer = this.ScreenStatus == ScreenStatus.Ver;
        if(this.onLoadSuccess && this.onLoginSucess){
            this.GameBgUI.ResetScreen(isVer);
        }
    }

    /**
     * UI监听
     * @param data 
     */
    public ListenUI(data: Dto.BroadcastDto): void {
        switch (data.Type) {
            case Enum.ListenUIEnum.GameLoadComplate:
                this.CheckLoad(); 
                break;
            case Enum.ListenUIEnum.OnGameBgClick:
                this.ShowAlert(1, "点击关闭");
                break;
            case Enum.ListenUIEnum.BetPos:
                this.Handler.runWith([Enum.GameViewHandlerEnum.BetPos,'']);
                console.log(data.value);

                break;
            default:
                break;
        }
    }

    /**
     * 启动游戏资源页面，开始加载游戏资源
     */
    public GameLoad(): void {
        let isVer = this.ScreenStatus == ScreenStatus.Ver;
        this.LoadResourceUI = new LoadResourceHV();
        this.LoadResourceUI.ResetScreen(isVer);
        //设置版本控制类型为使用文件名映射的方式
        // Laya.ResourceVersion.type = Laya.ResourceVersion.FILENAME_VERSION;
        //加载版本信息文件
        // Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, ()=>{
            this.LoadResourceUI.StartLoad(GameResourceConfig.LoadResourcesConfig);
        // },null,false)); 
    }
    /**
     * 游戏资源加载完成，检查登录状态
     */
    public CheckLoad(): void {
        this.onLoadSuccess = true;
        if (this.onLoginSucess) {
            this.LoadResourceUI.Remove();
            //加载主界面
            this.GameMainUI();
        }
    }
    /**
     * 加载游戏主界面
     */
    private GameMainUI():void{
        let isVer = this.ScreenStatus == ScreenStatus.Ver;
        this.GameBgUI = new GameBgHV();
        this.GameBgUI.ResetScreen(isVer);
        this.AlertUI = new AlertHV();
        this.AlertUI.ResetScreen(isVer);
        this.LoadingUI = new LoadingHV();
        this.LoadingUI.ResetScreen(isVer);
    }
    /**
     * 设置分发数据
     * @param type 
     * @param data 
     */
    public SetData(type: GameEnum.GameViewEnum, data: any): void {
        switch (type) {
            case GameEnum.GameViewEnum.Alert:
                this.ShowAlert(0,data);
                break;
            case GameEnum.GameViewEnum.Error:
                console.log(data);
                break;
            case GameEnum.GameViewEnum.Loading:
                this.LoadingUI.LoadingHandle(data);
                break;
            case GameEnum.GameViewEnum.LoginComplete:
                this.GameLoginComplete();
                break;
            case GameEnum.GameViewEnum.GameData:
                this.OnMessageHandler(data);
                break;
            case GameEnum.GameViewEnum.BetPos:
                console.log(data)
                break;
            default:
                break;
        }
    }
    
    /**
     * 游戏登录完成，检查游戏资源加载状态
     */
    private GameLoginComplete():void{
        this.onLoginSucess = true;
        if (this.onLoadSuccess) {
            this.LoadResourceUI.Remove();
            //加载主界面
            this.GameMainUI();
        }
    }
    /**
     * 侦听游戏命令
     * @param data 
     */
    private OnMessageHandler(data: Dto.GameMessageDto): void {
        switch (data.Command) {
            case GameEnum.GameCommand.MSG_GAME_INIT:
                this.OnGameInit(data.Data);
                break;
            case GameEnum.GameCommand.MSG_GAME_START:
                this.OnGameStart(data.Data);
                break;
            case GameEnum.GameCommand.MSG_GAME_BETRESULT:
                this.OnBetResult(data.Data);
                break;
            case GameEnum.GameCommand.MSG_GAME_STOPBET:
                this.OnStopBet();
                break;
            case GameEnum.GameCommand.MSG_GAME_GAMERESULT:
                this.OnGameResult(data.Data);
                break;
            case GameEnum.GameCommand.MSG_GAME_SETTLERESULT:
                this.OnSettleResult(data.Data);
                break;
            case GameEnum.GameCommand.MSG_GAME_OTHER:
                this.OnGameOther(data.Data);
                break;
            default:
        }
    }
    public OnGameInit(data: any): void {

    }
    public OnGameStart(data: any): void {

    }
    public OnBetResult(data: any): void {

    }
    public OnStopBet(): void {

    }
    public OnGameResult(data: any): void {

    }
    public OnSettleResult(data: any): void {

    }
    public OnGameOther(data: any): void {

    }
}