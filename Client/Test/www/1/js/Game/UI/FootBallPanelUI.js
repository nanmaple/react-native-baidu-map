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
    var FootBallPanel = /** @class */ (function (_super) {
        __extends(FootBallPanel, _super);
        function FootBallPanel(cardPanel) {
            var _this = _super.call(this) || this;
            _this.footballR = _this.football.pivotX;
            _this.goalW = cardPanel.goal.width; //735
            _this.goalH = cardPanel.goal.height; //325
            _this.goalCenterX = cardPanel.goal.centerX; //20
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
            this.football.pos(Laya.stage.width / 2, 800);
            this.shootInfo.text = null;
            this.isActive = false;
            this.football.play();
        };
        /**
         * 射进
         */
        FootBallPanel.prototype.ShootIn = function () {
            if (this.isActive) {
                return;
            }
            else {
                this.isActive = true;
                this.football.visible = true;
                this.shootEndY = Laya.stage.height / 2;
                this.shootEndX = Laya.stage.width / 2;
                this.shootInfo.text = "球进了！";
                Laya.Tween.to(this.football, { y: this.shootEndY, x: this.shootEndX }, 2000, Laya.Ease.backOut, Laya.Handler.create(this, this.ShootInfoShow));
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
                this.isActive = true;
                this.football.visible = true;
                this.shootEndY = Laya.stage.height / 2;
                this.shootEndX = this.footballR;
                this.shootInfo.text = "左边射偏了！";
                Laya.Tween.to(this.football, { y: this.shootEndY, x: this.shootEndX }, 2000, Laya.Ease.quartInOut, Laya.Handler.create(this, this.ShootInfoShow));
            }
        };
        /**
         * 右边射偏
         */
        FootBallPanel.prototype.ShootRight = function () {
            if (this.isActive) {
                return;
            }
            else {
                this.isActive = true;
                this.football.visible = true;
                this.shootEndY = Laya.stage.height / 2;
                this.shootEndX = Laya.stage.width - this.footballR;
                this.shootInfo.text = "右边射偏了！";
                Laya.Tween.to(this.football, { y: this.shootEndY, x: this.shootEndX }, 2000, Laya.Ease.quartInOut, Laya.Handler.create(this, this.ShootInfoShow));
            }
        };
        /**
         * 射到门柱
         */
        FootBallPanel.prototype.ShootGoalPost = function () {
            if (this.isActive) {
                return;
            }
            else {
                this.isActive = true;
                this.football.visible = true;
                this.shootEndY = Laya.stage.height / 2;
                this.shootEndX = Math.random() < 0.5 ? ((Laya.stage.width - this.goalW) / 2 + this.goalCenterX) : ((Laya.stage.width - this.goalW) / 2 + this.goalCenterX + this.goalW);
                Laya.Tween.to(this.football, { y: this.shootEndY, x: this.shootEndX }, 2000, Laya.Ease.quartIn, Laya.Handler.create(this, this.OnPostBounce));
            }
        };
        /**
         * 射到门柱反弹
         */
        FootBallPanel.prototype.OnPostBounce = function () {
            this.shootInfo.text = "撞柱了！";
            Laya.Tween.to(this.football, { y: Laya.stage.height * 2 / 3, x: Laya.stage.width / 2 }, 2000, Laya.Ease.quartOut, Laya.Handler.create(this, this.ShootInfoShow));
        };
        /**
         *显示射球后进球状态
         */
        FootBallPanel.prototype.ShootInfoShow = function () {
            this.shootInfo.visible = true;
            this.football.stop();
            Laya.Tween.to(this.shootInfo, {}, 2000, Laya.Ease.backOut, Laya.Handler.create(this, this.ShootReset));
        };
        return FootBallPanel;
    }(ui.FootballUI));
    ScenePanel.FootBallPanel = FootBallPanel;
})(ScenePanel || (ScenePanel = {}));
