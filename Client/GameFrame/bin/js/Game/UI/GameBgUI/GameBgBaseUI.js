var GameBgBaseUI = (function () {
    /**
     * 构造函数
     * @param isHor 是否横版
     */
    function GameBgBaseUI(isHor) {
        this.broadcast = new Dto.BroadcastDto();
        if (isHor) {
            this.ui = new ui.GameBgUI();
        }
        else {
            this.ui = new ui.GameBg_VerUI();
        }
        this.ui.zOrder = 1;
        this.ui.cacheAs = "bitmap";
        this.ui.close.on(Laya.Event.CLICK, this, this.Close);
    }
    GameBgBaseUI.prototype.Log = function () { };
    GameBgBaseUI.prototype.Set = function (data) { };
    GameBgBaseUI.prototype.Refresh = function () { };
    /**
     * 广播
     */
    GameBgBaseUI.prototype.Broadcast = function () {
        this.broadcast.Type = "OnClickBg";
        // let event = document.createEvent("HTMLEvents");
        // event.initEvent("GameUI",true,true);
        // event.Data = this.broadcast;
        // document.dispatchEvent(event);
        this.ui.event("GameUI", this.broadcast);
    };
    GameBgBaseUI.prototype.Close = function () {
        this.Broadcast();
    };
    /**
     * 获取UI
     */
    GameBgBaseUI.prototype.GetUI = function () {
        return this.ui;
    };
    return GameBgBaseUI;
}());
//# sourceMappingURL=GameBgBaseUI.js.map