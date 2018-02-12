var Utils;
(function (Utils) {
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
    Utils.Check = Check;
})(Utils || (Utils = {}));
