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
var GameBgHV = /** @class */ (function (_super) {
    __extends(GameBgHV, _super);
    function GameBgHV() {
        var _this = _super.call(this) || this;
        _this.broadcast = new Dto.BroadcastDto();
        return _this;
    }
    GameBgHV.prototype.Log = function () { };
    GameBgHV.prototype.Set = function (data) { };
    GameBgHV.prototype.Refresh = function () { };
    /**
     * 广播
     */
    GameBgHV.prototype.Broadcast = function () {
        this.broadcast.Type = Enum.ListenUIEnum.OnGameBgClick;
        var event = new CustomEvent("GameUI", { detail: this.broadcast });
        document.dispatchEvent(event);
    };
    GameBgHV.prototype.Close = function () {
        this.Broadcast();
    };
    return GameBgHV;
}(GameBgBaseUI));
//# sourceMappingURL=GameBgUIHV.js.map