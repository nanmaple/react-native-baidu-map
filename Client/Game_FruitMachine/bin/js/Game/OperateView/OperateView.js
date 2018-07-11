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
var OperateView = /** @class */ (function (_super) {
    __extends(OperateView, _super);
    function OperateView(eventKey) {
        var _this = _super.call(this) || this;
        _this.ListenEventKey = eventKey;
        return _this;
    }
    /**
     * 刷新方法，根据将组件内部的数据，处理逻辑后，将数据渲染到界面
     */
    OperateView.prototype.Refresh = function () {
    };
    /**
     * 接收上层View或者GameViewLogic的数据,根据数据，进行不同的渲染
     * @param data
     */
    OperateView.prototype.Set = function (data, type) {
        this.ChangGameStatus(data);
    };
    /**
     * 改变游戏状态
     * @param data 游戏状态枚举
     */
    OperateView.prototype.ChangGameStatus = function (data) {
        this.gameStatus = data;
        switch (data) {
            case Enum.GameStatus.DEFAULT:
                this.ui.addChip.disabled = true;
                this.ui.reduceChip.disabled = true;
                this.ui.clearOrSmall.disabled = false;
                this.ui.addAllOrBig.disabled = false;
                this.ui.startOrGather.disabled = false;
                this.ui.clearOrSmall.skin = 'ui/btn_clear.png';
                this.ui.addAllOrBig.skin = 'ui/btn_addAll.png';
                this.ui.startOrGather.skin = 'ui/btn_start.png';
                break;
            case Enum.GameStatus.EXECUTE:
                this.ui.addChip.disabled = true;
                this.ui.reduceChip.disabled = true;
                this.ui.startOrGather.disabled = true;
                this.ui.clearOrSmall.disabled = true;
                this.ui.addAllOrBig.disabled = true;
                break;
            case Enum.GameStatus.GUESS:
                this.ui.addChip.disabled = false;
                this.ui.reduceChip.disabled = false;
                this.ui.clearOrSmall.disabled = false;
                this.ui.addAllOrBig.disabled = false;
                this.ui.startOrGather.disabled = false;
                this.ui.clearOrSmall.skin = 'ui/btn_small.png';
                this.ui.addAllOrBig.skin = 'ui/btn_big.png';
                this.ui.startOrGather.skin = 'ui/btn_gather.png';
                break;
        }
    };
    /**
     * 加大猜大小金额
    */
    OperateView.prototype.OnAddChip = function () {
        this.EventNotification(Enum.ListenViewEnum.AddGuessSum);
    };
    /**
     * 减小猜大小金额
    */
    OperateView.prototype.OnReduceChip = function () {
        this.EventNotification(Enum.ListenViewEnum.ReduceGuessSum);
    };
    /**
     * 开始游戏或收获分数
    */
    OperateView.prototype.OnStartOrGather = function () {
        if (this.gameStatus == Enum.GameStatus.DEFAULT) {
            this.EventNotification(Enum.ListenViewEnum.GameStart);
        }
        else {
            this.EventNotification(Enum.ListenViewEnum.GatherFraction);
        }
    };
    /**
     * 清空投注或选择大小为小
    */
    OperateView.prototype.OnClearOrSmall = function () {
        if (this.gameStatus == Enum.GameStatus.DEFAULT) {
            this.EventNotification(Enum.ListenViewEnum.ClearBet);
        }
        else {
            this.EventNotification(Enum.ListenViewEnum.GuessSize, 0);
        }
    };
    /**
     * 全部位置+1或选择大小为大
    */
    OperateView.prototype.OnAddAllOrBig = function () {
        if (this.gameStatus == Enum.GameStatus.DEFAULT) {
            this.EventNotification(Enum.ListenViewEnum.AddAll);
        }
        else {
            this.EventNotification(Enum.ListenViewEnum.GuessSize, 1);
        }
    };
    /**
     * 统一事件发送
     * @param type 事件类型
     */
    OperateView.prototype.EventNotification = function (type, value) {
        if (value === void 0) { value = ''; }
        var data = new Dto.EventNotificationDto();
        data.Value = value;
        data.Type = type;
        var event = new CustomEvent(this.ListenEventKey, { detail: data });
        document.dispatchEvent(event);
    };
    return OperateView;
}(BaseOperateView));
//# sourceMappingURL=OperateView.js.map