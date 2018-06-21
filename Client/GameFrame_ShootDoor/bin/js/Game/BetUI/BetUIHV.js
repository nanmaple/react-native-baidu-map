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
var BetUIHV = /** @class */ (function (_super) {
    __extends(BetUIHV, _super);
    function BetUIHV() {
        return _super.call(this) || this;
    }
    BetUIHV.prototype.Refresh = function () {
    };
    /**
     * 设置数据分流
     * @param data
     */
    BetUIHV.prototype.Set = function (data) {
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
    BetUIHV.prototype.GameInit = function (data) {
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
    BetUIHV.prototype.GameStart = function (data) {
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
    BetUIHV.prototype.BetResult = function (data) {
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
    BetUIHV.prototype.GameResult = function (data) {
        this.DisabledAllBtn();
        this.SetBetPos(this.lastBetPosMsg);
        this.cacheData.Status = Enum.GameStatus.SETTLE;
    };
    /**
     * 结算结果
     * @param data
     */
    BetUIHV.prototype.SettleResult = function (data) {
        //清除上一个注单投注成功的投注信息
        this.lastBetPosMsg = new Object();
        this.cacheData.TotalBet = new Object();
        this.cacheData.Status = Enum.GameStatus.SETTLEED;
        var language = new LanguageUtils.Language();
        this.guessSuccess = false;
        //总赢数目
        var win = 0;
        var gameResult = JSON.parse(data.GameResult);
        var card = Utils.Poker.GetNumber(gameResult.ThirdCard);
        var msg = new Array();
        for (var i in data.SettleResult) {
            if (Number(i) > 0 && Number(i) <= 13) {
                if (data.SettleResult[i] > 0) {
                    if (card == 7) {
                        var pos = Number(i);
                        if (Enum.BetPosType.BIG == pos) {
                            this.betBtnArr[Number(i) - 1].gray = false;
                            continue;
                        }
                        else if (Enum.BetPosType.SMALL == pos) {
                            this.betBtnArr[Number(i) - 1].gray = false;
                            continue;
                        }
                        else if (Enum.BetPosType.ODD == pos) {
                            this.betBtnArr[Number(i) - 1].gray = false;
                            continue;
                        }
                        else if (Enum.BetPosType.EVEN == pos) {
                            this.betBtnArr[Number(i) - 1].gray = false;
                            continue;
                        }
                    }
                    if (data.SettleResult[i] > 100) {
                        data.SettleResult[i] = Utils.Money.Format(data.SettleResult[i], 0);
                    }
                    this.betBtnArr[i].SetValue(data.SettleResult[i]);
                    this.betBtnArr[i].Refresh();
                    this.betBtnArr[i].GetUI().gray = false;
                    this.guessSuccess = true;
                }
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
    BetUIHV.prototype.ShowMsg = function (txt) {
        Laya.timer.clear(this, this.HideMsg);
        this.ui.MsgPanel.changeText(txt);
        this.ui.MsgPanel.visible = true;
        Laya.timer.once(2000, this, this.HideMsg);
    };
    /**
     * 隐藏提示信息
     */
    BetUIHV.prototype.HideMsg = function () {
        this.ui.MsgPanel.visible = false;
    };
    /**
     * 禁用所有按钮
     */
    BetUIHV.prototype.DisabledAllBtn = function () {
        this.DisabledBetBtn(true);
        this.DisabledBetPanel(true);
    };
    /**
     * 设置未投注成功的数据
     * @param noSureBetMsg
     */
    BetUIHV.prototype.SetNoBetPos = function (noSureBetMsg) {
        this.currentBetPosMsg = noSureBetMsg;
    };
    /**
     * 设置不同位置的投注金额
     */
    BetUIHV.prototype.SetBetPos = function (BetResultMsg, noSureBetMsg) {
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
    BetUIHV.prototype.DisabledBetBtn = function (disabled) {
        if (disabled === void 0) { disabled = true; }
        this.ui.ConfirmBetBtn.disabled = disabled;
        this.ui.CancleBetBtn.disabled = disabled;
    };
    /**
     * 禁用投注按钮
     * @param disabled 是否禁用
     */
    BetUIHV.prototype.DisabledBetPanel = function (disabled) {
        for (var i in this.betBtnArr) {
            this.betBtnArr[i].SetStatus(disabled);
        }
    };
    /**
     * 设置限额
     * @param limit
     */
    BetUIHV.prototype.SetLimit = function (limit) {
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
    BetUIHV.prototype.SetOdds = function (data) {
        for (var i in this.betBtnArr) {
            this.betBtnArr[i].SetOdds(data[i]);
            this.betBtnArr[i].Refresh();
        }
    };
    /**
     * 投注
     * @param data
     */
    BetUIHV.prototype.Bet = function (data) {
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
     * 切换筹码
     * @param i 筹码编号
     */
    BetUIHV.prototype.ChangeChip = function (i) {
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
    BetUIHV.prototype.CreateBetBtn = function (isVer) {
        var language = new LanguageUtils.Language();
        if (isVer) {
            for (var i = 1; i <= 13; i++) {
                var btnUI = new Bet.BetPos();
                btnUI.SetText(language.GetLanguage(Enum.BetPosType[i]));
                btnUI.SetType(1);
                btnUI.zOrder = 5;
                btnUI.Pos = i;
                this.betBtnArr[btnUI.Pos] = btnUI;
                switch (i) {
                    case 1:
                        btnUI.width = 470;
                        btnUI.height = 100;
                        btnUI.x = 281;
                        btnUI.y = 8;
                        break;
                    case 2:
                        btnUI.SetType(0);
                        btnUI.width = 155;
                        btnUI.height = 105;
                        btnUI.x = 441;
                        btnUI.y = 109;
                        break;
                    case 3:
                        btnUI.SetType(0);
                        btnUI.width = 155;
                        btnUI.height = 105;
                        btnUI.x = 441;
                        btnUI.y = 214;
                        break;
                    case 4:
                        btnUI.width = 235;
                        btnUI.height = 70;
                        btnUI.x = 281;
                        btnUI.y = 464;
                        break;
                    case 5:
                        btnUI.width = 235;
                        btnUI.height = 70;
                        btnUI.x = 517;
                        btnUI.y = 464;
                        break;
                    case 6:
                        btnUI.width = 235;
                        btnUI.height = 70;
                        btnUI.x = 281;
                        btnUI.y = 320;
                        break;
                    case 7:
                        btnUI.width = 235;
                        btnUI.height = 70;
                        btnUI.x = 517;
                        btnUI.y = 320;
                        break;
                    case 8:
                        btnUI.width = 235;
                        btnUI.height = 70;
                        btnUI.x = 281;
                        btnUI.y = 391;
                        break;
                    case 9:
                        btnUI.width = 235;
                        btnUI.height = 70;
                        btnUI.x = 517;
                        btnUI.y = 391;
                        break;
                    case 10:
                        btnUI.SetType(0);
                        btnUI.width = 155;
                        btnUI.height = 105;
                        btnUI.x = 281;
                        btnUI.y = 109;
                        break;
                    case 11:
                        btnUI.SetType(0);
                        btnUI.width = 155;
                        btnUI.height = 105;
                        btnUI.x = 593;
                        btnUI.y = 109;
                        break;
                    case 12:
                        btnUI.SetType(0);
                        btnUI.width = 155;
                        btnUI.height = 105;
                        btnUI.x = 281;
                        btnUI.y = 214;
                        break;
                    case 13:
                        btnUI.SetType(0);
                        btnUI.width = 155;
                        btnUI.height = 105;
                        btnUI.x = 593;
                        btnUI.y = 214;
                        break;
                    default:
                        break;
                }
                btnUI.Refresh();
                this.ui.BetBox.addChild(btnUI.GetUI());
            }
        }
        else {
            for (var i = 1; i <= 13; i++) {
                var btnUI = new Bet.BetPos();
                btnUI.SetText(language.GetLanguage(Enum.BetPosType[i]));
                btnUI.SetType(1);
                btnUI.zOrder = 5;
                btnUI.Pos = i;
                this.betBtnArr[btnUI.Pos] = btnUI;
                switch (i) {
                    case 1:
                        btnUI.SetType(0);
                        btnUI.width = 133;
                        btnUI.height = 130;
                        btnUI.x = 627;
                        btnUI.y = 22;
                        break;
                    case 2:
                        btnUI.width = 346;
                        btnUI.height = 65;
                        btnUI.x = 281;
                        btnUI.y = 22;
                        break;
                    case 3:
                        btnUI.width = 346;
                        btnUI.height = 65;
                        btnUI.x = 761;
                        btnUI.y = 22;
                        break;
                    case 4:
                        btnUI.SetType(0);
                        btnUI.width = 132;
                        btnUI.height = 95;
                        btnUI.x = 556;
                        btnUI.y = 156;
                        break;
                    case 5:
                        btnUI.SetType(0);
                        btnUI.width = 132;
                        btnUI.height = 95;
                        btnUI.x = 692;
                        btnUI.y = 156;
                        break;
                    case 6:
                        btnUI.SetType(0);
                        btnUI.width = 132;
                        btnUI.height = 95;
                        btnUI.x = 832;
                        btnUI.y = 156;
                        break;
                    case 7:
                        btnUI.SetType(0);
                        btnUI.width = 148;
                        btnUI.height = 95;
                        btnUI.x = 968;
                        btnUI.y = 156;
                        break;
                    case 8:
                        btnUI.SetType(0);
                        btnUI.width = 148;
                        btnUI.height = 95;
                        btnUI.x = 268;
                        btnUI.y = 156;
                        break;
                    case 9:
                        btnUI.SetType(0);
                        btnUI.width = 132;
                        btnUI.height = 95;
                        btnUI.x = 420;
                        btnUI.y = 156;
                        break;
                    case 10:
                        btnUI.width = 173;
                        btnUI.height = 65;
                        btnUI.x = 279;
                        btnUI.y = 90;
                        break;
                    case 11:
                        btnUI.width = 173;
                        btnUI.height = 65;
                        btnUI.x = 453;
                        btnUI.y = 90;
                        break;
                    case 12:
                        btnUI.width = 173;
                        btnUI.height = 65;
                        btnUI.x = 764;
                        btnUI.y = 90;
                        break;
                    case 13:
                        btnUI.width = 173;
                        btnUI.height = 65;
                        btnUI.x = 938;
                        btnUI.y = 90;
                        break;
                    default:
                        break;
                }
                btnUI.Refresh();
                this.ui.BetBox.addChild(btnUI.GetUI());
            }
        }
    };
    /**
     * 确认投注
     */
    BetUIHV.prototype.ConfirmBet = function () {
        this.DisabledBetBtn(true);
        this.broadcast.Type = Enum.ListenUIEnum.ConfirmBet;
        var event = new CustomEvent("GameUI", { detail: this.broadcast });
        document.dispatchEvent(event);
    };
    ;
    /**
     * 取消投注
     */
    BetUIHV.prototype.CancleBet = function () {
        this.DisabledBetBtn(true);
        this.SetBetPos(this.lastBetPosMsg);
        this.broadcast.Type = Enum.ListenUIEnum.CancelBet;
        var event = new CustomEvent("GameUI", { detail: this.broadcast });
        document.dispatchEvent(event);
    };
    ;
    /**
     * 筹码动画
     * @param endX 结束位置x坐标
     * @param endY 结束位置y坐标
     * @param curBetPosChip 投注位置上的筹码
     * @param value 投注金额
     * @param value 缓动后投注数量
     */
    BetUIHV.prototype.ChipsFly = function (data) {
        Utils.BackgroundMusic.PlaySounds("sound/bet.wav");
        var curBetPosChip = this.betBtnArr[data.Pos].GetUI().getChildAt(2);
        //从对象池获取移动对象
        var flyChip = Laya.Pool.getItemByClass("flyChip", Laya.Button);
        //设置状态数
        flyChip.stateNum = 1;
        flyChip.label = this.chipPrice.toString();
        flyChip.labelSize = 20;
        flyChip.labelColors = "#f00";
        flyChip.anchorX = 0.5;
        flyChip.anchorY = 0.5;
        flyChip.skin = this.chipsNormalSkin;
        this.ui.addChild(flyChip);
        //筹码动画
        var endX = (this.betBtnArr[data.Pos].GetUI().getChildAt(2).x + this.betBtnArr[data.Pos].x);
        var endY = this.betBtnArr[data.Pos].GetUI().getChildAt(2).localToGlobal(new Laya.Point(this.betBtnArr[data.Pos].GetUI().getChildAt(2).width / 2, this.betBtnArr[data.Pos].GetUI().getChildAt(2).height / 2));
        var obj = { x: endY.x, y: endY.y, scaleX: 1, scaleY: 1 };
        if (GameConfig.ScreenMode == ScreenStatus.Ver) {
            if (GameConfig.RatioType) {
                flyChip.scale(1.1 * GameConfig.LengthShort, 1.1);
                obj.scaleX = GameConfig.LengthShort;
            }
            else {
                flyChip.scale(1.1, 1.1 * GameConfig.ShortLength);
                obj.scaleY = GameConfig.ShortLength;
            }
        }
        else {
            if (GameConfig.RatioType) {
                flyChip.scale(1.1, 1.1 * GameConfig.LengthShort);
                obj.scaleY = GameConfig.LengthShort;
            }
            else {
                flyChip.scale(1.1 * GameConfig.ShortLength, 1.1);
                obj.scaleX = GameConfig.ShortLength;
            }
        }
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
    BetUIHV.prototype.ChipsFlyCallBack = function (flyChip, curBetPosChip, value) {
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
    return BetUIHV;
}(BetBaseUI));
//# sourceMappingURL=BetUIHV.js.map