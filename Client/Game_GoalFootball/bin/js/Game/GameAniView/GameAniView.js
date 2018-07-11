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
var GameAniView = /** @class */ (function (_super) {
    __extends(GameAniView, _super);
    function GameAniView(eventKey) {
        var _this = _super.call(this) || this;
        _this.listenEventKey = eventKey;
        return _this;
    }
    /**
     * 类型：公有方法
     * 刷新方法，根据将组件内部的数据，处理逻辑后，将数据渲染到界面
     * 一般用于，当数据改变后，渲染需要延迟进行的情况
     */
    GameAniView.prototype.Refresh = function () {
    };
    /**
     * 接收上层View或者GameViewLogic的数据,根据数据，进行不同的渲染
     * @param data
     */
    GameAniView.prototype.Set = function (data) {
        switch (data.Type) {
            case Enum.GameCommand.MSG_GAME_INIT:
                this.GameInit(data.Data);
                break;
            case Enum.GameCommand.MSG_GAME_SETTLERESULT:
                this.GameResult(data.Data);
                break;
            default:
                break;
        }
    };
    /**
     * 开始射球
     * @param odds 返回赔率
     */
    GameAniView.prototype.ShootDoor = function (odds) {
        var _this = this;
        this.IsSucDefense();
        this.isGoal = odds == 0 ? false : true;
        this.ui.player.play(0, false, "play");
        Effect.CurvesEffect.Hide();
        this.ui.player.on(Laya.Event.LABEL, this, function (data) {
            // 在标签start后开始执行
            if (data == "start") {
                _this.DefenderStartJump();
                _this.ui.football.play(0, false);
                Laya.timer.frameLoop(1, _this, _this.StartCurvesMove, [0.002, _this.ui.football, _this.initPos, _this.centPos, _this.endPos,
                    Laya.Handler.create(_this, _this.EndCurvesMove, null, false)]); //主控制  0.001自己调整(运动快慢)
                console.log("goal:" + _this.isGoal, "defense:" + _this.isDefense);
            }
        });
    };
    /**
     * 游戏初始化
     * @param data
     */
    GameAniView.prototype.GameInit = function (data) {
        this.SetPropAmount(data.BaseAmounts[0]);
    };
    /**
     * 投注结果
     * @param data
     */
    GameAniView.prototype.GameResult = function (data) {
        if (data.Status == Enum.BetResultEnum.Success) {
            this.ShootDoor(data.Odds);
        }
        else {
            this.Reset();
        }
    };
    /**
     * 通过事件，向上通知
     * 事件key值，通过构造函数时注入
     */
    GameAniView.prototype.EventNotification = function (type, value) {
        var data = new Dto.EventNotificationDto();
        data.Value = value;
        data.Type = type;
        var event = new CustomEvent(this.listenEventKey, { detail: data });
        document.dispatchEvent(event);
    };
    return GameAniView;
}(BaseGameAniView));
//# sourceMappingURL=GameAniView.js.map