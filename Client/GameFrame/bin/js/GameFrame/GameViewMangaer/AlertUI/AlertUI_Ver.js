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
var AlertVer = (function (_super) {
    __extends(AlertVer, _super);
    function AlertVer() {
        var _this = _super.call(this, false) || this;
        if (GameConfig.RatioType) {
            _this.ui.prompt.scale(GameConfig.LengthShort, 1);
        }
        else {
            _this.ui.prompt.scale(1, GameConfig.ShortLength);
        }
        return _this;
    }
    return AlertVer;
}(AlertBaseUI));
//# sourceMappingURL=AlertUI_Ver.js.map