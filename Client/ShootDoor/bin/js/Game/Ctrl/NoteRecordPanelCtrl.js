var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var NoteRecordPanelCtrl = (function (_super) {
    __extends(NoteRecordPanelCtrl, _super);
    function NoteRecordPanelCtrl(noteRecordPanel) {
        var _this = _super.call(this) || this;
        _this.noMoreData = false; //没有更多数据
        _this.scrollValue = 0; //列表滚动位置
        _this.listShow = false; //列表显示状态
        _this.noteRecordPanel = noteRecordPanel;
        _this.betRecordPageDto = new Dto.BetRecordPageDto();
        _this.betRecordPageDto.GameId = GameConfig.GameID;
        _this.betRecordPageDto.PageSize = 10;
        _this.noteRecordPanel.on("OnMouseDown", _this, _this.OnMouseDown);
        _this.noteRecordPanel.on("OnMouseUp", _this, _this.OnMouseUp);
        _this.noteRecordPanel.CloseRecordHander(new Laya.Handler(_this, _this.CloseNoteRecord));
        return _this;
    }
    /**
     * 鼠标按下
     */
    NoteRecordPanelCtrl.prototype.OnMouseDown = function () {
        this.mouseDownY = this.mouseY;
    };
    /**
     * 鼠标移开
     */
    NoteRecordPanelCtrl.prototype.OnMouseUp = function () {
        if (this.scrollValue == 0 && (this.mouseY - this.mouseDownY) > 100) {
            this.DownRefresh();
        }
        if (!this.noMoreData) {
            if (this.scrollValue >= this.dataArr.length * this.listBoxH - this.recordListH && (this.mouseDownY - this.mouseY) > 100) {
                this.UpLoading();
            }
        }
    };
    /**
     * 显示投注面板
     */
    NoteRecordPanelCtrl.prototype.ShowNoteRecord = function () {
        // if (GameConfig.IsDebug) {
        Net.WebApi.instance.SetToken(GameConfig.DebugToken);
        // }
        this.DownRefresh();
        //实现list滚动
        this.noteRecordPanel._recordList.vScrollBarSkin = "";
    };
    /**
     * 关闭投注面板
     */
    NoteRecordPanelCtrl.prototype.CloseNoteRecord = function () {
        this.dataArr = [];
        this.noteRecordPanel._recordList.dataSource = this.dataArr;
        //内存释放
        this.ClearTextureRes();
    };
    /**
     * 销毁投注面板资源，释放内存
     */
    NoteRecordPanelCtrl.prototype.ClearTextureRes = function () {
        Laya.loader.clearTextureRes("ui/mask.png");
        Laya.loader.clearTextureRes("ui/bg_record.png");
        Laya.loader.clearTextureRes("ui/recordLine.png");
    };
    /**
     * 获取投注记录数据
     * @param record 投注记录数据
     */
    NoteRecordPanelCtrl.prototype.GetNoteRecordData = function (record) {
        this.listShow = true;
        this.noteRecordPanel.ShowNoteRecord(this.listShow);
        //添加list数据
        this.listArr = [];
        this.index = record.length;
        for (var i = 0; i < this.index; i++) {
            var dto = {
                betTime: { text: Utils.Time.transform(record[i].BetTime, 1) },
                betDate: { text: Utils.Time.transform(record[i].BetTime, 0) },
                bureauNum: { text: record[i].GameData[record[i].GameData.length - 1].TransferID },
                betResult: { text: this.BetResult(record[i].Total) },
                gameData: record[i].GameData,
                total: record[i].Total,
            };
            this.listArr.push(dto);
        }
        this.dataArr = this.dataArr.concat(this.listArr);
        //将this.arr数据赋值到列表数据源。
        this.noteRecordPanel._recordList.array = this.dataArr;
        //renderHandler:单元格渲染处理器(默认返回参数cell:Box,index:int)。
        this.noteRecordPanel._recordList.renderHandler = new Laya.Handler(this, this.onRender);
        //mouseHandler: list单元格鼠标事件处理器
        this.noteRecordPanel._recordList.mouseHandler = new Laya.Handler(this, this.onMouse);
    };
    /**
     * 获取记录成功返回
     * @param data
     */
    NoteRecordPanelCtrl.prototype.Success = function (handlerDto) {
        var data = handlerDto.Data;
        for (var i = 0; i < data.length; i++) {
            data[i].GameData = JSON.parse(data[i].GameData);
        }
        if (!data || data.length == 0) {
            this.noMoreData = true;
            return;
        }
        else {
            this.GetNoteRecordData(data);
            this.betRecordPageDto.LastId = data[data.length - 1].Id;
        }
    };
    /**
     * 获取记录失败返回
     * @param data
     */
    NoteRecordPanelCtrl.prototype.Error = function (data) {
        console.log(data);
    };
    /**
     * 上拉加载
     */
    NoteRecordPanelCtrl.prototype.UpLoading = function () {
        Net.WebApi.instance.GetBetRecord(this.betRecordPageDto, Laya.Handler.create(this, this.Success, null, false), Laya.Handler.create(this, this.Error, null, false));
    };
    /**
     * 下拉刷新
     */
    NoteRecordPanelCtrl.prototype.DownRefresh = function () {
        this.betRecordPageDto.LastId = null;
        this.noMoreData = false;
        this.dataArr = [];
        this.listShow = false;
        this.noteRecordPanel.ShowNoteRecord(this.listShow);
        Net.WebApi.instance.GetBetRecord(this.betRecordPageDto, Laya.Handler.create(this, this.Success, null, false), Laya.Handler.create(this, this.Error, null, false));
    };
    /**
     *渲染List
     * @param cell
     * @param index
     *
     */
    NoteRecordPanelCtrl.prototype.onRender = function (cell, index) {
        //如果索引不再可索引范围，则终止该函数
        if (index > this.dataArr.length)
            return;
        //获取当前渲染条目的数据
        var data = this.dataArr[index];
        //获取listBox的高度
        this.listBoxH = cell.height;
        //获取recordList的高度
        this.recordListH = this.noteRecordPanel._recordList.height;
        //根据子节点的名字，获取子节点对象。   
        var betTime = cell.getChildByName("betTime");
        var betDate = cell.getChildByName("betDate");
        var bureauNum = cell.getChildByName("bureauNum");
        var betResult = cell.getChildByName("betResult");
        betTime.text = data.betTime.text;
        betDate.text = data.betDate.text;
        bureauNum.text = data.bureauNum.text;
        betResult.text = data.betResult.text;
    };
    /**
     *鼠标事件添加
     * @param e
     * @param index
     *
     */
    NoteRecordPanelCtrl.prototype.onMouse = function (e, index) {
        //列表滚动距离
        this.scrollValue = this.noteRecordPanel._recordList.scrollBar.value;
        //鼠标单击事件触发
        if (e.type == Laya.Event.CLICK) {
            //记录当前条目所包含组件的数据信息
            var data = this.dataArr[index];
            this.noteRecordPanel.GoNoteRecordDetail(data);
        }
    };
    /**
    * 投注结果
    * @param total 投注收益
    */
    NoteRecordPanelCtrl.prototype.BetResult = function (total) {
        if (total > 0) {
            return "赢";
        }
        else {
            return "输";
        }
    };
    return NoteRecordPanelCtrl;
}(Laya.Sprite));
