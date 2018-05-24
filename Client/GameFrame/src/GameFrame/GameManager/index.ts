
/// <reference path="../Dto/MemberInfoDto.ts" />
/// <reference path="../Dto/AuthorizationDto.ts" />

/// <reference path="../Network/Socket/index.ts" />
/// <reference path="../Network/WebApi/index.ts" />

abstract class GameManager {
    /********************* 基础 *********************/
    /**
     * 游戏基础信息
     */
    protected GameInfo: any = {
        GameId: 0,
        ParentId: ""
    };

    /**
     * 会员信息
     */
    protected MemberInfo: GameDto.MemberInfoDto = null;

    /**
     * 授权信息
     */
    protected Authorization: GameDto.AuthorizationDto = null;

    /**
     * 网络状态
     */
    protected NetworkStatus: boolean = true;

    /**
     * 网络状态
     */
    protected GameStatus: number = 0;

    /**
     * 游戏分数
     */
    protected GameScore: number = 0;

    /**
     * 投注数据
     */
    protected BetInfo: number = 0;

    /**
     * socket
     */
    protected Socket: Network.Socket.SocketManager = new Network.Socket.SocketManager();

    /**
     * webapi
     */
    protected WebApi: Network.Http.WebApi = Network.Http.WebApi.GetInstance();

    /**
     * 游戏界面管理
     */
    protected GameView: any = null;
    /********************* 基础 *********************/

    constructor() {
        //启动网络监测
        this.InitNetWork();
    }

    /********************* Socket *********************/
    /**
     * 初始化Socket
     */
    protected InitSocket() {
        //创建socket
        this.Socket = new Network.Socket.SocketManager();
        //连接事件侦听
        this.Socket.on(Network.Socket.SocketEvent.OnConnect, this, this.OnConnectHandler);
        //关闭事件侦听
        this.Socket.on(Network.Socket.SocketEvent.OnClose, this, this.OnCloseHandler);
        //会员状态关闭事件侦听
        this.Socket.on(Network.Socket.SocketEvent.OnMemberClose, this, this.OnMemberCloseHandler);
        //错误事件侦听
        this.Socket.on(Network.Socket.SocketEvent.OnError, this, this.OnErrorHandler);
        //重连事件侦听
        this.Socket.on(Network.Socket.SocketEvent.OnWillReconnect, this, this.OnWillReconnectHandler);
        //接收消息事件侦听
        this.Socket.on(Network.Socket.SocketEvent.OnGame, this, this.OnMessageHandler);
        //登出事件侦听
        this.Socket.on(Network.Socket.SocketEvent.OnLogout, this, this.OnLogoutHandler);
        //投注ACK回调
        this.Socket.on(Network.Socket.SocketEvent.OnAck, this, this.OnAckHandler);
        //系统推送
        this.Socket.on(Network.Socket.SocketEvent.OnSystemPush, this, this.OnSystemPushHandler);
    }

    /**
     * 启动Socket
     * @param socketUrl Socket连接地址
     */
    protected StartSocket(socketUrl: string) {
        this.Socket.Connect(socketUrl)
    }

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
     * 侦听游戏命令
     * @param data 
     */
    abstract OnMessageHandler(data: any): void;

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
     * 发送数据
     * @param gameData 游戏命令组装的数据
     * @param msgID 消息ID，默认创建新的，存在直接使用
     */
    protected Send(data: any, msgId: string = Utils.Guid.Create()) {
        this.Socket.Send(data, msgId);
        return msgId
    }
    /********************* Socket *********************/


    /********************* 网络状态 *********************/
    /**
     * 初始化监听网路状态
     */
    private InitNetWork() {
        Utils.NetworkCheck((hasNet: boolean) => {
            this.NetworkStatus = hasNet;
            if (this.Socket) {
                this.Socket.SetNetwork(hasNet);
            }
            console.log("network :", hasNet);
        })
    }

    /********************* 网络状态 *********************/
    /**
     * 设置会员分数，服务器同步过来的分数
     * @param score 分数
     */
    protected SetMemberScore(score: string) {
        this.MemberInfo.Score = score;
    }

    /**
     * 设置分数页面及服务器分数
     * @param score 分数
     */
    protected SetScore(score: string) {
        this.MemberInfo.Score = score;
    }

}