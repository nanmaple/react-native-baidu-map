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
    }
}