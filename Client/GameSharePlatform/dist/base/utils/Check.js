"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Check = /** @class */ (function () {
    function Check() {
    }
    Check.isArray = function (arg) {
        if (typeof arg === 'object') {
            return Object.prototype.toString.call(arg) === '[object Array]';
        }
        return false;
    };
    return Check;
}());
exports.Check = Check;
//# sourceMappingURL=Check.js.map