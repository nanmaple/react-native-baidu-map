/*
* name;
*/

class NoteRecordUIHV extends NoteRecordBaseUI{

    constructor(){
        super();
        
    }

    public Init():void{
        if(!this.ui.isLoading.visible){
            this.SetListArray(this.listArray);
            this.SetListDetailShow();
        }
        //单行渲染
        this.ui._recordList.renderHandler = new Laya.Handler(this,this.onRender);
        //单例鼠标事件
        this.ui._recordList.mouseHandler = new Laya.Handler(this,this.mouseHandler);
        //设置列表垂直滚动条
        this.ui._recordList.vScrollBarSkin = "";
        //设置列表滚动距离
        this.ui._recordList.scrollBar.value = this.scrollValue;
    }

    public AddRecordData(record:Dto.HandlerDto):void{
        let data: Array<Dto.NoteRecordDto> = new Array<Dto.NoteRecordDto>();
        if(record && record.Data){
            data = record.Data;
            for (let i = 0; i < data.length; i++) {
                data[i].GameData = JSON.parse(data[i].GameData);
            }
        }else{
            data = [];
        }
        this.SetNoteRecordData(data);
        if (!data || data.length < 10) {
            this.noMoreData = true;
        }
        else {
            this.recordPageDto.LastId = data[data.length - 1].Id;
        }
            this.isLoading = false;
            this.ui.isLoading.visible = false;
    }

    public ShowNoteRecord():void{
        this.Refresh(true);
        this.ui._recordList.vScrollBarSkin = "";
    }

    public CloseNoteRecord():void{
        this.isShow = false;
        this.detailShow = false;
        this.ui.visible = false;
        this.listArray = [];
        this.detailListArray = [];
        this.SetListArray(this.listArray);
    }

    public BackNoteRecordList():void{
        this.detailShow = false;
        this.detailListArray = [];
        this.ui.betDetailList.dataSource = this.detailListArray;
        Laya.Tween.to(this.ui.recordBox, { x: 0 }, 500, Laya.Ease.quadOut);
    }

    public OnMouseDown():void{
        this.mouseDownY = this.ui.mouseY;
    }

    public OnMouseUp():void{
        let mouseY = this.ui.mouseY;
        if(this.mouseDownY == null){
            return;
        }
        if (this.scrollValue == 0 && (mouseY - this.mouseDownY) > 100) {
            this.Refresh(true);
        }
        if (!this.noMoreData) {
            if (this.scrollValue >= this.listArray.length * this.listBoxH - this.listH && (this.mouseDownY - mouseY) > 100) {
                this.OnLoad();
            }
        }
        this.mouseDownY = null;
    }

    /**
     * 将新增数据组合渲染
     * @param record 
     */
    private SetNoteRecordData(record: Array<Dto.NoteRecordDto>):void{
        let array = [];
        for (let i: number = 0; i < record.length; i++) {
            let dto: any = {
                betTime: { text: Utils.Time.transform(record[i].BetTime, 1) },
                betDate: { text: Utils.Time.transform(record[i].BetTime, 0) },
                roundId: { text: record[i].RoundId },
                gameData: record[i].GameData,
                total: { text: Utils.Float.Sub(record[i].PayAmount, record[i].BetAmount) },
            }
            array.push(dto);
        }
        this.listArray = this.listArray.concat(array);
        //设置列表数据源
        this.SetListArray(this.listArray);
        //单行渲染
        this.ui._recordList.renderHandler = new Laya.Handler(this,this.onRender);
        //单例鼠标事件
        this.ui._recordList.mouseHandler = new Laya.Handler(this,this.mouseHandler);
    }
    
    /**
     * 投注记录单行渲染
     * @param cell 行Box
     * @param index 当前序号
     */
    private onRender(cell: Laya.Box, index: number):void{
        //如果索引不再可索引范围，则终止该函数
        if (index > this.listArray.length) return;
        //获取当前渲染条目的数据
        var data: any = this.listArray[index];
        //获取listBox的高度
        this.listBoxH = cell.height;
        console.log(this.listArray,index)
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
     * 行鼠标操作事件
     * @param e 
     * @param index 
     */
    private mouseHandler(e: Laya.Event, index: number):void{
        //列表滚动距离
        this.scrollValue = this.ui._recordList.scrollBar.value;
        //鼠标单击事件触发
        if (e.type == Laya.Event.CLICK) {
            //记录当前条目所包含组件的数据信息
            let data: any = this.listArray[index];
            this.GoNoteRecordDetail(data);
        }
    }

    /**
     * 刷新
     * @param isInit 是否初始化
     */
    private Refresh(isInit: boolean = false):void{
        this.recordPageDto.LastId = null;
        this.noMoreData = false;
        this.listArray = [];
        if (isInit) {
            //初始化
            this.ui.recordBox.x = 0;
            this.ui.noBetData.visible = false;
            this.ui._recordList.visible = false;
            this.ui.visible = true;
            this.isShow = true;
        }
        this.isLoading = true;
        this.ui.isLoading.visible = true;
        this.OnLoad();
    }

    /** 
     * 加载
    */
    private OnLoad():void{
        let data: Dto.BroadcastDto = new Dto.BroadcastDto();
        data.Value = this.recordPageDto;
        data.Type = Enum.ListenUIEnum.GetBetRecord;
        let event = new CustomEvent("GameUI", { detail: data });
        document.dispatchEvent(event);
    }

    /**
     * 设置列表数据源
     * @param data 
     */
    private SetListArray(data: Array<any>):void{
        this.listArray = data;
        this.ui._recordList.dataSource = this.listArray;
        if (!data || data.length == 0) {
            this.ui.noBetData.visible = true;
            this.ui._recordList.visible = false;
        } else {
            this.ui.noBetData.visible = false;
            this.ui._recordList.visible = true;
        }
    }

    /**
     * 设置列表详情是否显示
     */
    private SetListDetailShow():void{
        if(this.detailShow){
            this.ui.recordBox.x = -this.recordWidth;  
            this.detailListArray = [];
            this.GoNoteRecordDetail(this.detailData);
        }
        else{
            this.ui.recordBox.x = 0;
        }
    }
    

    /************************** 详情界面操作 *****************************/

    /**
     * 跳转至记录详情页面
     * @param data 投注详情数据d
     */
    private GoNoteRecordDetail(data: any): void {
        this.detailData = data;
        this.detailShow = true;
        //详情移动动画
        Laya.Tween.to(this.ui.recordBox, { x: -this.recordWidth }, 500, Laya.Ease.quadOut);
        //投注结果显示
        this.ui.betResult.text = this.BetResult(this.detailData.total.text);
        this.ui.roundId.text = this.detailData.roundId.text;
        //投注结果数据
        let betResultData = this.detailData.gameData[this.detailData.gameData.length - 1];
        this.GetBetResultPokerData(betResultData);
        let dataArr: any = [];
        for (let i: number = 0; i < this.detailData.gameData.length - 1; i++) {
            dataArr.push(this.detailData.gameData[i]);
        }
        this.GetBetRecordDetail(dataArr);
    }

    /**
     * 本局投注结果
     * @param total 投注收益
     */
    private BetResult(total: number): string {
        let language: LanguageUtils.Language = new LanguageUtils.Language();
        if (total > 0) {
            return language.GetLanguage("Win") + " + " + total;
        }
        else {
            return language.GetLanguage("Lose") + " - " + -total;
        }
    }

    /**
     * 本局扑克牌结果
     * @param data 
     */
    private GetBetResultPokerData(data: any) {
        let pokerData: any = JSON.parse(data.Data);
        if(pokerData.Cards){
            this.ui.poker1.skin = this.GetPokerUrl(pokerData.Cards.FirstCard);
            this.ui.poker2.skin = this.GetPokerUrl(pokerData.Cards.SecondCard);
            this.ui.poker3.skin = this.GetPokerUrl(pokerData.Cards.ThirdCard);
        }
    }

    /**
     * 本局投注详细结果
     * @param data 投注详情数据
     */
    private GetBetRecordDetail(data: Array<any>): void {
        //添加list数据
        let index: number = data.length;
        for (let i: number = 0; i < index; i++) {
            let dto: any = {
                betNum: { text: i + 1 },
                detail: JSON.parse(data[i].Data),
            }
            this.detailListArray.push(dto);
        }
        //实现list滚动
        this.ui.betDetailList.vScrollBarSkin = "";
        //将this.arr数据赋值到列表数据源。
        this.ui.betDetailList.dataSource = this.detailListArray;
        //renderHandler:单元格渲染处理器(默认返回参数cell:Box,index:int)。
        this.ui.betDetailList.renderHandler = new Laya.Handler(this, this.onDetailRender);
    }

    /**
     * 详情列表单行渲染
     * @param cell 行Box
     * @param index 当前序号
     */
    private onDetailRender(cell: Laya.Box, index: number):void{
        //如果索引不再可索引范围，则终止该函数
        if (index > this.detailListArray.length) return;
        //获取当前渲染条目的数据
        let data: any = this.detailListArray[index];
        //根据子节点的名字，获取子节点对象。   
        let betNum: Laya.Label = cell.getChildByName("betNum") as Laya.Label;
        let betTypeList: Laya.List = cell.getChildByName("betTypeList") as Laya.List;
        betNum.text = data.betNum.text;
        betTypeList.hScrollBarSkin = "";
        betTypeList.dataSource = data.detail;
        //renderHandler:单元格渲染处理器(默认返回参数cell:Box,index:int)。
        betTypeList.renderHandler = new Laya.Handler(this, (cell: Laya.Box, index: number) => {
            //如果索引不再可索引范围，则终止该函数
            if (index > data.detail.length) return;
            let betPos: Laya.Label = cell.getChildByName("betPos") as Laya.Label;
            let betOdds: Laya.Label = cell.getChildByName("betOdds") as Laya.Label;
            let betAmount: Laya.Label = cell.getChildByName("betAmount") as Laya.Label;
            betPos.text = Utils.BetPos.transform(data.detail[index].BetPos);
            betOdds.text = data.detail[index].Odds;
            betAmount.text = data.detail[index].Amount;
        });
    }

    /**
     * 获得扑克牌地址
     * @param type 牌类型
     */
    private GetPokerUrl(type: number): string {
        return `ui/poker/${type}.png`
    }
}