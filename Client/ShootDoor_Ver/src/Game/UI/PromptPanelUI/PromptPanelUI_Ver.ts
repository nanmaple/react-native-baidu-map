namespace ScenePanel {
    export class PromptPanelVer extends PromptPanelBaseUI {
        constructor() {
            super(false);
            if (GameConfig.RatioType) {
                this.ui.prompt.scale(GameConfig.LengthShort, 1);
            } else {
                this.ui.prompt.scale(1, GameConfig.ShortLength);
            }
        }
    }
}