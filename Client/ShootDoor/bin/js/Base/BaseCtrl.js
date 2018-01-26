/// <reference path="../GameConfig.ts"/>
/**
* 基础类
*/
var BaseCtrl = (function () {
    /**
     * 构造函数，传入游戏ID
     * @param gameID
     */
    function BaseCtrl(gameID) {
        this.gameID = gameID;
        this.parentID = Utils.Url.GetQuery("parentID");
        //从会员服务中获取用户信息
        var memberServer = new ServiceManager.MemberManager(this.gameID);
        //获取Socket Token
        this.authorizationInfo = memberServer.GetSocketInfo();
        //获取会员信息
        this.memberInfo = memberServer.GetMemberInfo();
        //获取会员ID
        var memberId = this.memberInfo != null ? this.memberInfo.MemberId : 0;
        //设备ID
        var deviceId = "123456";
        //生成socket 地址
        var socketUrl = GameConfig.GetSocketUrl(memberId, deviceId, this.authorizationInfo.SocketToken);
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
        this.socket.Connect(socketUrl);
    }
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
