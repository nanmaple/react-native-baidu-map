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
/// <reference path="../GameFrame/Logic/Bet/BetLogic.ts"/>
var MainGameLogic = /** @class */ (function (_super) {
    __extends(MainGameLogic, _super);
    function MainGameLogic() {
        var _this = _super.call(this) || this;
        /**获得分数 */
        _this.winAmount = 0;
        /**最大可竞猜分数 */
        _this.maxGuessAmount = 0;
        //初始化时创建GameViwLogic,注入Handler
        _this.gameView = new GameViewLogic(Laya.Handler.create(_this, _this.ViewHandler, null, false));
        _this.betLogic = new OnceBet.BetLogic();
        return _this;
    }
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
            case Enum.GameCommand.MSG_GAME_INIT: //初始化
                // if (data.Status == Enum.GameStatus.BET && !this.IsMemberClose()) {
                //初始化，同步服务器的投注成功的数据
                // this.betLogic.SetBetSuccessData(data.TotalBet);
                // }
                break;
            case Enum.GameCommand.MSG_GAME_START: //游戏开始
                break;
            case Enum.GameCommand.MSG_GAME_BETRESULT: //投注结果
                break;
            case Enum.GameCommand.MSG_GAME_STOPBET: //游戏停止投注
                break;
            case Enum.GameCommand.MSG_GAME_GAMERESULT: //游戏结果
                break;
            case Enum.GameCommand.MSG_GAME_SETTLERESULT: //游戏结算
                //游戏结算，重置之前投注数据
                if (response.Data.Status == Enum.BetResultCode.Success) {
                    this.SetBalance(response.Data.Balance);
                    this.winAmount = response.Data.WinAmount;
                    this.maxGuessAmount = this.winAmount * 2;
                }
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
        // this.betLogic.BetAck(data);
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
        gameDto.Command = Enum.GameCommand.MSG_GAME_START;
        gameDto.Data = dto.Data;
        // this.betLogic.SetMsgID(msgID);
        this.Send(gameDto, msgID);
    };
    /********************* Socket *********************/
    /******************* 界面事件hander *****************/
    MainGameLogic.prototype.ViewHandler = function (Type, Data) {
        switch (Type) {
            case Enum.GameViewHandlerEnum.StartSocket:
                this.StartSocket();
                break;
            /**投注处理 */
            case Enum.GameViewHandlerEnum.BetPos:
                var betPos = Enum.BetPosTypeEnum[Enum.BetBtnPosEnum[Data]];
                var result = this.betLogic.Bet(this.GetBalance(), betPos);
                if (result.success) {
                    var BetPosAmount = new OnceBet.BetPosAmountDto();
                    BetPosAmount.Pos = Data;
                    BetPosAmount.Amount = result.data;
                    this.gameView.SetData(Enum.GameViewLogicEnum.BetSuccess, BetPosAmount);
                    // this.ChangeMoney();
                    this.ChangeCurrBet();
                }
                else {
                    this.gameView.SetData(BaseEnum.GameViewLogicEnum.Alert, result.data);
                }
                // let requestParams: IRequestParams = {
                //     Type: "Get",
                //     Params: {},
                //     Url: "sss",
                // }
                // this.Request(requestParams, (response: any) => { }, (error: any) => { });
                break;
            /**改变投注基数 */
            case Enum.GameViewHandlerEnum.ChangBaseAmount:
                var baseAmount = this.betLogic.ChangBaseAmount(this.GetBalance(), Data);
                this.gameView.SetData(Enum.GameViewLogicEnum.ChangBaseAmount, baseAmount);
                // this.ChangeMoney();
                this.ChangeCurrBet();
                break;
            /**清除投注记录 */
            case Enum.GameViewHandlerEnum.ClearBet:
                this.betLogic.ClearBet();
                // this.ChangeMoney();
                this.ChangeCurrBet();
                break;
            /**猜大小 */
            case Enum.GameViewHandlerEnum.GuessSize:
                //游戏进行中 禁用按钮
                this.gameView.SetData(Enum.GameViewLogicEnum.ChangGameStatus, Enum.GameStatus.EXECUTE);
                var guessDto = new OnceBet.BetDto();
                guessDto.Guess = Data;
                guessDto.BaseAmount = this.winAmount;
                var guess = new Dto.HandlerDto();
                guess.Data = guessDto;
                this.SendData(guess);
                break;
            /**开始游戏 */
            case Enum.GameViewHandlerEnum.GameStart:
                var BetScore = this.betLogic.GetBetScore();
                if (BetScore == 0)
                    return;
                // if(BetScore > this.GetBalance()){
                //     this.gameView.SetData(BaseEnum.GameViewLogicEnum.Alert, '余额不足');
                //     return;
                // }
                //游戏进行中 禁用按钮
                this.gameView.SetData(Enum.GameViewLogicEnum.ChangGameStatus, Enum.GameStatus.EXECUTE);
                var betDto = this.betLogic.GetBetInfo();
                var HandlerDto = new Dto.HandlerDto();
                HandlerDto.Data = betDto;
                this.SendData(HandlerDto);
                break;
            /**游戏结束 */
            case Enum.GameViewHandlerEnum.GameEnd:
                //根据结果 显示不同的状态
                if (this.winAmount > 0) {
                    this.gameView.SetData(Enum.GameViewLogicEnum.ChangGameStatus, Enum.GameStatus.GUESS);
                }
                else {
                    this.gameView.SetData(Enum.GameViewLogicEnum.ChangGameStatus, Enum.GameStatus.DEFAULT);
                }
                // this.gameView.SetData(Enum.GameViewLogicEnum.GameEnd,null);
                this.ChangeMoney();
                break;
            /**收获分数 */
            case Enum.GameViewHandlerEnum.GatherFraction:
                this.winAmount = 0;
                //收分 后切换成默认状态
                this.gameView.SetData(Enum.GameViewLogicEnum.ChangGameStatus, Enum.GameStatus.DEFAULT);
                this.ChangeMoney();
                break;
            /**添加猜大小金额 */
            case Enum.GameViewHandlerEnum.AddGuessSum:
                if (this.GetBalance() <= this.maxGuessAmount) {
                    this.winAmount = this.GetBalance();
                }
                else if (this.winAmount < this.maxGuessAmount) { //必须小于获取的2倍
                    this.winAmount *= 2;
                    if (this.winAmount > this.maxGuessAmount)
                        this.winAmount = this.maxGuessAmount;
                }
                this.ChangeMoney();
                break;
            /**减小猜大小金额 */
            case Enum.GameViewHandlerEnum.ReduceGuessSum:
                this.winAmount = Math.floor(this.winAmount / 2);
                //获取分回收完 切换成默认状态
                if (this.winAmount == 0) {
                    this.gameView.SetData(Enum.GameViewLogicEnum.ChangGameStatus, Enum.GameStatus.DEFAULT);
                }
                this.ChangeMoney();
                break;
            /**猜大小结束 */
            case Enum.GameViewHandlerEnum.RandomEnd:
                if (this.winAmount == 0) {
                    this.gameView.SetData(Enum.GameViewLogicEnum.ChangGameStatus, Enum.GameStatus.DEFAULT);
                }
                else {
                    this.gameView.SetData(Enum.GameViewLogicEnum.ChangGameStatus, Enum.GameStatus.GUESS);
                }
                this.ChangeMoney();
                break;
            case Enum.GameViewHandlerEnum.GetMemberInfo:
                var memberInfo = this.GetMemberInfo();
                var isTourists = this.IsTourist();
                this.gameView.SetData(Enum.GameViewLogicEnum.GetMemberInfo, { memberInfo: memberInfo, isTourists: isTourists });
                break;
        }
    };
    /**修改头部金额 */
    MainGameLogic.prototype.ChangeMoney = function () {
        var dto = new Dto.AmountDto();
        dto.balance = this.GetBalance() - this.winAmount;
        dto.winAmount = this.winAmount;
        this.gameView.SetData(Enum.GameViewLogicEnum.ChangMoney, dto);
    };
    /**修改当前投注额*/
    MainGameLogic.prototype.ChangeCurrBet = function () {
        var sum = this.betLogic.GetBetScore();
        this.gameView.SetData(Enum.GameViewLogicEnum.ChangeCurrBet, sum);
    };
    return MainGameLogic;
}(BaseGameLogic));
//# sourceMappingURL=MainGameLogic.js.map