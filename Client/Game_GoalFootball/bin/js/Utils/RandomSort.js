var Utils;
(function (Utils) {
    var RandomSort = /** @class */ (function () {
        function RandomSort() {
        }
        /**
        * 随机排序
        */
        RandomSort.GetRandData = function (data) {
            var randData = data;
            var t;
            var num = randData.length;
            for (var i = 0; i < num; i++) {
                var rand = Math.floor(Math.random() * (num--));
                t = randData[rand];
                randData[rand] = randData[i];
                randData[i] = t;
            }
            return randData;
        };
        return RandomSort;
    }());
    Utils.RandomSort = RandomSort;
})(Utils || (Utils = {}));
//# sourceMappingURL=RandomSort.js.map