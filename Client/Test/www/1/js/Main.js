// 程序入口
var GameMain = /** @class */ (function () {
    function GameMain() {
        // 初始化舞台,配置信息
        var init = new InitState();
        // 加载游戏的资源
        var gameLoadCtrl = new ScenePanel.GameLoadCtrl(Laya.Handler.create(this, this.onGameLoadSuccess));
    }
    /**
     * GameLoadCtrl界面功能完成回调
     */
    GameMain.prototype.onGameLoadSuccess = function () {
        this.GameCtrl = new GameCtrl(Laya.Handler.create(this, this.onGameLoadSuccess));
    };
    return GameMain;
}());
var gameMain = new GameMain();
