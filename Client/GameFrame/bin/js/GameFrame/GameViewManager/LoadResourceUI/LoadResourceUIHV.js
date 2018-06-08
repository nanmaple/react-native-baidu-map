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
var LoadResourceHV = /** @class */ (function (_super) {
    __extends(LoadResourceHV, _super);
    function LoadResourceHV() {
        return _super.call(this) || this;
    }
    /**
     * 设置进度
     * @param data
     */
    LoadResourceHV.prototype.Set = function (data) {
        this.progress = data;
        this.Refresh();
    };
    /**
     * 刷新界面效果
     */
    LoadResourceHV.prototype.Refresh = function () {
        if (!this.ui) {
            return;
        }
        this.ui.progressLabel.text = Math.round(this.progress * 100) + "%";
    };
    /**
     * 移除加载资源界面
     */
    LoadResourceHV.prototype.Remove = function () {
        if (!this.ui) {
            return;
        }
        Laya.stage.removeChild(this.ui);
    };
    /**
     * 开始加载
     * @param dataArr
     */
    LoadResourceHV.prototype.StartLoad = function (dataArr) {
        Laya.loader.load(dataArr, Laya.Handler.create(this, this.onLoadResource), Laya.Handler.create(this, this.Set, null, false));
    };
    /**
     * 游戏资源加载完成
     */
    LoadResourceHV.prototype.onLoadResource = function () {
        var broadcast = new Dto.BroadcastDto();
        broadcast.Type = Enum.ListenUIEnum.GameLoadComplate;
        var event = new CustomEvent("GameUI", { detail: broadcast });
        document.dispatchEvent(event);
    };
    return LoadResourceHV;
}(LoadResourceBaseUI));
//# sourceMappingURL=LoadResourceUIHV.js.map