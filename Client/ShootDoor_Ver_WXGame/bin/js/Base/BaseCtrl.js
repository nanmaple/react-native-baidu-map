/// <reference path="../GameConfig.ts"/>
/**
* 基础类
*/
var BaseCtrl = /** @class */ (function () {
    /**
     * 构造函数，传入游戏ID
     * @param gameID
     */
    function BaseCtrl(gameID) {
        var _this = this;
        this.gameID = gameID;
        this.parentID = Utils.Url.GetQuery("parentid");
        var loginService = new Laya.Browser.window.LoginService(Utils.Http, Utils.Storage);
        //获取会员信息缓存
        this.memberInfo = loginService.GetMemberInfoByLocal();
        //获取会员ID
        this.memberId = this.memberInfo.MemberId;
        // this.memberId = 121;
        //获取授权信息缓存
        this.authorizationInfo = loginService.GetAuthorizationDtoByLocal();
        var wechat = new Laya.Browser.window.Wechat(Utils.Http, null, null);
        var Storage = new Utils.Storage();
        var appID = Storage.Get("AppId", 0);
        if (appID) {
            GameConfig.GetAppID(appID);
        }
        else {
            wechat.GetAppID().then(function (appID) {
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
        var isWeChat = Laya.Browser.window.navigator.userAgent.indexOf('MicroMessenger') >= 0; //判断是否微信浏览器
        Laya.timer.loop(2000, this, function () {
            if (isWeChat) {
                wechat.GetNetworkType(function (type) { _this.GetNetworkSuccess(type); });
            }
            else {
                wechat.GetPcNetworkType(function (type) { _this.GetNetworkSuccess(type); });
            }
        });
    }
    /**
     * 网络状态
     * @param networkType 网络状态
     */
    BaseCtrl.prototype.GetNetworkSuccess = function (networkType) {
        if (networkType) {
            this.socket.SetNetwork(true);
        }
        else {
            this.socket.SetNetwork(false);
        }
        this.OnNoNetwork();
    };
    /**
     * 发送消息
     * @param data 消息内容
     * @param msgID 消息ID,如果不传，默认生成一个新的
     */
    BaseCtrl.prototype.Send = function (data, msgID) {
        if (msgID === void 0) { msgID = Utils.Guid.Create(); }
        this.socket.Send(data, msgID);
    };
    /**
     * 侦听游戏命令
     * @param data
     */
    BaseCtrl.prototype.OnMessageHandler = function (data) {
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
    };
    return BaseCtrl;
}());
