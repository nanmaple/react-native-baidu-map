namespace ScenePanel {
    export class TipsPanelHor extends TipsPanelBaseUI {
        constructor() {
            super(true);
            if (GameConfig.RatioType) {
                this.ui.tipmsg.scale(1, GameConfig.LengthShort);
            } else {
                this.ui.tipmsg.scale(GameConfig.ShortLength, 1);
            }
        }
    }
}