"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * float浮点数加减乘除法运算工具类
 */
class Float {
    /**
     * 浮点数加法
     * @param a
     * @param b
     */
    static Add(a, b) {
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
    }
    /**
     * 浮点数减法
     * @param a
     * @param b
     */
    static Sub(a, b) {
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
    }
    /**
     * 浮点数乘法
     * @param a
     * @param b
     */
    static Mul(a, b) {
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
    }
    /**
     * 浮点数除法
     * @param a
     * @param b
     */
    static Div(a, b) {
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
    }
}
exports.Float = Float;
//# sourceMappingURL=Float.js.map