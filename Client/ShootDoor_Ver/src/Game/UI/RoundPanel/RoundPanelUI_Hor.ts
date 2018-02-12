namespace ScenePanel {
    export class RoundPanelHor extends RoundPanelBaseUI {
        constructor() {
            super(true);
            if (GameConfig.RatioType) {
                this.ui.round.scale(1, GameConfig.LengthShort);
            } else {
                this.ui.round.scale(GameConfig.ShortLength, 1);
            }
        }
    }
}