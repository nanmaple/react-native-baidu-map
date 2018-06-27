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
        this.SetOdds(data.Odds);
        if (data.Status == Enum.GameStatus.DEFAULT || data.Status == Enum.GameStatus.SETTLE) {
            this.DisabledAllBtn();
        }
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
    return BetUIHV;
}(BetBaseUI));
//# sourceMappingURL=BetUIHV.js.map