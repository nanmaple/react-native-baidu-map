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
/// <reference path="../BetLogic/Bet/BetLogic.ts"/>
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
        this.ChangeMoney();
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
                this.betLogic.SetBetLimit(data.BaseAmounts, data.MaxBet, data.MinBet);
                break;
            case Enum.GameCommand.MsgGameStart: //游戏开始
                break;
            case Enum.GameCommand.MsgGameBetResult: //投注结果
                break;
            case Enum.GameCommand.MsgGameStopBet: //游戏停止投注
                break;
            case Enum.GameCommand.MsgGameGameResult: //游戏结果
                break;
            case Enum.GameCommand.MsgGameSettleResult: //游戏结算
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
    /********************* Socket *********************/
    /******************* 界面事件hander *****************/
    MainGameLogic.prototype.ViewHandler = function (Type, Data) {
        switch (Type) {
            case Enum.GameViewHandlerEnum.StartSocket:
                this.StartSocket();
                break;
            /**投注处理 */
            case Enum.GameViewHandlerEnum.BetPos:
                this.BetPos(Data);
                break;
            /**改变投注基数 */
            case Enum.GameViewHandlerEnum.ChangBaseAmount:
                this.ChangBaseAmount(Data);
                break;
            /**清除投注记录 */
            case Enum.GameViewHandlerEnum.ClearBet:
                this.betLogic.ClearBet();
                this.ChangeCurrBet();
                break;
            /**猜大小 */
            case Enum.GameViewHandlerEnum.GuessSize:
                this.GuessSize(Data);
                break;
            /**开始游戏 */
            case Enum.GameViewHandlerEnum.GameStart:
                this.GameStart();
                break;
            /**游戏结束 */
            case Enum.GameViewHandlerEnum.GameEnd:
                this.GameEnd();
                break;
            /**收获分数 */
            case Enum.GameViewHandlerEnum.GatherFraction:
                this.winAmount = 0;
                this.gameView.SetData(Enum.GameViewLogicEnum.ChangGameStatus, Enum.GameStatus.Default);
                this.ChangeMoney();
                break;
            /**添加猜大小金额 */
            case Enum.GameViewHandlerEnum.AddGuessSum:
                this.AddGuessSum();
                break;
            /**减小猜大小金额 */
            case Enum.GameViewHandlerEnum.ReduceGuessSum:
                this.ReduceGuessSum();
                break;
            /**猜大小结束 */
            case Enum.GameViewHandlerEnum.RandomEnd:
                this.RandomEnd();
                break;
            /**获取最新余额 */
            case Enum.GameViewHandlerEnum.GetBalance:
                this.GetNewBalance();
                break;
        }
    };
    /**修改头部金额 */
    MainGameLogic.prototype.ChangeMoney = function () {
        var dto = new Dto.AmountDto();
        dto.balance = this.GetBalance() - this.winAmount;
        dto.winAmount = this.winAmount;
        this.gameView.SetData(BaseEnum.GameViewLogicEnum.Balance, dto);
    };
    /**修改当前投注额*/
    MainGameLogic.prototype.ChangeCurrBet = function () {
        var sum = this.betLogic.GetBetScore();
        this.gameView.SetData(Enum.GameViewLogicEnum.ChangeCurrBet, sum);
    };
    /**
     * 投注
     * @param Data 投注位置
     */
    MainGameLogic.prototype.BetPos = function (data) {
        var betPos = Enum.BetPosTypeEnum[Enum.BetBtnPosEnum[data]];
        var result = this.betLogic.Bet(this.GetBalance(), betPos);
        if (result.success) {
            var BetPosAmount = new OnceBet.BetPosAmountDto();
            BetPosAmount.Pos = data;
            BetPosAmount.Amount = result.data;
            this.gameView.SetData(Enum.GameViewLogicEnum.BetSuccess, BetPosAmount);
            this.ChangeCurrBet();
        }
        else {
            this.gameView.SetData(BaseEnum.GameViewLogicEnum.Alert, result.data);
        }
    };
    /**
     * 修改投注基数
     * @param data 修改值 和 基础值
     */
    MainGameLogic.prototype.ChangBaseAmount = function (data) {
        var baseAmount = this.betLogic.ChangBaseAmount(this.GetBalance(), data);
        this.gameView.SetData(Enum.GameViewLogicEnum.ChangBaseAmount, baseAmount);
        this.ChangeCurrBet();
    };
    /**
     * 开始猜大小
     * @param data
     */
    MainGameLogic.prototype.GuessSize = function (data) {
        //游戏进行中 禁用按钮
        this.gameView.SetData(Enum.GameViewLogicEnum.ChangGameStatus, Enum.GameStatus.Execute);
        var guessDto = new OnceBet.BetDto();
        guessDto.Guess = data;
        guessDto.BaseAmount = this.winAmount;
        var guess = new Dto.HandlerDto();
        guess.Data = guessDto;
        this.SendData(guess);
    };
    /**开始游戏 */
    MainGameLogic.prototype.GameStart = function () {
        var BetScore = this.betLogic.GetBetScore();
        if (BetScore == 0)
            return;
        //游戏进行中 禁用按钮
        this.gameView.SetData(Enum.GameViewLogicEnum.ChangGameStatus, Enum.GameStatus.Execute);
        var betDto = this.betLogic.GetBetInfo();
        var HandlerDto = new Dto.HandlerDto();
        HandlerDto.Data = betDto;
        this.SendData(HandlerDto);
    };
    /**游戏滚动结束 */
    MainGameLogic.prototype.GameEnd = function () {
        //根据结果 显示不同的状态
        if (this.winAmount > 0) {
            this.gameView.SetData(Enum.GameViewLogicEnum.ChangGameStatus, Enum.GameStatus.Guess);
        }
        else {
            this.gameView.SetData(Enum.GameViewLogicEnum.ChangGameStatus, Enum.GameStatus.Default);
        }
        this.ChangeMoney();
    };
    /**增加猜大小金额 */
    MainGameLogic.prototype.AddGuessSum = function () {
        if (this.winAmount < this.maxGuessAmount) {
            if (this.GetBalance() < this.winAmount * 2) {
                this.winAmount = this.GetBalance();
            }
            else {
                this.winAmount *= 2;
            }
        }
        this.ChangeMoney();
    };
    /**减小猜大小金额 */
    MainGameLogic.prototype.ReduceGuessSum = function () {
        this.winAmount = Math.floor(this.winAmount / 2);
        //获取分回收完 切换成默认状态
        if (this.winAmount == 0) {
            this.gameView.SetData(Enum.GameViewLogicEnum.ChangGameStatus, Enum.GameStatus.Default);
        }
        this.ChangeMoney();
    };
    /**猜大小结束 */
    MainGameLogic.prototype.RandomEnd = function () {
        if (this.winAmount == 0) {
            this.gameView.SetData(Enum.GameViewLogicEnum.ChangGameStatus, Enum.GameStatus.Default);
        }
        else {
            this.gameView.SetData(Enum.GameViewLogicEnum.ChangGameStatus, Enum.GameStatus.Guess);
        }
        this.ChangeMoney();
    };
    /**获取最新余额 */
    MainGameLogic.prototype.GetNewBalance = function () {
        var _this = this;
        var loginService = new Laya.Browser.window.LoginService(Network.Http, Utils.Storage, function () {
            var memberInfo = loginService.GetMemberInfoByLocal();
            _this.ChangeMoney();
        });
        //获取会员信息
        loginService.GetMemberInfo(true);
    };
    return MainGameLogic;
}(BaseGameLogic));
//# sourceMappingURL=MainGameLogic.js.map