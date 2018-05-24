/// <reference path="../Dto/MemberInfoDto.ts" />
/// <reference path="../Dto/AuthorizationDto.ts" />
/// <reference path="../Network/Socket/index.ts" />
/// <reference path="../Network/WebApi/index.ts" />
var GameManager = /** @class */ (function () {
    /********************* 基础 *********************/
    function GameManager() {
        /********************* 基础 *********************/
        /**
         * 游戏基础信息
         */
        this.GameInfo = {
            GameId: 0,
            ParentId: ""
        };
        /**
         * 会员信息
         */
        this.MemberInfo = null;
        /**
         * 授权信息
         */
        this.Authorization = null;
        /**
         * 网络状态
         */
        this.NetworkStatus = true;
        /**
         * 网络状态
         */
        this.GameStatus = 0;
        /**
         * 游戏分数
         */
        this.GameScore = 0;
        /**
         * 投注数据
         */
        this.BetInfo = 0;
        /**
         * socket
         */
        this.Socket = new Network.Socket.SocketManager();
        /**
         * webapi
         */
        this.WebApi = Network.Http.WebApi.GetInstance();
        /**
         * 游戏界面管理
         */
        this.GameView = null;
        //启动网络监测
        this.InitNetWork();
    }
    /********************* Socket *********************/
    /**
     * 初始化Socket
     */
    GameManager.prototype.InitSocket = function () {
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
    };
    /**
     * 启动Socket
     * @param socketUrl Socket连接地址
     */
    GameManager.prototype.StartSocket = function (socketUrl) {
        this.Socket.Connect(socketUrl);
    };
    /**
     * 发送数据
     * @param gameData 游戏命令组装的数据
     * @param msgID 消息ID，默认创建新的，存在直接使用
     */
    GameManager.prototype.Send = function (data, msgId) {
        if (msgId === void 0) { msgId = Utils.Guid.Create(); }
        this.Socket.Send(data, msgId);
        return msgId;
    };
    /********************* Socket *********************/
    /********************* 网络状态 *********************/
    /**
     * 初始化监听网路状态
     */
    GameManager.prototype.InitNetWork = function () {
        var _this = this;
        Utils.NetworkCheck(function (hasNet) {
            _this.NetworkStatus = hasNet;
            if (_this.Socket) {
                _this.Socket.SetNetwork(hasNet);
            }
            console.log("network :", hasNet);
        });
    };
    /********************* 网络状态 *********************/
    /**
     * 设置会员分数，服务器同步过来的分数
     * @param score 分数
     */
    GameManager.prototype.SetMemberScore = function (score) {
        this.MemberInfo.Score = score;
    };
    /**
     * 设置分数页面及服务器分数
     * @param score 分数
     */
    GameManager.prototype.SetScore = function (score) {
        this.MemberInfo.Score = score;
    };
    return GameManager;
}());
//# sourceMappingURL=index.js.map