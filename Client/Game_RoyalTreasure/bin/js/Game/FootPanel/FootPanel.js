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
    /**
     * 底部面板枚举
     */
    var FootPanel;
    (function (FootPanel) {
        /**
         * 游戏初始化
         */
        FootPanel[FootPanel["GameInit"] = 14000] = "GameInit";
        /**
         * 按下投注按钮
         */
        FootPanel[FootPanel["GameBetPos"] = 14001] = "GameBetPos";
        /**
         * 游戏结果处理
         */
        FootPanel[FootPanel["GameSettleResult"] = 14002] = "GameSettleResult";
        /**
         * 刷新
         */
        FootPanel[FootPanel["GameRefreshBtn"] = 14003] = "GameRefreshBtn";
        /**
         * 下一场
         */
        FootPanel[FootPanel["GameNextTime"] = 14004] = "GameNextTime";
    })(FootPanel = Enum.FootPanel || (Enum.FootPanel = {}));
})(Enum || (Enum = {}));
/**
 * 底部面板
 */
var FootPanel = /** @class */ (function (_super) {
    __extends(FootPanel, _super);
    function FootPanel(eventKey) {
        return _super.call(this, eventKey) || this;
    }
    /**
     * 类型：公有方法
     * 刷新方法，根据将组件内部的数据，处理逻辑后，将数据渲染到界面
     * 一般用于，当数据改变后，渲染需要延迟进行的情况
     */
    FootPanel.prototype.Refresh = function () {
    };
    /**
     * 接收上层View或者GameViewLogic的数据,根据数据，进行不同的渲染
     * @param data
     */
    FootPanel.prototype.Set = function (data, type) {
        switch (type) {
            case Enum.FootPanel.GameInit:
                this.EnableButton();
                this.ui.betNum.changeText("100");
                this.MaxBet = data.MaxBet;
                var initMaxBet = Math.floor(data.Balance / 100) * 100;
                this.maxBetNum = initMaxBet < this.MaxBet ? initMaxBet : this.MaxBet;
                break;
            case Enum.FootPanel.GameBetPos:
                this.EnableButton(false);
                break;
            case Enum.FootPanel.GameSettleResult:
                var comMaxBet = Math.floor(data / 100) * 100;
                this.maxBetNum = comMaxBet < this.MaxBet ? comMaxBet : this.MaxBet;
                break;
            case Enum.FootPanel.GameNextTime:
                this.EnableButton();
                break;
            case Enum.FootPanel.GameRefreshBtn:
                this.EnableButton();
                break;
            default:
                break;
        }
    };
    return FootPanel;
}(BaseFootPanel));
//# sourceMappingURL=FootPanel.js.map