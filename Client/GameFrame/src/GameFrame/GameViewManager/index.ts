/**
 * 屏幕横竖屏状态
 */
enum ScreenStatus {
    Ver = 0,
    Hor = 1,
}
abstract class GameViewManager extends Laya.EventDispatcher {
    protected onLoginSucess: boolean = false;  //登录是否成功
    protected onLoadSuccess: boolean = false;  //加载资源是否完成
    protected AlertUI: AlertHV;
    protected LoadingUI: LoadingHV;
    protected LoadResourceUI: LoadResourceHV;
    protected CtrlHander: Laya.Handler;
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
            this.ListenScreen();
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
    abstract ListenScreen(data?: any): void;
    /**
     * 设置分流数据
     * @param type 
     * @param data 
     */
    abstract SetData(type: any, data: any): void;

    public Log(): void { };

    /**
     * 显示弹出提示
     * @param type 类型
     * @param msg 内容
     */
    public ShowAlert(type: AlertType, msg: string): void {
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
    public ShowLoading(msg: string): void {
        this.LoadingUI.ShowLoading(msg);
    }

    /**
     * 隐藏弹出提示
     */
    public HideAlert(): void {
        this.AlertUI.Hide();
    }
    /**
     * 隐藏loading
     */
    public HideLoading(): void {
        this.LoadingUI.HideLoading();
    }

}