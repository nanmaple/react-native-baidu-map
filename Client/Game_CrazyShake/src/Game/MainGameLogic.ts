/// <reference path="../GameFrame/BaseGameLogic/index.ts"/>
class MainGameLogic extends BaseGameLogic {
    /**
         * 投注记录请求dto
         */
    private betRecordPageDto: Dto.BetRecordPageDto;
    /**
     * 请求参数
     */
    private requestParams: IRequestParams = {
        Type: "Post",
        Url: null,
        Params: null,
        Header: null,
    }
    constructor() {
        super();
        //初始化时创建GameViwLogic,注入Handler
        this.gameView = new GameViewLogic(Laya.Handler.create(this, this.ViewHandler, [], false));
        this.betRecordPageDto = new Dto.BetRecordPageDto();
        this.betRecordPageDto.GameId = GameConfig.GameID;
        this.betRecordPageDto.PageSize = 10;
    }
    /**
     * 登录完成
     */
    public LoginComplete() {
        // let memberInfo: BaseDto.MemberInfoDto = this.GetMemberInfo();
        // //启用微信分享
        // WeChatModule.InitWeChat(memberInfo.MemberId);
        // //获取授权地址
        // WeChatModule.GetWeChatUrl(Utils.GetQuery("parentid"),true);
    }

    /**
     * 从服务器获取分数成功
     * @param balance 余额
     */
    public GetBalanceComplete(balance: number): void {
        //通知余额
        this.gameView.SetData(BaseEnum.GameViewLogicEnum.Balance, balance);
    }

    /**
    * 侦听Socket连接事件
    */
    public OnNoNetwork(): void {
        this.Log("", "OnNoNetwork");
    };

    /**
     * 侦听Socket连接事件
     */
    public OnConnectHandler(): void {
        this.Log("", "OnConnectHandler");
    };

    /**
     * 侦听Socket关闭事件
     */
    public OnCloseHandler(message: string): void {
        this.Log("", "OnCloseHandler");
    };

    /**
     * 侦听会员状态关闭事件
     */
    public OnMemberCloseHandler(): void {
        this.Log("", "OnMemberCloseHandler");
    };
    /**
     * 侦听Socket错误事件
     * @param message 错误信息
     */
    public OnErrorHandler(message: string): void {
        this.Log(message, "OnErrorHandler");
    };

    /**
     * 侦听Socket重新连接事件
     */
    public OnWillReconnectHandler(): void {
        this.Log("", "OnWillReconnectHandler");
    };

    /**
     * 侦听登出事件
     */
    public OnLogoutHandler(): void {
        this.Log("", "OnLogoutHandler");
    };

    /**
     * 系统推送（预留）
     * @param data 
     */
    public OnSystemPushHandler(data: any): void {
        this.Log(data, "OnSystemPushHandler");
    };

    /**
     * 侦听游戏命令
     * @param data 
     */
    public OnMessageHandler(response: Dto.GameMessageDto): void {
        switch (response.Command) {
            case Enum.GameCommand.MsgGameInit://初始化
                this.SetBalance((response.Data as Dto.ClientInitDto).Balance);
                break;
            case Enum.GameCommand.MsgGameStart: //游戏开始
                break;
            case Enum.GameCommand.MsgGameSettleResult://游戏结算
                if (response.Data.Status != Enum.BetResult.Success) {
                    return this.gameView.SetData(BaseEnum.GameViewLogicEnum.Alert, LanguageUtils.Language.Get(Enum.BetResult[response.Data.Status]));
                }
                this.SetBalance((response.Data as Dto.GameResultDto).Balance);
                break;
            default:
                break;
        }
        this.gameView.SetData(BaseEnum.GameViewLogicEnum.GameData, response);
    };

    /**
     * Ack回调
     * @param data ack信息，一般为之前发送信息的消息id
     */
    public OnAckHandler(data: any): void {
        this.Log(data, "OnAckHandler");
    };
    /**
     * 发送消息回调
     * @param dto 
     */
    public SendBet(dto: Dto.GameBetDto): void {
        this.Log({ Data: dto }, "SendHandelr");
        //组装游戏命令Dto
        let gameDto: Dto.GameMessageDto = new Dto.GameMessageDto();
        gameDto.Command = Enum.GameCommand.MsgGameStart;
        gameDto.Data = dto;
        this.Send(gameDto);
    }

    /**
         * 获取游戏记录
         */
    private GetGameRecord(refresh: boolean): void {
        if (refresh) {
            this.betRecordPageDto.LastId = null;
        }
        this.requestParams.Params = this.betRecordPageDto;
        this.requestParams.Url = ApiConfig.GetBetRecord;
        this.Request(this.requestParams, this.GetRecordSuccess, this.GetRecordFail);
    }
    /**
     * 获取记录成功
     * @param data 
     */
    private GetRecordSuccess = (data: any): void => {
        console.log(data)
        if (data && data.length > 0) {
            this.betRecordPageDto.LastId = data[data.length - 1].Id;
        }
        this.gameView.SetData(Enum.GameViewLogicEnum.GetRecord, data);
    }
    /**
     * 获取记录失败
     * @param data 
     */
    private GetRecordFail = (error: any): void => {
        this.gameView.SetData(Enum.GameViewLogicEnum.GetRecord, null);
    }
    /********************* Socket *********************/
    /******************* 界面事件hander *****************/
    public ViewHandler(type: Enum.GameViewHandlerEnum, data: any): void {
        switch (type) {
            case Enum.GameViewHandlerEnum.StartSocket:
                this.StartSocket();
                break;
            case Enum.GameViewHandlerEnum.BetPos:
                if (100 <= data.Amount && data.Amount <= this.GetBalance()) {
                    this.SendBet(data);
                }
                else {
                    this.gameView.SetData(BaseEnum.GameViewLogicEnum.Alert, LanguageUtils.Language.Get("BALANCE_SMALL"))
                    this.gameView.SetData(Enum.GameViewLogicEnum.MsgGameRefreshBtn, null);
                };
                break;
            case Enum.GameViewHandlerEnum.GetRecord:
                this.GetGameRecord(data);
                break;
        }
    }

} 