/// <reference path="./Game/MainGameLogic.ts"/>
/// <reference path="./Login.ts"/>
// 程序入口
class Main {
    private initState: InitState;
    constructor() {
        this.initState = new InitState();
        if (GameConfig.IsDebug) {
            new LoginView(Laya.Handler.create(this,()=>{
                new MainGameLogic();
            }));
        } else {
            new MainGameLogic();
        }
    }
}
new Main();