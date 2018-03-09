class NoteRecordPanelCtrl extends Laya.Sprite {
    private gameUI: ScenePanel.GameUI;
    private index: number;  //记录条数
    private betRecordPageDto: Dto.BetRecordPageDto;
    private dataArr: Array<any> = [];   //投注记录总数据
    private listArr: Array<any> = [];   //投注记录分页数据
    private noMoreData: boolean = false;   //没有更多数据
    private isActiveData: boolean = false;  //初始化数据
    private scrollValue: number = 0;   //列表滚动位置
    private listBoxH: number;   //列表每一行的高度
    private recordListH: number;  //列表显示区域的高度
    private mouseDownY: number;   //鼠标按下时坐标
    constructor() {
        super();
        this.gameUI = ScenePanel.GameUI.GetInstance();
        this.betRecordPageDto = new Dto.BetRecordPageDto();
        this.betRecordPageDto.GameId = GameConfig.GameID;
        this.betRecordPageDto.PageSize = 10;
        this.gameUI.GetNoteRecordPanel().OnMouseDownHander(new Laya.Handler(this,this.OnMouseDown));
        this.gameUI.GetNoteRecordPanel().OnMouseUpHander(new Laya.Handler(this,this.OnMouseUp));
        this.gameUI.GetNoteRecordPanel().CloseRecordHander(new Laya.Handler(this, this.CloseNoteRecord));
    }
    /**
     * 鼠标按下
     */
    private OnMouseDown(mouseY:number): void {
        this.mouseDownY = mouseY;
    }
    /**
     * 鼠标移开
     */
    private OnMouseUp(mouseY:number): void {
        if (this.scrollValue == 0 && (mouseY - this.mouseDownY) > 100) {
            this.DownRefresh(true);
        }
        if (!this.noMoreData) {
            if (this.scrollValue >= this.dataArr.length * this.listBoxH - this.recordListH && (this.mouseDownY - mouseY) > 100) {
                this.UpLoading();
            }
        }
    }
    /**
     * 显示投注面板
     */
    public ShowNoteRecord(): void {
        this.DownRefresh(true);
        //实现list滚动
        this.gameUI.GetNoteRecordPanel().SetScrollBarSkin();
    }
    /**
     * 关闭投注面板
     */
    private CloseNoteRecord(): void {
        this.dataArr = [];
        this.gameUI.GetNoteRecordPanel().SetListArray(this.dataArr);
        //内存释放
        this.ClearTextureRes();
    }
    /**
     * 销毁投注面板资源，释放内存
     */
    private ClearTextureRes(): void {
        Laya.loader.clearTextureRes("ui/mask.png");
        Laya.loader.clearTextureRes("ui/bg_record.png");
        Laya.loader.clearTextureRes("ui/recordLine.png");
    }
    /**
     * 获取投注记录数据
     * @param record 投注记录数据
     */
    public GetNoteRecordData(record: Array<Dto.NoteRecordDto>): void {
        //添加list数据
        this.listArr = [];
        this.index = record.length;
        for (let i: number = 0; i < this.index; i++) {
            let dto: any = {
                betTime: { text: Utils.Time.transform(record[i].BetTime, 1) },
                betDate: { text: Utils.Time.transform(record[i].BetTime, 0) },
                roundId: { text: record[i].RoundId },
                gameData: record[i].GameData,
                total: { text: Utils.Float.Sub(record[i].PayAmount, record[i].BetAmount) },
            }
            this.listArr.push(dto);
        }
        this.dataArr = this.dataArr.concat(this.listArr);
        //将this.arr数据赋值到列表数据源。
        this.gameUI.GetNoteRecordPanel().SetListArray(this.dataArr);
        //renderHandler:单元格渲染处理器(默认返回参数cell:Box,index:int)。
        this.gameUI.GetNoteRecordPanel().SetRenderHander(new Laya.Handler(this, this.onRender));
        //mouseHandler: list单元格鼠标事件处理器
        this.gameUI.GetNoteRecordPanel().SetMouseHander(new Laya.Handler(this, this.onMouse));
    }
    /**
     * 获取记录成功返回
     * @param data 
     */
    private Success(handlerDto: Dto.HandlerDto): void {
        let data: Array<Dto.NoteRecordDto> = handlerDto.Data;
        for (let i = 0; i < data.length; i++) {
            data[i].GameData = JSON.parse(data[i].GameData);
        }
        this.GetNoteRecordData(data);
        if (!data || data.length < 10) {
            this.noMoreData = true;
        }
        else {
            this.betRecordPageDto.LastId = data[data.length - 1].Id;
        }

        this.gameUI.GetNoteRecordPanel().ShowLoading(false);
    }
    /**
     * 获取记录失败返回
     * @param data 
     */
    private Error(data): void {
        let language: LanguageUtils.Language = new LanguageUtils.Language();
        this.gameUI.GetPromptPanel().ShowMsg(language.GetLanguage(BaseEnum.ErrorCode[data]));
    }
    /**
     * 上拉加载
     */
    private UpLoading(): void {
        this.isActiveData = false;
        Net.WebApi.GetInstance().GetBetRecord(this.betRecordPageDto, Laya.Handler.create(this, this.Success, null, false), Laya.Handler.create(this, this.Error, null, false));
    }

    /**
     * 下拉刷新
     */
    public DownRefresh(isInit: boolean = false): void {
        this.betRecordPageDto.LastId = null;
        this.noMoreData = false;
        this.isActiveData = true;
        this.dataArr = [];
        if (isInit) {
            this.gameUI.GetNoteRecordPanel().ShowInit();
        }
        this.gameUI.GetNoteRecordPanel().ShowLoading(true);
        Net.WebApi.GetInstance().GetBetRecord(this.betRecordPageDto, Laya.Handler.create(this, this.Success, null, false), Laya.Handler.create(this, this.Error, null, false));
    }
    /**
     *渲染List 
     * @param cell
     * @param index
     * 
     */
    private onRender(cell: Laya.Box, index: number): void {
        //如果索引不再可索引范围，则终止该函数
        if (index > this.dataArr.length) return;
        //获取当前渲染条目的数据
        var data: any = this.dataArr[index];
        //获取listBox的高度
        this.listBoxH = cell.height;
        //获取recordList的高度
        this.recordListH = this.gameUI.GetNoteRecordPanel().GetListHeight();
        //根据子节点的名字，获取子节点对象。   
        let betTime: Laya.Label = cell.getChildByName("betTime") as Laya.Label;
        let betDate: Laya.Label = cell.getChildByName("betDate") as Laya.Label;
        let roundId: Laya.Label = cell.getChildByName("roundId") as Laya.Label;
        let total: Laya.Label = cell.getChildByName("total") as Laya.Label;
        betTime.text = data.betTime.text;
        betDate.text = data.betDate.text;
        roundId.text = data.roundId.text;
        total.text = data.total.text;
    }
    /**
     *鼠标事件添加 
     * @param e
     * @param index
     * 
     */
    private onMouse(e: Laya.Event, index: number): void {
        //列表滚动距离
        this.scrollValue = this.gameUI.GetNoteRecordPanel().GetListScrollValue();
        //鼠标单击事件触发
        if (e.type == Laya.Event.CLICK) {
            //记录当前条目所包含组件的数据信息
            let data: any = this.dataArr[index];
            this.gameUI.GetNoteRecordPanel().GoNoteRecordDetail(data);
        }
    }
}