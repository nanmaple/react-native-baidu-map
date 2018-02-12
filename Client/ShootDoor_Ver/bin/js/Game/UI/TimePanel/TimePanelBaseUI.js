var ScenePanel;
(function (ScenePanel) {
    var TimePanelBaseUI = /** @class */ (function () {
        /**
         * 构造函数
         * @param isHor 是否横版
         */
        function TimePanelBaseUI(isHor) {
            this.visible = false;
            if (isHor) {
                this.ui = new ui.TimeUI();
            }
            else {
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
        TimePanelBaseUI.prototype.GetUI = function () {
            return this.ui;
        };
        /**
         * 开始倒计时
         * @param time
         */
        TimePanelBaseUI.prototype.StartGameTime = function (time) {
            this.ui.visible = true;
            this.timeEffect.StartGameTime(time);
        };
        TimePanelBaseUI.prototype.EndGameTime = function () {
            this.timeEffect.EndGameTime();
            this.ui.visible = false;
            Utils.BackgroundMusic.PlaySounds("sound/csz1.wav");
        };
        return TimePanelBaseUI;
    }());
    ScenePanel.TimePanelBaseUI = TimePanelBaseUI;
})(ScenePanel || (ScenePanel = {}));
