
/// <reference path="../Dto/MemberInfoDto.ts" />
/// <reference path="../Dto/AuthorizationDto.ts" />
/// <reference path="../Dto/GameModalDto.ts" />

/// <reference path="../Network/Socket/index.ts" />
/// <reference path="../Network/WebApi/index.ts" />

abstract class GameManager {
    /********************* 基础 *********************/
    /**
     * 游戏基础信息
     */
    protected GameInfo: any = {
        GameId: 0,
        ParentId: "",
        SocketToken: "",
        RoundID: "",
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
     * 游戏状态
     */
    protected GameStatus: GameEnum.GameStatus = 0;

    /**
     * 投注数据
     */
    protected BetInfo: Bet.BetDataDto = new Bet.BetDataDto();

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
    protected GameView: GameView = new GameView(Laya.Handler.create(this, this.Handler, null, false));

    /**
     * 会员管理
     */
    protected memberManager: MemberManager.Member = new MemberManager.Member();

    /**
     * 投注管理
     */
    protected betLogic: Bet.BetLogic = new Bet.BetLogic();
    /********************* 基础 *********************/

    constructor() {
        //启动网络监测
        this.InitNetWork();
        this.InitState();

    }

    /********************* 界面事件hander *********************/
    /**
     * GameView和GameMain的连接Hander
     */
    abstract Handler(Type: Enum.GameViewHandlerEnum, Data: any): void;

    /********************* Socket *********************/
    /**
     * 初始化Socket
     */
    protected InitSocket() {
        //创建socket
        this.Socket = new Network.Socket.SocketManager();
        //连接事件侦听
        this.Socket.on(Network.Socket.SocketEvent.OnConnect, this, this.BaseOnConnectHandler);
        //关闭事件侦听
        this.Socket.on(Network.Socket.SocketEvent.OnClose, this, this.BaseOnCloseHandler);
        //会员状态关闭事件侦听
        this.Socket.on(Network.Socket.SocketEvent.OnMemberClose, this, this.OnMemberCloseHandler);
        //错误事件侦听
        this.Socket.on(Network.Socket.SocketEvent.OnError, this, this.OnErrorHandler);
        //重连事件侦听
        this.Socket.on(Network.Socket.SocketEvent.OnWillReconnect, this, this.OnWillReconnectHandler);
        //接收消息事件侦听
        this.Socket.on(Network.Socket.SocketEvent.OnGame, this, this.BaseOnMessageHandler);
        //登出事件侦听
        this.Socket.on(Network.Socket.SocketEvent.OnLogout, this, this.OnLogoutHandler);
        //投注ACK回调
        this.Socket.on(Network.Socket.SocketEvent.OnAck, this, this.OnAckHandler);
        //系统推送
        this.Socket.on(Network.Socket.SocketEvent.OnSystemPush, this, this.OnSystemPushHandler);
    }

    /**
     * 预处理Socket连接
     */
    private BaseOnConnectHandler() {
        //关闭loading
        let dto: GameDto.GameModalDto = new GameDto.GameModalDto();
        dto.Type = GameEnum.GameModalEnum.Close;
        this.GameView.SetData(GameEnum.GameViewEnum.Loading, dto);
        this.OnConnectHandler();
    }
    /**
     * 预处理Socket关闭
     */
    private BaseOnCloseHandler(message: string) {
        //启动loading
        let dto: GameDto.GameModalDto = new GameDto.GameModalDto();
        dto.Type = GameEnum.GameModalEnum.Open;
        this.GameView.SetData(GameEnum.GameViewEnum.Loading, dto);
        //分发
        this.OnCloseHandler(message);
    }
    /**
     * 预处理Socket重连
     */
    private BaseOnWillReconnectHandler() {
        //启动loading
        let dto: GameDto.GameModalDto = new GameDto.GameModalDto();
        dto.Type = GameEnum.GameModalEnum.Open;
        this.GameView.SetData(GameEnum.GameViewEnum.Loading, dto);
        //分发
        this.OnWillReconnectHandler();
    }
    /**
     * 预处理Socket会员关闭
     */
    private BaseOnMemberCloseHandler() {
        //修改会员关闭状态
        this.Authorization.IsClose = true;
        //停止socket
        this.Socket.SetNetwork(false);
        this.Socket.Close();
        //启动loading
        let dto: GameDto.GameModalDto = new GameDto.GameModalDto();
        dto.Type = GameEnum.GameModalEnum.MemClose;
        this.GameView.SetData(GameEnum.GameViewEnum.Loading, dto);
        //分发
        this.OnMemberCloseHandler();
    }

    /**
     * 预处理Socket会员登出
     */
    private BaseOnLogoutHandler() {
        //停止socket
        this.Socket.SetNetwork(false);
        this.Socket.Close();
        //启动loading
        let dto: GameDto.GameModalDto = new GameDto.GameModalDto();
        dto.Type = GameEnum.GameModalEnum.LoginOut;
        this.GameView.SetData(GameEnum.GameViewEnum.Loading, dto);
        //分发
        this.OnLogoutHandler();
    }

    /**
     * 预处理Socket游戏命令
     */
    private BaseOnMessageHandler(response: any) {
        let data: any = response.Data;
        switch (response.Command) {
            case GameEnum.GameCommand.MSG_GAME_INIT://初始化
                //修改游戏状态:服务器状态
                this.GameStatus = data.Status;
                //同步会员分数
                this.SetMemberScore(data.Balance);
                //同步局号
                this.GameInfo.RoundID = data.RoundID;
                break;
            case GameEnum.GameCommand.MSG_GAME_START: //游戏开始
                //修改游戏状态:游戏开始，可投注
                this.GameStatus = GameEnum.GameStatus.BET;
                data.Status = this.GameStatus;
                break;
            case GameEnum.GameCommand.MSG_GAME_BETRESULT://投注结果
                //同步会员分数
                this.SetMemberScore(data.Balance);
                break;
            case GameEnum.GameCommand.MSG_GAME_STOPBET://游戏停止投注
                //修改游戏状态:结束
                this.GameStatus = GameEnum.GameStatus.END;
                data.Status = this.GameStatus;
                break
            case GameEnum.GameCommand.MSG_GAME_GAMERESULT: //游戏结果
                //修改游戏状态:正在结算
                this.GameStatus = GameEnum.GameStatus.SETTLE;
                data.Status = this.GameStatus;
                break;
            case GameEnum.GameCommand.MSG_GAME_SETTLERESULT://游戏结算
                //修改游戏状态:已结算
                this.GameStatus = GameEnum.GameStatus.SETTLEED;
                data.Status = this.GameStatus;
                //同步会员分数
                this.SetMemberScore(data.Balance);
                break;
            default:
                break;
        }
        response.Data = data;
        this.OnMessageHandler(response);
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
            if (!this.Authorization) {
                return;
            }
            if (this.Socket && !this.Authorization.IsClose) {
                this.Socket.SetNetwork(hasNet);
            }
            console.log("network :", hasNet);
        })
    }

    /**
     * 游戏视图回调
     */
    private GameViewHander(): void {

    }

    protected Log(msg: any = "", key: string = "log"): void {
        if (GameConfig.IsDebug) {
            // console.log(Date.now().toString(), key + ":", msg);
        }
    }
    /********************* 网络状态 *********************/

    /********************* 数据处理 *********************/
    /**
     * 设置会员分数，服务器同步过来的分数
     * @param score 分数
     */
    protected SetMemberScore(score: number) {
        this.MemberInfo.Score = score;
    }

    /**
     * 同步服务器已投注成功数据
     * @param data 服务投注数据
     */
    protected SyncBetData(data: any) {
        this.BetInfo.BetSuccessData = data;
    }

    /**
     * 重置信息
     */
    private ResetInfo(): void {

    }
    /**
     * 投注逻辑
     * @param data 位置传输的数据
     */
    protected Bet(data: Bet.BetPosValue):any {
        let result = this.betLogic.Bet(this.MemberInfo.Score, this.BetInfo, data);
        return result;
    }

    /********************* 数据处理 *********************/

    /********************* 登录处理 *********************/
    private InitState() {
        this.memberManager.CheckLogin(Laya.Handler.create(this, this.successHandler, null, false), Laya.Handler.create(this, this.failHanlder, null, false));
    }

    /**
     * 成功
     * @param data 数据类型和数据
     */
    private successHandler(data: GameDto.CheckLoginDto): void {
        if (data.Type == GameEnum.CheckLoginEnum.MemberInfo) {
            this.Authorization = this.memberManager.GetAuthorization();
            this.MemberInfo = this.memberManager.GetMemberInfo();
        } else {
            this.LoginSuccess(data.Data);
        }
    }

    /**
     * 失败
     * @param data 错误类型和错误信息
     */
    private failHanlder(data: GameDto.CheckLoginDto): void {
        if (data.Type == GameEnum.CheckLoginEnum.MemberInfo) {

        } else {
            //通知总UI发生错误 
            this.GameView.SetData(GameEnum.GameViewEnum.Error, data.Data);
        }
    }

    /**
     * 获取socketToken成功
     */
    private LoginSuccess(socketToken: string): void {
        this.GameInfo.SocketToken = socketToken;
        //通知总UI数据处理完成，渲染页面
        this.GameView.SetData(GameEnum.GameViewEnum.LoginComplete, '');
        //配置微信信息
        this.ConfigWechat();
        //获取用户缓存
        this.MemberInfo = this.memberManager.GetMemberInfo();
        this.Authorization = this.memberManager.GetAuthorization();
        //同步服务器会员分数
        this.SetMemberScore(this.MemberInfo.Score);
        //生成socket地址
        let socketUrl = GameConfig.GetSocketUrl(this.MemberInfo.MemberId, this.GameInfo.SocketToken);
        //初始socket
        this.InitSocket();
        //启动连接
        this.StartSocket(socketUrl);
    }
    /**
     * 配置微信分享
     */
    private ConfigWechat() {
        let wechat = new Laya.Browser.window.Wechat(Utils.Http, null, null);
        let appID: any = wechat.GetAppIDByLocal("AppId", 0);
        if (appID) {
            GameConfig.SetAppID(appID);
        } else {
            wechat.GetAppID().then((appID) => {
                GameConfig.SetAppID(appID);
            });
        }
    }
    /********************* 登录处理 *********************/
}