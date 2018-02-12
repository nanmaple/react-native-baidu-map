namespace ScenePanel {
    export class HeadPanelVer extends HeadPanelBaseUI {
        constructor() {
            super(false);
            if (GameConfig.RatioType) {
                this.ui.btnGR.right = 375 * (1 - GameConfig.LengthShort) + 90 * GameConfig.LengthShort;
                this.ui.btnRule.right = 375 * (1 - GameConfig.LengthShort);
                this.ui.headBg.scale(GameConfig.LengthShort, 1);
                this.ui.btnGR.scale(GameConfig.LengthShort, 1);
                this.ui.btnRule.scale(GameConfig.LengthShort, 1);
            } else {
                this.ui.headBg.scale(1, GameConfig.ShortLength);
                this.ui.btnGR.scale(1, GameConfig.ShortLength);
                this.ui.btnRule.scale(1, GameConfig.ShortLength);
            }
        }
    }
}