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
    var ToyPanel;
    (function (ToyPanel) {
        /**
         * 游戏初始化
         */
        ToyPanel[ToyPanel["GameInit"] = 12000] = "GameInit";
        /**
         * 游戏结果处理
         */
        ToyPanel[ToyPanel["GameSettleResult"] = 12001] = "GameSettleResult";
        /**
         * 下一场
         */
        ToyPanel[ToyPanel["GameNextTime"] = 12002] = "GameNextTime";
    })(ToyPanel = Enum.ToyPanel || (Enum.ToyPanel = {}));
})(Enum || (Enum = {}));
/**
* Toy类
*/
var ToyPanel = /** @class */ (function (_super) {
    __extends(ToyPanel, _super);
    function ToyPanel(eventKey) {
        return _super.call(this, eventKey) || this;
    }
    /**
     * 类型：公有方法
     * 刷新方法，根据将组件内部的数据，处理逻辑后，将数据渲染到界面
     * 一般用于，当数据改变后，渲染需要延迟进行的情况
     */
    ToyPanel.prototype.Refresh = function () {
    };
    /**
     * 接收上层View或者GameViewLogic的数据,根据数据，进行不同的渲染
     * @param data
     */
    ToyPanel.prototype.Set = function (data, type) {
        switch (type) {
            case Enum.ToyPanel.GameInit:
                break;
            case Enum.ToyPanel.GameSettleResult:
                if (data > 0)
                    this.isWin = true;
                else
                    this.isWin = false;
                this.ui.visible = true;
                this.Dig();
                break;
            case Enum.ToyPanel.GameNextTime:
                this.ui.hammerSplit.visible = false;
                break;
            default:
                break;
        }
    };
    return ToyPanel;
}(BaseToyPanel));
//# sourceMappingURL=ToyPanel.js.map