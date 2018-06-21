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
/*
* name;
*/
var TipsUIHV = /** @class */ (function (_super) {
    __extends(TipsUIHV, _super);
    function TipsUIHV() {
        return _super.call(this) || this;
    }
    /**
     * 显示面板
     */
    TipsUIHV.prototype.ShowTip = function () {
        this.isShow = true;
        this.ui.visible = this.isShow;
    };
    /**
     * 关闭面板
     */
    TipsUIHV.prototype.CloseTip = function () {
        this.isShow = false;
        this.ui.visible = this.isShow;
    };
    return TipsUIHV;
}(TipsBaseUI));
//# sourceMappingURL=TipsUIHV.js.map