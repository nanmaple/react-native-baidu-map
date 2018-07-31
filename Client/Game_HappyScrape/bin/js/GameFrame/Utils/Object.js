var Utils;
(function (Utils) {
    var ObjectEx = (function () {
        function ObjectEx() {
        }
        ObjectEx.assign = function () {
            var objs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                objs[_i] = arguments[_i];
            }
            var length = objs.length;
            var obj = objs[0];
            if (!obj) {
                return {};
            }
            for (var index = 1; index < length; index++) {
                var item = objs[index];
                if (!item) {
                    continue;
                }
                for (var key in item) {
                    if (item.hasOwnProperty(key)) {
                        obj[key] = item[key];
                    }
                }
            }
            return obj;
        };
        return ObjectEx;
    }());
    Utils.ObjectEx = ObjectEx;
})(Utils || (Utils = {}));
//# sourceMappingURL=Object.js.map