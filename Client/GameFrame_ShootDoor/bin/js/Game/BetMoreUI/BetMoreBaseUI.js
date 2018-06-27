var BetMoreBaseUI = /** @class */ (function () {
    function BetMoreBaseUI() {
        this.broadcast = new Dto.BroadcastDto();
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
        }
        else {
            this.ui = new ui.BetMoreHUI();
        }
        this.CreateBetBtn(isVer);
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
    /**
     * 提示消息
     * @param txt 提示的信息
     */
    BetMoreBaseUI.prototype.ShowMsg = function (txt) {
        Laya.timer.clear(this, this.HideMsg);
        this.ui.MsgPanel.changeText(txt);
        this.ui.MsgPanel.visible = true;
        Laya.timer.once(2000, this, this.HideMsg);
    };
    /**
     * 隐藏提示信息
     */
    BetMoreBaseUI.prototype.HideMsg = function () {
        this.ui.MsgPanel.visible = false;
    };
    /**
     * 禁用所有按钮
     */
    BetMoreBaseUI.prototype.DisabledAllBtn = function () {
        this.DisabledBetBtn(true);
        this.DisabledBetPanel(true);
    };
    /**
     * 设置未投注成功的数据
     * @param noSureBetMsg
     */
    BetMoreBaseUI.prototype.SetNoBetPos = function (noSureBetMsg) {
        this.currentBetPosMsg = noSureBetMsg;
    };
    /**
     * 设置不同位置的投注金额
     */
    BetMoreBaseUI.prototype.SetBetPos = function (BetResultMsg, noSureBetMsg) {
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
    BetMoreBaseUI.prototype.DisabledBetBtn = function (disabled) {
        if (disabled === void 0) { disabled = true; }
        this.ui.ConfirmBetBtn.disabled = disabled;
        this.ui.CancleBetBtn.disabled = disabled;
    };
    /**
     * 禁用投注按钮
     * @param disabled 是否禁用
     */
    BetMoreBaseUI.prototype.DisabledBetPanel = function (disabled) {
        for (var i in this.betBtnArr) {
            this.betBtnArr[i].SetStatus(disabled);
        }
    };
    /**
     * 设置赔率
     * @param data
     */
    BetMoreBaseUI.prototype.SetOdds = function (data) {
        for (var i in this.betBtnArr) {
            var odd = data[i];
            this.betBtnArr[i].SetOdds(data[i]);
            this.betBtnArr[i].Refresh();
            if (odd == 0) {
                this.betBtnArr[i].GetUI().getChildByName("masks").visible = true;
                this.betBtnArr[i].GetUI().gray = false;
            }
            else {
                this.betBtnArr[i].GetUI().getChildByName("masks").visible = false;
            }
        }
    };
    /**
     * 投注
     * @param data
     */
    BetMoreBaseUI.prototype.Bet = function (data) {
        Utils.BackgroundMusic.PlaySounds("sound/bet.wav");
        for (var i in this.betBtnArr) {
            if (data.Pos == Number(i)) {
                this.DisabledBetBtn(false);
                this.betBtnArr[i].SetValue(data.Amount);
                this.betBtnArr[i].Refresh();
                break;
            }
        }
    };
    /**
     * 设置限额
     * @param limit
     */
    BetMoreBaseUI.prototype.SetLimit = function (limit) {
        for (var i in this.betBtnArr) {
            this.betBtnArr[i].MinLimit = limit.MinBet;
            this.betBtnArr[i].MaxLimit = limit.MaxBet;
        }
    };
    /**
     * 创建投注按钮
     * @param isVer
     */
    BetMoreBaseUI.prototype.CreateBetBtn = function (isVer) {
        var language = new LanguageUtils.Language();
        if (isVer) {
            for (var i = 1; i <= 52; i++) {
                var btnUI = new Bet.BetPos();
                var j = i % 13 == 0 ? 100 * Math.floor(i / 13) + 13 : Math.floor(i / 13 + 1) * 100 + i % 13;
                btnUI.SetText(language.GetLanguage(Enum.BetMoreTxtType[i % 13]));
                btnUI.SetType(2);
                btnUI.Pos = j;
                this.betBtnArr[btnUI.Pos] = btnUI;
                btnUI.width = 145;
                btnUI.height = 80;
                if (i >= 1 && i <= 13) {
                    var ico = btnUI.GetUI().getChildByName("ico").skin = this.spadeIco;
                    btnUI.GetUI().getChildByName("betName").color = "#000";
                    btnUI.x = btnUI.width * 3;
                    btnUI.y = btnUI.height * (13 - i) + 13 - i;
                }
                if (i >= 14 && i <= 26) {
                    var ico = btnUI.GetUI().getChildByName("ico").skin = this.heartIco;
                    btnUI.x = btnUI.width * 2;
                    btnUI.y = btnUI.height * (13 * 2 - i) + 13 * 2 - i;
                }
                if (i >= 27 && i <= 39) {
                    var ico = btnUI.GetUI().getChildByName("ico").skin = this.clubIco;
                    btnUI.GetUI().getChildByName("betName").color = "#000";
                    btnUI.x = btnUI.width;
                    btnUI.y = btnUI.height * (13 * 3 - i) + 13 * 3 - i;
                }
                if (i >= 40 && i <= 52) {
                    var ico = btnUI.GetUI().getChildByName("ico").skin = this.blockIco;
                    btnUI.x = 0;
                    btnUI.y = btnUI.height * (13 * 4 - i) + 13 * 4 - i;
                }
                btnUI.Refresh();
                this.ui.BetBox.addChild(btnUI.GetUI());
            }
        }
        else {
            for (var i = 1; i <= 52; i++) {
                var btnUI = new Bet.BetPos();
                var j = i % 13 == 0 ? 100 * Math.floor(i / 13) + 13 : Math.floor(i / 13 + 1) * 100 + i % 13;
                btnUI.SetText(language.GetLanguage(Enum.BetMoreTxtType[i % 13]));
                btnUI.SetType(3);
                btnUI.Pos = j;
                this.betBtnArr[btnUI.Pos] = btnUI;
                btnUI.width = 95;
                btnUI.height = 88;
                if (i >= 1 && i <= 13) {
                    var ico = btnUI.GetUI().getChildByName("ico").skin = this.spadeIco;
                    btnUI.GetUI().getChildByName("betName").color = "#000";
                    btnUI.x = btnUI.width * (13 - i);
                    btnUI.y = btnUI.height * 3;
                }
                if (i >= 14 && i <= 26) {
                    var ico = btnUI.GetUI().getChildByName("ico").skin = this.heartIco;
                    btnUI.x = btnUI.width * (13 * 2 - i);
                    btnUI.y = btnUI.height * 2;
                }
                if (i >= 27 && i <= 39) {
                    var ico = btnUI.GetUI().getChildByName("ico").skin = this.clubIco;
                    btnUI.GetUI().getChildByName("betName").color = "#000";
                    btnUI.x = btnUI.width * (13 * 3 - i);
                    btnUI.y = btnUI.height;
                }
                if (i >= 40 && i <= 52) {
                    var ico = btnUI.GetUI().getChildByName("ico").skin = this.blockIco;
                    btnUI.x = btnUI.width * (13 * 4 - i);
                    btnUI.y = 0;
                }
                btnUI.Refresh();
                this.ui.BetBox.addChild(btnUI.GetUI());
            }
        }
    };
    /**
     * 点击确定投注
     */
    BetMoreBaseUI.prototype.ConfirmBet = function () {
        this.broadcast.Type = Enum.ListenUIEnum.ConfirmBet;
        var event = new CustomEvent("GameUI", { detail: this.broadcast });
        document.dispatchEvent(event);
    };
    ;
    /**
     * 点击取消投注
     */
    BetMoreBaseUI.prototype.CancelBet = function () {
        this.broadcast.Type = Enum.ListenUIEnum.CancelBet;
        var event = new CustomEvent("GameUI", { detail: this.broadcast });
        document.dispatchEvent(event);
    };
    ;
    /**
     * 确定投注
     */
    BetMoreBaseUI.prototype.Confirm = function () {
        this.DisabledBetBtn(true);
    };
    /**
     * 取消投注
     */
    BetMoreBaseUI.prototype.Cancel = function () {
        this.DisabledBetBtn(true);
        this.SetBetPos(this.lastBetPosMsg);
    };
    /**
     * 打开面板
     */
    BetMoreBaseUI.prototype.Show = function () {
        this.isShow = true;
        this.ui.visible = this.isShow;
    };
    /**
     * 关闭面板
     */
    BetMoreBaseUI.prototype.Close = function () {
        this.isShow = false;
        this.ui.visible = this.isShow;
    };
    return BetMoreBaseUI;
}());
//# sourceMappingURL=BetMoreBaseUI.js.map