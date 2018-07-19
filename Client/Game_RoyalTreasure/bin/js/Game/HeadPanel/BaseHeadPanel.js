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
 * 顶部面板基类
 */
var BaseHeadPanel = /** @class */ (function (_super) {
    __extends(BaseHeadPanel, _super);
    function BaseHeadPanel(eventKey) {
        var _this = _super.call(this) || this;
        _this.listenEventKey = "";
        _this.listenEventKey = eventKey;
        return _this;
    }
    /**
     * 重置屏幕
     */
    BaseHeadPanel.prototype.ResetScreen = function () {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.HeadPanelUI();
        this.ui.zOrder = 2;
        this.ui.cacheAs = "bitmap";
        Laya.stage.addChild(this.ui);
    };
    /**
     * 更改余额显示
     * @param data接收的数据
     */
    BaseHeadPanel.prototype.SetBalance = function (data) {
        this.balance.changeText(data.toString());
    };
    /**
     * 类型：私有方法
     * 通过事件，向上通知
     * 事件key值，通过构造函数时注入
     */
    BaseHeadPanel.prototype.EventNotification = function () {
        var data = new Dto.EventNotificationDto();
        data.Value = {};
        data.Type = Enum.ListenViewEnum.BetPos;
        var event = new CustomEvent(this.listenEventKey, { detail: data });
        document.dispatchEvent(event);
    };
    return BaseHeadPanel;
}(ui.HeadPanelUI));
//# sourceMappingURL=BaseHeadPanel.js.map