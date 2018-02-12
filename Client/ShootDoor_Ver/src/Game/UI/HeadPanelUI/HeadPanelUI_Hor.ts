namespace ScenePanel {
    export class HeadPanelHor extends HeadPanelBaseUI {
        constructor() {
            super(true);
            if (GameConfig.RatioType) {
                this.ui.headBg.scale(1, GameConfig.LengthShort);
            } else {
                this.ui.headBg.scale(GameConfig.ShortLength, 1);
            }
        }

    }
}