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
            Utils.BackgroundMusic.PlaySounds(this.propSoundArr[index]);
            Laya.Tween.to(prop, { x: endPos.x, y: endPos.y, rotation: 360 }, 1000, Laya.Ease.quadInOut, Laya.Handler.create(this, function () {
                prop.play(0, false, _this.playAniArr[index]);
                prop.on(Laya.Event.COMPLETE, _this, function () {
                    Laya.stage.removeChild(prop);
                    hander.runWith(index);
                });
            }, null, false));
        };
        /**
         * 默认动画
         */
        PropChooseEffect.autoAniArr = ["bomb_wait", "beer_wait", "bikini_wait"];
        /**
         * 播放动画
         */
        PropChooseEffect.playAniArr = ["blast", "dizzy", "confuse"];
        /**
         * 道具使用音效
         */
        PropChooseEffect.propSoundArr = ["sound/explode.mp3", "sound/pound.mp3", "sound/seduce.mp3"];
        return PropChooseEffect;
    }());
    Effect.PropChooseEffect = PropChooseEffect;
})(Effect || (Effect = {}));
//# sourceMappingURL=PropChooseEffect.js.map