/**
 * 工具类-横竖版监听
 */
var Utils;
(function (Utils) {
    var Version = /** @class */ (function () {
        function Version() {
        }
        /**
         * 横竖版切换
         * @param hander 回调（0：竖版 1：横版）
         */
        Version.HverticalSwitch = function (hander) {
            var evt = "onorientationchange" in window ? "orientationchange" : "resize";
            //事件监听
            Laya.Browser.window.addEventListener(evt, function () {
                //判断android或者ios
                if (window.orientation == 0 || window.orientation == 180) {
                    Laya.Browser.onAndriod ? hander.runWith(0) : hander.runWith(1);
                }
                else if (window.orientation == 90 || window.orientation == -90) {
                    Laya.Browser.onAndriod ? hander.runWith(1) : hander.runWith(0);
                }
            }, false);
        };
        return Version;
    }());
    Utils.Version = Version;
})(Utils || (Utils = {}));
//# sourceMappingURL=Version.js.map