var FootballBaseUI = /** @class */ (function () {
    function FootballBaseUI() {
        this.goalW = 561; //球门宽度
        this.goalH = 342; //球门高度
        this.goalCenterX = 0; //球门水平居中偏移位置
        this.goalBottom = 796; //球门距离底部的距离
        this.isVer = false; //是否竖屏
        this.shootInfo = null; //射球后显示信息
    }
    /**
     * 切换横竖屏
     * @param isVer 是否为竖屏
     */
    FootballBaseUI.prototype.ResetScreen = function (isVer) {
        Laya.stage.removeChild(this.ui);
        if (isVer) {
            this.ui = new ui.FootballVUI();
            this.goalW = 561;
            this.goalH = 342;
            this.goalCenterX = 0;
            this.goalBottom = 796;
            this.isVer = true;
        }
        else {
            this.ui = new ui.FootballHUI();
            this.goalW = 735;
            this.goalH = 325;
            this.goalCenterX = 20;
            this.goalBottom = 265;
            this.isVer = false;
        }
        this.ui.zOrder = 2;
        Laya.stage.addChild(this.ui);
        this.footballR = this.ui.football.pivotX;
        this.shootSound = "sound/kickball.mp3";
        this.ShootReset();
        this.ui.shootInfo.text = this.shootInfo;
    };
    /**
     * 重置
     */
    FootballBaseUI.prototype.ShootReset = function () {
        this.ui.football.visible = false;
        this.ui.shootInfo.visible = false;
        if (this.isVer) {
            this.ui.football.pos(Laya.stage.width / 2, Laya.stage.height + this.footballR);
        }
        else {
            this.ui.football.pos(Laya.stage.width / 2, 1000);
        }
        this.ui.shootInfo.text = null;
        this.isActive = false;
        this.shootResSound = "";
    };
    /**
     * 射进
     */
    FootballBaseUI.prototype.ShootIn = function () {
        var language = new LanguageUtils.Language();
        if (this.isActive) {
            return;
        }
        else {
            Utils.BackgroundMusic.PlaySounds(this.shootSound);
            this.isActive = true;
            this.ui.football.visible = true;
            this.ui.football.play(0, false, "shootOutPost");
            this.shootEndY = Laya.stage.height - this.goalBottom - 5;
            this.shootEndX = Laya.stage.width / 2 + this.goalCenterX;
            this.shootInfo = language.GetLanguage("ShootIn");
            this.ui.shootInfo.text = this.shootInfo;
            this.shootResSound = "sound/shootsuccess.mp3";
            Laya.Tween.to(this.ui.football, { y: this.shootEndY, x: this.shootEndX }, 3000, Laya.Ease.backOut, Laya.Handler.create(this, this.ShootInfoShow));
        }
    };
    /**
     * 左边射偏
     */
    FootballBaseUI.prototype.ShootLeft = function () {
        var language = new LanguageUtils.Language();
        if (this.isActive) {
            return;
        }
        else {
            Utils.BackgroundMusic.PlaySounds(this.shootSound);
            this.isActive = true;
            this.ui.football.visible = true;
            this.ui.football.play(0, false, "shootOutPost");
            this.shootEndY = Laya.stage.height - this.goalBottom - 5;
            this.shootEndX = (Laya.stage.width - this.goalW) / 2 + this.goalCenterX - this.footballR / 2;
            this.shootInfo = language.GetLanguage("ShootLeft");
            this.ui.shootInfo.text = this.shootInfo;
            this.shootResSound = "sound/shootfail.wav";
            Laya.Tween.to(this.ui.football, { y: this.shootEndY, x: this.shootEndX }, 3000, Laya.Ease.backOut, Laya.Handler.create(this, this.ShootInfoShow));
        }
    };
    /**
     * 右边射偏
     */
    FootballBaseUI.prototype.ShootRight = function () {
        var language = new LanguageUtils.Language();
        if (this.isActive) {
        }
        else {
            Utils.BackgroundMusic.PlaySounds(this.shootSound);
            this.isActive = true;
            this.ui.football.visible = true;
            this.ui.football.play(0, false, "shootOutPost");
            this.shootEndY = Laya.stage.height - this.goalBottom - 5;
            this.shootEndX = (Laya.stage.width + this.goalW) / 2 + this.goalCenterX + this.footballR * 3 / 2;
            this.shootInfo = language.GetLanguage("ShootRight");
            this.ui.shootInfo.text = this.shootInfo;
            this.shootResSound = "sound/shootfail.wav";
            Laya.Tween.to(this.ui.football, { y: this.shootEndY, x: this.shootEndX }, 3000, Laya.Ease.backOut, Laya.Handler.create(this, this.ShootInfoShow));
        }
    };
    /**
     * 射到门柱
     * @param position 射到门柱位置
     */
    FootballBaseUI.prototype.ShootGoalPost = function (position) {
        var language = new LanguageUtils.Language();
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
                this.shootInfo = language.GetLanguage("ShootLeftGoalPost");
                this.ui.shootInfo.text = this.shootInfo;
                this.shootEndX = (Laya.stage.width - this.goalW) / 2 + this.goalCenterX + this.footballR / 2;
            }
            if (position == 1) {
                this.shootInfo = language.GetLanguage("ShootRightGoalPost");
                this.ui.shootInfo.text = this.shootInfo;
                this.shootEndX = (Laya.stage.width + this.goalW) / 2 + this.goalCenterX + this.footballR / 2;
            }
            if (position == 2) {
                this.shootInfo = language.GetLanguage("ShootGoalPost");
                this.ui.shootInfo.text = this.shootInfo;
                this.shootEndX = (Laya.stage.width - this.goalW) / 2 + this.goalCenterX + this.footballR / 2;
            }
            this.shootResSound = "sound/hitdoor.mp3";
            Laya.Tween.to(this.ui.football, { y: this.shootEndY, x: this.shootEndX }, 1500, Laya.Ease.backOut, Laya.Handler.create(this, this.OnPostBounce));
        }
    };
    /**
     * 射到门柱反弹
     */
    FootballBaseUI.prototype.OnPostBounce = function () {
        this.shootEndY = Laya.stage.height - this.goalBottom + this.goalH / 4;
        this.shootEndX = Laya.stage.width / 2 + this.goalCenterX;
        Laya.Tween.to(this.ui.football, { y: this.shootEndY, x: this.shootEndX }, 1500, Laya.Ease.quadOut, Laya.Handler.create(this, this.ShootInfoShow));
    };
    /**
     *显示射球后进球状态
     */
    FootballBaseUI.prototype.ShootInfoShow = function () {
        Utils.BackgroundMusic.PlaySounds(this.shootResSound);
        this.ui.shootInfo.visible = true;
        this.ui.football.stop();
        Laya.Tween.to(this.ui.shootInfo, {}, 2000, Laya.Ease.backOut, Laya.Handler.create(this, this.ShootReset));
    };
    /**
     * 清除足球所有缓动
     */
    FootballBaseUI.prototype.ClearTween = function () {
        Laya.Tween.clearAll(this.ui.football);
    };
    return FootballBaseUI;
}());
//# sourceMappingURL=FootballBaseUI.js.map