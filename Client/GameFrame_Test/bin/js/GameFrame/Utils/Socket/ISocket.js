var Utils;
(function (Utils) {
    /**
     * Socket初始化参数
     */
    var SocketParam = /** @class */ (function () {
        function SocketParam(resetConnect) {
            if (resetConnect === void 0) { resetConnect = true; }
            this.ResetConnect = resetConnect;
        }
        return SocketParam;
    }());
    Utils.SocketParam = SocketParam;
})(Utils || (Utils = {}));
//# sourceMappingURL=ISocket.js.map