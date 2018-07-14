var Effect;
(function (Effect) {
    /**
     * 曲线特效
     */
    var CurvesEffect = /** @class */ (function () {
        function CurvesEffect() {
        }
        /**
         * 创建曲线
         * @param initPos 初始坐标
         * @param centPos 中点坐标
         * @param endPos 结束坐标
         */
        CurvesEffect.CreateLine = function (initPos, centPos, endPos) {
            if (this.line) {
                this.line.removeSelf();
            }
            this.line = new Laya.Sprite();
            this.line.zOrder = 2;
            this.line.graphics.drawCurves(0, 0, [
                initPos.X - 50, initPos.Y,
                centPos.X - 20, centPos.Y,
                endPos.X - 10, endPos.Y + 30,
                endPos.X - 30, endPos.Y + 30,
                endPos.X - 30, endPos.Y + 30,
                endPos.X, endPos.Y,
                endPos.X, endPos.Y,
                endPos.X + 30, endPos.Y + 30,
                endPos.X + 30, endPos.Y + 30,
                endPos.X + 10, endPos.Y + 30,
                endPos.X + 10, endPos.Y + 30,
                centPos.X + 20, centPos.Y,
                initPos.X + 50, initPos.Y,
            ], "#faff89", 5);
            Laya.stage.addChild(this.line);
        };
        /**
         * 显示曲线
         */
        CurvesEffect.Show = function () {
            if (this.line) {
                this.line.visible = true;
            }
        };
        /**
         * 隐藏曲线
         */
        CurvesEffect.Hide = function () {
            if (this.line) {
                this.line.visible = false;
            }
        };
        return CurvesEffect;
    }());
    Effect.CurvesEffect = CurvesEffect;
})(Effect || (Effect = {}));
//# sourceMappingURL=CurvesEffect.js.map