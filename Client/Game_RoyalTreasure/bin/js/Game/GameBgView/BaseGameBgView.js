/**
 * BaseView主要用于写固定的UI渲染方法和不同功能的UI处理方法,动画
 * 命名规则：BasexxxView
 */
var BaseGameBgView = /** @class */ (function () {
    function BaseGameBgView(eventKey) {
        this.listenEventKey = "";
        this.listenEventKey = eventKey;
    }
    /**
     * 重置屏幕
     */
    BaseGameBgView.prototype.ResetScreen = function () {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.GameBgViewUI();
        this.ui.zOrder = 1;
        this.ui.cacheAs = "bitmap";
        Laya.stage.addChild(this.ui);
    };
    /**
     * 类型：私有方法
     * 通过事件，向上通知
     * 事件key值，通过构造函数时注入
     */
    BaseGameBgView.prototype.EventNotification = function () {
        var data = new Dto.EventNotificationDto();
        data.Value = {};
        data.Type = Enum.ListenViewEnum.BetPos;
        var event = new CustomEvent(this.listenEventKey, { detail: data });
        document.dispatchEvent(event);
    };
    return BaseGameBgView;
}());
//# sourceMappingURL=BaseGameBgView.js.map