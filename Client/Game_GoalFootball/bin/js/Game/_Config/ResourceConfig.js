/// <reference path="./GameConfig.ts" />
var GameResourceConfig;
(function (GameResourceConfig) {
    GameResourceConfig.Domain = GameConfig.Domain;
    GameResourceConfig.LoadResourcesConfig = [
        { url: "res/atlas/ui.atlas", type: Laya.Loader.ATLAS },
        { url: "res/atlas/ui/defender.atlas", type: Laya.Loader.ATLAS },
        { url: "res/atlas/ui/goalkeeper.atlas", type: Laya.Loader.ATLAS },
        { url: "res/atlas/ui/player.atlas", type: Laya.Loader.ATLAS },
        { url: "res/atlas/ui/chip.atlas", type: Laya.Loader.ATLAS },
        { url: "res/atlas/ui/prop.atlas", type: Laya.Loader.ATLAS },
        { url: "res/atlas/ui/header.atlas", type: Laya.Loader.ATLAS },
        { url: "res/atlas/ui/rule.atlas", type: Laya.Loader.ATLAS },
        { url: "ui/bg.jpg", type: Laya.Loader.IMAGE },
        { url: "ui/maskBg.png", type: Laya.Loader.IMAGE },
        { url: "ui/alert.png", type: Laya.Loader.IMAGE },
        { url: "ui/header/head_bg.png", type: Laya.Loader.IMAGE },
        { url: "ui/rule/rule_bg.png", type: Laya.Loader.IMAGE },
    ];
    GameResourceConfig.LoadResSoundConfig = [
        { url: "sound/bgsound.mp3", type: Laya.Loader.SOUND },
        { url: "sound/bomb.mp3", type: Laya.Loader.SOUND },
        { url: "sound/bottles.mp3", type: Laya.Loader.SOUND },
        { url: "sound/bra.mp3", type: Laya.Loader.SOUND },
        { url: "sound/btn.mp3", type: Laya.Loader.SOUND },
        { url: "sound/explode.mp3", type: Laya.Loader.SOUND },
        { url: "sound/goal.mp3", type: Laya.Loader.SOUND },
        { url: "sound/miss.mp3", type: Laya.Loader.SOUND },
        { url: "sound/play.mp3", type: Laya.Loader.SOUND },
        { url: "sound/pound.mp3", type: Laya.Loader.SOUND },
        { url: "sound/seduce.mp3", type: Laya.Loader.SOUND },
    ];
})(GameResourceConfig || (GameResourceConfig = {}));
//# sourceMappingURL=ResourceConfig.js.map