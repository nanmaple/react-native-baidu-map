
/// <reference path="GameFrame/GameMain.ts"/>
// 程序入口
class Main {
    constructor() {
        Laya.init(600, 400);
        new GameMain();
    }
}
new Main();