namespace ScenePanel {
    export abstract class TimePanelBaseUI {
        protected ui: ui.TimeUI | ui.Time_VerUI;

        protected timeEffect: TimeEffect;   //游戏时间效果
        protected visible: boolean = false;
        /**
         * 构造函数
         * @param isHor 是否横版
         */
        constructor(isHor?: boolean) {
            if (isHor) {
                this.ui = new ui.TimeUI();
            } else {
                this.ui = new ui.Time_VerUI();
            }
            this.ui.zOrder = 4;
            //创建时间效果
            this.ui.visible = false;
            this.timeEffect = new TimeEffect(this.ui.time);
        }

        /**
         * 获取UI
         */
        public GetUI(): ui.TimeUI | ui.Time_VerUI {
            return this.ui;
        }

        /**
         * 开始倒计时
         * @param time 
         */
        public StartGameTime(time: number): void {
            this.ui.visible = true;
            this.timeEffect.StartGameTime(time);
        }
        /**
         * 游戏时间结束
         */
        public EndGameTime(): void {
            this.timeEffect.EndGameTime();
            this.ui.visible = false;
            Utils.BackgroundMusic.PlaySounds("sound/csz1.wav");
        }
        /**
         * 隐藏游戏时间
         */
        public HideGameTime():void{
            this.ui.visible = false;
        }
    }
}