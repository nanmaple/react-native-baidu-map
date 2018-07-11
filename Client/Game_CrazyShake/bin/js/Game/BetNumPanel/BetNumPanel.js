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
    var BetNumPanel;
    (function (BetNumPanel) {
        BetNumPanel[BetNumPanel["EnableButton"] = 10000] = "EnableButton";
        BetNumPanel[BetNumPanel["MSG_GAME_INIT"] = 10001] = "MSG_GAME_INIT";
        BetNumPanel[BetNumPanel["MSG_GAME_BET"] = 10002] = "MSG_GAME_BET";
        BetNumPanel[BetNumPanel["MSG_GAME_AniPlayComplete"] = 10003] = "MSG_GAME_AniPlayComplete";
    })(BetNumPanel = Enum.BetNumPanel || (Enum.BetNumPanel = {}));
})(Enum || (Enum = {}));
/**
 * 投注额面板
 * 功能：增加、减少投注额
 */
var BetNumPanel = /** @class */ (function (_super) {
    __extends(BetNumPanel, _super);
    function BetNumPanel() {
        return _super.call(this) || this;
    }
    /**
 * 类型：公有方法
 * 刷新方法，根据将组件内部的数据，处理逻辑后，将数据渲染到界面
 * 一般用于，当数据改变后，渲染需要延迟进行的情况
 */
    BetNumPanel.prototype.Refresh = function () {
    };
    /**
     * 接收上层View或者GameViewLogic的数据,根据数据，进行不同的渲染
     * @param data 数据
     * @param type 枚举类型
     */
    BetNumPanel.prototype.Set = function (data, type) {
        switch (type) {
            case Enum.BetNumPanel.MSG_GAME_INIT:
            case Enum.BetNumPanel.MSG_GAME_AniPlayComplete:
                var tempMaxBet = Math.floor(data.Balance / 100) * 100;
                this.maxBetNum = tempMaxBet < data.MaxBet ? tempMaxBet : data.MaxBet;
                this.EnableButton();
                break;
            case Enum.BetNumPanel.MSG_GAME_BET:
                this.EnableButton(false);
                break;
            default:
                break;
        }
    };
    /**
     * 获取投注额
     */
    BetNumPanel.prototype.getBetNum = function () {
        return this.currentBetNum;
    };
    return BetNumPanel;
}(BaseBetNumPanel));
//# sourceMappingURL=BetNumPanel.js.map