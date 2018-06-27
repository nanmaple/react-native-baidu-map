
/// <reference path="../Dto/MemberInfoDto.ts" />
/// <reference path="../Dto/AuthorizationDto.ts" />
/// <reference path="../Dto/GameModalDto.ts" />

/// <reference path="../Network/Socket/index.ts" />
/// <reference path="../Network/WebApi/index.ts" />

/// <reference path="../Utils/NetworkCheck.ts" />

abstract class BaseGameLogic {
    /********************* 基础 *********************/
    /**
     * 游戏基础信息
     */
    public GameInfo: any = {
        GameId: 0,
    };

    /**
     * 会员信息
     */
    private memberInfo: BaseDto.MemberInfoDto = null;

    /**
     * 授权信息
     */
    private authorizationInfo: BaseDto.AuthorizationDto = null;

    /**
     * 网络状态
     */
    private networkStatus: boolean = true;

    /**
     * socket
     */
    private socket: Network.SocketManager = new Network.SocketManager();

    /**
     * webapi
     */
    private webApi: Network.WebApi = Network.WebApi.GetInstance();

    /**
     * 游戏界面管理
     */
    protected gameView: BaseGameViewLogic;

    /**
     * 会员管理
     */
    private memberManager: MemberManager.Member = new MemberManager.Member();

    /********************* 基础 *********************/
    constructor() {
        //启动网络监测
        this.InitNetWork();
        this.InitLogin();
    }

    /********************* 日志 *********************/
    /**
     * 日志
     * @param msg 日志内容 
     * @param key 日志key值
     */
    protected Log(msg: any = "", key: string = "log"): void {
        if (GameConfig.OpenLog) {
            console.log(Date.now().toString(), key + ":", msg);
        }
    }

    /********************* 网络状态 *********************/
    /**
     * 初始化监听网路状态
     */
    private InitNetWork() {
        Utils.NetworkCheck((hasNet: boolean) => {
            this.networkStatus = hasNet;
            if (!this.authorizationInfo) {
                return;
            }
            if (this.socket && !this.authorizationInfo.IsClose) {
                this.socket.SetNetwork(hasNet);
            }
            this.Log(hasNet, "network");
        })
    }

    /********************* 界面事件Handler *********************/
    /**
     * 抽象方法，GameView和GameMain的连接Handler
     */
    abstract Handler(Type: any, Data: any): void;
    /********************* 数据处理方法 *********************/
    /**
     * 获取会员余额
     */
    protected GetMemberInfo() {
        let dto: BaseDto.MemberInfoDto = new BaseDto.MemberInfoDto();
        dto.Account = this.memberInfo.Account;
        dto.HeadImageUrl = this.memberInfo.HeadImageUrl;
        dto.Nickname = this.memberInfo.Nickname;
        dto.MemberId = this.memberInfo.MemberId;
        dto.Score = this.memberInfo.Score;
        return dto;
    }

    /**
     * 设置会员分数，服务器同步过来的分数
     * @param score 分数
     */
    protected SetBalance(balance: number) {
        this.memberInfo.Score = balance;
    }

    /**
     * 获取会员余额
     */
    protected GetBalance() {
        return this.memberInfo.Score;
    }

    /**
     * 账号是否关闭
     */
    protected IsMemberClose() {
        return this.authorizationInfo.IsClose
    }

    /**
     * 账号是否为游客
     */
    protected IsTourist() {
        return this.authorizationInfo.IsTourists
    }

    /********************* 登录处理 *********************/
    private InitLogin() {
        this.memberManager.CheckLogin(Laya.Handler.create(this, this.successHandler, null, false), Laya.Handler.create(this, this.failHanlder, null, false));
    }

    /**
     * 登录检测成功Handler
     * @param data 数据类型和数据
     */
    private successHandler(data: BaseDto.CheckLoginDto): void {
        if (data.Type == BaseEnum.CheckLoginEnum.MemberInfo) {
            this.authorizationInfo = this.memberManager.GetAuthorization();
            this.memberInfo = this.memberManager.GetMemberInfo();
        } else {
            this.LoginSuccess(data.Data);
        }
    }

    /**
     * 用户登录信息检测成功，执行获取socketToken成功
     */
    private LoginSuccess(socketToken: string): void {
        //通知总UI数据处理完成，渲染页面
        this.gameView.SetData(BaseEnum.GameViewLogicEnum.LoginComplete, '');
        //获取用户缓存
        this.memberInfo = this.memberManager.GetMemberInfo();
        this.authorizationInfo = this.memberManager.GetAuthorization();
        //同步服务器会员分数
        this.SetBalance(this.memberInfo.Score);
        //生成socket地址
        let socketUrl = GameConfig.GetSocketUrl(this.memberInfo.MemberId, socketToken);
        //初始socket
        this.InitSocket();
        //启动连接
        this.StartSocket(socketUrl);
    }

    /**
     * 登录检测失败Handler
     * @param data 错误类型和错误信息
     */
    private failHanlder(data: BaseDto.CheckLoginDto): void {
        if (data.Type == BaseEnum.CheckLoginEnum.MemberInfo) {

        } else {
            //通知总UI发生错误 
            this.gameView.SetData(BaseEnum.GameViewLogicEnum.Error, data.Data);
        }
    }
    /********************* Socket *********************/
    /**
     * 初始化Socket
     */
    protected InitSocket() {
        //创建socket
        this.socket = new Network.SocketManager();
        //连接事件侦听
        this.socket.on(Network.SocketEvent.OnConnect, this, this.OnPreConnectHandler);
        //关闭事件侦听
        this.socket.on(Network.SocketEvent.OnClose, this, this.OnPreCloseHandler);
        //会员状态关闭事件侦听
        this.socket.on(Network.SocketEvent.OnMemberClose, this, this.OnMemberCloseHandler);
        //错误事件侦听
        this.socket.on(Network.SocketEvent.OnError, this, this.OnErrorHandler);
        //重连事件侦听
        this.socket.on(Network.SocketEvent.OnWillReconnect, this, this.OnPreWillReconnectHandler);
        //接收消息事件侦听
        this.socket.on(Network.SocketEvent.OnGame, this, this.OnPreMessageHandler);
        //登出事件侦听
        this.socket.on(Network.SocketEvent.OnLogout, this, this.OnPreLogoutHandler);
        //投注ACK回调
        this.socket.on(Network.SocketEvent.OnAck, this, this.OnAckHandler);
        //系统推送
        this.socket.on(Network.SocketEvent.OnSystemPush, this, this.OnSystemPushHandler);
    }

    /**
     * 预处理socket连接
     */
    private OnPreConnectHandler() {
        //关闭loading
        let dto: BaseDto.GameModalDto = new BaseDto.GameModalDto();
        dto.Type = BaseEnum.GameModalEnum.Close;
        this.gameView.SetData(BaseEnum.GameViewLogicEnum.Loading, dto);
        this.OnConnectHandler();
    }
    /**
     * 预处理Socket关闭
     */
    private OnPreCloseHandler(message: string) {
        //启动loading
        let dto: BaseDto.GameModalDto = new BaseDto.GameModalDto();
        dto.Type = BaseEnum.GameModalEnum.Open;
        this.gameView.SetData(BaseEnum.GameViewLogicEnum.Loading, dto);
        //分发
        this.OnCloseHandler(message);
    }
    /**
     * 预处理Socket重连
     */
    private OnPreWillReconnectHandler() {
        //启动loading
        let dto: BaseDto.GameModalDto = new BaseDto.GameModalDto();
        dto.Type = BaseEnum.GameModalEnum.Open;
        this.gameView.SetData(BaseEnum.GameViewLogicEnum.Loading, dto);
        //分发
        this.OnWillReconnectHandler();
    }
    /**
     * 预处理Socket会员关闭
     */
    private OnPreMemberCloseHandler() {
        //修改会员关闭状态
        this.authorizationInfo.IsClose = true;
        //停止socket
        this.socket.SetNetwork(false);
        this.socket.Close();
        //启动loading
        let dto: BaseDto.GameModalDto = new BaseDto.GameModalDto();
        dto.Type = BaseEnum.GameModalEnum.MemClose;
        this.gameView.SetData(BaseEnum.GameViewLogicEnum.Loading, dto);
        //分发
        this.OnMemberCloseHandler();
    }

    /**
     * 预处理Socket会员登出
     */
    private OnPreLogoutHandler() {
        //停止socket
        this.socket.SetNetwork(false);
        this.socket.Close();
        //启动loading
        let dto: BaseDto.GameModalDto = new BaseDto.GameModalDto();
        dto.Type = BaseEnum.GameModalEnum.LoginOut;
        this.gameView.SetData(BaseEnum.GameViewLogicEnum.Loading, dto);
        //分发
        this.OnLogoutHandler();
    }

    /**
     * 预处理Socket游戏命令
     */
    private OnPreMessageHandler(response: any) {
        this.OnMessageHandler(response);
    }

    /**
     * 启动Socket
     * @param socketUrl Socket连接地址
     */
    private StartSocket(socketUrl: string) {
        this.socket.Connect(socketUrl)
    }

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
        this.socket.Send(data, msgId);
        return msgId
    }
}