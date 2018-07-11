var Effect;
(function (Effect) {
    /**
     * 道具特效
     */
    var PropChooseEffect = /** @class */ (function () {
        function PropChooseEffect() {
        }
        /**
         * 选择道具
         * @param index
         * @param endPos
         * @param hander
         */
        PropChooseEffect.ChooseProp = function (index, endPos, hander) {
            var _this = this;
            var prop = new Laya.Animation();
            prop.zOrder = 2;
            prop.loadAnimation("PropAni.ani");
            Laya.stage.addChild(prop);
            prop.autoAnimation = this.autoAniArr[index];
            Laya.Tween.to(prop, { x: endPos.x, y: endPos.y, rotation: 360 }, 1000, Laya.Ease.quadInOut, Laya.Handler.create(this, function () {
                prop.play(0, false, _this.playAniArr[index]);
                prop.on(Laya.Event.COMPLETE, _this, function () {
                    Laya.stage.removeChild(prop);
                    hander.runWith(index);
                });
            }, null, false));
        };
        PropChooseEffect.autoAniArr = ["bomb_wait", "beer_wait", "bikini_wait"];
        PropChooseEffect.playAniArr = ["blast", "dizzy", "confuse"];
        return PropChooseEffect;
    }());
    Effect.PropChooseEffect = PropChooseEffect;
})(Effect || (Effect = {}));
//# sourceMappingURL=PropChooseEffect.js.map