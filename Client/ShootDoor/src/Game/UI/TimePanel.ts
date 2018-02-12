namespace ScenePanel {
    export class TimePanel extends ui.TimeUI {
        public timeEffect: TimeEffect;   //游戏时间效果
        constructor() {
            super();
            //创建时间效果
            this.timeEffect = new TimeEffect(this.time as Laya.Box);
            this.visible = false;
            if (GameConfig.RatioType) {
                this.scale(GameConfig.HeightWidth, 1);
            } else {
                this.scale(1, GameConfig.WidthHeight);
            }
        }
    }
}