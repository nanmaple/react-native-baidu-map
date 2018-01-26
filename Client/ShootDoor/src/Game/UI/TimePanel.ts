namespace ScenePanel {
    export class TimePanel extends ui.TimeUI {
        public timeEffect: TimeEffect;   //游戏时间效果
        constructor() {
            super();
            //创建时间效果
            this.timeEffect = new TimeEffect(this.time as Laya.Box);
            this.top = 105;
            if (GameConfig.RatioType) {
                this.right = 20 + 34 * GameConfig.HeightWidth;
                this.scale(GameConfig.HeightWidth, 1);
            } else {
                this.right = 54;
                this.scale(1, GameConfig.WidthHeight);
            }
        }
    }
}