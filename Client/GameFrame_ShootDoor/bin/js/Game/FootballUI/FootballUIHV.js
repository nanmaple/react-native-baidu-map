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
var FootballHV = /** @class */ (function (_super) {
    __extends(FootballHV, _super);
    function FootballHV() {
        return _super.call(this) || this;
    }
    FootballHV.prototype.Refresh = function () {
    };
    FootballHV.prototype.Set = function (data) {
        //定义三张牌
        var First = Utils.Poker.GetNumber(data.FirstCard);
        var Second = Utils.Poker.GetNumber(data.SecondCard);
        var Third = Utils.Poker.GetNumber(data.ThirdCard);
        //射进
        if ((Third > First && Third < Second) || (Third < First && Third > Second)) {
            this.ShootIn();
        }
        //射偏（左边）
        if ((Third < First && Third < Second && (First < Second || First == Second)) || (Third > First && Third > Second && First > Second)) {
            this.ShootLeft();
        }
        //射偏（右边）
        if ((Third > First && Third > Second && (First < Second || First == Second)) || (Third < First && Third < Second && First > Second)) {
            this.ShootRight();
        }
        //射到门柱左边
        if (Third == First && Third == Second) {
            this.ShootGoalPost(2);
        }
        //射到门柱左边
        if (Third == First) {
            this.ShootGoalPost(0);
        }
        //射到门柱右边
        if (Third == Second) {
            this.ShootGoalPost(1);
        }
    };
    /**
     * 重置
     */
    FootballHV.prototype.ShootReset = function () {
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
    FootballHV.prototype.ShootIn = function () {
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
            this.ui.shootInfo.text = language.GetLanguage("ShootIn");
            this.shootResSound = "sound/shootsuccess.mp3";
            Laya.Tween.to(this.ui.football, { y: this.shootEndY, x: this.shootEndX }, 3000, Laya.Ease.backOut, Laya.Handler.create(this, this.ShootInfoShow));
        }
    };
    /**
     * 左边射偏
     */
    FootballHV.prototype.ShootLeft = function () {
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
            this.ui.shootInfo.text = language.GetLanguage("ShootLeft");
            this.shootResSound = "sound/shootfail.wav";
            Laya.Tween.to(this.ui.football, { y: this.shootEndY, x: this.shootEndX }, 3000, Laya.Ease.backOut, Laya.Handler.create(this, this.ShootInfoShow));
        }
    };
    /**
     * 右边射偏
     */
    FootballHV.prototype.ShootRight = function () {
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
            this.ui.shootInfo.text = language.GetLanguage("ShootRight");
            this.shootResSound = "sound/shootfail.wav";
            Laya.Tween.to(this.ui.football, { y: this.shootEndY, x: this.shootEndX }, 3000, Laya.Ease.backOut, Laya.Handler.create(this, this.ShootInfoShow));
        }
    };
    /**
     * 射到门柱
     * @param position 射到门柱位置
     */
    FootballHV.prototype.ShootGoalPost = function (position) {
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
                this.ui.shootInfo.text = language.GetLanguage("ShootLeftGoalPost");
                this.shootEndX = (Laya.stage.width - this.goalW) / 2 + this.goalCenterX + this.footballR / 2;
            }
            if (position == 1) {
                this.ui.shootInfo.text = language.GetLanguage("ShootRightGoalPost");
                this.shootEndX = (Laya.stage.width + this.goalW) / 2 + this.goalCenterX + this.footballR / 2;
            }
            if (position == 2) {
                this.ui.shootInfo.text = language.GetLanguage("ShootGoalPost");
                this.shootEndX = (Laya.stage.width - this.goalW) / 2 + this.goalCenterX + this.footballR / 2;
            }
            this.shootResSound = "sound/hitdoor.mp3";
            Laya.Tween.to(this.ui.football, { y: this.shootEndY, x: this.shootEndX }, 1500, Laya.Ease.backOut, Laya.Handler.create(this, this.OnPostBounce));
        }
    };
    /**
     * 射到门柱反弹
     */
    FootballHV.prototype.OnPostBounce = function () {
        this.shootEndY = Laya.stage.height - this.goalBottom + this.goalH / 4;
        this.shootEndX = Laya.stage.width / 2 + this.goalCenterX;
        Laya.Tween.to(this.ui.football, { y: this.shootEndY, x: this.shootEndX }, 1500, Laya.Ease.quadOut, Laya.Handler.create(this, this.ShootInfoShow));
    };
    /**
     *显示射球后进球状态
     */
    FootballHV.prototype.ShootInfoShow = function () {
        Utils.BackgroundMusic.PlaySounds(this.shootResSound);
        this.ui.shootInfo.visible = true;
        this.ui.football.stop();
        Laya.Tween.to(this.ui.shootInfo, {}, 2000, Laya.Ease.backOut, Laya.Handler.create(this, this.ShootReset));
    };
    /**
     * 清除足球所有缓动
     */
    FootballHV.prototype.ClearTween = function () {
        Laya.Tween.clearAll(this.ui.football);
    };
    return FootballHV;
}(FootballBaseUI));
//# sourceMappingURL=FootballUIHV.js.map