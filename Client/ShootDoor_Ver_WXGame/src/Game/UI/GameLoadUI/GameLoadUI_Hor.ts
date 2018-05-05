namespace ScenePanel {
    export class GameLoadScenes extends GameLoadBaseUI {
        constructor() {
            super(true);
            if (GameConfig.RatioType) {
                this.ui.progressLabel.scale(1, GameConfig.LengthShort);
            } else {
                this.ui.progressLabel.scale(GameConfig.ShortLength, 1);
            }
        }
    }
}