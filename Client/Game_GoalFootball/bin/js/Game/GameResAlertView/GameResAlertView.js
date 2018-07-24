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
* View类
* 功能：基础的View组件内部的逻辑，控制数据渲染逻辑和处理点击等事件，调用对应Base类功能方法和动画，事件通知上层或者ViewGameLogic
*
*/
var GameResAlertView = /** @class */ (function (_super) {
    __extends(GameResAlertView, _super);
    function GameResAlertView(eventKey) {
        var _this = _super.call(this) || this;
        _this.listenEventKey = "";
        _this.listenEventKey = eventKey;
        return _this;
    }
    /**
     * 类型：公有方法
     * 刷新方法，根据将组件内部的数据，处理逻辑后，将数据渲染到界面
     * 一般用于，当数据改变后，渲染需要延迟进行的情况
     */
    GameResAlertView.prototype.Refresh = function () {
        this.Show();
    };
    /**
     * 接收上层View或者GameViewLogic的数据,根据数据，进行不同的渲染
     * @param data
     */
    GameResAlertView.prototype.Set = function (data, type) {
        switch (type) {
            case Enum.GameCommand.MsgGameSettleResult:
                this.GameResult(data);
                break;
            default:
                break;
        }
    };
    /**
     * 投注结果
     * @param data
     */
    GameResAlertView.prototype.GameResult = function (data) {
        this.isShow = true;
        if (data.WinAmount == 0) {
            this.resultSound = "sound/miss.mp3";
            this.ui.prompt.skin = this.failTipSkin;
            this.ui.result.visible = false;
        }
        else {
            this.resultSound = "sound/goal.mp3";
            this.ui.prompt.skin = this.sucTipSkin;
            this.ui.result.visible = true;
            this.ui.result.text = "x" + data.Odds + "  +" + data.WinAmount;
        }
    };
    /**
     * 显示提示框
     */
    GameResAlertView.prototype.Show = function () {
        Utils.BackgroundMusic.PlaySounds(this.resultSound);
        this.ui.visible = this.isShow;
        this.ui.prompt.scale(0, 0);
        Effect.AlertEffect.Show(this.ui.prompt, null);
        Laya.timer.once(2000, this, this.Hide);
    };
    /**
     * 类型：私有方法
     * 通过事件，向上通知
     * 事件key值，通过构造函数时注入
     */
    GameResAlertView.prototype.EventNotification = function () {
    };
    return GameResAlertView;
}(BaseGameResAlertView));
//# sourceMappingURL=GameResAlertView.js.map