/**
 * BaseView主要用于写固定的UI渲染方法和不同功能的UI处理方法,动画
 * 命名规则：BasexxxView
 */
abstract class BaseGameRecordView {
    protected ui: ui.GameRecordViewUI;
    /**
     * 是否显示
     */
    protected isShow: boolean = false;  
    /**
     * 暂无更多数据
     */
    protected noMoreData: boolean = false;  
    /**
     * 列表每一行的高度
     */
    protected listBoxH: number;   
    /**
     * 列表显示区域的高度
     */
    protected recordListH: number;  
    /**
     * 列表数据
     */
    protected dataArr: Array<any> = []; 
    /**
     * 正在加载数据
     */
    protected isLoading:boolean = false;
    /**
     * 是否初始化
     */
    protected isInit:boolean = false;
    constructor() {

    }

    /**
     * 重置屏幕
     */
    public ResetScreen() {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.GameRecordViewUI();
        this.ui.zOrder = 5;
        this.ui.cacheAs = "bitmap";
        Laya.stage.addChild(this.ui);
        this.ui.visible = this.isShow;
        this.ui.close.on(Laya.Event.CLICK, this, this.Hide);
        this.ui.panelList.on(Laya.Event.MOUSE_UP, this, this.OnMouseUp);
        this.ui.num_tit.text = LanguageUtils.Language.Get("RecordNumTitle");
        this.ui.reward_tit.text = LanguageUtils.Language.Get("RecordRewardTitle");
        this.ui.time_tit.text = LanguageUtils.Language.Get("RecordTimeTitle");
        this.ui.noRecord.text = LanguageUtils.Language.Get("NoRecordData");
        this.ui.isLoading.text = LanguageUtils.Language.Get("IsLoading");
        this.ui.title.skin = LanguageUtils.Language.Get("RecordTitleSkin");
        this.Init();
    }
    /**
     * 初始化
     */
    protected Init(): void {
        this.ui.recordList.visible = false;
        this.ui.noRecord.visible = false;
        this.ui.isLoading.visible = false;
        this.noMoreData = false;
        this.isInit = true;
    }

    /**
     * 鼠标移开
     */
    private OnMouseUp(): void {
        let value = this.ui.recordList.scrollBar.value;
        if(this.isLoading){
            return;
        }
        if(value <= -30){
            this.isLoading = true;
            this.PullDownRefresh(true);
        }
        else if((value - this.dataArr.length * (this.listBoxH + 5) + this.recordListH) >= 30 && !this.noMoreData){
            this.isLoading = true;
            this.PullUpMore();
        }
    }
    /**
     * 设置列表数据
     * @param data 
     */
    protected SetListArray(data:any):void{
        this.ui.recordList.dataSource = data;
        if(!data || data.length == 0){
            this.ui.noRecord.visible = true;
            this.ui.recordList.visible = false;
        }else{
            this.ui.noRecord.visible = false;
            this.ui.recordList.visible = true;
        }
        this.ShowLoading(false);
    }
    /**
     * 下拉刷新
     * @param isInit 
     */
    public PullDownRefresh(isInit:boolean):void{  
        this.dataArr = [];
        this.SetListArray(this.dataArr);
        if(isInit){
            this.Init();
        }
        this.ShowLoading(true);
        this.EventNotification(Enum.ListenViewEnum.GetRecord, true);
    };
    /**
     * 上拉加载更多
     */
    public PullUpMore():void{
        this.isInit = false;
        this.EventNotification(Enum.ListenViewEnum.GetRecord, false);
    };
    /**
     * 是否显示正在加载中
     * @param isLoading 
     */
    protected ShowLoading(isLoading:boolean):void{
        this.ui.isLoading.visible = isLoading;
    }
    /**
     * 隐藏面板
     */
    private Hide(): void {
        Utils.BackgroundMusic.PlaySounds("sound/btn.mp3");
        Effect.AlertEffect.Hide(this.ui.prompt, Laya.Handler.create(this, () => {
            this.isShow = false;
            this.ui.visible = this.isShow;
            this.dataArr = [];
            this.SetListArray(this.dataArr);
        }, null, false))
    }
    /**
     * 事件广播
     * @param type 类型
     * @param value 值
     */
    abstract EventNotification(type:any, value?:any): void;
}
