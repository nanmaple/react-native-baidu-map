/// <reference path="../GameFrame/BaseGameLogic/index.ts"/>
/// <reference path="../BetLogic/Bet/BetLogic.ts"/>
class MainGameLogic extends BaseGameLogic {
    /**
     * 投注逻辑
     */
    protected betLogic: OnceBet.BetLogic;
    /**获得分数 */
    private winAmount: number = 0;
    /**最大可竞猜分数 */
    private maxGuessAmount: number = 0;
    private roundResult:Dto.GameResultDto;
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
        this.betLogic = new OnceBet.BetLogic();
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
        // //从服务器获取余额
        // this.GetBalanceByService();
    }

    /**
     * 从服务器获取分数成功
     * @param balance 余额
     */
    public GetBalanceComplete(balance:number):void {
        //通知余额
        this.ChangeMoney();
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
                this.betLogic.SetBetLimit(data.BaseAmounts,data.MaxBet, data.MinBet);
                break;
            case Enum.GameCommand.MsgGameStart: //游戏开始
                break;
            case Enum.GameCommand.MsgGameBetResult://投注结果
                break;
            case Enum.GameCommand.MsgGameStopBet://游戏停止投注
                break
            case Enum.GameCommand.MsgGameGameResult: //游戏结果
                break;
            case Enum.GameCommand.MsgGameSettleResult://游戏结算
                //游戏结算，重置之前投注数据
                if ((response.Data as Dto.GameResultDto).Status == Enum.BetResultCode.Success) {
                    this.SetBalance((response.Data as Dto.GameResultDto).Balance);
                    this.winAmount = (response.Data as Dto.GameResultDto).WinAmount;
                    this.maxGuessAmount = this.winAmount * 2;
                    // this.betLogic.ClearBet();
                    this.roundResult = response.Data;
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
    /********************* Socket *********************/

    /******************* 界面事件hander *****************/
    public ViewHandler(Type: Enum.GameViewHandlerEnum, Data: any): void {
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
                this.Gather();
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
            /**获取历史记录 */
            case Enum.GameViewHandlerEnum.GetRecord:
                this.GetGameRecord(Data);
                break;
        }
    }

    /**修改头部金额 */
    private ChangeMoney(): void {
        let dto = new Dto.AmountDto();
        dto.balance = this.GetBalance() - this.winAmount;
        dto.winAmount = this.winAmount;
        this.gameView.SetData(BaseEnum.GameViewLogicEnum.Balance, dto);
    }
    /**修改当前投注额*/
    private ChangeCurrBet(): void {
        let sum = this.betLogic.GetBetScore();
        this.gameView.SetData(Enum.GameViewLogicEnum.ChangeCurrBet, sum);
    }
    /**
     * 投注
     * @param Data 投注位置
     */
    private BetPos(data: number): void {
        let betPos = Enum.BetPosTypeEnum[Enum.BetBtnPosEnum[data]];
        let result = this.betLogic.Bet(this.GetBalance(), betPos);
        if (result.success) {
            let BetPosAmount: OnceBet.BetPosAmountDto = new OnceBet.BetPosAmountDto();
            BetPosAmount.Pos = data;
            BetPosAmount.Amount = result.data;
            this.gameView.SetData(Enum.GameViewLogicEnum.BetSuccess, BetPosAmount);
            this.ChangeCurrBet();
        } else {
            this.gameView.SetData(BaseEnum.GameViewLogicEnum.Alert, result.data);
        }
    }
    /**
     * 修改投注基数
     * @param data 修改值 和 基础值
     */
    private ChangBaseAmount(data: number): void {
        let baseAmount = this.betLogic.ChangBaseAmount(this.GetBalance(), data);
        this.ChangeCurrBet();
    }
    /**
     * 开始猜大小
     * @param data 
     */
    private GuessSize(data: any): void {
        //游戏进行中 禁用按钮
        this.gameView.SetData(Enum.GameViewLogicEnum.ChangGameStatus, Enum.GameStatus.Execute);
        let guessDto = new OnceBet.BetDto();
        guessDto.Guess = data;
        guessDto.BaseAmount = this.winAmount;
        let guess = new Dto.HandlerDto();
        guess.Data = guessDto;
        this.SendData(guess);
    }
    /**开始游戏 */
    private GameStart(): void {
        let BetScore = this.betLogic.GetBetScore();
        if (BetScore == 0) return;
        if(BetScore > this.GetBalance()){
            this.gameView.SetData(BaseEnum.GameViewLogicEnum.Alert, 'InsufficientBalance');
            return;
        }
        //游戏进行中 禁用按钮
        this.gameView.SetData(Enum.GameViewLogicEnum.ChangGameStatus, Enum.GameStatus.Execute);
        this.gameView.SetData(Enum.GameViewLogicEnum.GameStart,null);
        let betDto = this.betLogic.GetBetInfo();
        let HandlerDto = new Dto.HandlerDto();
        HandlerDto.Data = betDto;
        this.SendData(HandlerDto);
    }
    /**收获分数 */
    private Gather():void{
        this.winAmount = 0;
        this.gameView.SetData(Enum.GameViewLogicEnum.ChangGameStatus, Enum.GameStatus.Default);
        this.ChangeMoney();
    }
    /**游戏滚动结束 */
    private GameEnd(): void {
        //根据结果 显示不同的状态
        if (this.winAmount > 0) {
            this.gameView.SetData(Enum.GameViewLogicEnum.ChangGameStatus, Enum.GameStatus.Guess);
        } else {
            this.gameView.SetData(Enum.GameViewLogicEnum.ChangGameStatus, Enum.GameStatus.Default);
        }
        // this.gameView.SetData(Enum.GameViewLogicEnum.ClearBet,null);
        this.ChangeCurrBet();
        this.gameView.SetData(Enum.GameViewLogicEnum.GameEnd,this.roundResult);
        this.ChangeMoney();
    }
    /**增加猜大小金额 */
    private AddGuessSum(): void {
        if(this.winAmount < this.maxGuessAmount){
            if (this.GetBalance() < this.winAmount * 2) {
                this.winAmount = this.GetBalance();
            }else{
                this.winAmount *= 2;
            }
        }
        this.ChangeMoney();
    }
    /**减小猜大小金额 */
    private ReduceGuessSum(): void {
        this.winAmount = Math.floor(this.winAmount / 2);
        //获取分回收完 切换成默认状态
        if (this.winAmount == 0) {
            this.gameView.SetData(Enum.GameViewLogicEnum.ChangGameStatus, Enum.GameStatus.Default);
        }
        this.ChangeMoney();
    }
    /**猜大小结束 */
    private RandomEnd(): void {
        let win = false;
        if (this.winAmount == 0) {
            this.gameView.SetData(Enum.GameViewLogicEnum.ChangGameStatus, Enum.GameStatus.Default);
        } else {
            win = true;
            this.gameView.SetData(Enum.GameViewLogicEnum.ChangGameStatus, Enum.GameStatus.Guess);
        }
        this.gameView.SetData(Enum.GameViewLogicEnum.GuessEnd, win);
        this.ChangeMoney();
    }
    /**获取最新余额 */
    private GetNewBalance(): void {
        this.GetBalanceByService();
    }

     /**
     * 获取游戏记录
     */
    private GetGameRecord(refresh:boolean):void{
        if(refresh){
            this.betRecordPageDto.LastId = null;
        }
        this.requestParams.Params = this.betRecordPageDto;
        this.requestParams.Url = ApiConfig.GetBetRecord;
        this.Request(this.requestParams,this.GetRecordSuccess,this.GetRecordFail);
    }
    /**
     * 获取记录成功
     * @param data 
     */
    private GetRecordSuccess=(data:any):void=>{
        console.log(data)
        if(data && data.length > 0){
            this.betRecordPageDto.LastId = data[data.length - 1].Id;
        }
        this.gameView.SetData(Enum.GameViewLogicEnum.SetRecord, data);
    }
    /**
     * 获取记录失败
     * @param data 
     */
    private GetRecordFail=(error:any):void=>{
        this.gameView.SetData(Enum.GameViewLogicEnum.SetRecord, null);
    }


} 