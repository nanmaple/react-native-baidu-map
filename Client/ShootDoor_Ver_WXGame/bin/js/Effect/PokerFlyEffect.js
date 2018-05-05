var PokerFlyEffect = /** @class */ (function () {
    function PokerFlyEffect() {
        this.flyPoker = new Array();
        for (var i = 0; i < 3; i++) {
            var newflyPoker = Laya.Pool.getItemByClass("flyPoker", Laya.Image);
            newflyPoker.visible = false;
            newflyPoker.zOrder = 7;
            newflyPoker.anchorX = 0.5;
            newflyPoker.anchorY = 0.5;
            this.flyPoker.push(newflyPoker);
            Laya.stage.addChild(newflyPoker);
        }
    }
    PokerFlyEffect.prototype.RecoveryPoker = function () {
        for (var i = 0; i < 3; i++) {
            Laya.Pool.recover("flyPoker", this.flyPoker[i]);
        }
    };
    PokerFlyEffect.prototype.FlyPoker = function (dto, flyPoker, endFlyPoker) {
        var _this = this;
        var i = 0;
        for (var key in dto) {
            if (dto.hasOwnProperty(key)) {
                this.flyPoker[i].skin = "ui/poker/" + dto[key] + ".png";
                this.flyPoker[i].visible = true;
                this.flyPoker[i].x = flyPoker[i].x;
                this.flyPoker[i].y = flyPoker[i].y;
                this.flyPoker[i].width = flyPoker[i].width;
                this.flyPoker[i].height = flyPoker[i].height;
                this.flyPoker[i].scale(1, 1);
                Laya.Tween.to(this.flyPoker[i], { x: endFlyPoker[i].x, y: endFlyPoker[i].y, width: endFlyPoker[i].width, height: endFlyPoker[i].height }, 2000, Laya.Ease.sineInOut, Laya.Handler.create(this, function (index) {
                    _this.flyPoker[index].visible = false;
                }, [i]));
                i++;
            }
        }
    };
    PokerFlyEffect.prototype.ClearFlyPoker = function () {
        for (var i = 0; i < 3; i++) {
            Laya.Tween.clearAll(this.flyPoker[i]);
            this.flyPoker[i].visible = false;
        }
    };
    return PokerFlyEffect;
}());
