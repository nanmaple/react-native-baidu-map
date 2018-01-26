class NoteRecordPanelCtrl extends Laya.Sprite{
    private noteRecordPanel:ScenePanel.NoteRecordPanel;  //游戏投注记录面板
    private index: number;  //记录条数
    private betRecordPageDto: Dto.BetRecordPageDto;
    private dataArr: Array<any>;   //投注记录总数据
    private listArr: Array<any>;   //投注记录分页数据
    private noMoreData: boolean = false;   //没有更多数据
    private scrollValue:number = 0;   //列表滚动位置
    private listBoxH:number;   //列表每一行的高度
    private recordListH:number;  //列表显示区域的高度
    private mouseDownY:number;   //鼠标按下时坐标
    private listShow:boolean = false;  //列表显示状态
    constructor(noteRecordPanel:ScenePanel.NoteRecordPanel){
        super();
        this.noteRecordPanel = noteRecordPanel;
        this.betRecordPageDto = new Dto.BetRecordPageDto();
        this.betRecordPageDto.GameId = GameConfig.GameID;
        this.betRecordPageDto.PageSize = 10;
        this.noteRecordPanel.on("OnMouseDown",this,this.OnMouseDown);
        this.noteRecordPanel.on("OnMouseUp",this,this.OnMouseUp);
        this.noteRecordPanel.CloseRecordHander(new Laya.Handler(this,this.CloseNoteRecord));
    }
    /**
     * 鼠标按下
     */
    private OnMouseDown():void{
        this.mouseDownY = this.mouseY;
    }
    /**
     * 鼠标移开
     */
    private OnMouseUp():void{
        if(this.scrollValue == 0 && (this.mouseY - this.mouseDownY) > 100){
            this.DownRefresh();
        }
        if(!this.noMoreData){
            if(this.scrollValue >= this.dataArr.length * this.listBoxH - this.recordListH && (this.mouseDownY - this.mouseY) > 100){
                this.UpLoading();
            }
        }
    }
    /**
     * 显示投注面板
     */
    public ShowNoteRecord():void{
        // if (GameConfig.IsDebug) {
        Net.WebApi.instance.SetToken(GameConfig.DebugToken);
        // }
        this.DownRefresh();
        //实现list滚动
        this.noteRecordPanel._recordList.vScrollBarSkin = "";  
    }
    /**
     * 关闭投注面板
     */
    private CloseNoteRecord():void{
        this.dataArr = [];
        this.noteRecordPanel._recordList.dataSource = this.dataArr;
        //内存释放
        this.ClearTextureRes();
    }
    /**
     * 销毁投注面板资源，释放内存
     */
    private ClearTextureRes():void{
        Laya.loader.clearTextureRes("ui/mask.png");
        Laya.loader.clearTextureRes("ui/bg_record.png");
        Laya.loader.clearTextureRes("ui/recordLine.png");
    }
    /**
     * 获取投注记录数据
     * @param record 投注记录数据
     */
    public GetNoteRecordData(record: Array<Dto.NoteRecordDto>): void {
        this.listShow = true;
        this.noteRecordPanel.ShowNoteRecord(this.listShow);
        //添加list数据
        this.listArr = [];
        this.index = record.length;
        for (let i: number = 0; i < this.index; i++) {
            let dto: any = {
                betTime: { text: Utils.Time.transform(record[i].BetTime,1) },
                betDate: { text: Utils.Time.transform(record[i].BetTime,0) },
                bureauNum: { text: record[i].GameData[record[i].GameData.length - 1].TransferID },  
                betResult: { text: this.BetResult(record[i].Total) },
                gameData: record[i].GameData ,
                total: record[i].Total,
            }
            this.listArr.push(dto);
        }      
        this.dataArr = this.dataArr.concat(this.listArr);
        //将this.arr数据赋值到列表数据源。
        this.noteRecordPanel._recordList.array = this.dataArr;
        //renderHandler:单元格渲染处理器(默认返回参数cell:Box,index:int)。
        this.noteRecordPanel._recordList.renderHandler = new Laya.Handler(this, this.onRender);
        //mouseHandler: list单元格鼠标事件处理器
        this.noteRecordPanel._recordList.mouseHandler = new Laya.Handler(this,this.onMouse);
    }
    /**
     * 获取记录成功返回
     * @param data 
     */
    private Success(handlerDto:Dto.HandlerDto): void {
        let data:Array<Dto.NoteRecordDto> = handlerDto.Data;
        for(let i = 0;i < data.length; i++){
            data[i].GameData = JSON.parse(data[i].GameData);
        }
        if(!data || data.length == 0){
            this.noMoreData = true;
            return;
        }
        else{
            this.GetNoteRecordData(data);
            this.betRecordPageDto.LastId =  data[data.length-1].Id;
        }
    }
    /**
     * 获取记录失败返回
     * @param data 
     */
    private Error(data): void {
        console.log(data);
    }
    /**
     * 上拉加载
     */
    private UpLoading():void{
        Net.WebApi.instance.GetBetRecord(this.betRecordPageDto, Laya.Handler.create(this, this.Success, null, false), Laya.Handler.create(this, this.Error, null, false));
    }
    /**
     * 下拉刷新
     */
    public DownRefresh():void{
        this.betRecordPageDto.LastId = null;
        this.noMoreData = false;
        this.dataArr = [];
        this.listShow = false;
        this.noteRecordPanel.ShowNoteRecord(this.listShow);
        Net.WebApi.instance.GetBetRecord(this.betRecordPageDto, Laya.Handler.create(this, this.Success, null, false), Laya.Handler.create(this, this.Error, null, false));
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
        this.recordListH = this.noteRecordPanel._recordList.height;
        //根据子节点的名字，获取子节点对象。   
        let betTime: Laya.Label = cell.getChildByName("betTime") as Laya.Label;
        let betDate: Laya.Label = cell.getChildByName("betDate") as Laya.Label;
        let bureauNum: Laya.Label = cell.getChildByName("bureauNum") as Laya.Label;
        let betResult: Laya.Label = cell.getChildByName("betResult") as Laya.Label;
        betTime.text = data.betTime.text;
        betDate.text = data.betDate.text;
        bureauNum.text = data.bureauNum.text;
        betResult.text = data.betResult.text;
    }
    /**
     *鼠标事件添加 
     * @param e
     * @param index
     * 
     */                
    private onMouse(e:Laya.Event,index:number):void{
        //列表滚动距离
        this.scrollValue = this.noteRecordPanel._recordList.scrollBar.value;
        //鼠标单击事件触发
        if(e.type == Laya.Event.CLICK){
            //记录当前条目所包含组件的数据信息
            let data:any = this.dataArr[index];
            this.noteRecordPanel.GoNoteRecordDetail(data);
        }
    }
     /**
     * 投注结果
     * @param total 投注收益
     */
    private BetResult(total:number):string{
        if(total > 0){
            return "赢";
        }
        else{
            return "输";
        }
    }
}