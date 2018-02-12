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
var HistoryPanelCtrl = /** @class */ (function (_super) {
    __extends(HistoryPanelCtrl, _super);
    function HistoryPanelCtrl(historyPanel) {
        var _this = _super.call(this) || this;
        _this.index = 0; //记录条数
        _this.historyPanel = historyPanel;
        return _this;
    }
    /**
     * 获得扑克牌地址
     * @param type 牌类型
     */
    HistoryPanelCtrl.prototype.GetPokerUrl = function (type) {
        return "ui/poker/" + type + ".png";
    };
    /**
     * 获取历史记录
     */
    HistoryPanelCtrl.prototype.SetHistoryData = function (history) {
        //添加list数据
        this.listArr = [];
        if (!history) {
            this.historyPanel.listPanel.visible = false;
            return;
        }
        this.historyPanel.listPanel.visible = true;
        this.index = history.length;
        for (var i = 0; i < this.index; i++) {
            var dto = {
                poker0: { skin: this.GetPokerUrl(history[i].FirstCard) },
                poker1: { skin: this.GetPokerUrl(history[i].SecondCard) },
                poker2: { skin: this.GetPokerUrl(history[i].ThirdCard) }
            };
            this.listArr.unshift(dto);
        }
        //实现list滚动
        // this.historyPanel._list.vScrollBarSkin = "";
        //将this.arr数据赋值到列表数据源。
        this.historyPanel._list.array = this.listArr;
        //renderHandler:单元格渲染处理器(默认返回参数cell:Box,index:int)。
        this.historyPanel._list.renderHandler = new Laya.Handler(this, this.onRender);
    };
    /**
     *渲染List
     * @param cell
     * @param index
     *
     */
    HistoryPanelCtrl.prototype.onRender = function (cell, index) {
        //如果索引不再可索引范围，则终止该函数
        if (index > this.listArr.length)
            return;
        //获取当前渲染条目的数据
        var data = this.listArr[index];
        //根据子节点的名字poker，获取子节点对象。   
        var poker0 = cell.getChildByName("poker0");
        var poker1 = cell.getChildByName("poker1");
        var poker2 = cell.getChildByName("poker2");
        poker0.skin = data.poker0.skin;
        poker1.skin = data.poker1.skin;
        poker2.skin = data.poker2.skin;
    };
    /**
     * 增加历史记录
     */
    HistoryPanelCtrl.prototype.AddHistoryList = function (data) {
        var _this = this;
        //滚动历史列表
        this.historyPanel.ScrollHistoryList(Laya.Handler.create(this, function () {
            //增加单元格数据源
            var dto = {
                poker0: { skin: _this.GetPokerUrl(data.FirstCard) },
                poker1: { skin: _this.GetPokerUrl(data.SecondCard) },
                poker2: { skin: _this.GetPokerUrl(data.ThirdCard) }
            };
            _this.listArr.unshift(dto);
            _this.historyPanel._list.array = _this.listArr;
        }));
    };
    return HistoryPanelCtrl;
}(Laya.Sprite));
