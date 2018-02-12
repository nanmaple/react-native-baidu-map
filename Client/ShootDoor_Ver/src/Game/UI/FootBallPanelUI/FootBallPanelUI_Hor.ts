namespace ScenePanel {
    export class FootBallPanelHor extends FootBallPanelBaseUI {
        constructor(goalW:number,goalH:number,goalCenterX:number,goalBottom:number) {
            super(true);
            this.goalW = goalW;
            this.goalH = goalH;
            this.goalCenterX = goalCenterX;
            this.goalBottom = goalBottom;
            if (GameConfig.RatioType) {
                this.ui.football.scale(1, GameConfig.LengthShort);
                this.ui.shootInfo.scale(1, GameConfig.LengthShort);
                this.goalH = goalH * GameConfig.LengthShort;
            } else {
                this.ui.football.scale(GameConfig.ShortLength, 1);
                this.ui.shootInfo.scale(GameConfig.ShortLength, 1);
                this.goalW = this.goalW * GameConfig.ShortLength;
            }
        }

    }
}