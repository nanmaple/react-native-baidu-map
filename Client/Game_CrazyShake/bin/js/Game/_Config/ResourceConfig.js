/// <reference path="./GameConfig.ts" />
var GameResourceConfig;
(function (GameResourceConfig) {
    GameResourceConfig.Domain = GameConfig.Domain;
    GameResourceConfig.LoadResourcesConfig = [
        { url: "res/atlas/ui.atlas", type: Laya.Loader.ATLAS },
        { url: "ui/bg.png", type: Laya.Loader.IMAGE },
        { url: "ui/bg_alert.png", type: Laya.Loader.IMAGE },
        { url: "ui/bg_record.png", type: Laya.Loader.IMAGE },
        { url: "ui/maskBg.png", type: Laya.Loader.IMAGE },
        { url: "ui/tip.png", type: Laya.Loader.IMAGE },
        { url: "ui/prompt.png", type: Laya.Loader.IMAGE },
        { url: "ui/rule.png", type: Laya.Loader.IMAGE },
        { url: "ui/ruleBg.png", type: Laya.Loader.IMAGE },
        { url: "ui/win.png", type: Laya.Loader.IMAGE },
        //声音文件
        { url: "sound/betSound.mp3", type: Laya.Loader.SOUND },
        { url: "sound/btnSound.mp3", type: Laya.Loader.SOUND },
        { url: "sound/rockDiceSound.mp3", type: Laya.Loader.SOUND },
        { url: "sound/duangSound.mp3", type: Laya.Loader.SOUND },
        { url: "sound/failSound.wav", type: Laya.Loader.SOUND },
        { url: "sound/upCoverSound.mp3", type: Laya.Loader.SOUND },
        { url: "sound/winSound.mp3", type: Laya.Loader.SOUND },
        { url: "sound/bgSound.mp3", type: Laya.Loader.SOUND },
    ];
})(GameResourceConfig || (GameResourceConfig = {}));
//# sourceMappingURL=ResourceConfig.js.map