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
/// <reference path="../GameFrame/BaseGameLogic/index.ts"/>
/// <reference path="../BetLogic/MulBet/MulBetLogic.ts"/>
var MainGameLogic = /** @class */ (function (_super) {
    __extends(MainGameLogic, _super);
    function MainGameLogic() {
        var _this = _super.call(this) || this;
        //初始化时创建GameViwLogic,注入Handler
        _this.gameView = new GameViewLogic(Laya.Handler.create(_this, _this.ViewHandler));
        _this.betLogic = new MulBet.MulBetLogic();
        return _this;
    }
    /**
     * 登录完成
     */
    MainGameLogic.prototype.LoginComplete = function () {
        // let memberInfo: BaseDto.MemberInfoDto = this.GetMemberInfo();
        // //启用微信分享
        // WeChatModule.InitWeChat(memberInfo.MemberId);
        // //获取授权地址
        // WeChatModule.GetWeChatUrl(Utils.GetQuery("parentid"),true);
        // //从服务器获取余额
        // this.GetBalanceByService();
    };
    /**
     * 从服务器获取分数成功
     * @param balance 余额
     */
    MainGameLogic.prototype.GetBalanceComplete = function (balance) {
        //通知余额
        this.gameView.SetData(BaseEnum.GameViewLogicEnum.Balance, balance);
    };
    /**
    * 侦听Socket连接事件
    */
    MainGameLogic.prototype.OnNoNetwork = function () {
        this.Log("", "OnNoNetwork");
    };
    ;
    /**
     * 侦听Socket连接事件
     */
    MainGameLogic.prototype.OnConnectHandler = function () {
        this.Log("", "OnConnectHandler");
    };
    ;
    /**
     * 侦听Socket关闭事件
     */
    MainGameLogic.prototype.OnCloseHandler = function (message) {
        this.Log("", "OnCloseHandler");
    };
    ;
    /**
     * 侦听会员状态关闭事件
     */
    MainGameLogic.prototype.OnMemberCloseHandler = function () {
        this.Log("", "OnMemberCloseHandler");
    };
    ;
    /**
     * 侦听Socket错误事件
     * @param message 错误信息
     */
    MainGameLogic.prototype.OnErrorHandler = function (message) {
        this.Log(message, "OnErrorHandler");
    };
    ;
    /**
     * 侦听Socket重新连接事件
     */
    MainGameLogic.prototype.OnWillReconnectHandler = function () {
        this.Log("", "OnWillReconnectHandler");
    };
    ;
    /**
     * 侦听登出事件
     */
    MainGameLogic.prototype.OnLogoutHandler = function () {
        this.Log("", "OnLogoutHandler");
    };
    ;
    /**
     * 系统推送（预留）
     * @param data
     */
    MainGameLogic.prototype.OnSystemPushHandler = function (data) {
        this.Log(data, "OnSystemPushHandler");
    };
    ;
    /**
     * 侦听游戏命令
     * @param data
     */
    MainGameLogic.prototype.OnMessageHandler = function (response) {
        var data = response.Data;
        this.Log(data, "OnMessageHandler");
        switch (response.Command) {
            case Enum.GameCommand.MsgGameInit: //初始化
                if (data.Status == Enum.GameStatus.Bet && !this.IsMemberClose()) {
                    //初始化，同步服务器的投注成功的数据
                    this.betLogic.SetBetSuccessData(data.TotalBet);
                }
                break;
            case Enum.GameCommand.MsgGameStart: //游戏开始
                this.betLogic.SetNewRound();
                break;
            case Enum.GameCommand.MsgGameBetResult: //投注结果
                if (data.Success) {
                    //同步服务器的投注结果的数据
                    this.betLogic.SetBetSuccessData(data.TotalBet);
                }
                break;
            case Enum.GameCommand.MsgGameStopBet: //游戏停止投注
                break;
            case Enum.GameCommand.MsgGameResult: //游戏结果
                this.betLogic.ResetData();
                break;
            case Enum.GameCommand.MsgGameSettleResult: //游戏结算
                //游戏结算，重置之前投注数据
                this.betLogic.SetBetSuccessData();
                this.SetBalance(response.Data.Balance);
                this.gameView.SetData(Enum.GameViewLogicEnum.ChangMoney, this.GetBalance());
                break;
            default:
                break;
        }
        this.gameView.SetData(BaseEnum.GameViewLogicEnum.GameData, response);
    };
    ;
    /**
     * Ack回调
     * @param data ack信息，一般为之前发送信息的消息id
     */
    MainGameLogic.prototype.OnAckHandler = function (data) {
        this.Log(data, "OnAckHandler");
        this.betLogic.BetAck(data);
    };
    ;
    /**
     * 发送消息回调
     * @param dto
     */
    MainGameLogic.prototype.SendHandler = function (dto) {
        var msgID = dto.MsgID ? dto.MsgID : Utils.Guid.Create();
        this.Log({ Data: dto.Data, msgID: msgID }, "SendHandelr");
        //组装游戏命令Dto
        var gameDto = new Dto.GameMessageDto();
        gameDto.Command = Enum.GameCommand.MsgGameBet;
        gameDto.Data = dto.Data;
        this.betLogic.SetMsgID(msgID);
        this.Send(gameDto, msgID);
    };
    /********************* Socket *********************/
    /******************* 界面事件hander *****************/
    MainGameLogic.prototype.ViewHandler = function (Type, Data) {
        switch (Type) {
            case Enum.GameViewHandlerEnum.BetPos:
                var result = this.betLogic.Bet(this.GetBalance(), Data);
                if (result.success) {
                    var BetPosAmount = new MulBet.BetPosAmountDto();
                    BetPosAmount.Pos = Data.Pos;
                    BetPosAmount.Amount = result.data;
                    this.gameView.SetData(Enum.GameViewLogicEnum.BetPos, BetPosAmount);
                    var money = this.GetBalance() - this.betLogic.GetBetScore();
                    this.gameView.SetData(Enum.GameViewLogicEnum.ChangMoney, money);
                }
                else {
                    this.gameView.SetData(BaseEnum.GameViewLogicEnum.Alert, result.data);
                }
                var requestParams = {
                    Type: "Get",
                    Params: {},
                    Url: "sss",
                };
                this.Request(requestParams, function (response) { }, function (error) { });
                break;
            case Enum.GameViewHandlerEnum.GetMemberInfo:
                var memberInfo = this.GetMemberInfo();
                var isTourists = this.IsTourist();
                this.gameView.SetData(Enum.GameViewLogicEnum.GetMemberInfo, { memberInfo: memberInfo, isTourists: isTourists });
                break;
        }
    };
    return MainGameLogic;
}(BaseGameLogic));
//# sourceMappingURL=MainGameLogic.js.map