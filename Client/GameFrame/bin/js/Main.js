/// <reference path="./Game/GameMain.ts"/>
/// <reference path="./Login.ts"/>
// 程序入口
var Main = /** @class */ (function () {
    function Main() {
        this.initState = new InitState();
        if (GameConfig.IsDebug) {
            new LoginView(Laya.Handler.create(this, function () {
                new GameMain();
            }));
        }
        else {
            new GameMain();
        }
    }
    return Main;
}());
new Main();
//# sourceMappingURL=Main.js.map