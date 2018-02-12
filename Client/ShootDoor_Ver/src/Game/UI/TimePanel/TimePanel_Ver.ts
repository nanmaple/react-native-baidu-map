namespace ScenePanel {
    export class TimePanelVer extends TimePanelBaseUI {
        constructor() {
            super(false);
            if (GameConfig.RatioType) {
                this.ui.scale(GameConfig.LengthShort, 1);
            } else {
                this.ui.scale(1, GameConfig.ShortLength);
            }
        }
    }
}