/// <reference path="./Game/MainGameLogic.ts"/>
/// <reference path="./Login.ts"/>
// 程序入口
var Main = /** @class */ (function () {
    function Main() {
        this.initState = new InitState();
        if (GameConfig.IsDebug) {
            new LoginView(Laya.Handler.create(this, function () {
                new MainGameLogic();
            }));
        }
        else {
            new MainGameLogic();
        }
    }
    return Main;
}());
new Main();
//# sourceMappingURL=Main.js.map