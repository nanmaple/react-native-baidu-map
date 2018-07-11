/// <reference path="../GameFrame/BaseGameLogic/index.ts"/>
/// <reference path="../GameFrame/Logic/Bet/BetLogic.ts"/>
class MainGameLogic extends BaseGameLogic {
    /**
     * 投注逻辑
     */
    protected betLogic: OnceBet.BetLogic;
    /**获得分数 */
    private winAmount:number = 0 ;
    /**最大可竞猜分数 */
    private maxGuessAmount:number = 0;

    constructor() {
        super();
        //初始化时创建GameViwLogic,注入Handler
        this.gameView = new GameViewLogic(Laya.Handler.create(this, this.ViewHandler,null,false));
        this.betLogic = new OnceBet.BetLogic();
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
                this.betLogic.SetBetLimit(data.MaxBet,data.MinBet);
                // if (data.Status == Enum.GameStatus.BET && !this.IsMemberClose()) {
                    //初始化，同步服务器的投注成功的数据
                    // this.betLogic.SetBetSuccessData(data.TotalBet);
                // }
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
                //游戏结算，重置之前投注数据
                if((response.Data as Dto.GameResultDto).Status == Enum.BetResultCode.Success){
                    this.SetBalance((response.Data as Dto.GameResultDto).Balance);
                    this.winAmount = (response.Data as Dto.GameResultDto).WinAmount;
                    this.maxGuessAmount = this.winAmount*2;
                }
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
        // this.betLogic.BetAck(data);
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
        gameDto.Command = Enum.GameCommand.MSG_GAME_START;
        gameDto.Data = dto.Data;
        // this.betLogic.SetMsgID(msgID);
        this.Send(gameDto, msgID);
    }
    /********************* Socket *********************/

    /******************* 界面事件hander *****************/
    public ViewHandler(Type: Enum.GameViewHandlerEnum, Data: any): void {
        switch (Type) {
            case Enum.GameViewHandlerEnum.StartSocket:
                this.StartSocket();
                break;

                /**投注处理 */
            case Enum.GameViewHandlerEnum.BetPos:
                let betPos = Enum.BetPosTypeEnum[Enum.BetBtnPosEnum[Data]];
                let result = this.betLogic.Bet(this.GetBalance(), betPos);
                if (result.success) {
                    let BetPosAmount: OnceBet.BetPosAmountDto = new OnceBet.BetPosAmountDto();
                    BetPosAmount.Pos = Data;
                    BetPosAmount.Amount = result.data;
                    this.gameView.SetData(Enum.GameViewLogicEnum.BetSuccess, BetPosAmount);
                    // this.ChangeMoney();
                    this.ChangeCurrBet();
                } else {
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
                let baseDto: OnceBet.ChangBaseAmount = new OnceBet.ChangBaseAmount();
                baseDto.BaseAmount = Data.BaseAmount;
                baseDto.Value = Data.Value;
                let baseAmount = this.betLogic.ChangBaseAmount(this.GetBalance(), baseDto);
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

                let guessDto = new OnceBet.BetDto();
                guessDto.Guess = Data;
                guessDto.BaseAmount = this.winAmount;
                let guess = new Dto.HandlerDto();
                guess.Data = guessDto;
                this.SendData(guess);
                break; 

                /**开始游戏 */
            case Enum.GameViewHandlerEnum.GameStart:
                let BetScore = this.betLogic.GetBetScore();
                if(BetScore == 0 ) return;
                // if(BetScore > this.GetBalance()){
                //     this.gameView.SetData(BaseEnum.GameViewLogicEnum.Alert, '余额不足');
                //     return;
                // }
                //游戏进行中 禁用按钮
                this.gameView.SetData(Enum.GameViewLogicEnum.ChangGameStatus, Enum.GameStatus.EXECUTE);
                let betDto  = this.betLogic.GetBetInfo();
                let HandlerDto = new Dto.HandlerDto();
                HandlerDto.Data = betDto;
                this.SendData(HandlerDto);
                break;  
            
                /**游戏结束 */
            case Enum.GameViewHandlerEnum.GameEnd:
                //根据结果 显示不同的状态
                if(this.winAmount > 0){
                    this.gameView.SetData(Enum.GameViewLogicEnum.ChangGameStatus, Enum.GameStatus.GUESS);
                }else{
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
                if(this.GetBalance() <= this.maxGuessAmount){
                    this.winAmount = this.GetBalance();
                }else if(this.winAmount < this.maxGuessAmount){//必须小于获取的2倍
                    this.winAmount *= 2; 
                    if(this.winAmount > this.maxGuessAmount) this.winAmount = this.maxGuessAmount;
                }
                this.ChangeMoney();
                break; 

                /**减小猜大小金额 */
            case Enum.GameViewHandlerEnum.ReduceGuessSum:
                this.winAmount = Math.floor(this.winAmount/2);
                //获取分回收完 切换成默认状态
                if(this.winAmount == 0){
                    this.gameView.SetData(Enum.GameViewLogicEnum.ChangGameStatus, Enum.GameStatus.DEFAULT);
                }
                this.ChangeMoney();
                break; 
            
                /**猜大小结束 */
            case Enum.GameViewHandlerEnum.RandomEnd:
                if(this.winAmount == 0){
                    this.gameView.SetData(Enum.GameViewLogicEnum.ChangGameStatus, Enum.GameStatus.DEFAULT);
                }else{
                    this.gameView.SetData(Enum.GameViewLogicEnum.ChangGameStatus, Enum.GameStatus.GUESS);
                }
                this.ChangeMoney();
                break; 

            case Enum.GameViewHandlerEnum.GetMemberInfo:
                let memberInfo = this.GetMemberInfo();
                let isTourists = this.IsTourist();
                this.gameView.SetData(Enum.GameViewLogicEnum.GetMemberInfo, { memberInfo, isTourists })
                break

        }
    }

    /**修改头部金额 */
    private ChangeMoney():void{
        let dto = new Dto.AmountDto();
        dto.balance = this.GetBalance() - this.winAmount;
        dto.winAmount = this.winAmount;
        this.gameView.SetData(Enum.GameViewLogicEnum.ChangMoney, dto);
    }

    /**修改当前投注额*/
    private ChangeCurrBet():void{
        let sum = this.betLogic.GetBetScore();
        this.gameView.SetData(Enum.GameViewLogicEnum.ChangeCurrBet, sum);
    }

} 