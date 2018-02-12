namespace ScenePanel {
    export class RoundPanelVer extends RoundPanelBaseUI {
        constructor() {
            super(false);
            if (GameConfig.RatioType) {
                this.ui.left = 375 * (1 - GameConfig.LengthShort);
                this.ui.round.scale(GameConfig.LengthShort, 1);
            } else {
                this.ui.round.scale(1, GameConfig.ShortLength);
            }
        }
    }
}