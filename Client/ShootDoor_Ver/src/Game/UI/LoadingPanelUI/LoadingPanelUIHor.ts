namespace ScenePanel {
    export class LoadingPanelHor extends LoadingPanelBaseUI{
        constructor() {
            super(true);
            if (GameConfig.RatioType) {
                this.ui.connectServer.scale(1, GameConfig.LengthShort);
            } else {
                this.ui.connectServer.scale(GameConfig.ShortLength, 1);
            }
        }
    }
}