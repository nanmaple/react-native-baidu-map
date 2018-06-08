/// <reference path="../GameFrame/GameManager/index.ts"/>

class GameMain extends GameManager {
    private socketUrl:string = null;
    constructor(){
        super();
    }
   
 
    public GameMain():void{
        
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
     * 侦听游戏命令
     * @param data 
     */
    public OnMessageHandler(data: any): void {
        this.Log(data,"OnMessageHandler");
        this.GameView.SetData(GameEnum.GameViewEnum.GameData, data);
    };

    /**
     * 侦听登出事件
     */
    public OnLogoutHandler(): void {
        this.Log("","OnLogoutHandler");
    };

    /**
     * Ack回调
     * @param data ack信息，一般为之前发送信息的消息id
     */
    public OnAckHandler(data: any): void {
        this.Log(data,"OnAckHandler");
    };

    /**
     * 系统推送（预留）
     * @param data 
     */
    public OnSystemPushHandler(data: any): void {
        this.Log(data,"OnSystemPushHandler");
    };
    /**
     * 发送消息回调
     * @param dto 
     */
    public SendHandelr(dto: Dto.HandlerDto): void {
        let msgID: string = dto.MsgID ? dto.MsgID : Utils.Guid.Create();
        this.Log({Data:dto.Data,msgID:msgID},"OnSystemPushHandler");
        this.Send(dto.Data, msgID);
    }
    /********************* Socket *********************/

    /******************* 界面事件hander *****************/
    public Handler(Type:Enum.GameViewHandlerEnum,Data:any):void{
        switch(Type){
            case Enum.GameViewHandlerEnum.BetPos:
            break;
        }
    }

} 