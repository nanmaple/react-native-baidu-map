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
 * 宝藏面板基类
 */
var BaseTreasurePanel = /** @class */ (function (_super) {
    __extends(BaseTreasurePanel, _super);
    function BaseTreasurePanel(eventKey) {
        var _this = _super.call(this) || this;
        _this.listenEventKey = "";
        _this.digX = 0; //挖掘位置
        _this.digY = 0;
        _this.mineX = 0; //动画中出现宝藏位置
        _this.mineY = 0;
        _this.mineOdds = new Array(); //矿石赔率数组
        _this.listenEventKey = eventKey;
        return _this;
    }
    /**
     * 重置屏幕
     */
    BaseTreasurePanel.prototype.ResetScreen = function () {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.TreasurePanelUI();
        this.ui.zOrder = 4;
        this.ui.cacheAs = "bitmap";
        this.ui.y = 264;
        Laya.stage.addChild(this.ui);
        this.ui.mineImg.on(Laya.Event.MOUSE_DOWN, this, this.EventNotification);
        this.ui.mineImg.mouseEnabled = false;
    };
    /**
     * 类型：私有方法
     * 通过事件，向上通知
     * 事件key值，通过构造函数时注入
     */
    BaseTreasurePanel.prototype.EventNotification = function () {
        this.digX = this.mouseX;
        this.digY = this.mouseY;
        this.mineX = this.mouseX;
        this.mineY = this.mouseY;
        var data = new Dto.EventNotificationDto();
        data.Value = { x: this.digX, y: this.digY };
        data.Type = Enum.ListenViewEnum.BetPos;
        var event = new CustomEvent(this.listenEventKey, { detail: data });
        document.dispatchEvent(event);
    };
    BaseTreasurePanel.prototype.InitMineOdds = function (data) {
        for (var i in data) {
            this.mineOdds.push(data[i]);
        }
    };
    return BaseTreasurePanel;
}(ui.TreasurePanelUI));
//# sourceMappingURL=BaseTreasurePanel.js.map