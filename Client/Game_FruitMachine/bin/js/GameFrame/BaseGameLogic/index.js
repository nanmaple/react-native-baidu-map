/// <reference path="../Dto/MemberInfoDto.ts" />
/// <reference path="../Dto/AuthorizationDto.ts" />
/// <reference path="../Dto/GameModalDto.ts" />
/// <reference path="../Network/Socket/index.ts" />
/// <reference path="../Network/WebApi/index.ts" />
/// <reference path="../Utils/NetworkCheck.ts" />
/// <reference path="../Utils/NetworkCheck.ts" />
var BaseGameLogic = /** @class */ (function () {
    /********************* 基础 *********************/
    function BaseGameLogic() {
        /********************* 基础 *********************/
        /**
         * 游戏基础信息
         */
        this.GameInfo = {
            GameId: 0,
            SocketUrl: ""
        };
        /**
         * 会员信息
         */
        this.memberInfo = null;
        /**
         * 授权信息
         */
        this.authorizationInfo = null;
        /**
         * 网络状态
         */
        this.networkStatus = true;
        /**
         * socket
         */
        this.socket = new Network.SocketManager();
        /**
         * webapi
         */
        this.webApi = Network.WebApi.GetInstance();
        /**
         * 会员管理
         */
        this.memberManager = new MemberManager.Member();
        //启动网络监测
        this.InitNetWork();
        this.InitLogin();
        this.gameView = new GameViewLogic(Laya.Handler.create(this, this.ViewHandler, null, false));
    }
    /********************* 日志 *********************/
    /**
     * 日志
     * @param msg 日志内容
     * @param key 日志key值
     */
    BaseGameLogic.prototype.Log = function (msg, key) {
        if (msg === void 0) { msg = ""; }
        if (key === void 0) { key = "log"; }
        if (GameConfig.OpenLog) {
            console.log(Date.now().toString(), key + ":", msg);
        }
    };
    /********************* 网络状态 *********************/
    /**
     * 初始化监听网路状态
     */
    BaseGameLogic.prototype.InitNetWork = function () {
        var _this = this;
        Utils.NetworkCheck(function (hasNet) {
            _this.networkStatus = hasNet;
            if (!_this.authorizationInfo) {
                return;
            }
            if (_this.socket && !_this.authorizationInfo.IsClose) {
                _this.socket.SetNetwork(hasNet);
            }
            _this.Log(hasNet, "network");
        });
    };
    /********************* 数据处理方法 *********************/
    /**
     * 获取会员信息
     */
    BaseGameLogic.prototype.GetMemberInfo = function () {
        var dto = new BaseDto.MemberInfoDto();
        dto.Account = this.memberInfo.Account;
        dto.HeadImageUrl = this.memberInfo.HeadImageUrl;
        dto.Nickname = this.memberInfo.Nickname;
        dto.MemberId = this.memberInfo.MemberId;
        dto.Score = this.memberInfo.Score;
        return dto;
    };
    /**
     * 设置会员分数，服务器同步过来的分数
     * @param score 分数
     */
    BaseGameLogic.prototype.SetBalance = function (balance) {
        this.memberInfo.Score = balance;
    };
    /**
     * 获取会员余额
     */
    BaseGameLogic.prototype.GetBalance = function () {
        return this.memberInfo.Score;
    };
    /**
     * 获取会员余额
     */
    BaseGameLogic.prototype.GetBalanceByService = function () {
        var _this = this;
        this.memberManager.GetMemberScore(Laya.Handler.create(this, function (response) {
            //同步服务器会员分数
            _this.SetBalance(response.Score);
            //获取余额完成
            _this.GetBalanceComplete(response.Score);
        }, [], false));
    };
    /**
     * 账号是否关闭
     */
    BaseGameLogic.prototype.IsMemberClose = function () {
        return this.authorizationInfo.IsClose;
    };
    /**
     * 账号是否为游客
     */
    BaseGameLogic.prototype.IsTourist = function () {
        return this.authorizationInfo.IsTourists;
    };
    /********************* 登录处理 *********************/
    /**
     * 登录检测
     */
    BaseGameLogic.prototype.InitLogin = function () {
        this.memberManager.CheckLogin(Laya.Handler.create(this, this.SuccessHandler, null, false), Laya.Handler.create(this, this.FailHanlder, null, false));
    };
    /**
     * 登录检测成功Handler
     * @param data 数据类型和数据
     */
    BaseGameLogic.prototype.SuccessHandler = function (data) {
        if (data.Type == BaseEnum.CheckLoginEnum.MemberInfo) {
            this.authorizationInfo = this.memberManager.GetAuthorization();
            this.memberInfo = this.memberManager.GetMemberInfo();
        }
        else {
            this.LoginSuccess(data.Data);
        }
    };
    /**
     * 用户登录信息检测成功，执行获取socketToken成功
     * @param socketToken 游戏token
     */
    BaseGameLogic.prototype.LoginSuccess = function (socketToken) {
        //通知总UI数据处理完成，渲染页面
        this.gameView.SetData(BaseEnum.GameViewLogicEnum.LoginComplete, '');
        this.LoginComplete();
        //获取用户缓存
        this.memberInfo = this.memberManager.GetMemberInfo();
        this.authorizationInfo = this.memberManager.GetAuthorization();
        //同步服务器会员分数
        this.SetBalance(this.memberInfo.Score);
        //生成socket地址
        this.GameInfo.SocketUrl = GameConfig.GetSocketUrl(this.memberInfo.MemberId, socketToken);
        //初始socket
        this.InitSocket();
    };
    /**
     * 登录检测失败Handler
     * @param data 错误类型和错误信息
     */
    BaseGameLogic.prototype.FailHanlder = function (data) {
        if (data.Type == BaseEnum.CheckLoginEnum.MemberInfo) {
        }
        if (data.Type == BaseEnum.CheckLoginEnum.MemberInfoError) {
            //通知总UI发生错误 
            this.gameView.SetData(BaseEnum.GameViewLogicEnum.Error, LanguageUtils.Language.Get("GetMemberInfoError"));
        }
        else {
            //通知总UI发生错误 
            this.gameView.SetData(BaseEnum.GameViewLogicEnum.Error, data.Data);
        }
    };
    /********************* WebApi *********************/
    /**
     * api请求方法，
     * @param requestDto IRequestParams
     */
    BaseGameLogic.prototype.Request = function (requestDto, successCallback, failCallback) {
        if (requestDto.Type.toLowerCase() == "get") {
            this.webApi.Get(requestDto.Url, requestDto.Params, requestDto.Header, function (response) {
                if (response.Result == BaseEnum.ErrorCode.Success) {
                    successCallback(response.Data);
                }
                else {
                    failCallback(response.Result);
                }
            }, function (error) {
                failCallback(error);
            });
        }
        else {
            this.webApi.Post(requestDto.Url, requestDto.Params, requestDto.Header, function (response) {
                if (response.Result == BaseEnum.ErrorCode.Success) {
                    successCallback(response.Data);
                }
                else {
                    failCallback(response.Result);
                }
            }, function (error) {
                failCallback(error);
            });
        }
    };
    /********************* Socket *********************/
    /**
     * 初始化Socket
     */
    BaseGameLogic.prototype.InitSocket = function () {
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
        this.socket.on(Network.SocketEvent.OnGame, this, this.OnMessageHandler);
        //登出事件侦听
        this.socket.on(Network.SocketEvent.OnLogout, this, this.OnPreLogoutHandler);
        //投注ACK回调
        this.socket.on(Network.SocketEvent.OnAck, this, this.OnAckHandler);
        //系统推送
        this.socket.on(Network.SocketEvent.OnSystemPush, this, this.OnSystemPushHandler);
    };
    /**
     * 预处理socket连接
     */
    BaseGameLogic.prototype.OnPreConnectHandler = function () {
        //关闭loading
        var dto = new BaseDto.GameModalDto();
        dto.Type = BaseEnum.GameModalEnum.Close;
        this.gameView.SetData(BaseEnum.GameViewLogicEnum.Loading, dto);
        this.OnConnectHandler();
    };
    /**
     * 预处理Socket关闭
     */
    BaseGameLogic.prototype.OnPreCloseHandler = function (message) {
        //启动loading
        var dto = new BaseDto.GameModalDto();
        dto.Type = BaseEnum.GameModalEnum.Open;
        this.gameView.SetData(BaseEnum.GameViewLogicEnum.Loading, dto);
        //分发
        this.OnCloseHandler(message);
    };
    /**
     * 预处理Socket重连
     */
    BaseGameLogic.prototype.OnPreWillReconnectHandler = function () {
        //启动loading
        var dto = new BaseDto.GameModalDto();
        dto.Type = BaseEnum.GameModalEnum.Open;
        this.gameView.SetData(BaseEnum.GameViewLogicEnum.Loading, dto);
        //分发
        this.OnWillReconnectHandler();
    };
    /**
     * 预处理Socket会员关闭
     */
    BaseGameLogic.prototype.OnPreMemberCloseHandler = function () {
        //修改会员关闭状态
        this.authorizationInfo.IsClose = true;
        //停止socket
        this.socket.SetNetwork(false);
        this.socket.Close();
        //启动loading
        var dto = new BaseDto.GameModalDto();
        dto.Type = BaseEnum.GameModalEnum.MemClose;
        this.gameView.SetData(BaseEnum.GameViewLogicEnum.Loading, dto);
        //分发
        this.OnMemberCloseHandler();
    };
    /**
     * 预处理Socket会员登出
     */
    BaseGameLogic.prototype.OnPreLogoutHandler = function () {
        //停止socket
        this.socket.SetNetwork(false);
        this.socket.Close();
        //启动loading
        var dto = new BaseDto.GameModalDto();
        dto.Type = BaseEnum.GameModalEnum.LoginOut;
        this.gameView.SetData(BaseEnum.GameViewLogicEnum.Loading, dto);
        //分发
        this.OnLogoutHandler();
    };
    /**
     * 启动Socket
     * @param socketUrl Socket连接地址
     */
    BaseGameLogic.prototype.StartSocket = function () {
        if (this.GameInfo.SocketUrl) {
            Laya.timer.clear(this, this.StartSocket);
            this.socket.Connect(this.GameInfo.SocketUrl);
        }
        else {
            Laya.timer.loop(1000, this, this.StartSocket);
        }
    };
    /**
     * 发送数据
     * @param gameData 游戏命令组装的数据
     * @param msgID 消息ID，默认创建新的，存在直接使用
     */
    BaseGameLogic.prototype.Send = function (data, msgId) {
        if (msgId === void 0) { msgId = Utils.Guid.Create(); }
        this.socket.Send(data, msgId);
        return msgId;
    };
    return BaseGameLogic;
}());
//# sourceMappingURL=index.js.map