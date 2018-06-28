var Utils;
(function (Utils) {
    function GetQuery(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = Laya.Browser.window.location.search.substr(1).match(reg);
        if (r != null)
            return Laya.Browser.window.unescape(r[2]);
        return null;
    }
    Utils.GetQuery = GetQuery;
})(Utils || (Utils = {}));
//# sourceMappingURL=Url.js.map