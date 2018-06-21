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
var mask = /** @class */ (function (_super) {
    __extends(mask, _super);
    function mask() {
        var _this = _super.call(this) || this;
        _this.masks = new Laya.Sprite();
        _this.addChild(_this.masks);
        document.addEventListener("screenMode", function () {
            if (GameConfig.ScreenMode == 0) {
                if (_this.masks) {
                    _this.masks.removeSelf();
                }
                _this.masks.graphics.drawRect(0, 0, _this.width, _this.height, "#6dac7c");
                _this.addChild(_this.masks);
            }
            else {
                if (_this.masks) {
                    _this.masks.removeSelf();
                }
                _this.masks.graphics.drawRect(0, 0, _this.width, _this.height, "#6dac7c");
                _this.addChild(_this.masks);
            }
        });
        return _this;
    }
    mask.prototype.Show = function () {
        this.masks.graphics.drawRect(0, 0, this.width, this.height, "#6dac7c");
        this.masks.visible = true;
    };
    mask.prototype.Hide = function () {
        this.masks.visible = false;
    };
    return mask;
}(Laya.Box));
