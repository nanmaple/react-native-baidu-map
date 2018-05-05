namespace ScenePanel {
    export class PromptPanelHor extends PromptPanelBaseUI {
        constructor() {
            super(true);
            if (GameConfig.RatioType) {
                this.ui.prompt.scale(1, GameConfig.LengthShort);
            } else {
                this.ui.prompt.scale(GameConfig.ShortLength, 1);
            }
        }
    }
}