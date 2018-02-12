namespace ScenePanel {
    export class TipsPanelVer extends TipsPanelBaseUI {
        constructor() {
            super(false);
            if (GameConfig.RatioType) {
                this.ui.tipmsg.scale(GameConfig.LengthShort, 1);
            } else {
                this.ui.tipmsg.scale(1, GameConfig.ShortLength);
            }
        }
    }
}