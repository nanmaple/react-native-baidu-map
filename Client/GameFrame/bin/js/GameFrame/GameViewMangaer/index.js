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
 * 屏幕横竖屏状态
 */
var ScreenStatus;
(function (ScreenStatus) {
    ScreenStatus[ScreenStatus["Ver"] = 0] = "Ver";
    ScreenStatus[ScreenStatus["Hor"] = 1] = "Hor";
})(ScreenStatus || (ScreenStatus = {}));
var GameViewManager = (function (_super) {
    __extends(GameViewManager, _super);
    function GameViewManager() {
        return _super.call(this) || this;
    }
    GameViewManager.prototype.Log = function () { };
    ;
    return GameViewManager;
}(Laya.EventDispatcher));
//# sourceMappingURL=index.js.map