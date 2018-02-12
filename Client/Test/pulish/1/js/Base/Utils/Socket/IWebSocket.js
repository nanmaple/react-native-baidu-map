var Utils;
(function (Utils) {
    var Socket;
    (function (Socket) {
        /**
         * Socket初始化参数
         */
        var WebSocketParam = (function () {
            function WebSocketParam(resetConnect) {
                if (resetConnect === void 0) { resetConnect = true; }
                this.ResetConnect = resetConnect;
            }
            return WebSocketParam;
        }());
        Socket.WebSocketParam = WebSocketParam;
    })(Socket = Utils.Socket || (Utils.Socket = {}));
})(Utils || (Utils = {}));
