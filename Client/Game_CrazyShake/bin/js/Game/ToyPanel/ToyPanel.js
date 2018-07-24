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
    /**
     * 骰子面板参数类型枚举
     */
    var ToyPanel;
    (function (ToyPanel) {
        ToyPanel[ToyPanel["GameInit"] = 6666] = "GameInit";
        ToyPanel[ToyPanel["GameStartAni"] = 6667] = "GameStartAni";
        ToyPanel[ToyPanel["GameSettleResult"] = 6668] = "GameSettleResult";
    })(ToyPanel = Enum.ToyPanel || (Enum.ToyPanel = {}));
})(Enum || (Enum = {}));
/**
* 骰子面板
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
        this.isGetResult = false;
    };
    /**
     * 接收上层View或者GameViewLogic的数据,根据数据，进行不同的渲染
     * @param data
     */
    ToyPanel.prototype.Set = function (data, type) {
        switch (type) {
            case Enum.ToyPanel.GameInit:
                this.Init();
                break;
            case Enum.ToyPanel.GameStartAni:
                this.StartRock();
                break;
            case Enum.ToyPanel.GameSettleResult:
                this.isGetResult = true;
                this.dices = data.Data.Dices;
                break;
            default:
                break;
        }
    };
    /**
     * 初始化方法
     */
    ToyPanel.prototype.Init = function () {
        Laya.timer.clearAll(this);
        this.ui.ani4.gotoAndStop(0);
        this.ui.cap.y = -470;
        this.ChangeDice([1, 1, 1]);
        this.isGetResult = false;
    };
    return ToyPanel;
}(BaseToyPanel));
//# sourceMappingURL=ToyPanel.js.map