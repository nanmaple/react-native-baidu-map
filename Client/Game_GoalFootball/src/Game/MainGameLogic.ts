/// <reference path="../GameFrame/BaseGameLogic/index.ts"/>
class MainGameLogic extends BaseGameLogic {
    /**
     * 投注信息
     */
    protected betInfo: Dto.BetInfoDto = new Dto.BetInfoDto();
    constructor() {
        super();
        //初始化时创建GameViwLogic,注入Handler
        this.gameView = new GameViewLogic(Laya.Handler.create(this, this.ViewHandler,null,false));
    }

    /**
     * 登录完成
     */
    public LoginComplete() {
        // let memberInfo: BaseDto.MemberInfoDto = this.GetMemberInfo();
        // // //启用微信分享
        // WeChatModule.InitWeChat(memberInfo.MemberId);
        // // //获取授权地址
        // WeChatModule.GetWeChatUrl(Utils.GetQuery("parentid"),true);
    }

    /**
     * 从服务器获取分数成功
     * @param balance 余额
     */
    public GetBalanceComplete(balance:number):void {
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
    public OnMessageHandler(response: any): void {
        let data: any = response.Data;
        this.Log(data, "OnMessageHandler");
        switch (response.Command) {
            case Enum.GameCommand.MsgGameInit://初始化
                this.SetBalance((data as Dto.GameInitDto).Balance);
                this.betInfo.betAmount = this.betInfo.betAmount ? this.betInfo.betAmount : (data as Dto.GameInitDto).BaseAmounts[0];
                this.betInfo.MaxBet = (data as Dto.GameInitDto).MaxBet;
                this.betInfo.MinBet = (data as Dto.GameInitDto).MinBet;
                this.SetBetTotalAmount();
                break;
            case Enum.GameCommand.MsgGameSettleResult://结算结果
                this.SetBalance((data as Dto.BetResultDto).Balance);
                break;
            default:
                break;
        }
        response.Data = data;
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
     * 发送消息
     * @param dto 
     */
    public SendData(dto: Dto.HandlerDto): void {
        let msgID: string = dto.MsgID ? dto.MsgID : Utils.Guid.Create();
        this.Log({ Data: dto.Data, msgID: msgID }, "SendHandelr");
        //组装游戏命令Dto
        let gameDto: Dto.GameMessageDto = new Dto.GameMessageDto();
        gameDto.Command = Enum.GameCommand.MsgGameStart;
        gameDto.Data = dto.Data;
        this.Send(gameDto, msgID);
    }

    /**
     * 设置总投注额
     */
    private SetBetTotalAmount():void{
        let propAmount:number = this.betInfo.betAmount / 5;
        this.betInfo.propTotalAmount = 0;
        for (var index = 0; index < 3; index++) {
            if(this.betInfo.propStatus[index] == 1){
                this.betInfo.propTotalAmount += propAmount;
            }
        }
        this.betInfo.betTotalAmount = this.betInfo.betAmount + this.betInfo.propTotalAmount;
    }
    
    /**
     * 投注处理
     */
    private BetPos():void{
        if(this.betInfo.betTotalAmount > this.GetBalance()){
            this.gameView.SetData(Enum.GameViewLogicEnum.BetPosError, "BALANCE_SMALL");
        }else if(this.betInfo.betTotalAmount < this.betInfo.MinBet){
            this.gameView.SetData(Enum.GameViewLogicEnum.BetPosError, "LOW_LIMIT");
        }else if(this.betInfo.betTotalAmount > this.betInfo.MaxBet){
            this.gameView.SetData(Enum.GameViewLogicEnum.BetPosError, "OVER_LIMIT");
        }else{
            let gameBet:Dto.GameBetDto = new Dto.GameBetDto();
            let handlerDto:Dto.HandlerDto = new Dto.HandlerDto();
            gameBet.Amount = this.betInfo.betAmount;
            gameBet.Props = this.betInfo.propStatus;
            handlerDto.Data = gameBet;
            this.SendData(handlerDto);
            let balance = this.GetBalance();
            this.gameView.SetData(Enum.GameViewLogicEnum.ChangMoney, balance - this.betInfo.betTotalAmount);
        }
    }
    /********************* Socket *********************/

    /******************* 界面事件hander *****************/
    public ViewHandler(Type: Enum.GameViewHandlerEnum, Data: any): void {
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
                this.gameView.SetData(Enum.GameViewLogicEnum.ChooseChip, this.betInfo)
                break;
            case Enum.GameViewHandlerEnum.ChooseMaxChip:
                let maxChip:number = Math.floor(this.GetBalance());
                this.gameView.SetData(Enum.GameViewLogicEnum.ChooseMaxChip, maxChip)
                break;
            case Enum.GameViewHandlerEnum.ChooseProp:
                this.betInfo.propStatus[Data] = 1;
                this.SetBetTotalAmount();
                this.gameView.SetData(Enum.GameViewLogicEnum.ChooseProp, this.betInfo)
                break;
            case Enum.GameViewHandlerEnum.GameResult:
                this.betInfo.propStatus = [0,0,0];
                this.SetBetTotalAmount();
                this.gameView.SetData(Enum.GameViewLogicEnum.GameResult, null)
                break;
            case Enum.GameViewHandlerEnum.GetBalance:
                this.GetBalanceByService();
                break;
        }
    }

} 