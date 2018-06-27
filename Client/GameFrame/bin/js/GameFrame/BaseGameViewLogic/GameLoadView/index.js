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
/// <reference path="./BaseGameLoadView.ts"/>
/// <reference path="../IView.ts"/>
var GameLoadView = /** @class */ (function (_super) {
    __extends(GameLoadView, _super);
    function GameLoadView(eventKey) {
        var _this = _super.call(this) || this;
        /**
         * 事件通知key
         */
        _this.viewEventKey = "";
        _this.viewEventKey = eventKey;
        return _this;
    }
    /**
     * 设置进度
     * @param data
     */
    GameLoadView.prototype.Set = function (data) {
        this.progress = data;
        this.Refresh();
    };
    /**
     * 刷新界面效果
     */
    GameLoadView.prototype.Refresh = function () {
        if (!this.ui) {
            return;
        }
        this.ui.progressLabel.text = Math.round(this.progress * 100) + "%";
    };
    /**
     * 移除加载资源界面
     */
    GameLoadView.prototype.Remove = function () {
        if (!this.ui) {
            return;
        }
        Laya.stage.removeChild(this.ui);
    };
    /**
     * 开始加载
     * @param dataArr
     */
    GameLoadView.prototype.StartLoad = function (dataArr) {
        Laya.loader.load(dataArr, Laya.Handler.create(this, this.onLoadResource), Laya.Handler.create(this, this.Set, null, false));
    };
    /**
     * 游戏资源加载完成
     */
    GameLoadView.prototype.onLoadResource = function () {
        var broadcast = new Dto.BroadcastDto();
        broadcast.Type = Enum.ListenViewEnum.GameLoadComplate;
        var event = new CustomEvent(this.viewEventKey, { detail: broadcast });
        document.dispatchEvent(event);
    };
    return GameLoadView;
}(BaseGameLoadView));
//# sourceMappingURL=index.js.map