namespace ScenePanel {
    export class RulePanelHor extends RulePanelBaseUI {
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