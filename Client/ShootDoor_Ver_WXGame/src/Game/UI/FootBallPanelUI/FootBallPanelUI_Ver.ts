namespace ScenePanel {
    export class FootBallPanelVer extends FootBallPanelBaseUI {
        constructor(goalW:number,goalH:number,goalCenterX:number,goalBottom:number) {
            super(false);
            this.goalW = goalW;
            this.goalH = goalH;
            this.goalCenterX = goalCenterX;
            this.goalBottom = goalBottom;
            if (GameConfig.RatioType) {
                this.ui.football.scale(GameConfig.LengthShort, 1);
                this.ui.shootInfo.scale(GameConfig.LengthShort, 1);
                this.goalW = this.goalW * GameConfig.LengthShort;
            } else {
                this.ui.football.scale(1, GameConfig.ShortLength);
                this.ui.shootInfo.scale(1, GameConfig.ShortLength);
                this.goalH = this.goalH * GameConfig.ShortLength;
            }
        }

    }
}