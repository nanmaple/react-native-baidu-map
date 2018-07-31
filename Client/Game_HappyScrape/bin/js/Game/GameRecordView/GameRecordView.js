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
var Enum;
(function (Enum) {
    var GameRecordView;
    (function (GameRecordView) {
        /**
         * 显示
         */
        GameRecordView[GameRecordView["IsRecordShow"] = 10000] = "IsRecordShow";
        /**
         * 获取记录数据
         */
        GameRecordView[GameRecordView["GetRecordData"] = 10001] = "GetRecordData";
    })(GameRecordView = Enum.GameRecordView || (Enum.GameRecordView = {}));
})(Enum || (Enum = {}));
var GameRecordView = (function (_super) {
    __extends(GameRecordView, _super);
    function GameRecordView(eventKey) {
        var _this = _super.call(this) || this;
        _this.listenEventKey = "";
        _this.listenEventKey = eventKey;
        return _this;
    }
    /**
     * 类型：公有方法
     * 刷新方法，根据将组件内部的数据，处理逻辑后，将数据渲染到界面
     * 一般用于，当数据改变后，渲染需要延迟进行的情况
     */
    GameRecordView.prototype.Refresh = function () {
    };
    /**
     * 接收上层View或者GameViewLogic的数据,根据数据，进行不同的渲染
     * @param data
     */
    GameRecordView.prototype.Set = function (data, type) {
        switch (type) {
            case Enum.GameRecordView.IsRecordShow:
                this.Show();
                break;
            case Enum.GameRecordView.GetRecordData:
                this.GetRecordData(data);
                break;
            default:
                break;
        }
    };
    /**
     * 显示面板
     */
    GameRecordView.prototype.Show = function () {
        this.isShow = true;
        this.ui.visible = this.isShow;
        this.ui.prompt.scale(0, 0);
        Effect.AlertEffect.Show(this.ui.prompt, null);
        this.ui.recordList.vScrollBarSkin = "";
        this.ui.recordList.scrollBar.elasticBackTime = 300;
        this.ui.recordList.scrollBar.elasticDistance = 50;
        this.PullDownRefresh(true);
    };
    /**
     * 获取记录数据
     * @param data
     */
    GameRecordView.prototype.GetRecordData = function (data) {
        this.isLoading = false;
        if (!data) {
            return;
        }
        //添加list数据
        var listArr = [];
        var len = data.length;
        if (data && len == 0 && !this.isInit) {
            this.noMoreData = true;
            return;
        }
        for (var i = 0; i < len; i++) {
            var dto = {
                Time: Utils.Time.transform(data[i].BetTime, 1),
                Date: Utils.Time.transform(data[i].BetTime, 0),
                Reward: Utils.Float.Sub(data[i].PayAmount, data[i].BetAmount),
            };
            listArr.push(dto);
        }
        this.dataArr = this.dataArr.concat(listArr);
        //将this.arr数据赋值到列表数据源。
        this.SetListArray(this.dataArr);
        //renderHandler:单元格渲染处理器(默认返回参数cell:Box,index:int)。
        this.ui.recordList.renderHandler = Laya.Handler.create(this, this.onRender, null, false);
    };
    /**
     *渲染List
     * @param cell
     * @param index
     *
     */
    GameRecordView.prototype.onRender = function (cell, index) {
        //如果索引不再可索引范围，则终止该函数
        if (index > this.dataArr.length)
            return;
        //获取当前渲染条目的数据
        var data = this.dataArr[index];
        //获取listBox的高度
        this.listBoxH = cell.height;
        //获取recordList的高度
        this.recordListH = this.ui.recordList.height;
        //根据子节点的名字，获取子节点对象。   
        var time = cell.getChildByName("time");
        var date = cell.getChildByName("date");
        var num = cell.getChildByName("num");
        var reward = cell.getChildByName("reward");
        time.text = data.Time;
        date.text = data.Date;
        num.text = (index + 1).toString();
        reward.text = data.Reward;
    };
    /**
     * 通过事件，向上通知
     * 事件key值，通过构造函数时注入
     */
    GameRecordView.prototype.EventNotification = function (type, value) {
        var data = new Dto.EventNotificationDto();
        data.Value = value;
        data.Type = type;
        var event = new CustomEvent(this.listenEventKey, { detail: data });
        document.dispatchEvent(event);
    };
    return GameRecordView;
}(BaseGameRecordView));
//# sourceMappingURL=GameRecordView.js.map