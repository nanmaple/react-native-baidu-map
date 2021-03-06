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
/**规则面板类 */
var RuleView = /** @class */ (function (_super) {
    __extends(RuleView, _super);
    function RuleView() {
        return _super.call(this) || this;
    }
    /**
     * 刷新UI
    */
    RuleView.prototype.Refresh = function () {
    };
    /**
     * 设置结果
     */
    RuleView.prototype.Set = function (data) {
        this.ShowRule();
    };
    /**显示规则栏 */
    RuleView.prototype.ShowRule = function () {
        this.ui.ruleBox.scale(0, 0);
        this.ui.visible = true;
        Effect.AlertEffect.Show(this.ui.ruleBox, null);
    };
    /**
     * 关闭规则栏
    */
    RuleView.prototype.OnCloseRule = function () {
        var _this = this;
        Laya.SoundManager.playSound(SoundConfig.SounRes.Button);
        Effect.AlertEffect.Hide(this.ui.ruleBox, Laya.Handler.create(this, function () {
            _this.ui.visible = false;
        }, null, false));
    };
    return RuleView;
}(BaseRuleView));
//# sourceMappingURL=RuleView.js.map