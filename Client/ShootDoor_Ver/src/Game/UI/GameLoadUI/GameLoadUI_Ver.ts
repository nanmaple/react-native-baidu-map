namespace ScenePanel {
    export class GameLoadScenes_Ver extends GameLoadBaseUI {
        constructor() {
            super(false);
            if (GameConfig.RatioType) {
                this.ui.progressLabel.scale(GameConfig.LengthShort, 1);
            } else {
                this.ui.progressLabel.scale(1, GameConfig.ShortLength);
            }
        }
    }
}