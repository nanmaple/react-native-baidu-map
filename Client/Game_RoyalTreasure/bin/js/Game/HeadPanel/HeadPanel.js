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
     * 头部面板枚举
     */
    var HeadPanel;
    (function (HeadPanel) {
        /**
         * 游戏初始化
         */
        HeadPanel[HeadPanel["GameInit"] = 10000] = "GameInit";
        /**
         * 游戏结果处理
         */
        HeadPanel[HeadPanel["GameSettleResult"] = 10001] = "GameSettleResult";
        /**
         * 下一场游戏
         */
        HeadPanel[HeadPanel["GameNextTime"] = 10002] = "GameNextTime";
    })(HeadPanel = Enum.HeadPanel || (Enum.HeadPanel = {}));
})(Enum || (Enum = {}));
/**
 * 顶部面板
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
    };
    /**
     * 接收上层View或者GameViewLogic的数据,根据数据，进行不同的渲染
     * @param data
     */
    HeadPanel.prototype.Set = function (data, type) {
        switch (type) {
            case Enum.HeadPanel.GameInit:
                this.currentBalance = data;
                this.SetBalance(data);
                break;
            case Enum.HeadPanel.GameSettleResult:
                this.currentBalance = data.Balance;
                this.SetBalance(data.Balance - data.WinAmount);
                break;
            case Enum.HeadPanel.GameNextTime:
                this.SetBalance(this.currentBalance);
                break;
            default:
                break;
        }
    };
    return HeadPanel;
}(BaseHeadPanel));
//# sourceMappingURL=HeadPanel.js.map