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
var BetMoreUIHV = /** @class */ (function (_super) {
    __extends(BetMoreUIHV, _super);
    function BetMoreUIHV() {
        var _this = _super.call(this) || this;
        _this.broadcast = new Dto.BroadcastDto();
        return _this;
    }
    BetMoreUIHV.prototype.Refresh = function () {
    };
    /**
     * 设置数据分流
     * @param data
     */
    BetMoreUIHV.prototype.Set = function (data) {
        switch (data.Type) {
            case GameEnum.GameCommand.MSG_GAME_INIT:
                this.GameInit(data.Data);
                break;
            case GameEnum.GameCommand.MSG_GAME_START:
                this.GameStart(data.Data);
                break;
            case GameEnum.GameCommand.MSG_GAME_BETRESULT:
                this.BetResult(data.Data);
                break;
            case GameEnum.GameCommand.MSG_GAME_GAMERESULT:
                this.GameResult(data.Data);
                break;
            case GameEnum.GameCommand.MSG_GAME_SETTLERESULT:
                this.SettleResult(data.Data);
                break;
            default:
                break;
        }
    };
    /**
     * 初始化
     * @param data
     */
    BetMoreUIHV.prototype.GameInit = function (data) {
        this.cacheData = data;
        this.DisabledAllBtn();
        if (!data) {
            return;
        }
        this.SetLimit(data.Limit);
        if (data.Status == Enum.GameStatus.DEFAULT) {
            return;
        }
        this.SetOdds(data.Odds);
        //初始化界面
        if (data.Status == Enum.GameStatus.BET) {
            this.lastBetPosMsg = data.TotalBet;
        }
        this.SetBetPos(this.lastBetPosMsg, this.currentBetPosMsg);
    };
    /**
     * 游戏开始
     * @param data
     */
    BetMoreUIHV.prototype.GameStart = function (data) {
        this.cacheData.Odds = data.Odds;
        this.cacheData.Status = Enum.GameStatus.BET;
        this.DisabledBetBtn(true);
        this.SetOdds(data.Odds);
        //清除上一个注单投注成功的投注信息
        this.lastBetPosMsg = new Object();
        this.cacheData.TotalBet = new Object();
        this.SetBetPos(this.lastBetPosMsg);
    };
    /**
     * 投注结果
     * @param data
     */
    BetMoreUIHV.prototype.BetResult = function (data) {
        var language = new LanguageUtils.Language();
        //改变上一局投注结果
        if (data.Success) {
            //改变投注信息为本次投注成功的注单信息
            this.cacheData.TotalBet = data.TotalBet;
            this.lastBetPosMsg = data.TotalBet;
            this.SetBetPos(this.lastBetPosMsg);
            //提示投注成功
            this.ShowMsg(language.GetLanguage("betSuccess"));
        }
        else {
            //根据错误码转换对应错误信息
            var language_1 = new LanguageUtils.Language();
            var errorMsg = language_1.GetLanguage(Enum.BetErrorCode[data.ErrorCode], GameConfig.GameID);
            //提示错误信息
            this.ShowMsg(errorMsg);
            //还原上次成功的投注状态
            this.SetBetPos(this.lastBetPosMsg);
        }
    };
    /**
     * 游戏结束
     * @param data
     */
    BetMoreUIHV.prototype.GameResult = function (data) {
        this.DisabledAllBtn();
        this.SetBetPos(this.lastBetPosMsg);
        for (var i in this.betBtnArr) {
            this.betBtnArr[i].GetUI().getChildByName("masks").visible = false;
        }
    };
    /**
     * 结算结果
     * @param data
     */
    BetMoreUIHV.prototype.SettleResult = function (data) {
        //清除上一个注单投注成功的投注信息
        this.lastBetPosMsg = new Object();
        this.cacheData.TotalBet = new Object();
        var language = new LanguageUtils.Language();
        this.guessSuccess = false;
        //总赢数目
        var win = 0;
        var gameResult = JSON.parse(data.GameResult);
        var card = Utils.Poker.GetNumber(gameResult.ThirdCard);
        var msg = new Array();
        for (var i in data.SettleResult) {
            if (data.SettleResult[i] > 0) {
                for (var j = 1, len = this.betBtnArr.length; j <= len; j++) {
                    var index = j % 13 == 0 ? 100 * Math.floor(j / 13) + 13 : Math.floor(j / 13 + 1) * 100 + j % 13;
                    if (Number(i) == index) {
                        if (data.SettleResult[i] > 100) {
                            data.SettleResult[i] = Utils.Money.Format(data.SettleResult[i], 0);
                        }
                        this.betBtnArr[i].SetValue(data.SettleResult[i]);
                        this.betBtnArr[i].Refresh();
                        this.betBtnArr[i].GetUI().gray = false;
                    }
                }
                this.guessSuccess = true;
            }
        }
        if (!this.guessSuccess) {
            this.ShowMsg(language.GetLanguage("gameFail"));
        }
    };
    /**
     * 提示消息
     * @param txt 提示的信息
     */
    BetMoreUIHV.prototype.ShowMsg = function (txt) {
        Laya.timer.clear(this, this.HideMsg);
        this.ui.MsgPanel.changeText(txt);
        this.ui.MsgPanel.visible = true;
        Laya.timer.once(2000, this, this.HideMsg);
    };
    /**
     * 隐藏提示信息
     */
    BetMoreUIHV.prototype.HideMsg = function () {
        this.ui.MsgPanel.visible = false;
    };
    /**
     * 禁用所有按钮
     */
    BetMoreUIHV.prototype.DisabledAllBtn = function () {
        this.DisabledBetBtn(true);
        this.DisabledBetPanel(true);
    };
    /**
     * 设置未投注成功的数据
     * @param noSureBetMsg
     */
    BetMoreUIHV.prototype.SetNoBetPos = function (noSureBetMsg) {
        this.currentBetPosMsg = noSureBetMsg;
    };
    /**
     * 设置不同位置的投注金额
     */
    BetMoreUIHV.prototype.SetBetPos = function (BetResultMsg, noSureBetMsg) {
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
    BetMoreUIHV.prototype.DisabledBetBtn = function (disabled) {
        if (disabled === void 0) { disabled = true; }
        this.ui.ConfirmBetBtn.disabled = disabled;
        this.ui.CancleBetBtn.disabled = disabled;
    };
    /**
     * 禁用投注按钮
     * @param disabled 是否禁用
     */
    BetMoreUIHV.prototype.DisabledBetPanel = function (disabled) {
        for (var i in this.betBtnArr) {
            this.betBtnArr[i].SetStatus(disabled);
        }
    };
    /**
     * 设置赔率
     * @param data
     */
    BetMoreUIHV.prototype.SetOdds = function (data) {
        for (var i in this.betBtnArr) {
            var odd = data[i];
            this.betBtnArr[i].SetOdds(data[i]);
            this.betBtnArr[i].Refresh();
            if (odd == 0) {
                this.betBtnArr[i].GetUI().gray = false;
                this.betBtnArr[i].GetUI().getChildByName("masks").visible = true;
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
    BetMoreUIHV.prototype.Bet = function (data) {
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
    BetMoreUIHV.prototype.SetLimit = function (limit) {
        for (var i in this.betBtnArr) {
            this.betBtnArr[i].MinLimit = limit.MinBet;
            this.betBtnArr[i].MaxLimit = limit.MaxBet;
        }
    };
    /**
     * 创建投注按钮
     * @param isVer
     */
    BetMoreUIHV.prototype.CreateBetBtn = function (isVer) {
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
    };
    /**
     * 确认投注
     */
    BetMoreUIHV.prototype.ConfirmBet = function () {
        this.DisabledBetBtn(true);
        this.broadcast.Type = Enum.ListenUIEnum.ConfirmBet;
        var event = new CustomEvent("GameUI", { detail: this.broadcast });
        document.dispatchEvent(event);
    };
    ;
    /**
     * 取消投注
     */
    BetMoreUIHV.prototype.CancleBet = function () {
        this.DisabledBetBtn(true);
        this.SetBetPos(this.lastBetPosMsg);
        this.broadcast.Type = Enum.ListenUIEnum.CancelBet;
        var event = new CustomEvent("GameUI", { detail: this.broadcast });
        document.dispatchEvent(event);
    };
    ;
    /**
     * 打开面板
     */
    BetMoreUIHV.prototype.Show = function () {
        this.isShow = true;
        this.ui.visible = this.isShow;
    };
    /**
     * 关闭面板
     */
    BetMoreUIHV.prototype.Close = function () {
        this.isShow = false;
        this.ui.visible = this.isShow;
    };
    return BetMoreUIHV;
}(BetMoreBaseUI));
//# sourceMappingURL=BetMoreUIHV.js.map