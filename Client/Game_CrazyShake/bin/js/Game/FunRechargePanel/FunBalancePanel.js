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
 * 组件Set() 参数类型枚举
 */
var Enum;
(function (Enum) {
    var FunBalancePanel;
    (function (FunBalancePanel) {
        FunBalancePanel[FunBalancePanel["MSG_GAME_INIT"] = 13000] = "MSG_GAME_INIT";
        FunBalancePanel[FunBalancePanel["MSG_GAME_BET"] = 13001] = "MSG_GAME_BET";
        FunBalancePanel[FunBalancePanel["MSG_GAME_AniPlayComplete"] = 13002] = "MSG_GAME_AniPlayComplete";
    })(FunBalancePanel = Enum.FunBalancePanel || (Enum.FunBalancePanel = {}));
})(Enum || (Enum = {}));
/**
 * 功能键、余额、获得分数面板
 */
var FunBalancePanel = /** @class */ (function (_super) {
    __extends(FunBalancePanel, _super);
    function FunBalancePanel() {
        return _super.call(this) || this;
    }
    /**
 * 类型：公有方法
 * 刷新方法，根据将组件内部的数据，处理逻辑后，将数据渲染到界面
 * 一般用于，当数据改变后，渲染需要延迟进行的情况
 */
    FunBalancePanel.prototype.Refresh = function () {
    };
    /**
     * 接收上层View或者GameViewLogic的数据,根据数据，进行不同的渲染
     * @param data 游戏投注结果
     * @param type 枚举类型
     */
    FunBalancePanel.prototype.Set = function (data, type) {
        switch (type) {
            case Enum.FunBalancePanel.MSG_GAME_INIT:
                this.SetRechargeNum(data.Balance);
                break;
            case Enum.FunBalancePanel.MSG_GAME_BET:
                this.balance = this.balance - data.Amount;
                this.SetRechargeNum(this.balance);
                this.SetScore(0);
                break;
            case Enum.FunBalancePanel.MSG_GAME_AniPlayComplete:
                this.SetRechargeNum(data.Balance);
                this.SetScore(data.WinAmount);
                break;
            default:
                break;
        }
    };
    return FunBalancePanel;
}(BaseFunBalancePanel));
//# sourceMappingURL=FunBalancePanel.js.map