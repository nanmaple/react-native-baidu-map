var BetMoreBaseUI = /** @class */ (function () {
    function BetMoreBaseUI() {
        this.betBtnArr = new Object(); //投注按钮对象
        this.lastBetPosMsg = new Object(); //上一个注单投注成功的投注信息
        this.currentBetPosMsg = new Object(); //当前未投注成功的投注信息
        this.guessSuccess = false;
        this.cacheData = null;
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
            if (GameConfig.RatioType) {
                this.ui.time.scale(GameConfig.LengthShort, 1);
                this.ui.MsgPanel.scale(GameConfig.LengthShort, 1);
                this.ui.Title.scale(GameConfig.LengthShort, 1);
                for (var i = 0; i < 52; i++) {
                    var Box = this.ui.BetBox.getChildAt(i);
                    var child1 = Box.getChildAt(1);
                    var child2 = Box.getChildAt(2);
                    var child3 = Box.getChildAt(3);
                    var child4 = Box.getChildAt(4);
                    child1.scale(GameConfig.LengthShort, 1);
                    child2.scale(GameConfig.LengthShort, 1);
                    child3.scale(GameConfig.LengthShort, 1);
                    child4.scale(GameConfig.LengthShort, 1);
                }
                this.ui.ConfirmBetBtn.scale(GameConfig.LengthShort, 1);
                this.ui.CancleBetBtn.scale(GameConfig.LengthShort, 1);
            }
            else {
                this.ui.MsgPanel.scale(1, GameConfig.ShortLength);
                this.ui.time.scale(1, GameConfig.ShortLength);
                this.ui.Title.scale(1, GameConfig.ShortLength);
                this.ui.ConfirmBetBtn.scale(1, GameConfig.ShortLength);
                this.ui.CancleBetBtn.scale(1, GameConfig.ShortLength);
            }
        }
        else {
            this.ui = new ui.BetMoreHUI();
            this.CreateBetBtn(isVer);
            if (GameConfig.RatioType) {
                this.ui.Prompt.scale(1, GameConfig.LengthShort);
                this.ui.MsgPanel.scale(1, GameConfig.LengthShort);
            }
            else {
                this.ui.Prompt.scale(GameConfig.ShortLength, 1);
                this.ui.MsgPanel.scale(GameConfig.ShortLength, 1);
            }
        }
        this.ui.zOrder = 8;
        Laya.stage.addChild(this.ui);
        //确认投注
        this.ui.ConfirmBetBtn.on(Laya.Event.CLICK, this, this.ConfirmBet);
        //取消投注
        this.ui.CancleBetBtn.on(Laya.Event.CLICK, this, this.CancleBet);
        //关闭面板
        this.ui.Close.on(Laya.Event.CLICK, this, this.Close);
        this.ui.visible = this.isShow;
        this.GameInit(this.cacheData);
    };
    return BetMoreBaseUI;
}());
//# sourceMappingURL=BetMoreBaseUI.js.map