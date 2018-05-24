var Utils;
(function (Utils) {
    function NetworkCheck(callback) {
        window.addEventListener('online', function () {
            callback(true);
        });
        window.addEventListener('offline', function () {
            callback(false);
        });
    }
    Utils.NetworkCheck = NetworkCheck;
})(Utils || (Utils = {}));
//# sourceMappingURL=index.js.map