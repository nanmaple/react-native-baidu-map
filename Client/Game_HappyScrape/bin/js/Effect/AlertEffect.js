var Effect;
(function (Effect) {
    /**
     * 弹出框特效
     */
    var AlertEffect = (function () {
        function AlertEffect() {
        }
        /**
         * 显示
         * @param sprite
         * @param hander
         */
        AlertEffect.Show = function (sprite, hander) {
            Laya.Tween.to(sprite, { scaleX: 1, scaleY: 1 }, 300, Laya.Ease.backOut, hander);
        };
        /**
         * 隐藏
         * @param sprite
         * @param hander
         */
        AlertEffect.Hide = function (sprite, hander) {
            Laya.Tween.to(sprite, { scaleX: 0, scaleY: 0 }, 300, Laya.Ease.backIn, hander);
        };
        return AlertEffect;
    }());
    Effect.AlertEffect = AlertEffect;
})(Effect || (Effect = {}));
//# sourceMappingURL=AlertEffect.js.map