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
// namespace Enum{
//     export enum HeadView{
//         /**立即刷新 */
//         IMMEDIATE = 10000,
//         /**延迟刷新 */
//         DELAY,
//     }
// }
var HeadView = /** @class */ (function (_super) {
    __extends(HeadView, _super);
    function HeadView(eventKey) {
        var _this = _super.call(this) || this;
        _this.ListenEventKey = eventKey;
        return _this;
    }
    /**
     * 刷新UI
    */
    HeadView.prototype.Refresh = function () {
    };
    /**
     * 设置结果
     */
    HeadView.prototype.Set = function (data) {
        if (data.balance != null) {
            this.balance = data.balance;
            this.ui.balance.text = data.balance + '';
        }
        if (data.winAmount != null) {
            this.winAmount = data.winAmount;
            this.ui.gain.text = data.winAmount + '';
        }
    };
    HeadView.prototype.OnGoHome = function () { };
    return HeadView;
}(BaseHeadView));
//# sourceMappingURL=HeadView.js.map