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
    var GameBetPosView;
    (function (GameBetPosView) {
        /**
         * 最大金额投注
         */
        GameBetPosView[GameBetPosView["MaxBetAmount"] = 10000] = "MaxBetAmount";
    })(GameBetPosView = Enum.GameBetPosView || (Enum.GameBetPosView = {}));
})(Enum || (Enum = {}));
/**
* View类
* 功能：基础的View组件内部的逻辑，控制数据渲染逻辑和处理点击等事件，调用对应Base类功能方法和动画，事件通知上层或者ViewGameLogic
*
*/
var GameBetPosView = (function (_super) {
    __extends(GameBetPosView, _super);
    function GameBetPosView(eventKey) {
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
    GameBetPosView.prototype.Refresh = function () {
        this.StartStatus(false);
    };
    /**
     * 接收上层View或者GameViewLogic的数据,根据数据，进行不同的渲染
     * @param data
     */
    GameBetPosView.prototype.Set = function (data, type) {
        switch (type) {
            case Enum.GameCommand.MsgGameInit:
                this.GameInit(data);
                break;
            case Enum.GameCommand.MsgGameSettleResult:
                this.GameResult(data);
                break;
            case Enum.GameBetPosView.MaxBetAmount:
                this.MaxBetAmount(data);
                break;
            default:
                break;
        }
    };
    /**
     * 游戏初始化
     * @param data
     */
    GameBetPosView.prototype.GameInit = function (data) {
        if (!this.isInit) {
            this.betAmount = data.MinBet;
            this.ui.amount.text = this.betAmount.toString();
        }
        this.isInit = true;
        this.ui.disabled = false;
        this.maxBet = data.MaxBet;
        this.minBet = data.MinBet;
    };
    /**
     * 投注结果
     * @param data
     */
    GameBetPosView.prototype.GameResult = function (data) {
        if (data.Status == Enum.BetErrorCode.Success) {
            this.StartStatus(true);
        }
        else {
            this.Refresh();
        }
    };
    /**
     * 最大金额
     * @param balance
     */
    GameBetPosView.prototype.MaxBetAmount = function (balance) {
        this.betAmount = Math.floor(balance / 100) * 100;
        this.ui.reduce.disabled = false;
        this.ui.add.disabled = false;
        if (this.betAmount <= this.minBet) {
            this.betAmount = this.minBet;
            this.ui.reduce.disabled = true;
        }
        else if (this.betAmount >= this.maxBet) {
            this.betAmount = this.maxBet;
            this.ui.add.disabled = true;
        }
        this.ui.amount.text = this.betAmount.toString();
        this.EventNotification(Enum.ListenViewEnum.SetBetAmount, this.betAmount);
    };
    /**
     * 类型：私有方法
     * 通过事件，向上通知
     * 事件key值，通过构造函数时注入
     */
    GameBetPosView.prototype.EventNotification = function (type, value) {
        var data = new Dto.EventNotificationDto();
        data.Value = value;
        data.Type = type;
        var event = new CustomEvent(this.listenEventKey, { detail: data });
        document.dispatchEvent(event);
    };
    return GameBetPosView;
}(BaseGameBetPosView));
//# sourceMappingURL=GameBetPosView.js.map