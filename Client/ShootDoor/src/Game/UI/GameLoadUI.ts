namespace ScenePanel {
    export class GameLoadScenes extends ui.GameLoadUI {
        private startGame: Laya.Handler;  //开始游戏回调
        constructor() {
            super();
            this.cacheAs = "bitmap";

        }

        //处理进度条
        public LoadProgress(progress: number): void {
            this.progressLabel.text = Math.round(progress * 100) + "%";
        }

        public LoadError(error: string): void {
            Laya.Browser.window.alert("用户登录错误");
            // Laya.Browser.window.location.href = GameConfig.GetDomainUrl(Utils.Url.GetQuery("parentid"));
        }
    }
}