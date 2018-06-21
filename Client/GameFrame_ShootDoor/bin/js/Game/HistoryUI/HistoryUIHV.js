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
var HistoryUIHV = /** @class */ (function (_super) {
    __extends(HistoryUIHV, _super);
    function HistoryUIHV() {
        var _this = _super.call(this) || this;
        _this.maxLength = 5; //记录条数
        _this.isShow = false;
        return _this;
    }
    HistoryUIHV.prototype.Refresh = function () {
        this.ui._list.array = this.listArr;
        this.ui._list.y = 0;
        this.ShowPoker();
        this.ui._list.renderHandler = new Laya.Handler(this, this.onRender);
    };
    /**
     * 设置历史数据
     * @param time
     */
    HistoryUIHV.prototype.Set = function (data) {
        switch (data.Type) {
            case GameEnum.GameCommand.MSG_GAME_INIT:
                this.GameServer(data.Data);
                break;
            case GameEnum.GameCommand.MSG_GAME_START:
                this.GameServer(data.Data);
                break;
            case GameEnum.GameCommand.MSG_GAME_GAMERESULT:
                this.GameResult(data.Data);
                break;
        }
    };
    /**
     * 初始化和开始时，同步
     */
    HistoryUIHV.prototype.GameServer = function (history) {
        //添加list数据
        this.listArr = [];
        this.roundIDArr = [];
        if (!history) {
            this.ShowList(false);
            return;
        }
        this.ShowList(true);
        var recordCount = history.length >= this.maxLength ? this.maxLength : history.length;
        var start = history.length - 1;
        var end = history.length - recordCount;
        for (var i = start; i >= end; i--) {
            var dto = {
                poker0: { skin: this.GetPokerUrl(history[i].FirstCard) },
                poker1: { skin: this.GetPokerUrl(history[i].SecondCard) },
                poker2: { skin: this.GetPokerUrl(history[i].ThirdCard) }
            };
            this.listArr.push(dto);
            this.roundIDArr.push({ RoundID: history[i].RoundID });
        }
        this.Refresh();
    };
    HistoryUIHV.prototype.GameResult = function (dto) {
        var _this = this;
        Laya.timer.once(2000, this, function () {
            Laya.Tween.to(_this.ui._list, { y: _this.listBoxH }, 2000, Laya.Ease.quadInOut, Laya.Handler.create(_this, function () {
                _this.ShowPoker(dto);
            }));
        });
    };
    /**
     *渲染List
     * @param cell
     * @param index
     *
     */
    HistoryUIHV.prototype.onRender = function (cell, index) {
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
     * 显隐list
     * @param visible
     */
    HistoryUIHV.prototype.ShowList = function (visible) {
        this.ui._list.visible = visible;
    };
    /**
     * 显隐list
     * @param visible
     */
    HistoryUIHV.prototype.ShowPoker = function (dto) {
        if (dto) {
            this.ui.pokerPos0.skin = this.GetPokerUrl(dto.FirstCard);
            this.ui.pokerPos1.skin = this.GetPokerUrl(dto.ThirdCard);
            this.ui.pokerPos2.skin = this.GetPokerUrl(dto.SecondCard);
            this.ui.pokerPos0.visible = true;
            this.ui.pokerPos1.visible = true;
            this.ui.pokerPos2.visible = true;
        }
        else {
            this.ui.pokerPos0.visible = false;
            this.ui.pokerPos1.visible = false;
            this.ui.pokerPos2.visible = false;
        }
    };
    /**
     * 获得扑克牌地址
     * @param type 牌类型
     */
    HistoryUIHV.prototype.GetPokerUrl = function (type) {
        return "ui/poker/" + type + ".png";
    };
    return HistoryUIHV;
}(HistoryBaseUI));
//# sourceMappingURL=HistoryUIHV.js.map