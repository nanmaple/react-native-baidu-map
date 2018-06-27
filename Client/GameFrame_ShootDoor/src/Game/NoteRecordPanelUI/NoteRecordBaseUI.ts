/*
* name;
*/
abstract class NoteRecordBaseUI{
    protected ui: ui.NoteRecordHUI | ui.NoteRecordVUI;
    
    /**
     * 显示/隐藏
     */
    protected isShow:boolean = false;
    /**
     * 是否正在加载数据
     */
    protected isLoading:boolean = false;
    /**
     * 详情显示/隐藏
     */
    protected detailShow:boolean = false;
    /**
     * 记录宽度/详情移动距离
     */
    protected recordWidth: number;
    /** 
     * 投注记录数据
    */
    protected listArray: Array<any> = [];
    /**
     * 详情数据
     */
    protected detailData:any;
    /**
     * 投注详情列表数据
     */
    protected detailListArray:Array<any> = [];
    /**
     * 单行高度
     */
    protected listBoxH:number;
    /**
     * 记录列表高度
     */
    protected listH:number;
    /** 
     * 鼠标按下时Y坐标
    */
    protected mouseDownY:number;
    /**
     * 滚动条距离
     */
    protected scrollValue:number = 0;
    /**
     * 是否有更多数据
     */
    protected noMoreData:boolean;

    /** 
     * 加载数据dtor
    */
    protected recordPageDto: Dto.BetRecordPageDto = new Dto.BetRecordPageDto();

    constructor(){
    }

    /**
     * 切换横竖屏
     * @param isHor 是否为横屏
     */
    public ResetScreen(isVer?: boolean) {
        Laya.stage.removeChild(this.ui);

        if (isVer) {
            this.ui = new ui.NoteRecordVUI();
        } else {
            this.ui = new ui.NoteRecordHUI();
        }
        //基础样式
        this.ui.zOrder = 8;
        this.ui.cacheAs = "bitmap";
        this.ui._recordList.visible = false;
        this.ui.noBetData.visible = false;
        this.ui.isLoading.visible = this.isLoading;
        this.ui.visible = this.isShow;
        let language: LanguageUtils.Language = new LanguageUtils.Language();
        this.ui.title_time.text = language.GetLanguage("Time");
        this.ui.title_round.text = language.GetLanguage("Round");
        this.ui.title_result.text = language.GetLanguage("WinLose");
        this.ui.betDetails.text = language.GetLanguage("BetDetails");
        this.ui.noBetData.text = language.GetLanguage("NoBetRecord");
        this.ui.isLoading.text = language.GetLanguage("IsLoading");
        let lang:number = language.GetLanguageType();
        if(lang == LanguageUtils.LanguageType.CH){
            this.ui.title.skin = "ui/betrecord.png";
        }else{
            this.ui.title.skin = "ui/betrecord_EN.png";
        }

        if (this.isShow) {
            this.Init();
        }
        this.recordWidth = this.ui.recordHome.width;
        this.listH = this.ui._recordList.height;
        //事件绑定
        this.ui.close.on(Laya.Event.CLICK, this, this.CloseNoteRecord);
        this.ui.back.on(Laya.Event.CLICK, this, this.BackNoteRecordList);
        this.ui._recordList.on(Laya.Event.MOUSE_DOWN, this, this.OnMouseDown);
        this.ui._recordList.on(Laya.Event.MOUSE_UP, this, this.OnMouseUp);
        
        Laya.stage.addChild(this.ui);
    }

    /**
     * 设置投注记录数据
     * @param record 投注记录数据
     */
    abstract AddRecordData(record:Dto.HandlerDto,time:number): void;

    /**
     * 显示投注面板
     */
    abstract ShowNoteRecord(): void;

    /**
     * 隐藏投注记录
     */
    abstract CloseNoteRecord():void;

    /**
     * 返回至投注记录列表
     */
    abstract BackNoteRecordList():void;

    /**
     * 鼠标按下时
     */
    abstract OnMouseDown():void;

    /**
     * 鼠标放开时
     */
    abstract OnMouseUp():void;

    /**
     * 初始化
     */
    abstract Init():void;

}