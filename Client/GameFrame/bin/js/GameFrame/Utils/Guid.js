var Utils;
(function (Utils) {
    var Guid;
    (function (Guid) {
        function Create() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        }
        Guid.Create = Create;
    })(Guid = Utils.Guid || (Utils.Guid = {}));
})(Utils || (Utils = {}));
//# sourceMappingURL=Guid.js.map