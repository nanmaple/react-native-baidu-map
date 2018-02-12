var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ScenePanel;
(function (ScenePanel) {
    var FootBallPanel = (function (_super) {
        __extends(FootBallPanel, _super);
        function FootBallPanel(cardPanel) {
            var _this = _super.call(this) || this;
            _this.footballR = _this.football.pivotX;
            _this.goalW = cardPanel.goal.width;
            _this.goalH = cardPanel.goal.height;
            _this.goalCenterX = cardPanel.goal.centerX;
            _this.goalBottom = cardPanel.goal.bottom;
            _this.shootSound = "sound/kickball.mp3";
            _this.shootInfo.pos(Laya.stage.width / 2, Laya.stage.height / 2);
            _this.ShootReset();
            if (GameConfig.RatioType) {
                _this.football.scale(GameConfig.HeightWidth, 1);
            }
            else {
                _this.football.scale(1, GameConfig.WidthHeight);
            }
            return _this;
        }
        /**
         * 重置
         */
        FootBallPanel.prototype.ShootReset = function () {
            this.football.visible = false;
            this.shootInfo.visible = false;
            this.football.pos(Laya.stage.width / 2, 1000);
            this.shootInfo.text = null;
            this.isActive = false;
            this.shootResSound = "";
            this.football.play(0, false, "shootOutPost");
        };
        /**
         * 射进
         */
        FootBallPanel.prototype.ShootIn = function () {
            if (this.isActive) {
                return;
            }
            else {
                Utils.BackgroundMusic.PlaySounds(this.shootSound);
                this.isActive = true;
                this.football.visible = true;
                this.shootEndY = Laya.stage.height - this.goalBottom;
                this.shootEndX = Laya.stage.width / 2 + this.goalCenterX;
                this.shootInfo.text = "球进啦！";
                this.shootResSound = "sound/shootsuccess.mp3";
                Laya.Tween.to(this.football, { y: this.shootEndY, x: this.shootEndX }, 3000, Laya.Ease.backOut, Laya.Handler.create(this, this.ShootInfoShow));
            }
        };
        /**
         * 左边射偏
         */
        FootBallPanel.prototype.ShootLeft = function () {
            if (this.isActive) {
                return;
            }
            else {
                Utils.BackgroundMusic.PlaySounds(this.shootSound);
                this.isActive = true;
                this.football.visible = true;
                this.shootEndY = Laya.stage.height - this.goalBottom;
                this.shootEndX = (Laya.stage.width - this.goalW) / 2 + this.goalCenterX - this.footballR / 2;
                this.shootInfo.text = "左边射偏啦！";
                this.shootResSound = "sound/shootfail.wav";
                Laya.Tween.to(this.football, { y: this.shootEndY, x: this.shootEndX }, 3000, Laya.Ease.backOut, Laya.Handler.create(this, this.ShootInfoShow));
            }
        };
        /**
         * 右边射偏
         */
        FootBallPanel.prototype.ShootRight = function () {
            if (this.isActive) {
            }
            else {
                Utils.BackgroundMusic.PlaySounds(this.shootSound);
                this.isActive = true;
                this.football.visible = true;
                this.shootEndY = Laya.stage.height - this.goalBottom;
                this.shootEndX = (Laya.stage.width - this.goalW) / 2 + this.goalCenterX + this.goalW + this.footballR * 3 / 2;
                this.shootInfo.text = "右边射偏啦！";
                this.shootResSound = "sound/shootfail.wav";
                Laya.Tween.to(this.football, { y: this.shootEndY, x: this.shootEndX }, 3000, Laya.Ease.backOut, Laya.Handler.create(this, this.ShootInfoShow));
            }
        };
        /**
         * 射到门柱
         * @param position 射到门柱位置
         */
        FootBallPanel.prototype.ShootGoalPost = function (position) {
            if (this.isActive) {
                return;
            }
            else {
                Utils.BackgroundMusic.PlaySounds(this.shootSound);
                this.football.play(0, false, "shootOnPost");
                this.isActive = true;
                this.football.visible = true;
                this.shootEndY = Laya.stage.height / 2;
                if (position == 0) {
                    this.shootInfo.text = "左边撞柱啦！";
                    this.shootEndX = (Laya.stage.width - this.goalW) / 2 + this.goalCenterX + this.footballR / 2;
                }
                if (position == 1) {
                    this.shootInfo.text = "右边撞柱啦！";
                    this.shootEndX = (Laya.stage.width + this.goalW) / 2 + this.goalCenterX + this.footballR / 2;
                }
                if (position == 2) {
                    this.shootInfo.text = "撞柱啦！";
                    this.shootEndX = (Laya.stage.width - this.goalW) / 2 + this.goalCenterX + this.footballR / 2;
                }
                this.shootResSound = "sound/hotdoor.mp3";
                Laya.Tween.to(this.football, { y: this.shootEndY, x: this.shootEndX }, 1500, Laya.Ease.backOut, Laya.Handler.create(this, this.OnPostBounce));
            }
        };
        /**
         * 射到门柱反弹
         */
        FootBallPanel.prototype.OnPostBounce = function () {
            this.shootEndY = Laya.stage.height * 3 / 4;
            this.shootEndX = Laya.stage.width / 2 + this.goalCenterX;
            Laya.Tween.to(this.football, { y: this.shootEndY, x: this.shootEndX }, 1500, Laya.Ease.quadOut, Laya.Handler.create(this, this.ShootInfoShow));
        };
        /**
         *显示射球后进球状态
         */
        FootBallPanel.prototype.ShootInfoShow = function () {
            Utils.BackgroundMusic.PlaySounds(this.shootResSound);
            this.shootInfo.visible = true;
            this.football.stop();
            Laya.Tween.to(this.shootInfo, {}, 2000, Laya.Ease.backOut, Laya.Handler.create(this, this.ShootReset));
        };
        return FootBallPanel;
    }(ui.FootballUI));
    ScenePanel.FootBallPanel = FootBallPanel;
})(ScenePanel || (ScenePanel = {}));
