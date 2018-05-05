namespace ScenePanel {
    export abstract class GameLoadBaseUI {
        protected ui: ui.GameLoadUI | ui.GameLoad_VerUI;
        protected uiData: GameLoadUIData;
        /**
         * 构造函数
         * @param isHor 是否横版
         */
        constructor(isHor?: boolean) {
            if (isHor) {
                this.ui = new ui.GameLoadUI();
            } else {
                this.ui = new ui.GameLoad_VerUI();
            }
            this.ui.cacheAs = "bitmap";
            this.uiData = GameLoadUIData.GetInstance();
            this.ui.progressLabel.text = this.uiData.progress;
        }

        public GetUI(): ui.GameLoadUI | ui.GameLoad_VerUI {
            return this.ui;
        }

        //处理进度条
        public LoadProgress(progress: number): void {
            this.uiData.progress = Math.round(progress * 100) + "%";
            this.ui.progressLabel.text = this.uiData.progress;
        }

        public LoadError(error: string): void {
            Laya.Browser.window.alert("用户登录错误");
        }
    }
}