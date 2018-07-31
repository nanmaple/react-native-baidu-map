/// <reference path="./AlertView/index.ts"/>
/// <reference path="./GameLoadView/index.ts"/>
/// <reference path="./LoadingView/index.ts"/>

/**
 * 屏幕横竖屏状态
 */
enum ScreenStatus {
    Ver = 0,
    Hor = 1,
}

/**
 * 游戏界面管理抽象类
 */
abstract class BaseGameViewLogic extends Laya.EventDispatcher {
    /**
     * 登录是否成功
     */
    protected isLoginSucess: boolean = false;
    /**
     * 加载资源是否完成
     */
    protected isLoadSuccess: boolean = false;
    /**
     * alert效果
     */
    protected alertView: AlertView;
    /**
     * loading效果
     */
    protected loadingView: LoadingView;
    /**
     * 加载资源界面
     */
    protected gameLoadView: GameLoadView;
    /**
     * 数据层handler回调
     */
    protected CtrlHandler: Laya.Handler;

    /**
     * 横竖屏状态
     */
    protected ScreenStatus: ScreenStatus.Ver | ScreenStatus.Hor = 0;
    /**
     * 游戏横竖屏事件监听key
     */
    protected ScreeModeEventKey: string = "ScreeModeKey";
    /**
     * 游戏模块事件监听key
     */
    protected GameViewEventKey: string = "GameViewKey";

    constructor(Handler: Laya.Handler) {
        super();
        //横竖屏监听
        document.addEventListener(this.ScreeModeEventKey, () => {
            this.ScreenStatus = GameConfig.ScreenMode;
            this.ResetBaseScreen();
            this.ResetScreen();
        })
        //UI事件监听
        document.addEventListener(this.GameViewEventKey, (data: any) => {
            this.ListenUI(data.detail)
        })

        this.CtrlHandler = Handler;
        this.GameLoad();

    }

    /**
     * 初始化基本组件
     */
    private ResetBaseScreen() {
        if (this.isLoadSuccess && this.isLoginSucess) {
            this.alertView.ResetScreen();
            this.loadingView.ResetScreen();
        } else {
            this.gameLoadView && this.gameLoadView.ResetScreen();
        }
    }

    /**
    * 启动游戏资源页面，开始加载游戏资源
    */
    public GameLoad(): void {
        this.gameLoadView = new GameLoadView(this.GameViewEventKey);
        this.gameLoadView.ResetScreen();
        //设置版本控制类型为使用文件名映射的方式
        // Laya.ResourceVersion.type = Laya.ResourceVersion.FILENAME_VERSION;
        //加载版本信息文件
        // Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, ()=>{
        this.gameLoadView.StartLoad(GameResourceConfig.LoadResourcesConfig);
        // },null,false)); 
    }

    /**
     * 游戏资源加载完成，检查登录状态
     */
    protected CheckLoad(): void {
        this.isLoadSuccess = true;
        if (this.isLoginSucess) {
            this.gameLoadView.Remove();
            //加载主界面
            this.GameMainUI();
        }
    }

    /**
     * 游戏登录完成，检查游戏资源加载状态
     */
    protected GameLoginComplete(): void {
        this.isLoginSucess = true;
        if (this.isLoadSuccess) {
            this.gameLoadView.Remove();
            //加载主界面
            this.GameMainUI();
        }
    }

    /**
     * 监听UI事件
     * @param data 
     */
    abstract GameMainUI(): void;


    /**
     * 监听UI事件
     * @param data 
     */
    abstract ListenUI(data: any): void;
    /**
     * 监听屏幕改变
     * @param data 
     */
    abstract ResetScreen(data?: any): void;
    /**
     * 设置分流数据
     * @param type 
     * @param data 
     */
    abstract SetData(type: BaseEnum.GameViewLogicEnum | any, data: any): void;

    /**
     * 日志
     * @param msg 日志内容 
     * @param key 日志key值
     */
    protected Log(msg: any = "", key: string = "log"): void {
        if (GameConfig.OpenLog) {
            console.log(Date.now().toString(), key + ":", msg);
        }
    }

    /**
     * 显示弹出提示
     * @param type 类型
     * @param msg 内容
     */
    protected ShowAlert(type: AlertType, msg: string, handler?: Laya.Handler): void {
        if (this.alertView) {
            this.alertView.Show(type, msg, handler);
        } else {
            alert(msg);
        }
    }
    /**
     * 隐藏弹出提示
     */
    protected HideAlert(): void {
        this.alertView && this.alertView.Hide();
    }

    /**
     * 根据传输的数据Dto，显隐Loading
     * @param dto 
     */
    protected SetLoading(dto: BaseDto.GameModalDto): void {
        this.loadingView.Set(dto);
    }

    /**
     * 显示loading
     * @param msg 内容
     */
    protected ShowLoading(msg: string): void {
        this.loadingView.ShowLoading(msg);
    }
    /**
     * 隐藏loading
     */
    protected HideLoading(): void {
        this.loadingView.HideLoading();
    }

}