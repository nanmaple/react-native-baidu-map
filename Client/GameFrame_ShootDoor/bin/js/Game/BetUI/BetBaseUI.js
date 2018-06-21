var BetBaseUI = /** @class */ (function () {
    function BetBaseUI() {
        this.betBtnArr = new Object(); //投注按钮对象
        this.chipsBtnArr = new Object(); //筹码按钮对象
        this.selectedChipNum = 0; //当前选择的筹码
        this.chipPrice = 5; //筹码值
        this.chipsNormalSkin = "ui/btn_chip.png";
        this.chipsSelectSkin = "ui/chip_s.png";
        this.lastBetPosMsg = new Object(); //上一个注单投注成功的投注信息
        this.currentBetPosMsg = new Object(); //当前未投注成功的投注信息
        this.guessSuccess = false;
        this.cacheData = null;
        this.broadcast = new Dto.BroadcastDto();
    }
    /**
     * 切换横竖屏
     * @param isVer 是否为竖屏
     */
    BetBaseUI.prototype.ResetScreen = function (isVer) {
        Laya.stage.removeChild(this.ui);
        if (isVer) {
            this.ui = new ui.BetVUI();
            this.CreateBetBtn(isVer);
            if (GameConfig.RatioType) {
                this.ui.CancleBetBtn.scale(GameConfig.LengthShort, 1);
                this.ui.ConfirmBetBtn.scale(GameConfig.LengthShort, 1);
                this.ui.Chips.scale(GameConfig.LengthShort, 1);
                for (var i = 0; i < 13; i++) {
                    var Box = this.ui.BetBox.getChildAt(i);
                    var child1 = Box.getChildAt(0);
                    var child2 = Box.getChildAt(1);
                    var child3 = Box.getChildAt(2);
                    child1.scale(GameConfig.LengthShort, 1);
                    child2.scale(GameConfig.LengthShort, 1);
                    child3.scale(GameConfig.LengthShort, 1);
                }
                this.ui.MsgPanel.scale(GameConfig.LengthShort, 1);
                this.ui.Chips.bottom = 655;
            }
            else {
                this.ui.CancleBetBtn.scale(1, GameConfig.ShortLength);
                this.ui.ConfirmBetBtn.scale(1, GameConfig.ShortLength);
                this.ui.Chips.scale(1, GameConfig.ShortLength);
                this.ui.ChipsBg.scale(1, GameConfig.ShortLength);
                this.ui.BetBox.scale(1, GameConfig.ShortLength);
                this.ui.BetBg.scale(1, GameConfig.ShortLength);
                this.ui.MsgPanel.scale(1, GameConfig.ShortLength);
                this.ui.Chips.bottom = 655 * GameConfig.ShortLength;
                this.ui.ChipsBg.bottom = 655 * GameConfig.ShortLength;
            }
        }
        else {
            this.ui = new ui.BetHUI();
            this.CreateBetBtn(isVer);
            if (GameConfig.RatioType) {
                this.ui.CancleBetBtn.scale(1, GameConfig.LengthShort);
                this.ui.ConfirmBetBtn.scale(1, GameConfig.LengthShort);
                this.ui.Chips.scale(1, GameConfig.LengthShort);
                this.ui.BetBox.scale(1, GameConfig.LengthShort);
                this.ui.MsgPanel.scale(1, GameConfig.LengthShort);
            }
            else {
                this.ui.CancleBetBtn.scale(GameConfig.ShortLength, 1);
                this.ui.ConfirmBetBtn.scale(GameConfig.ShortLength, 1);
                this.ui.Chips.scale(GameConfig.ShortLength, 1);
                this.ui.BetBox.scale(GameConfig.ShortLength, 1);
                this.ui.MsgPanel.scale(GameConfig.ShortLength, 1);
            }
        }
        this.ui.zOrder = 3;
        Laya.stage.addChild(this.ui);
        //确认投注
        this.ui.ConfirmBetBtn.on(Laya.Event.CLICK, this, this.ConfirmBet);
        //取消投注
        this.ui.CancleBetBtn.on(Laya.Event.CLICK, this, this.CancleBet);
        //打开更多投注面板
        this.ui.Bet_More_Btn.on(Laya.Event.CLICK, this, this.OpenMoreBet);
        //筹码点击
        for (var i = 0; i < 5; i++) {
            var chip = this.ui.Chips.getChildAt(i);
            this.chipsBtnArr[i] = chip;
            chip.on(Laya.Event.CLICK, this, this.ChangeChip, [i]);
        }
        this.ChangeChip(this.selectedChipNum);
        this.GameInit(this.cacheData);
    };
    /**
     * 打开更多投注面板
     */
    BetBaseUI.prototype.OpenMoreBet = function () {
        this.broadcast.Type = Enum.ListenUIEnum.ShowMoreBet;
        var event = new CustomEvent("GameUI", { detail: this.broadcast });
        document.dispatchEvent(event);
    };
    /**
     * 获取筹码值
     */
    BetBaseUI.prototype.GetChipPrice = function () {
        return this.chipPrice;
    };
    return BetBaseUI;
}());
//# sourceMappingURL=BetBaseUI.js.map