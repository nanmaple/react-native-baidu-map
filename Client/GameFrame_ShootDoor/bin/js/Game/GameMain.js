/// <reference path="../GameFrame/GameManager/index.ts"/>
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
var GameMain = /** @class */ (function (_super) {
    __extends(GameMain, _super);
    function GameMain() {
        var _this = _super.call(this) || this;
        _this.socketUrl = null;
        return _this;
    }
    /**
    * 侦听Socket连接事件
    */
    GameMain.prototype.OnNoNetwork = function () {
        this.Log("", "OnNoNetwork");
    };
    ;
    /**
     * 侦听Socket连接事件
     */
    GameMain.prototype.OnConnectHandler = function () {
        this.Log("", "OnConnectHandler");
    };
    ;
    /**
     * 侦听Socket关闭事件
     */
    GameMain.prototype.OnCloseHandler = function (message) {
        this.Log("", "OnCloseHandler");
    };
    ;
    /**
     * 侦听会员状态关闭事件
     */
    GameMain.prototype.OnMemberCloseHandler = function () {
        this.Log("", "OnMemberCloseHandler");
    };
    ;
    /**
     * 侦听Socket错误事件
     * @param message 错误信息
     */
    GameMain.prototype.OnErrorHandler = function (message) {
        this.Log(message, "OnErrorHandler");
    };
    ;
    /**
     * 侦听Socket重新连接事件
     */
    GameMain.prototype.OnWillReconnectHandler = function () {
        this.Log("", "OnWillReconnectHandler");
    };
    ;
    /**
     * 侦听登出事件
     */
    GameMain.prototype.OnLogoutHandler = function () {
        this.Log("", "OnLogoutHandler");
    };
    ;
    /**
     * 系统推送（预留）
     * @param data
     */
    GameMain.prototype.OnSystemPushHandler = function (data) {
        this.Log(data, "OnSystemPushHandler");
    };
    ;
    /**
     * 侦听游戏命令
     * @param data
     */
    GameMain.prototype.OnMessageHandler = function (response) {
        var data = response.Data;
        this.Log(data, "OnMessageHandler");
        switch (response.Command) {
            case GameEnum.GameCommand.MSG_GAME_INIT: //初始化
                if (data.Status == Enum.GameStatus.BET && !this.Authorization.IsClose) {
                    this.BetInfo.BetSuccessData = data.TotalBet;
                }
                break;
            case GameEnum.GameCommand.MSG_GAME_START: //游戏开始
                this.BetInfo.BetSuccessData = new Object();
                this.BetInfo.NoBetSuceessData = new Object();
                this.BetInfo.BetSocre = 0;
                break;
            case GameEnum.GameCommand.MSG_GAME_BETRESULT: //投注结果
                if (data.Success) {
                    this.BetInfo.BetSuccessData = data.TotalBet;
                }
                break;
            case GameEnum.GameCommand.MSG_GAME_STOPBET: //游戏停止投注
                break;
            case GameEnum.GameCommand.MSG_GAME_GAMERESULT: //游戏结果
                this.BetInfo.NoBetSuceessData = new Object();
                this.BetInfo.BetSocre = 0;
                this.BetInfo.BetingSocre = 0;
                this.BetInfo.SendingBetData = new Object();
                break;
            case GameEnum.GameCommand.MSG_GAME_SETTLERESULT: //游戏结算
                this.BetInfo.BetSuccessData = new Object();
                this.MemberInfo.Score = response.Data.Balance;
                break;
            default:
                break;
        }
        this.GameView.SetData(GameEnum.GameViewEnum.GameData, response);
    };
    ;
    /**
     * Ack回调
     * @param data ack信息，一般为之前发送信息的消息id
     */
    GameMain.prototype.OnAckHandler = function (data) {
        this.Log(data, "OnAckHandler");
        this.betLogic.BetAck(data, this.BetInfo);
    };
    ;
    /**
     * 发送消息回调
     * @param dto
     */
    GameMain.prototype.SendHandelr = function (dto) {
        var msgID = dto.MsgID ? dto.MsgID : Utils.Guid.Create();
        this.Log({ Data: dto.Data, msgID: msgID }, "SendHandelr");
        //组装游戏命令Dto
        var gameDto = new Dto.GameMessageDto();
        gameDto.Command = GameEnum.GameCommand.MSG_GAME_BET;
        gameDto.Data = dto.Data;
        this.betLogic.SetMsgID(msgID, this.BetInfo);
        this.Send(gameDto, msgID);
    };
    /********************* Socket *********************/
    /******************* 界面事件hander *****************/
    GameMain.prototype.Handler = function (Type, Data) {
        var _this = this;
        switch (Type) {
            case Enum.GameViewHandlerEnum.BetPos:
                var result = this.Bet(Data);
                if (result.success) {
                    var BetPosAmount = new Bet.BetPosAmountDto();
                    BetPosAmount.Pos = Data.Pos;
                    BetPosAmount.Amount = result.data;
                    this.GameView.SetData(GameEnum.GameViewEnum.BetPos, BetPosAmount);
                    var money_1 = this.MemberInfo.Score - (this.BetInfo.BetSocre + this.BetInfo.BetingSocre);
                    this.GameView.SetData(GameEnum.GameViewEnum.ChangMoney, money_1);
                }
                else {
                    this.GameView.SetData(GameEnum.GameViewEnum.Alert, result.data);
                }
                break;
            case Enum.GameViewHandlerEnum.ConfirmBet:
                var betRes = this.betLogic.ConfirmBet(this.BetInfo);
                if (betRes) {
                    this.SendHandelr(betRes);
                }
                break;
            case Enum.GameViewHandlerEnum.CancelBet:
                this.betLogic.RetractBet(this.BetInfo);
                var money = this.MemberInfo.Score - (this.BetInfo.BetSocre + this.BetInfo.BetingSocre);
                this.GameView.SetData(GameEnum.GameViewEnum.ChangMoney, money);
                break;
            case Enum.GameViewHandlerEnum.GetNoBetSucData:
                this.GameView.GetNoBetPos(this.BetInfo.NoBetSuceessData);
                break;
            case Enum.GameViewHandlerEnum.GetBetRecord:
                this.WebApi.Post(Net.ApiConfig.GetBetRecord, Data, null, function (response) {
                    if (response.Result == GameEnum.ErrorCode.Success) {
                        var dto = new Dto.HandlerDto();
                        dto.Data = response.Data;
                        _this.GameView.SetData(GameEnum.GameViewEnum.SetRecord, dto);
                    }
                }, function (error) { console.log(error); });
                break;
            case Enum.GameViewHandlerEnum.ChangeMoney:
                var loginService_1 = new Laya.Browser.window.LoginService(Utils.Http, Utils.Storage, function () {
                    var memberInfo = loginService_1.GetMemberInfoByLocal();
                    var money = memberInfo.Score - (_this.BetInfo.BetSocre + _this.BetInfo.BetingSocre);
                    _this.GameView.SetData(GameEnum.GameViewEnum.ChangMoney, money);
                });
                //获取会员信息
                loginService_1.GetMemberInfo(true);
                break;
            case Enum.GameViewHandlerEnum.GetMemberInfo:
                var memberInfo = this.MemberInfo;
                var isTourists = this.Authorization.IsTourists;
                this.GameView.SetData(GameEnum.GameViewEnum.GetMemberInfo, { memberInfo: memberInfo, isTourists: isTourists });
                break;
        }
    };
    return GameMain;
}(GameManager));
//# sourceMappingURL=GameMain.js.map