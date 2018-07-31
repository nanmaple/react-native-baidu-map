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
/**
 * 主游戏逻辑
 */
/// <reference path="../GameFrame/BaseGameLogic/index.ts"/>
/// <reference path="../BetLogic/MulBet/MulBetLogic.ts"/>
var MainGameLogic = (function (_super) {
    __extends(MainGameLogic, _super);
    function MainGameLogic() {
        var _this = _super.call(this) || this;
        /**
         * 投注信息
         */
        _this.betInfo = new Dto.BetInfoDto();
        /**
         * 请求参数
         */
        _this.requestParams = {
            Type: "Post",
            Url: null,
            Params: null,
            Header: null,
        };
        /**
         * 获取游戏记录成功
         * @param data
         */
        _this.GetRecordSuccess = function (data) {
            if (data && data.length > 0) {
                _this.betRecordParamsDto.LastId = data[data.length - 1].Id;
            }
            _this.gameView.SetData(Enum.GameViewLogicEnum.GetRecord, data);
        };
        /**
         * 获取游戏记录失败
         * @param data
         */
        _this.GetRecordFail = function (error) {
            _this.gameView.SetData(Enum.GameViewLogicEnum.GetRecord, null);
        };
        _this.betLogic = new MulBet.MulBetLogic();
        _this.betRecordParamsDto = new Dto.BetRecordParamsDto();
        _this.betRecordParamsDto.GameId = GameConfig.GameID;
        _this.betRecordParamsDto.PageSize = 10;
        return _this;
    }
    /**
     * 登录完成
     * -->抽象方法实现，方面中逻辑可修改<--
     */
    MainGameLogic.prototype.LoginComplete = function () {
        //↓↓↓↓微信功能启用↓↓↓↓
        // let memberInfo: BaseDto.MemberInfoDto = this.GetMemberInfo();
        // //启用微信分享
        // WeChatModule.InitWeChat(memberInfo.MemberId);
        // //获取授权地址
        // WeChatModule.GetWeChatUrl(Utils.GetQuery("parentid"),true);
        // //从服务器获取余额
        // this.GetBalanceByService();
        //↑↑↑↑微信功能启用↑↑↑↑
    };
    /**
     * 从服务器获取分数成功
     * -->抽象方法实现，方面中逻辑可修改<--
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
            case Enum.GameCommand.MsgGameInit:
                this.SetBalance(data.Balance);
                this.betInfo.betAmount = this.betInfo.betAmount ? this.betInfo.betAmount : data.MinBet;
                this.betInfo.MaxBet = data.MaxBet;
                this.betInfo.MinBet = data.MinBet;
                break;
            case Enum.GameCommand.MsgGameSettleResult:
                //游戏结算，重置之前投注数据
                if (data.Status == Enum.BetErrorCode.Success) {
                    this.SetBalance(response.Data.Balance);
                }
                else {
                    this.gameView.SetData(BaseEnum.GameViewLogicEnum.Error, Enum.BetErrorCode[data.Status]);
                }
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
     * -->发送逻辑，可适当添加投注回调处理<--
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
     * 投注处理
     *  -->投注逻辑，可适当添加投注额大小判断<--
     */
    MainGameLogic.prototype.BetPos = function () {
        if (this.betInfo.betAmount > this.GetBalance()) {
            this.gameView.SetData(Enum.GameViewLogicEnum.BetPosError, "BalanceSmall");
        }
        else if (this.betInfo.betAmount < this.betInfo.MinBet) {
            this.gameView.SetData(Enum.GameViewLogicEnum.BetPosError, "LowLimit");
        }
        else if (this.betInfo.betAmount > this.betInfo.MaxBet) {
            this.gameView.SetData(Enum.GameViewLogicEnum.BetPosError, "OverLimit");
        }
        else {
            var gameBet = new Dto.GameBetDto();
            gameBet.Amount = this.betInfo.betAmount;
            var handlerDto = new Dto.HandlerDto();
            handlerDto.Data = gameBet;
            this.SendData(handlerDto);
            var balance = this.GetBalance() - this.betInfo.betAmount;
            this.gameView.SetData(Enum.GameViewLogicEnum.ChangMoney, balance);
        }
    };
    /**
     * 获取游戏记录
     */
    MainGameLogic.prototype.GetGameRecord = function (refresh) {
        if (refresh) {
            this.betRecordParamsDto.LastId = null;
        }
        this.requestParams.Params = this.betRecordParamsDto;
        this.requestParams.Url = ApiConfig.GetBetRecord;
        this.Request(this.requestParams, this.GetRecordSuccess, this.GetRecordFail);
    };
    /********************* Socket *********************/
    /******************* 界面事件hander *****************/
    MainGameLogic.prototype.ViewHandler = function (Type, Data) {
        switch (Type) {
            //↓↓↓↓基本事件：启动socket,投注,获取余额↓↓↓↓
            case Enum.GameViewHandlerEnum.StartSocket:
                this.StartSocket();
                break;
            case Enum.GameViewHandlerEnum.BetPos:
                this.BetPos();
                break;
            case Enum.GameViewHandlerEnum.GetBalance:
                this.GetBalanceByService();
                break;
            //↑↑↑↑↑↑↑↑
            case Enum.GameViewHandlerEnum.GetRecord:
                this.GetGameRecord(Data);
                break;
            case Enum.GameViewHandlerEnum.MaxBetAmount:
                var maxAmount = Math.floor(this.GetBalance());
                this.gameView.SetData(Enum.GameViewLogicEnum.MaxBetAmount, maxAmount);
                break;
            case Enum.GameViewHandlerEnum.SetBetAmount:
                this.betInfo.betAmount = Data;
                break;
        }
    };
    return MainGameLogic;
}(BaseGameLogic));
//# sourceMappingURL=MainGameLogic.js.map