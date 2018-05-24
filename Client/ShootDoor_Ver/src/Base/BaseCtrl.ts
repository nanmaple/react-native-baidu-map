
/// <reference path="../GameConfig.ts"/>
/**
* 基础类
*/
abstract class BaseCtrl {
    /**
     * 游戏ID
     */
    protected gameID: number;
    /**
     * 授权信息
     */
    protected authorizationInfo: BaseDto.AuthorizationDto;
    /**
     * 用户信息
     */
    protected memberInfo: BaseDto.MemberInfoDto;
    /**
     * socket
     */
    private socket: ServiceManager.SocketManager;

    /**
     * 父级ID
     */
    protected parentID: string;
    /**
     * 会员ID
     */
    protected memberId: number;

    private socketUrl: string;
    /**
     * 构造函数，传入游戏ID
     * @param gameID 
     */
    constructor(gameID: number) {
        this.gameID = gameID;
        this.parentID = Utils.Url.GetQuery("parentid");

        let loginService = new Laya.Browser.window.LoginService(Utils.Http, Utils.Storage);
        //获取会员信息缓存
        this.memberInfo = loginService.GetMemberInfoByLocal();
        //获取会员ID
        this.memberId = this.memberInfo.MemberId;
        // this.memberId = 121;
        //获取授权信息缓存
        this.authorizationInfo = loginService.GetAuthorizationDtoByLocal();

        let wechat = new Laya.Browser.window.Wechat(Utils.Http,null,null);

        let Storage:Utils.Storage = new Utils.Storage();
        let appID:any = Storage.Get("AppId",0);
        if(appID){
            GameConfig.GetAppID(appID);
        }else{
            wechat.GetAppID().then((appID)=>{
                GameConfig.GetAppID(appID);
            });
        }
        //生成socket 地址
        this.socketUrl = GameConfig.GetSocketUrl(this.memberId, GameConfig.SocketToken);

        //创建socket
        this.socket = new ServiceManager.SocketManager();
        //连接事件侦听
        this.socket.on(ServiceManager.SocketEvent.OnConnect, this, this.OnConnectHandler);
        //关闭事件侦听
        this.socket.on(ServiceManager.SocketEvent.OnClose, this, this.OnCloseHandler);
        //会员状态关闭事件侦听
        this.socket.on(ServiceManager.SocketEvent.OnMemberClose, this, this.OnMemberCloseHandler);
        //错误事件侦听
        this.socket.on(ServiceManager.SocketEvent.OnError, this, this.OnErrorHandler);
        //重连事件侦听
        this.socket.on(ServiceManager.SocketEvent.OnWillReconnect, this, this.OnWillReconnectHandler);
        //接收消息事件侦听
        this.socket.on(ServiceManager.SocketEvent.OnGame, this, this.OnMessageHandler);
        //登出事件侦听
        this.socket.on(ServiceManager.SocketEvent.OnLogout, this, this.OnLogoutHandler);
        //投注ACK回调
        this.socket.on(ServiceManager.SocketEvent.OnAck, this, this.OnAckHandler);
        //系统推送
        this.socket.on(ServiceManager.SocketEvent.OnSystemPush, this, this.OnSystemPushHandler);
        //启动连接
        this.socket.Connect(this.socketUrl);

        let isWeChat: boolean = Laya.Browser.window.navigator.userAgent.indexOf('MicroMessenger') >= 0;  //判断是否微信浏览器
        Laya.timer.loop(2000, this, () => {
            if (isWeChat) {
                wechat.GetNetworkType((type)=>{this.GetNetworkSuccess(type)});
            } else {
                wechat.GetPcNetworkType((type)=>{this.GetNetworkSuccess(type)});
            }
        });

    }
    
    /**
     * 网络状态
     * @param networkType 网络状态
     */
    public GetNetworkSuccess(networkType: any): void {
        if (networkType) {
            this.socket.SetNetwork(true);
        } else {
            this.socket.SetNetwork(false);
        }
        this.OnNoNetwork();
    }


    /**
     * 分享回调
     * @param status 分享结果类型 1.分享成功 0.取消分享 -1.分享失败
     */
    abstract WeChatShareHandler(status: number): void;

    /**
     * 侦听Socket连接事件
     */
    abstract OnNoNetwork(): void;

    /**
     * 侦听Socket连接事件
     */
    abstract OnConnectHandler(): void;

    /**
     * 侦听Socket关闭事件
     */
    abstract OnCloseHandler(message: string): void;
    /**
     * 侦听会员状态关闭事件
     */
    abstract OnMemberCloseHandler(): void;
    /**
     * 侦听Socket错误事件
     * @param message 错误信息
     */
    abstract OnErrorHandler(message: string): void;

    /**
     * 侦听Socket重新连接事件
     */
    abstract OnWillReconnectHandler(): void;

    /**
     * 侦听登出事件
     */
    abstract OnLogoutHandler(): void;

    /**
     * Ack回调
     * @param data ack信息，一般为之前发送信息的消息id
     */
    abstract OnAckHandler(data: any): void;

    /**
     * 系统推送（预留）
     * @param data 
     */
    abstract OnSystemPushHandler(data: any): void;

    /**
     * 发送消息
     * @param data 消息内容
     * @param msgID 消息ID,如果不传，默认生成一个新的
     */
    protected Send(data: any, msgID: string = Utils.Guid.Create()): void {
        this.socket.Send(data, msgID);
    }
    private endData: any;
    private settleCacheData: any;
    
    /**
     * 侦听游戏命令
     * @param data 
     */
    private OnMessageHandler(data: BaseDto.GameMessageDto): void {
        switch (data.Command) {
            case BaseEnum.GameCommand.MSG_GAME_INIT:
                this.OnGameInit(data.Data);
                break;
            case BaseEnum.GameCommand.MSG_GAME_START:
                this.OnGameStart(data.Data);
                break;
            case BaseEnum.GameCommand.MSG_GAME_BETRESULT:
                this.OnBetResult(data.Data);
                break;
            case BaseEnum.GameCommand.MSG_GAME_STOPBET:
                this.OnStopBet();
                break;
            case BaseEnum.GameCommand.MSG_GAME_GAMERESULT:
                this.OnGameResult(data.Data);
                break;
            case BaseEnum.GameCommand.MSG_GAME_SETTLERESULT:
                this.OnSettleResult(data.Data);
                break;
            case BaseEnum.GameCommand.MSG_GAME_OTHER:
                this.OnGameOther(data.Data);
                break;
            default:
        }
    }

    /**
     * 游戏初始化回调
     * @param data 游戏初始化信息
     */
    abstract OnGameInit(data: any): void;

    /**
     * 游戏开始回调
     * @param data 游戏开始信息
     */
    abstract OnGameStart(data: any): void;

    /**
     * 游戏投注结果回调
     * @param data 游戏投注结果信息
     */
    abstract OnBetResult(data: any): void;

    /**
     * 游戏停止投注回调
     */
    abstract OnStopBet(): void;

    /**
     * 游戏结束回调
     * @param data 游戏结束结果信息
     */
    abstract OnGameResult(data: any): void;

    /**
     * 游戏结算回调
     * @param data 游戏结算结果信息
     */
    abstract OnSettleResult(data: any): void;

    /**
     * 游戏其他信息回调
     * @param data 游戏其他信息
     */
    abstract OnGameOther(data: any): void;


}