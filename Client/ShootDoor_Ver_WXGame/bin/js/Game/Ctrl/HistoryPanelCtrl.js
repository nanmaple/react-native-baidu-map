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
    function HistoryPanelCtrl() {
        var _this = _super.call(this) || this;
        _this.index = 0; //记录条数
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
        this.roundIDArr = [];
        if (!history) {
            ScenePanel.GameUI.GetInstance().GetHistoryPanel().ShowList(false);
            return;
        }
        ScenePanel.GameUI.GetInstance().GetHistoryPanel().ShowList(true);
        this.index = history.length;
        for (var i = 0; i < this.index; i++) {
            var dto = {
                poker0: { skin: this.GetPokerUrl(history[i].FirstCard) },
                poker1: { skin: this.GetPokerUrl(history[i].SecondCard) },
                poker2: { skin: this.GetPokerUrl(history[i].ThirdCard) }
            };
            this.listArr.unshift(dto);
            this.roundIDArr.push({ RoundID: history[i].RoundID });
        }
        //实现list滚动
        // ScenePanel.GameUI.GetInstance().GetHistoryPanel()._list.vScrollBarSkin = "";
        //将this.arr数据赋值到列表数据源。
        ScenePanel.GameUI.GetInstance().GetHistoryPanel().SetListArray(this.listArr);
        //renderHandler:单元格渲染处理器(默认返回参数cell:Box,index:int)。
        ScenePanel.GameUI.GetInstance().GetHistoryPanel().SetRenderHandler(new Laya.Handler(this, this.onRender));
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
        ScenePanel.GameUI.GetInstance().GetHistoryPanel().ScrollHistoryList(Laya.Handler.create(this, function () {
            var pokerReData = false; //重复的牌数据
            for (var i = 0; i < _this.index; i++) {
                if (_this.roundIDArr[i].RoundID == data.RoundID) {
                    pokerReData = true;
                }
            }
            if (pokerReData) {
                return;
            }
            else {
                //增加单元格数据源
                var dto = {
                    poker0: { skin: _this.GetPokerUrl(data.Cards.FirstCard) },
                    poker1: { skin: _this.GetPokerUrl(data.Cards.SecondCard) },
                    poker2: { skin: _this.GetPokerUrl(data.Cards.ThirdCard) }
                };
                _this.listArr.unshift(dto);
                ScenePanel.GameUI.GetInstance().GetHistoryPanel().SetListArray(_this.listArr);
            }
        }));
    };
    return HistoryPanelCtrl;
}(Laya.Sprite));
