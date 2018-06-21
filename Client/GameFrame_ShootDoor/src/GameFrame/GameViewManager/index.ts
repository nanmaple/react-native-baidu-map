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
abstract class GameViewManager extends Laya.EventDispatcher {
    /**
     * 登录是否成功
     */
    protected onLoginSucess: boolean = false;  
    /**
     * 加载资源是否完成
     */
    protected onLoadSuccess: boolean = false;  
    /**
     * alert效果
     */
    protected AlertUI: AlertHV;
    /**
     * loading效果
     */
    protected LoadingUI: LoadingHV;
    /**
     * 加载资源界面
     */
    protected LoadResourceUI: LoadResourceHV;
    /**
     * 数据层handler回调
     */
    protected CtrlHandler: Laya.Handler;
    /**
     * 横竖屏状态
     */
    protected ScreenStatus: ScreenStatus.Ver | ScreenStatus.Hor = 0;
    constructor() {
        super();
        //横竖屏监听
        document.addEventListener("ScreeMode", () => {
            this.ScreenStatus = GameConfig.ScreenMode;
            let isVer = this.ScreenStatus == ScreenStatus.Ver;
            if(this.onLoadSuccess && this.onLoginSucess){
                this.AlertUI.ResetScreen(isVer);
                this.LoadingUI.ResetScreen(isVer);
            }else{
                this.LoadResourceUI.ResetScreen(isVer);
            }
            this.CtrlHandler.runWith([Enum.GameViewHandlerEnum.GetNoBetSucData,null]);
            this.ResetScreen();
        })
        //UI事件监听
        document.addEventListener("GameUI", (data: any) => {
            this.ListenUI(data.detail)
        })
    }
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
    abstract SetData(type: any, data: any): void;

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
    protected ShowAlert(type: AlertType, msg: string): void {
        if(this.AlertUI){
            this.AlertUI.Show(type, msg);
        }else{
            alert(msg);
        } 
    }
    /**
     * 显示loading
     * @param msg 内容
     */
    protected ShowLoading(msg: string): void {
        this.LoadingUI.ShowLoading(msg);
    }

    /**
     * 隐藏弹出提示
     */
    protected HideAlert(): void {
        this.AlertUI.Hide();
    }
    /**
     * 隐藏loading
     */
    protected HideLoading(): void {
        this.LoadingUI.HideLoading();
    }

}