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
})(GameResourceConfig || (GameResourceConfig = {}));
//# sourceMappingURL=ResourceConfig.js.map