namespace ScenePanel {
    export class TimePanelHor extends TimePanelBaseUI {
        constructor() {
            super(true);
            if (GameConfig.RatioType) {
                this.ui.scale(1, GameConfig.LengthShort);
            } else {
                this.ui.scale(GameConfig.ShortLength, 1);
            }
        }
    }
}