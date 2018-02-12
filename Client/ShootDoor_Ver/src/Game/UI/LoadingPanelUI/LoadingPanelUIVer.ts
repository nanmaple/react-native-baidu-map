namespace ScenePanel {
    export class LoadingPanelVer extends LoadingPanelBaseUI {
        constructor() {
            super(false);
            if (GameConfig.RatioType) {
                this.ui.connectServer.scale(GameConfig.LengthShort, 1);
            } else {
                this.ui.connectServer.scale(1, GameConfig.ShortLength);
            }
        }
    }
}