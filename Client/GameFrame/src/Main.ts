
/// <reference path="./Game/GameMain.ts"/>
/// <reference path="./Login.ts"/>
// 程序入口
class Main {
    private initState: InitState;
    constructor() {
        this.initState = new InitState();
        if (GameConfig.IsDebug) {
            new LoginView(Laya.Handler.create(this,()=>{
                new GameMain();
            }));
        } else {
            new GameMain();
        }
    }
}
new Main();