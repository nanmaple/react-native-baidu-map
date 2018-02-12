namespace ScenePanel {
    export class NoteRecordPanelHor extends NoteRecordPanelBaseUI {
        constructor() {
            super(true);
            if (GameConfig.RatioType) {
                this.ui.prompt.scale(1, GameConfig.LengthShort);
            } else {
                this.ui.prompt.scale(GameConfig.ShortLength, 1);
            }
        }
    }
}