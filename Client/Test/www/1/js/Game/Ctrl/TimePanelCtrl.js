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
var TimePanelCtrl = /** @class */ (function (_super) {
    __extends(TimePanelCtrl, _super);
    function TimePanelCtrl() {
        return _super.call(this) || this;
    }
    /**
     * 开始游戏时间
     * @param time 当局游戏时间
     */
    TimePanelCtrl.prototype.StartGameTime = function (time) {
        ScenePanel.GameUI.GetInstance().GetTimePanel().StartGameTime(time);
    };
    /**
     * 游戏时间结束
     */
    TimePanelCtrl.prototype.EndGameTime = function () {
        ScenePanel.GameUI.GetInstance().GetTimePanel().EndGameTime();
    };
    /**
     * 隐藏游戏时间
     */
    TimePanelCtrl.prototype.HideGameTime = function () {
        ScenePanel.GameUI.GetInstance().GetTimePanel().HideGameTime();
    };
    return TimePanelCtrl;
}(Laya.Sprite));
