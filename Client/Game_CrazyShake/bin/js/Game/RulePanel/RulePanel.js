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
 * 游戏规则面板
 */
var RulePanel = /** @class */ (function (_super) {
    __extends(RulePanel, _super);
    function RulePanel(eventKey) {
        return _super.call(this, eventKey) || this;
    }
    /**
     * 类型：公有方法
     * 刷新方法，根据将组件内部的数据，处理逻辑后，将数据渲染到界面
     * 一般用于，当数据改变后，渲染需要延迟进行的情况
     */
    RulePanel.prototype.Refresh = function () {
        this.ui.visible = true;
    };
    /**
     * 接收上层View或者GameViewLogic的数据,根据数据，进行不同的渲染
     */
    RulePanel.prototype.Set = function () {
        this.ui.visible = false;
    };
    return RulePanel;
}(BaseRulePanel));
//# sourceMappingURL=RulePanel.js.map