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
var GameStatus = ["等待", "投注", "结束", "正在结算", "已结算"];
var GameBgHV = /** @class */ (function (_super) {
    __extends(GameBgHV, _super);
    function GameBgHV() {
        return _super.call(this) || this;
    }
    GameBgHV.prototype.Refresh = function () {
    };
    GameBgHV.prototype.Set = function (data) {
    };
    GameBgHV.prototype.EventNotification = function () {
    };
    return GameBgHV;
}(GameBgBaseUI));
//# sourceMappingURL=GameBgUIView.js.map