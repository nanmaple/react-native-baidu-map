/**
 * 资源加载配置
 * 根据项目，将需要的资源加载到配置数组中
 */
/// <reference path="./GameConfig.ts" />
var GameResourceConfig;
(function (GameResourceConfig) {
    GameResourceConfig.Domain = GameConfig.Domain;
    GameResourceConfig.LoadResourcesConfig = [
        { url: "res/atlas/ui.atlas", type: Laya.Loader.ATLAS },
        { url: "res/atlas/comp.atlas", type: Laya.Loader.ATLAS },
        { url: "res/atlas/ui/header.atlas", type: Laya.Loader.ATLAS },
        { url: "res/atlas/ui/mahjong.atlas", type: Laya.Loader.ATLAS },
        { url: "res/atlas/ui/scrape.atlas", type: Laya.Loader.ATLAS },
        { url: "res/atlas/ui/header.atlas", type: Laya.Loader.ATLAS },
        { url: "res/atlas/ui/rule.atlas", type: Laya.Loader.ATLAS },
        { url: "res/atlas/ui/betPos.atlas", type: Laya.Loader.ATLAS },
        { url: "ui/alert.png", type: Laya.Loader.IMAGE },
        { url: "ui/record.png", type: Laya.Loader.IMAGE },
        { url: "ui/maskBg.png", type: Laya.Loader.IMAGE },
        { url: "ui/bg/gameBg1.jpg", type: Laya.Loader.IMAGE },
        { url: "ui/bg/greenBg.jpg", type: Laya.Loader.IMAGE },
        { url: "ui/bg/topBg.png", type: Laya.Loader.IMAGE },
        { url: "ui/scrape/game1_mask.png", type: Laya.Loader.IMAGE },
        { url: "ui/header/headBg.png", type: Laya.Loader.IMAGE },
    ];
    GameResourceConfig.LoadResSoundConfig = [
        { url: "sound/bg.mp3", type: Laya.Loader.SOUND },
        { url: "sound/btn.mp3", type: Laya.Loader.SOUND },
        { url: "sound/large.mp3", type: Laya.Loader.SOUND },
        { url: "sound/lose.mp3", type: Laya.Loader.SOUND },
        { url: "sound/low.mp3", type: Laya.Loader.SOUND },
        { url: "sound/scratch.mp3", type: Laya.Loader.SOUND },
    ];
})(GameResourceConfig || (GameResourceConfig = {}));
//# sourceMappingURL=ResourceConfig.js.map