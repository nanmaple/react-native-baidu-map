/**
 * 主游戏逻辑
 */
/// <reference path="../GameFrame/BaseGameLogic/index.ts"/>
/// <reference path="../BetLogic/MulBet/MulBetLogic.ts"/>
class MainGameLogic extends BaseGameLogic {
    /**
     * 投注逻辑
     */
    protected betLogic: MulBet.MulBetLogic;
    /**
     * 投注信息
     */
    protected betInfo: Dto.BetInfoDto = new Dto.BetInfoDto();
    /**
     * 投注记录请求dto
     */
    private betRecordParamsDto: Dto.BetRecordParamsDto;
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
        this.betLogic = new MulBet.MulBetLogic();
        this.betRecordParamsDto = new Dto.BetRecordParamsDto();
        this.betRecordParamsDto.GameId = GameConfig.GameID;
        this.betRecordParamsDto.PageSize = 10;
    }

    /**
     * 登录完成
     * -->抽象方法实现，方面中逻辑可修改<--
     */
    public LoginComplete() {
        //↓↓↓↓微信功能启用↓↓↓↓
        // let memberInfo: BaseDto.MemberInfoDto = this.GetMemberInfo();
        // //启用微信分享
        // WeChatModule.InitWeChat(memberInfo.MemberId);
        // //获取授权地址
        // WeChatModule.GetWeChatUrl(Utils.GetQuery("parentid"),true);
        // //从服务器获取余额
        // this.GetBalanceByService();
        //↑↑↑↑微信功能启用↑↑↑↑
    }

    /**
     * 从服务器获取分数成功
     * -->抽象方法实现，方面中逻辑可修改<--
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
    public OnMessageHandler(response: any): void {
        let data: any = response.Data;
        this.Log(data, "OnMessageHandler");
        switch (response.Command) {
            case Enum.GameCommand.MsgGameInit://初始化
                this.SetBalance((data as Dto.GameInitDto).Balance);
                if (data.Status == Enum.GameStatus.Bet && !this.IsMemberClose()) {
                    //初始化，同步服务器的投注成功的数据
                    this.betLogic.SetBetSuccessData(data.TotalBet);
                }
                break;
            case Enum.GameCommand.MsgGameStart: //游戏开始
                this.betLogic.SetNewRound();
                break;
            case Enum.GameCommand.MsgGameBetResult://投注结果
                if (data.Success) {
                    //同步服务器的投注结果的数据
                    this.betLogic.SetBetSuccessData(data.TotalBet);
                }
                break;
            case Enum.GameCommand.MsgGameStopBet://游戏停止投注
                break
            case Enum.GameCommand.MsgGameResult: //游戏结果
                this.betLogic.ResetData();
                break;
            case Enum.GameCommand.MsgGameSettleResult://游戏结算
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
    };

    /**
     * 发送消息
     * -->发送逻辑，可适当添加投注回调处理<--
     * @param dto 
     */
    public SendData(dto: Dto.HandlerDto): void {
        let msgID: string = dto.MsgID ? dto.MsgID : Utils.Guid.Create();
        this.Log({ Data: dto.Data, msgID: msgID }, "SendHandelr");
        //组装游戏命令Dto
        let gameDto: Dto.GameMessageDto = new Dto.GameMessageDto();
        gameDto.Command = Enum.GameCommand.MsgGameBet;
        gameDto.Data = dto.Data;
        this.Send(gameDto, msgID);
    }
    /**
     * 投注处理
     *  -->投注逻辑，可适当添加投注额大小判断<--
     */
    private BetPos():void{
        let handlerDto:Dto.HandlerDto = new Dto.HandlerDto();
        handlerDto.Data = [];
        this.SendData(handlerDto);
        let balance = this.GetBalance();
        this.gameView.SetData(Enum.GameViewLogicEnum.ChangMoney, balance - this.betInfo.betTotalAmount);
    }
    /**
     * 获取游戏记录
     */
    private GetGameRecord(refresh:boolean):void{
        if(refresh){
            this.betRecordParamsDto.LastId = null;
        }
        this.requestParams.Params = this.betRecordParamsDto;
        this.requestParams.Url = ApiConfig.GetBetRecord;
        this.Request(this.requestParams,this.GetRecordSuccess,this.GetRecordFail);
    }
    /**
     * 获取游戏记录成功
     * @param data 
     */
    private GetRecordSuccess=(data:any):void=>{
        if(data && data.length > 0){
            this.betRecordParamsDto.LastId = data[data.length - 1].Id;
        }
        this.gameView.SetData(Enum.GameViewLogicEnum.GetRecord, data);
    }
    /**
     * 获取游戏记录失败
     * @param data 
     */
    private GetRecordFail=(error:any):void=>{
        this.gameView.SetData(Enum.GameViewLogicEnum.GetRecord, null);
    }
    /********************* Socket *********************/

    /******************* 界面事件hander *****************/
    public ViewHandler(Type: Enum.GameViewHandlerEnum, Data: any): void {
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
        }
    }

} 