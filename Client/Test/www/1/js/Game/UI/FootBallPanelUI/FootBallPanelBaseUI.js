var ScenePanel;
(function (ScenePanel) {
    var FootBallPanelBaseUI = /** @class */ (function () {
        /**
         * 构造函数
         * @param isHor 是否横版
         */
        function FootBallPanelBaseUI(isHor) {
            if (isHor) {
                this.ui = new ui.FootballUI();
            }
            else {
                this.ui = new ui.Football_VerUI();
            }
            //将提示UI类缓存为静态图像
            this.ui.zOrder = 3;
            this.footballR = this.ui.football.pivotX;
            this.shootSound = "sound/kickball.mp3";
            this.isHor = isHor;
            this.ShootReset();
        }
        /**
         * 获取UI
         */
        FootBallPanelBaseUI.prototype.GetUI = function () {
            return this.ui;
        };
        /**
         * 重置
         */
        FootBallPanelBaseUI.prototype.ShootReset = function () {
            this.ui.football.visible = false;
            this.ui.shootInfo.visible = false;
            if (this.isHor) {
                this.ui.football.pos(Laya.stage.width / 2, 1000);
            }
            else {
                this.ui.football.pos(Laya.stage.width / 2, Laya.stage.height + this.footballR);
            }
            this.ui.shootInfo.text = null;
            this.isActive = false;
            this.shootResSound = "";
            this.ui.football.play(0, false, "shootOutPost");
        };
        /**
         * 射进
         */
        FootBallPanelBaseUI.prototype.ShootIn = function () {
            if (this.isActive) {
                return;
            }
            else {
                Utils.BackgroundMusic.PlaySounds(this.shootSound);
                this.isActive = true;
                this.ui.football.visible = true;
                this.shootEndY = Laya.stage.height - this.goalBottom - 5;
                this.shootEndX = Laya.stage.width / 2 + this.goalCenterX;
                this.ui.shootInfo.text = "球进啦！";
                this.shootResSound = "sound/shootsuccess.mp3";
                Laya.Tween.to(this.ui.football, { y: this.shootEndY, x: this.shootEndX }, 3000, Laya.Ease.backOut, Laya.Handler.create(this, this.ShootInfoShow));
            }
        };
        /**
         * 左边射偏
         */
        FootBallPanelBaseUI.prototype.ShootLeft = function () {
            if (this.isActive) {
                return;
            }
            else {
                Utils.BackgroundMusic.PlaySounds(this.shootSound);
                this.isActive = true;
                this.ui.football.visible = true;
                this.shootEndY = Laya.stage.height - this.goalBottom - 5;
                this.shootEndX = (Laya.stage.width - this.goalW) / 2 + this.goalCenterX - this.footballR / 2;
                this.ui.shootInfo.text = "左边射偏啦！";
                this.shootResSound = "sound/shootfail.wav";
                Laya.Tween.to(this.ui.football, { y: this.shootEndY, x: this.shootEndX }, 3000, Laya.Ease.backOut, Laya.Handler.create(this, this.ShootInfoShow));
            }
        };
        /**
         * 右边射偏
         */
        FootBallPanelBaseUI.prototype.ShootRight = function () {
            if (this.isActive) {
            }
            else {
                Utils.BackgroundMusic.PlaySounds(this.shootSound);
                this.isActive = true;
                this.ui.football.visible = true;
                this.shootEndY = Laya.stage.height - this.goalBottom - 5;
                this.shootEndX = (Laya.stage.width + this.goalW) / 2 + this.goalCenterX + this.footballR * 3 / 2;
                this.ui.shootInfo.text = "右边射偏啦！";
                this.shootResSound = "sound/shootfail.wav";
                Laya.Tween.to(this.ui.football, { y: this.shootEndY, x: this.shootEndX }, 3000, Laya.Ease.backOut, Laya.Handler.create(this, this.ShootInfoShow));
            }
        };
        /**
         * 射到门柱
         * @param position 射到门柱位置
         */
        FootBallPanelBaseUI.prototype.ShootGoalPost = function (position) {
            if (this.isActive) {
                return;
            }
            else {
                Utils.BackgroundMusic.PlaySounds(this.shootSound);
                this.ui.football.play(0, false, "shootOnPost");
                this.isActive = true;
                this.ui.football.visible = true;
                this.shootEndY = Laya.stage.height - this.goalBottom - this.goalH / 3;
                if (position == 0) {
                    this.ui.shootInfo.text = "左边撞柱啦！";
                    this.shootEndX = (Laya.stage.width - this.goalW) / 2 + this.goalCenterX + this.footballR / 2;
                }
                if (position == 1) {
                    this.ui.shootInfo.text = "右边撞柱啦！";
                    this.shootEndX = (Laya.stage.width + this.goalW) / 2 + this.goalCenterX + this.footballR / 2;
                }
                if (position == 2) {
                    this.ui.shootInfo.text = "撞柱啦！";
                    this.shootEndX = (Laya.stage.width - this.goalW) / 2 + this.goalCenterX + this.footballR / 2;
                }
                this.shootResSound = "sound/hitdoor.mp3";
                Laya.Tween.to(this.ui.football, { y: this.shootEndY, x: this.shootEndX }, 1500, Laya.Ease.backOut, Laya.Handler.create(this, this.OnPostBounce));
            }
        };
        /**
         * 射到门柱反弹
         */
        FootBallPanelBaseUI.prototype.OnPostBounce = function () {
            this.shootEndY = Laya.stage.height - this.goalBottom + this.goalH / 4;
            this.shootEndX = Laya.stage.width / 2 + this.goalCenterX;
            Laya.Tween.to(this.ui.football, { y: this.shootEndY, x: this.shootEndX }, 1500, Laya.Ease.quadOut, Laya.Handler.create(this, this.ShootInfoShow));
        };
        /**
         *显示射球后进球状态
         */
        FootBallPanelBaseUI.prototype.ShootInfoShow = function () {
            Utils.BackgroundMusic.PlaySounds(this.shootResSound);
            this.ui.shootInfo.visible = true;
            this.ui.football.stop();
            Laya.Tween.to(this.ui.shootInfo, {}, 2000, Laya.Ease.backOut, Laya.Handler.create(this, this.ShootReset));
        };
        /**
         * 清除足球所有缓动
         */
        FootBallPanelBaseUI.prototype.ClearTween = function () {
            Laya.Tween.clearAll(this.ui.football);
            this.ShootReset();
        };
        return FootBallPanelBaseUI;
    }());
    ScenePanel.FootBallPanelBaseUI = FootBallPanelBaseUI;
})(ScenePanel || (ScenePanel = {}));
