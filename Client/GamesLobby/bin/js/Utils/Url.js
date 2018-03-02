var Utils;
(function (Utils) {
    var Url = (function () {
        function Url() {
        }
        Url.GetQuery = function (name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            var r = Laya.Browser.window.location.search.substr(1).match(reg);
            if (r != null)
                return Laya.Browser.window.unescape(r[2]);
            return null;
        };
        return Url;
    }());
    Utils.Url = Url;
})(Utils || (Utils = {}));
