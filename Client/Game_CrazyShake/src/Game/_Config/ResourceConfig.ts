/// <reference path="./GameConfig.ts" />
namespace GameResourceConfig {
    export const Domain: string = GameConfig.Domain;
    export const LoadResourcesConfig: Array<any> = [
        { url: "res/atlas/ui.atlas", type: Laya.Loader.ATLAS },
        { url: "ui/bg.jpg", type: Laya.Loader.IMAGE },
        { url: "ui/bg_alert.png", type: Laya.Loader.IMAGE },
        { url: "ui/bg_record.png", type: Laya.Loader.IMAGE },
        { url: "ui/maskBg.png", type: Laya.Loader.IMAGE },
        { url: "ui/tip.png", type: Laya.Loader.IMAGE },
        { url: "ui/prompt.png", type: Laya.Loader.IMAGE },
        { url: "ui/frame1.png", type: Laya.Loader.IMAGE },
        { url: "ui/frame2.png", type: Laya.Loader.IMAGE },
        { url: "ui/loadmain.jpg", type: Laya.Loader.IMAGE },
        { url: "ui/loadnotice.png", type: Laya.Loader.IMAGE },
        { url: "ui/progress_time.png", type: Laya.Loader.IMAGE },
        { url: "ui/progress_time$bar.png", type: Laya.Loader.IMAGE },
    ]
}