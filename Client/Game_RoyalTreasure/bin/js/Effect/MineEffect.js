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
var MineEffect = /** @class */ (function (_super) {
    __extends(MineEffect, _super);
    function MineEffect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.listenEventKey = "";
        return _this;
    }
    MineEffect.prototype.Start = function (data) {
        var _this = this;
        this.mineScore.text = "+" + this.Price.toString();
        this.mine.skin = this.ShowSkin;
        this.pos(this.Pos1[0], this.Pos1[1]);
        this.zOrder = 100;
        Laya.stage.addChild(this);
        // Laya.Tween.to(this, { y: this.Pos1[1] + 20 }, 300, Laya.Ease.quartOut, Laya.Handler.create(this, () => {
        //     Laya.Tween.to(this, { x: this.Pos2[0], y: this.Pos2[1] }, 500, Laya.Ease.backInOut, Laya.Handler.create(this, () => {
        //         Laya.Tween.to(this, { x: this.Pos3[0], y: this.Pos3[1] }, 1000, Laya.Ease.circIn, Laya.Handler.create(
        //             this, this.End
        //         ))
        //     }))
        // }))
        Laya.Tween.to(this, { x: this.Pos2[0], y: this.Pos2[1] }, 800, Laya.Ease.expoOut, Laya.Handler.create(this, function () {
            Laya.Tween.to(_this, { x: _this.Pos3[0], y: _this.Pos3[1] }, 800, Laya.Ease.circIn, Laya.Handler.create(_this, function () {
                if (data)
                    _this.Fly();
                else
                    _this.End();
            }));
        }));
    };
    MineEffect.prototype.End = function () {
        Laya.stage.removeChild(this);
        Laya.Pool.recover(this.PoolKey, this);
    };
    MineEffect.prototype.Fly = function () {
        var _this = this;
        this.mine.visible = false;
        this.mineScore.fontSize = 30;
        this.mineScore.text = "+" + this.ShowAll.toString();
        Laya.Tween.to(this, { y: this.Pos3[1] - 100 }, 1300, Laya.Ease.circOut, Laya.Handler.create(this, function () {
            _this.mine.visible = true;
            _this.mineScore.fontSize = 24;
            _this.End();
            _this.EventNotification();
        }));
    };
    MineEffect.prototype.EventNotification = function () {
        var data = new Dto.EventNotificationDto();
        data.Value = {};
        data.Type = Enum.ListenViewEnum.NextTime;
        var event = new CustomEvent(this.listenEventKey, { detail: data });
        document.dispatchEvent(event);
    };
    return MineEffect;
}(ui.MineEffectUI));
//# sourceMappingURL=MineEffect.js.map