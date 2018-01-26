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
var Scene;
(function (Scene) {
    var GameLoadCtrl = /** @class */ (function (_super) {
        __extends(GameLoadCtrl, _super);
        function GameLoadCtrl(onGameLoadSuccess) {
            var _this = _super.call(this) || this;
            _this.onGameLoadSuccess = onGameLoadSuccess;
            return _this;
        }
        /**
         * 微信登录
         */
        GameLoadCtrl.prototype.doLogin = function () {
        };
        return GameLoadCtrl;
    }(Laya.Sprite));
    Scene.GameLoadCtrl = GameLoadCtrl;
})(Scene || (Scene = {}));
//# sourceMappingURL=Ctrl.js.map