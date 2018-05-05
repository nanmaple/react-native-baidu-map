namespace ScenePanel {
    export class RulePanelVer extends RulePanelBaseUI {
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