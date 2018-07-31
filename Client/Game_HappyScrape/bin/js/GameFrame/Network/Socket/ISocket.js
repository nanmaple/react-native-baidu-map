var Network;
(function (Network) {
    /**
     * Socket初始化参数
     */
    var SocketParam = (function () {
        function SocketParam(resetConnect) {
            if (resetConnect === void 0) { resetConnect = true; }
            this.ResetConnect = resetConnect;
        }
        return SocketParam;
    }());
    Network.SocketParam = SocketParam;
})(Network || (Network = {}));
//# sourceMappingURL=ISocket.js.map