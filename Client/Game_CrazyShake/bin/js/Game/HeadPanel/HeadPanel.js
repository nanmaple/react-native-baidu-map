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
     * 功能键余额面板参数类型枚举
     */
    var HeadPanel;
    (function (HeadPanel) {
        /**
         * 游戏初始化
         */
        HeadPanel[HeadPanel["GameInit"] = 13000] = "GameInit";
        /**
         * 收到游戏结果
         */
        HeadPanel[HeadPanel["GameSettleResult"] = 13001] = "GameSettleResult";
    })(HeadPanel = Enum.HeadPanel || (Enum.HeadPanel = {}));
})(Enum || (Enum = {}));
/**
 * 功能键、余额、获得分数面板
 */
var HeadPanel = /** @class */ (function (_super) {
    __extends(HeadPanel, _super);
    function HeadPanel(eventKey) {
        return _super.call(this, eventKey) || this;
    }
    /**
    * 类型：公有方法
    * 刷新方法，根据将组件内部的数据，处理逻辑后，将数据渲染到界面
    * 一般用于，当数据改变后，渲染需要延迟进行的情况
    */
    HeadPanel.prototype.Refresh = function () {
        this.SetRechargeNum(this.balance);
        this.SetScore(this.winAmount);
    };
    /**
     * 接收上层View或者GameViewLogic的数据,根据数据，进行不同的渲染
     * @param data 游戏投注结果
     * @param type 枚举类型
     */
    HeadPanel.prototype.Set = function (data, type) {
        switch (type) {
            case Enum.HeadPanel.GameInit:
                this.SetRechargeNum(data.Balance);
                break;
            case Enum.HeadPanel.GameSettleResult:
                this.balance = data.Balance;
                this.winAmount = data.WinAmount;
                this.SetRechargeNum(data.Balance - data.WinAmount);
                this.SetScore(0);
                break;
            default:
                break;
        }
    };
    return HeadPanel;
}(BaseHeadPanel));
//# sourceMappingURL=HeadPanel.js.map