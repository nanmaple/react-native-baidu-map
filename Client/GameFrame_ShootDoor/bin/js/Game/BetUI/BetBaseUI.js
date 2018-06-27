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
        }
        else {
            this.ui = new ui.BetHUI();
        }
        this.CreateBetBtn(isVer);
        this.ui.zOrder = 3;
        Laya.stage.addChild(this.ui);
        //确认投注
        this.ui.ConfirmBetBtn.on(Laya.Event.CLICK, this, this.ConfirmBet);
        //取消投注
        this.ui.CancleBetBtn.on(Laya.Event.CLICK, this, this.CancelBet);
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
    /**
     * 提示消息
     * @param txt 提示的信息
     */
    BetBaseUI.prototype.ShowMsg = function (txt) {
        Laya.timer.clear(this, this.HideMsg);
        this.ui.MsgPanel.changeText(txt);
        this.ui.MsgPanel.visible = true;
        Laya.timer.once(2000, this, this.HideMsg);
    };
    /**
     * 隐藏提示信息
     */
    BetBaseUI.prototype.HideMsg = function () {
        this.ui.MsgPanel.visible = false;
    };
    /**
     * 禁用所有按钮
     */
    BetBaseUI.prototype.DisabledAllBtn = function () {
        this.DisabledBetBtn(true);
        this.DisabledBetPanel(true);
    };
    /**
     * 设置未投注成功的数据
     * @param noSureBetMsg
     */
    BetBaseUI.prototype.SetNoBetPos = function (noSureBetMsg) {
        this.currentBetPosMsg = noSureBetMsg;
    };
    /**
     * 设置不同位置的投注金额
     */
    BetBaseUI.prototype.SetBetPos = function (BetResultMsg, noSureBetMsg) {
        var unSucreData = {};
        if (noSureBetMsg) {
            for (var i in noSureBetMsg) {
                unSucreData[i] = noSureBetMsg[i].Amount;
            }
            this.DisabledBetBtn(false);
        }
        if (!BetResultMsg) {
            BetResultMsg = {};
        }
        for (var i in this.betBtnArr) {
            if (BetResultMsg[i]) {
                var Amount = BetResultMsg[i] + (unSucreData[i] ? unSucreData[i] : 0);
                this.betBtnArr[i].SetValue(Amount);
                this.betBtnArr[i].Refresh();
            }
            else {
                var Amount = unSucreData[i] ? unSucreData[i] : null;
                this.betBtnArr[i].SetValue(Amount);
                this.betBtnArr[i].Refresh();
            }
        }
    };
    /**
     * 禁用投注确认和取消按钮
     */
    BetBaseUI.prototype.DisabledBetBtn = function (disabled) {
        if (disabled === void 0) { disabled = true; }
        this.ui.ConfirmBetBtn.disabled = disabled;
        this.ui.CancleBetBtn.disabled = disabled;
    };
    /**
     * 禁用投注按钮
     * @param disabled 是否禁用
     */
    BetBaseUI.prototype.DisabledBetPanel = function (disabled) {
        for (var i in this.betBtnArr) {
            this.betBtnArr[i].SetStatus(disabled);
        }
    };
    /**
     * 设置限额
     * @param limit
     */
    BetBaseUI.prototype.SetLimit = function (limit) {
        var language = new LanguageUtils.Language();
        this.ui.maxBetLabel.text = language.GetLanguage("Maximum") + (":" + limit.MaxBet);
        this.ui.minBetLabel.text = language.GetLanguage("Minimum") + (":" + limit.MinBet);
        for (var i in this.betBtnArr) {
            this.betBtnArr[i].MinLimit = limit.MinBet;
            this.betBtnArr[i].MaxLimit = limit.MaxBet;
        }
    };
    /**
     * 设置赔率
     * @param data
     */
    BetBaseUI.prototype.SetOdds = function (data) {
        for (var i in this.betBtnArr) {
            this.betBtnArr[i].SetOdds(data[i]);
            this.betBtnArr[i].Refresh();
        }
    };
    /**
     * 切换筹码
     * @param i 筹码编号
     */
    BetBaseUI.prototype.ChangeChip = function (i) {
        //获取当前点击的筹码  
        this.selectedChipNum = i;
        this.selectedChip = this.ui.Chips.getChildAt(i);
        this.chipPrice = Number(this.selectedChip.label);
        for (var i_1 = 0; i_1 < 5; i_1++) {
            var chip = this.ui.Chips.getChildAt(i_1);
            chip.skin = this.chipsNormalSkin;
            chip.scale(0.9, 0.9);
        }
        this.selectedChip.skin = this.chipsSelectSkin;
        this.selectedChip.scale(1.1, 1.1);
    };
    /**
     * 创建投注按钮
     * @param isVer
     */
    BetBaseUI.prototype.CreateBetBtn = function (isVer) {
        var language = new LanguageUtils.Language();
        if (isVer) {
            for (var i = 1; i <= 13; i++) {
                var btnUI = new Bet.BetPos();
                btnUI.SetText(language.GetLanguage(Enum.BetPosType[i]));
                btnUI.zOrder = 5;
                btnUI.Pos = i;
                this.betBtnArr[btnUI.Pos] = btnUI;
                btnUI.SetType(BetBtnData.Ver[Enum.BetPosType[i]].Type);
                btnUI.width = BetBtnData.Ver[Enum.BetPosType[i]].Width;
                btnUI.height = BetBtnData.Ver[Enum.BetPosType[i]].Height;
                btnUI.x = BetBtnData.Ver[Enum.BetPosType[i]].X;
                btnUI.y = BetBtnData.Ver[Enum.BetPosType[i]].Y;
                btnUI.Refresh();
                this.ui.BetBox.addChild(btnUI.GetUI());
            }
        }
        else {
            for (var i = 1; i <= 13; i++) {
                var btnUI = new Bet.BetPos();
                btnUI.SetText(language.GetLanguage(Enum.BetPosType[i]));
                btnUI.zOrder = 5;
                btnUI.Pos = i;
                this.betBtnArr[btnUI.Pos] = btnUI;
                btnUI.SetType(BetBtnData.Hor[Enum.BetPosType[i]].Type);
                btnUI.width = BetBtnData.Hor[Enum.BetPosType[i]].Width;
                btnUI.height = BetBtnData.Hor[Enum.BetPosType[i]].Height;
                btnUI.x = BetBtnData.Hor[Enum.BetPosType[i]].X;
                btnUI.y = BetBtnData.Hor[Enum.BetPosType[i]].Y;
                btnUI.Refresh();
                this.ui.BetBox.addChild(btnUI.GetUI());
            }
        }
    };
    /**
     * 点击确定投注
     */
    BetBaseUI.prototype.ConfirmBet = function () {
        this.broadcast.Type = Enum.ListenUIEnum.ConfirmBet;
        var event = new CustomEvent("GameUI", { detail: this.broadcast });
        document.dispatchEvent(event);
    };
    ;
    /**
     * 点击取消投注
     */
    BetBaseUI.prototype.CancelBet = function () {
        this.broadcast.Type = Enum.ListenUIEnum.CancelBet;
        var event = new CustomEvent("GameUI", { detail: this.broadcast });
        document.dispatchEvent(event);
    };
    ;
    /**
     * 确定投注
     */
    BetBaseUI.prototype.Confirm = function () {
        this.DisabledBetBtn(true);
    };
    /**
     * 取消投注
     */
    BetBaseUI.prototype.Cancel = function () {
        this.DisabledBetBtn(true);
        this.SetBetPos(this.lastBetPosMsg);
    };
    /**
     * 筹码动画
     * @param endX 结束位置x坐标
     * @param endY 结束位置y坐标
     * @param curBetPosChip 投注位置上的筹码
     * @param value 投注金额
     * @param value 缓动后投注数量
     */
    BetBaseUI.prototype.ChipsFly = function (data) {
        Utils.BackgroundMusic.PlaySounds("sound/bet.wav");
        //从对象池获取移动对象
        var flyChip = Laya.Pool.getItemByClass("flyChip", Laya.Button);
        //设置状态数
        flyChip.zOrder = 5;
        flyChip.stateNum = 1;
        flyChip.scale(1.1, 1.1);
        flyChip.label = this.chipPrice.toString();
        flyChip.labelSize = 20;
        flyChip.labelColors = "#f00";
        flyChip.anchorX = 0.5;
        flyChip.anchorY = 0.5;
        flyChip.skin = this.chipsNormalSkin;
        Laya.stage.addChild(flyChip);
        //筹码动画
        var endX = (this.betBtnArr[data.Pos].GetUI().getChildAt(2).x + this.betBtnArr[data.Pos].x);
        var endY = this.betBtnArr[data.Pos].GetUI().getChildAt(2).localToGlobal(new Laya.Point(this.betBtnArr[data.Pos].GetUI().getChildAt(2).width / 2, this.betBtnArr[data.Pos].GetUI().getChildAt(2).height / 2));
        var obj = { x: endY.x, y: endY.y, scaleX: 1, scaleY: 1 };
        //设置初始位置为当前选择的筹码的位置
        var chip = this.selectedChip.localToGlobal(new Laya.Point(this.selectedChip.width / 2, this.selectedChip.height / 2));
        flyChip.pos(chip.x, chip.y);
        this.DisabledBetBtn(false);
        //开始缓动
        Laya.Tween.to(flyChip, obj, 700, Laya.Ease.cubicInOut, Laya.Handler.create(this, this.ChipsFlyCallBack, [flyChip, this.betBtnArr[data.Pos], data.Amount], false));
    };
    /**
     * 筹码动画回调
     * @param i i 筹码位置编号
     * @param flyChip 当前结束换动的筹码对象
     */
    BetBaseUI.prototype.ChipsFlyCallBack = function (flyChip, curBetPosChip, value) {
        //回收
        flyChip.removeSelf();
        Laya.Pool.recover("flyChip", flyChip);
        if (this.cacheData.Status == Enum.GameStatus.SETTLE) {
            this.DisabledAllBtn();
            this.SetBetPos(this.lastBetPosMsg);
            return;
        }
        curBetPosChip.SetValue(value);
        curBetPosChip.Refresh();
    };
    return BetBaseUI;
}());
//# sourceMappingURL=BetBaseUI.js.map