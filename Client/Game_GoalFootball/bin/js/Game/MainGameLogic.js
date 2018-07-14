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
var MainGameLogic = /** @class */ (function (_super) {
    __extends(MainGameLogic, _super);
    function MainGameLogic() {
        var _this = _super.call(this) || this;
        /**
         * 投注信息
         */
        _this.betInfo = new Dto.BetInfoDto();
        //初始化时创建GameViwLogic,注入Handler
        _this.gameView = new GameViewLogic(Laya.Handler.create(_this, _this.ViewHandler, null, false));
        return _this;
    }
    /**
     * 登录完成
     */
    MainGameLogic.prototype.LoginComplete = function () {
        // let memberInfo: BaseDto.MemberInfoDto = this.GetMemberInfo();
        // // //启用微信分享
        // WeChatModule.InitWeChat(memberInfo.MemberId);
        // // //获取授权地址
        // WeChatModule.GetWeChatUrl(Utils.GetQuery("parentid"),true);
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
                this.SetBalance(data.Balance);
                this.betInfo.betAmount = this.betInfo.betAmount ? this.betInfo.betAmount : data.BaseAmounts[0];
                this.betInfo.MaxBet = data.MaxBet;
                this.betInfo.MinBet = data.MinBet;
                this.SetBetTotalAmount();
                break;
            case Enum.GameCommand.MsgGameSettleResult: //结算结果
                this.SetBalance(data.Balance);
                break;
            default:
                break;
        }
        response.Data = data;
        this.gameView.SetData(BaseEnum.GameViewLogicEnum.GameData, response);
    };
    ;
    /**
     * Ack回调
     * @param data ack信息，一般为之前发送信息的消息id
     */
    MainGameLogic.prototype.OnAckHandler = function (data) {
        this.Log(data, "OnAckHandler");
    };
    ;
    /**
     * 发送消息
     * @param dto
     */
    MainGameLogic.prototype.SendData = function (dto) {
        var msgID = dto.MsgID ? dto.MsgID : Utils.Guid.Create();
        this.Log({ Data: dto.Data, msgID: msgID }, "SendHandelr");
        //组装游戏命令Dto
        var gameDto = new Dto.GameMessageDto();
        gameDto.Command = Enum.GameCommand.MsgGameStart;
        gameDto.Data = dto.Data;
        this.Send(gameDto, msgID);
    };
    /**
     * 设置总投注额
     */
    MainGameLogic.prototype.SetBetTotalAmount = function () {
        var propAmount = this.betInfo.betAmount / 5;
        this.betInfo.propTotalAmount = 0;
        for (var index = 0; index < 3; index++) {
            if (this.betInfo.propStatus[index] == 1) {
                this.betInfo.propTotalAmount += propAmount;
            }
        }
        this.betInfo.betTotalAmount = this.betInfo.betAmount + this.betInfo.propTotalAmount;
    };
    /**
     * 投注处理
     */
    MainGameLogic.prototype.BetPos = function () {
        if (this.betInfo.betTotalAmount > this.GetBalance()) {
            this.gameView.SetData(Enum.GameViewLogicEnum.BetPosError, "BALANCE_SMALL");
        }
        else if (this.betInfo.betTotalAmount < this.betInfo.MinBet) {
            this.gameView.SetData(Enum.GameViewLogicEnum.BetPosError, "LOW_LIMIT");
        }
        else if (this.betInfo.betTotalAmount > this.betInfo.MaxBet) {
            this.gameView.SetData(Enum.GameViewLogicEnum.BetPosError, "OVER_LIMIT");
        }
        else {
            var gameBet = new Dto.GameBetDto();
            var handlerDto = new Dto.HandlerDto();
            gameBet.Amount = this.betInfo.betAmount;
            gameBet.Props = this.betInfo.propStatus;
            handlerDto.Data = gameBet;
            this.SendData(handlerDto);
            var balance = this.GetBalance();
            this.gameView.SetData(Enum.GameViewLogicEnum.ChangMoney, balance - this.betInfo.betTotalAmount);
        }
    };
    /********************* Socket *********************/
    /******************* 界面事件hander *****************/
    MainGameLogic.prototype.ViewHandler = function (Type, Data) {
        switch (Type) {
            case Enum.GameViewHandlerEnum.StartSocket:
                this.StartSocket();
                break;
            case Enum.GameViewHandlerEnum.BetPos:
                this.BetPos();
                break;
            case Enum.GameViewHandlerEnum.ChooseChip:
                this.betInfo.betAmount = Data;
                this.SetBetTotalAmount();
                this.gameView.SetData(Enum.GameViewLogicEnum.ChooseChip, this.betInfo);
                break;
            case Enum.GameViewHandlerEnum.ChooseMaxChip:
                var maxChip = Math.floor(this.GetBalance());
                this.gameView.SetData(Enum.GameViewLogicEnum.ChooseMaxChip, maxChip);
                break;
            case Enum.GameViewHandlerEnum.ChooseProp:
                this.betInfo.propStatus[Data] = 1;
                this.SetBetTotalAmount();
                this.gameView.SetData(Enum.GameViewLogicEnum.ChooseProp, this.betInfo);
                break;
            case Enum.GameViewHandlerEnum.GameResult:
                this.betInfo.propStatus = [0, 0, 0];
                this.SetBetTotalAmount();
                this.gameView.SetData(Enum.GameViewLogicEnum.GameResult, null);
                break;
            case Enum.GameViewHandlerEnum.GetBalance:
                this.GetBalanceByService();
                break;
        }
    };
    return MainGameLogic;
}(BaseGameLogic));
//# sourceMappingURL=MainGameLogic.js.map