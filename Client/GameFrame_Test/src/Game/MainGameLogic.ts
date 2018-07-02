/// <reference path="../GameFrame/BaseGameLogic/index.ts"/>
/// <reference path="../GameFrame/Logic/MulBet/MulBetLogic.ts"/>
class MainGameLogic extends BaseGameLogic {
    /**
     * 投注逻辑
     */
    protected betLogic: MulBet.MulBetLogic;

    constructor() {
        super();
        //初始化时创建GameViwLogic,注入Handler
        this.gameView = new GameViewLogic(Laya.Handler.create(this, this.ViewHandler));
        this.betLogic = new MulBet.MulBetLogic();
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
    public OnMessageHandler(response: any): void {
        let data: any = response.Data;
        this.Log(data, "OnMessageHandler");
        switch (response.Command) {
            case Enum.GameCommand.MSG_GAME_INIT://初始化
                if (data.Status == Enum.GameStatus.BET && !this.IsMemberClose()) {
                    //初始化，同步服务器的投注成功的数据
                    this.betLogic.SetBetSuccessData(data.TotalBet);
                }
                break;
            case Enum.GameCommand.MSG_GAME_START: //游戏开始
                this.betLogic.SetNewRound();
                break;
            case Enum.GameCommand.MSG_GAME_BETRESULT://投注结果
                if (data.Success) {
                    //同步服务器的投注结果的数据
                    this.betLogic.SetBetSuccessData(data.TotalBet);
                }
                break;
            case Enum.GameCommand.MSG_GAME_STOPBET://游戏停止投注
                break
            case Enum.GameCommand.MSG_GAME_GAMERESULT: //游戏结果
                this.betLogic.ResetData();
                break;
            case Enum.GameCommand.MSG_GAME_SETTLERESULT://游戏结算
                //游戏结算，重置之前投注数据
                this.betLogic.SetBetSuccessData();
                this.SetBalance((response.Data as Dto.GameResultDto).Balance);
                this.gameView.SetData(Enum.GameViewLogicEnum.ChangMoney, this.GetBalance());
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
        this.betLogic.BetAck(data);
    };
    /**
     * 发送消息回调
     * @param dto 
     */
    public SendHandler(dto: Dto.HandlerDto): void {
        let msgID: string = dto.MsgID ? dto.MsgID : Utils.Guid.Create();
        this.Log({ Data: dto.Data, msgID: msgID }, "SendHandelr");
        //组装游戏命令Dto
        let gameDto: Dto.GameMessageDto = new Dto.GameMessageDto();
        gameDto.Command = Enum.GameCommand.MSG_GAME_BET;
        gameDto.Data = dto.Data;
        this.betLogic.SetMsgID(msgID);
        this.Send(gameDto, msgID);
    }
    /********************* Socket *********************/

    /******************* 界面事件hander *****************/
    public ViewHandler(Type: Enum.GameViewHandlerEnum, Data: any): void {
        switch (Type) {
            case Enum.GameViewHandlerEnum.BetPos:
                let result = this.betLogic.Bet(this.GetBalance(), Data);
                if (result.success) {
                    let BetPosAmount: MulBet.BetPosAmountDto = new MulBet.BetPosAmountDto();
                    BetPosAmount.Pos = Data.Pos;
                    BetPosAmount.Amount = result.data;
                    this.gameView.SetData(Enum.GameViewLogicEnum.BetPos, BetPosAmount);

                    let money = this.GetBalance() - this.betLogic.GetBetScore();
                    this.gameView.SetData(Enum.GameViewLogicEnum.ChangMoney, money);
                } else {
                    this.gameView.SetData(BaseEnum.GameViewLogicEnum.Alert, result.data);
                }
                let requestParams: IRequestParams = {
                    Type: "Get",
                    Params: {},
                    Url: "sss",
                }
                this.Request(requestParams, (response: any) => { }, (error: any) => { });
                break;

            case Enum.GameViewHandlerEnum.GetMemberInfo:
                let memberInfo = this.GetMemberInfo();
                let isTourists = this.IsTourist();
                this.gameView.SetData(Enum.GameViewLogicEnum.GetMemberInfo, { memberInfo, isTourists })
                break

        }
    }

} 