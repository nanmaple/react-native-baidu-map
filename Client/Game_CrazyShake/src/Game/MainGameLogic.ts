/// <reference path="../GameFrame/BaseGameLogic/index.ts"/>
/// <reference path="../GameFrame/Logic/MulBet/MulBetLogic.ts"/>
class MainGameLogic extends BaseGameLogic {
    /**
     * 投注逻辑
     */
    protected betLogic: MulBet.MulBetLogic;
    public testToy: ToyPanel;
    constructor() {
        super();
        //初始化时创建GameViwLogic,注入Handler
        this.gameView = new GameViewLogic(Laya.Handler.create(this, this.ViewHandler, [], false));
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
    public OnMessageHandler(response: Dto.GameMessageDto): void {
        // let data: any = response.Data;
        switch (response.Command) {
            case Enum.GameCommand.MSG_GAME_INIT://初始化
                this.SetBalance((response.Data as Dto.ClientInitDto).Balance);
                break;
            case Enum.GameCommand.MSG_GAME_START: //游戏开始
                break;
            case Enum.GameCommand.MSG_GAME_BETRESULT://投注结果
                break;
            case Enum.GameCommand.MSG_GAME_STOPBET://游戏停止投注
                break
            case Enum.GameCommand.MSG_GAME_GAMERESULT: //游戏结果
                break;
            case Enum.GameCommand.MSG_GAME_SETTLERESULT://游戏结算
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
        this.betLogic.BetAck(data);
    };
    /**
     * 发送消息回调
     * @param dto 
     */
    public SendBet(dto: Dto.GameBetDto): void {
        this.Log({ Data: dto }, "SendHandelr");
        //组装游戏命令Dto
        let gameDto: Dto.GameMessageDto = new Dto.GameMessageDto();
        gameDto.Command = Enum.GameCommand.MSG_GAME_START;
        gameDto.Data = dto;
        this.Send(gameDto);
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
                    // this.gameView.SetData(Enum.GameViewLogicEnum.StartAni, data)
                }
                else {
                    this.gameView.SetData(BaseEnum.GameViewLogicEnum.Alert, LanguageUtils.Language.Get("BALANCE_SMALL"))
                }

                break;
        }
    }

} 