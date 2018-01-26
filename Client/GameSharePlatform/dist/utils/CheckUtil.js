"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CheckUtil {
    static isArray(arg) {
        if (typeof arg === 'object') {
            return Object.prototype.toString.call(arg) === '[object Array]';
        }
        return false;
    }
}
exports.CheckUtil = CheckUtil;
//# sourceMappingURL=CheckUtil.js.map