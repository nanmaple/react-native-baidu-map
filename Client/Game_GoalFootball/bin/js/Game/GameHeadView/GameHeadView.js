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
/**
* View类
* 功能：基础的View组件内部的逻辑，控制数据渲染逻辑和处理点击等事件，调用对应Base类功能方法和动画，事件通知上层或者ViewGameLogic
*
*/
var GameHeadView = /** @class */ (function (_super) {
    __extends(GameHeadView, _super);
    function GameHeadView(eventKey) {
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
    GameHeadView.prototype.Refresh = function () {
        // this.ui.balance.text = String(this.balance);
        this.moneyEffect.start(this.balance);
    };
    /**
     * 接收上层View或者GameViewLogic的数据,根据数据，进行不同的渲染
     * @param data
     */
    GameHeadView.prototype.Set = function (data) {
        switch (data.Type) {
            case Enum.GameCommand.MSG_GAME_INIT:
                this.GameInit(data.Data);
                break;
            case Enum.GameCommand.MSG_GAME_SETTLERESULT:
                this.GameResult(data.Data);
                break;
            default:
                break;
        }
    };
    /**
     * 游戏初始化
     * @param data
     */
    GameHeadView.prototype.GameInit = function (data) {
        this.balance = data.Balance;
        this.ui.balance.text = Utils.Money.Format(this.balance);
        // this.moneyEffect.start(this.balance);
    };
    /**
     * 投注结果
     * @param data
     */
    GameHeadView.prototype.GameResult = function (data) {
        this.balance = data.Balance;
        if (data.Status != Enum.BetResultEnum.Success) {
            this.Refresh();
        }
    };
    /**
     * 通过事件，向上通知
     * 事件key值，通过构造函数时注入
     */
    GameHeadView.prototype.EventNotification = function (type, value) {
        var data = new Dto.EventNotificationDto();
        data.Value = value;
        data.Type = type;
        var event = new CustomEvent(this.listenEventKey, { detail: data });
        document.dispatchEvent(event);
    };
    return GameHeadView;
}(BaseGameHeadView));
//# sourceMappingURL=GameHeadView.js.map