var FootballBaseUI = /** @class */ (function () {
    function FootballBaseUI() {
        this.goalW = 561; //球门宽度
        this.goalH = 342; //球门高度
        this.goalCenterX = 0; //球门水平居中偏移位置
        this.goalBottom = 796; //球门距离底部的距离
        this.isVer = false;
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
    };
    return FootballBaseUI;
}());
//# sourceMappingURL=FootballBaseUI.js.map