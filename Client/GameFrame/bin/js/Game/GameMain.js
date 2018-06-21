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
    GameMain.prototype.GameMain = function () {
    };
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
     * 侦听游戏命令
     * @param data
     */
    GameMain.prototype.OnMessageHandler = function (response) {
        var data = response.Data;
        this.Log(data, "OnMessageHandler");
        this.GameView.SetData(GameEnum.GameViewEnum.GameData, response);
        switch (response.Command) {
            case GameEnum.GameCommand.MSG_GAME_INIT: //初始化
                break;
            case GameEnum.GameCommand.MSG_GAME_START: //游戏开始
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
                break;
            default:
                break;
        }
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
     * Ack回调
     * @param data ack信息，一般为之前发送信息的消息id
     */
    GameMain.prototype.OnAckHandler = function (data) {
        this.Log(data, "OnAckHandler");
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
     * 发送消息回调
     * @param dto
     */
    GameMain.prototype.SendHandelr = function (dto) {
        var msgID = dto.MsgID ? dto.MsgID : Utils.Guid.Create();
        this.Log({ Data: dto.Data, msgID: msgID }, "OnSystemPushHandler");
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
        switch (Type) {
            case Enum.GameViewHandlerEnum.BetPos:
                var result = this.Bet(Data);
                if (result.success) {
                    var BetPosAmount = new Bet.BetPosAmountDto();
                    BetPosAmount.Pos = Data.Pos;
                    BetPosAmount.Amount = result.data;
                    this.GameView.SetData(GameEnum.GameViewEnum.BetPos, BetPosAmount);
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
        }
    };
    return GameMain;
}(GameManager));
//# sourceMappingURL=GameMain.js.map