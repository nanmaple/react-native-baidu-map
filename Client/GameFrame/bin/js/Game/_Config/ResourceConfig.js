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
        { url: "ui/bg.png", type: Laya.Loader.IMAGE },
        { url: "ui/bg_alert.png", type: Laya.Loader.IMAGE },
        { url: "ui/bg_record.png", type: Laya.Loader.IMAGE },
        { url: "ui/maskBg.png", type: Laya.Loader.IMAGE },
        { url: "ui/tip.png", type: Laya.Loader.IMAGE },
        { url: "ui/prompt.png", type: Laya.Loader.IMAGE },
    ];
})(GameResourceConfig || (GameResourceConfig = {}));
//# sourceMappingURL=ResourceConfig.js.map