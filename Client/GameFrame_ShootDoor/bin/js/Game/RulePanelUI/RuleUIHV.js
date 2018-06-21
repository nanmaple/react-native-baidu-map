/*
* name;
*/
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
var RuleUIHV = /** @class */ (function (_super) {
    __extends(RuleUIHV, _super);
    function RuleUIHV() {
        return _super.call(this) || this;
    }
    RuleUIHV.prototype.ShowRule = function () {
        this.isShow = true;
        this.ui.visible = this.isShow;
    };
    RuleUIHV.prototype.CloseRule = function () {
        this.isShow = false;
        this.ui.visible = this.isShow;
    };
    return RuleUIHV;
}(RuleBaseUI));
//# sourceMappingURL=RuleUIHV.js.map