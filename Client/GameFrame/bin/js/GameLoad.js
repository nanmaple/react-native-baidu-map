var GameLoad = (function () {
    function GameLoad(isLoadSuccess) {
        this.isLoadSuccess = isLoadSuccess;
        this.OnLoad();
    }
    GameLoad.prototype.OnLoad = function () {
        var _this = this;
        Laya.timer.once(1000, this, function () {
            _this.isLoadSuccess.run();
        });
    };
    return GameLoad;
}());
//# sourceMappingURL=GameLoad.js.map