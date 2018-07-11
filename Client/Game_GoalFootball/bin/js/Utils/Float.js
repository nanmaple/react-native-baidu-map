var Utils;
(function (Utils) {
    /**
     * float浮点数加减乘除法运算工具类
     */
    var Float = /** @class */ (function () {
        function Float() {
        }
        /**
         * 浮点数加法
         * @param a
         * @param b
         */
        Float.Add = function (a, b) {
            var c = void 0, d = void 0, e = void 0;
            try {
                c = a.toString().split('.')[1].length;
            }
            catch (f) {
                c = 0;
            }
            try {
                d = b.toString().split('.')[1].length;
            }
            catch (f) {
                d = 0;
            }
            return e = Math.pow(10, Math.max(c, d)), (this.Mul(a, e) + this.Mul(b, e)) / e;
        };
        /**
         * 浮点数减法
         * @param a
         * @param b
         */
        Float.Sub = function (a, b) {
            var c = void 0, d = void 0, e = void 0;
            try {
                c = a.toString().split('.')[1].length;
            }
            catch (f) {
                c = 0;
            }
            try {
                d = b.toString().split('.')[1].length;
            }
            catch (f) {
                d = 0;
            }
            return e = Math.pow(10, Math.max(c, d)), (this.Mul(a, e) - this.Mul(b, e)) / e;
        };
        /**
         * 浮点数乘法
         * @param a
         * @param b
         */
        Float.Mul = function (a, b) {
            var c = 0;
            var d = a.toString();
            var e = b.toString();
            try {
                c += d.split('.')[1].length;
            }
            catch (f) { }
            try {
                c += e.split('.')[1].length;
            }
            catch (f) { }
            return Number(d.replace('.', '')) * Number(e.replace('.', '')) / Math.pow(10, c);
        };
        /**
         * 浮点数除法
         * @param a
         * @param b
         */
        Float.Div = function (a, b) {
            var c = void 0, d = void 0, e = 0, f = 0;
            try {
                e = a.toString().split('.')[1].length;
            }
            catch (g) { }
            try {
                f = b.toString().split('.')[1].length;
            }
            catch (g) { }
            return c = Number(a.toString().replace('.', '')), d = Number(b.toString().replace('.', '')), this.Mul(c / d, Math.pow(10, f - e));
        };
        return Float;
    }());
    Utils.Float = Float;
})(Utils || (Utils = {}));
//# sourceMappingURL=Float.js.map