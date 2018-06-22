/// <reference path="../GameFrame/GameManager/index.ts"/>

class GameMain extends GameManager {
    private socketUrl:string = null;
    constructor(){
        super();
    }

    /**
    * 侦听Socket连接事件
    */
    public OnNoNetwork(): void {
        this.Log("","OnNoNetwork");
    };

    /**
     * 侦听Socket连接事件
     */
    public OnConnectHandler(): void {
        this.Log("","OnConnectHandler");
    };

    /**
     * 侦听Socket关闭事件
     */
    public OnCloseHandler(message: string): void {
        this.Log("","OnCloseHandler");
    };

    /**
     * 侦听会员状态关闭事件
     */
    public OnMemberCloseHandler(): void {
        this.Log("","OnMemberCloseHandler");
    };
    /**
     * 侦听Socket错误事件
     * @param message 错误信息
     */
    public OnErrorHandler(message: string): void {
       this.Log(message,"OnErrorHandler");
    };

    /**
     * 侦听Socket重新连接事件
     */
    public OnWillReconnectHandler(): void {
        this.Log("","OnWillReconnectHandler");
    };

    /**
     * 侦听登出事件
     */
    public OnLogoutHandler(): void {
        this.Log("","OnLogoutHandler");
    };

    /**
     * 系统推送（预留）
     * @param data 
     */
    public OnSystemPushHandler(data: any): void {
        this.Log(data,"OnSystemPushHandler");
    };

    /**
     * 侦听游戏命令
     * @param data 
     */
    public OnMessageHandler(response: any): void {
        let data: any = response.Data;
        this.Log(data,"OnMessageHandler");
        switch (response.Command) {
            case GameEnum.GameCommand.MSG_GAME_INIT://初始化
                if(data.Status == Enum.GameStatus.BET && !this.Authorization.IsClose){
                    this.BetInfo.BetSuccessData = data.TotalBet;
                }
                break;
            case GameEnum.GameCommand.MSG_GAME_START: //游戏开始
                this.BetInfo.BetSuccessData = new Object();
                this.BetInfo.NoBetSuceessData = new Object();
                this.BetInfo.BetSocre = 0;
                break;
            case GameEnum.GameCommand.MSG_GAME_BETRESULT://投注结果
                if(data.Success){
                    this.BetInfo.BetSuccessData = data.TotalBet;
                }
                break;
            case GameEnum.GameCommand.MSG_GAME_STOPBET://游戏停止投注
                break
            case GameEnum.GameCommand.MSG_GAME_GAMERESULT: //游戏结果
                this.BetInfo.NoBetSuceessData = new Object();
                this.BetInfo.BetSocre = 0;
                this.BetInfo.BetingSocre = 0;
                this.BetInfo.SendingBetData = new Object();
                let money = this.MemberInfo.Score - (this.BetInfo.BetSocre + this.BetInfo.BetingSocre);
                this.GameView.SetData(GameEnum.GameViewEnum.ChangMoney,money);
                break;
            case GameEnum.GameCommand.MSG_GAME_SETTLERESULT://游戏结算
                this.BetInfo.BetSuccessData = new Object();

                this.MemberInfo.Score = (response.Data as Dto.GameResultDto).Balance;
                break;
            default:
                break;
        }

        this.GameView.SetData(GameEnum.GameViewEnum.GameData, response);
    };

    /**
     * Ack回调
     * @param data ack信息，一般为之前发送信息的消息id
     */
    public OnAckHandler(data: any): void {
        this.Log(data,"OnAckHandler");
        this.betLogic.BetAck(data,this.BetInfo);
    };
    /**
     * 发送消息回调
     * @param dto 
     */
    public SendHandelr(dto: Dto.HandlerDto): void {
        let msgID: string = dto.MsgID ? dto.MsgID : Utils.Guid.Create();
        this.Log({Data:dto.Data,msgID:msgID},"SendHandelr");
        //组装游戏命令Dto
        let gameDto: Dto.GameMessageDto = new Dto.GameMessageDto();
        gameDto.Command = GameEnum.GameCommand.MSG_GAME_BET;
        gameDto.Data = dto.Data;
        this.betLogic.SetMsgID(msgID,this.BetInfo);
        this.Send(gameDto, msgID);
    }
    /********************* Socket *********************/

    /******************* 界面事件hander *****************/
    public Handler(Type:Enum.GameViewHandlerEnum,Data:any):void{
        switch(Type){
            case Enum.GameViewHandlerEnum.BetPos:   
                let result = this.Bet(Data);
                if(result.success){
                    let BetPosAmount:Bet.BetPosAmountDto = new Bet.BetPosAmountDto();
                    BetPosAmount.Pos = Data.Pos;
                    BetPosAmount.Amount = result.data;
                    this.GameView.SetData(GameEnum.GameViewEnum.BetPos,BetPosAmount);

                    let money = this.MemberInfo.Score - (this.BetInfo.BetSocre + this.BetInfo.BetingSocre);
                    this.GameView.SetData(GameEnum.GameViewEnum.ChangMoney,money);
                }else{
                    this.GameView.SetData(GameEnum.GameViewEnum.Alert,result.data);
                }
                break;
            case Enum.GameViewHandlerEnum.ConfirmBet:
               let betRes = this.betLogic.ConfirmBet(this.BetInfo);
               if(betRes){
                   this.SendHandelr(betRes);
               }
               break;
            case Enum.GameViewHandlerEnum.CancelBet:
                this.betLogic.RetractBet(this.BetInfo);
                let money = this.MemberInfo.Score - (this.BetInfo.BetSocre + this.BetInfo.BetingSocre);
                this.GameView.SetData(GameEnum.GameViewEnum.ChangMoney,money);
                break;
            case Enum.GameViewHandlerEnum.GetNoBetSucData:
                this.GameView.GetNoBetPos(this.BetInfo.NoBetSuceessData);
                break;
            case Enum.GameViewHandlerEnum.GetBetRecord:
                this.WebApi.Post(Net.ApiConfig.GetBetRecord,Data,null,(response)=>{
                    if(response.Result == GameEnum.ErrorCode.Success){
                        let dto: Dto.HandlerDto = new Dto.HandlerDto();
                        dto.Data = response.Data;
                        this.GameView.SetData(GameEnum.GameViewEnum.SetRecord,dto)
                    }
                },(error)=>{console.log(error)})
                break;
            case Enum.GameViewHandlerEnum.ChangeMoney:
                let loginService = new Laya.Browser.window.LoginService(Utils.Http, Utils.Storage, ()=>{
                    let memberInfo = loginService.GetMemberInfoByLocal();
                    let money = memberInfo.Score - (this.BetInfo.BetSocre + this.BetInfo.BetingSocre);
                    this.GameView.SetData(GameEnum.GameViewEnum.ChangMoney,money)
                });
                //获取会员信息
                loginService.GetMemberInfo(true);
                break;
            case Enum.GameViewHandlerEnum.GetMemberInfo:
                let memberInfo = this.MemberInfo;
                let isTourists = this.Authorization.IsTourists;
                this.GameView.SetData(GameEnum.GameViewEnum.GetMemberInfo,{memberInfo,isTourists})
                break;
        }
    }

} 