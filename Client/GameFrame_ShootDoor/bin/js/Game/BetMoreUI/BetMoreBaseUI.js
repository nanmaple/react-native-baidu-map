var BetMoreBaseUI = /** @class */ (function () {
    function BetMoreBaseUI() {
        this.betBtnArr = new Object(); //投注按钮对象
        this.lastBetPosMsg = new Object(); //上一个注单投注成功的投注信息
        this.currentBetPosMsg = new Object(); //当前未投注成功的投注信息
        this.guessSuccess = false;
        this.cacheData = null;
        this.time = 0; //时间
        this.timeStamp = 0; //时间戳
        this.isShow = false; //是否显示
        this.spadeIco = "ui/spade.png";
        this.blockIco = "ui/block.png";
        this.heartIco = "ui/heart.png";
        this.clubIco = "ui/club.png";
    }
    /**
     * 切换横竖屏
     * @param isVer 是否为竖屏
     */
    BetMoreBaseUI.prototype.ResetScreen = function (isVer) {
        Laya.stage.removeChild(this.ui);
        if (isVer) {
            this.ui = new ui.BetMoreVUI();
            this.CreateBetBtn(isVer);
        }
        else {
            this.ui = new ui.BetMoreHUI();
            this.CreateBetBtn(isVer);
        }
        this.ui.zOrder = 6;
        Laya.stage.addChild(this.ui);
        //确认投注
        this.ui.ConfirmBetBtn.on(Laya.Event.CLICK, this, this.ConfirmBet);
        //取消投注
        this.ui.CancleBetBtn.on(Laya.Event.CLICK, this, this.CancelBet);
        //关闭面板
        this.ui.Close.on(Laya.Event.CLICK, this, this.Close);
        this.ui.visible = this.isShow;
        this.timeEffect = new TimeEffect(this.ui.time);
        if (this.cacheData) {
            this.SetTime();
        }
        this.GameInit(this.cacheData);
    };
    return BetMoreBaseUI;
}());
//# sourceMappingURL=BetMoreBaseUI.js.map