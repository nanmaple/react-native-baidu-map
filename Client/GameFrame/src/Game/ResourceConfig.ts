namespace GameResourceConfig {
    export const Domain: string = "http://m.17guess.cn/1/";
    export const LoadResourcesConfig: Array<any> = [
        { url: "res/atlas/ui.atlas", type: Laya.Loader.ATLAS },
        { url: "ui/gameBg_v.png", type: Laya.Loader.IMAGE },
        { url: "ui/gameBg.png", type: Laya.Loader.IMAGE },
        { url: "ui/maskBg.png", type: Laya.Loader.IMAGE },
        { url: "ui/prompt.png", type: Laya.Loader.IMAGE },
    ]
}