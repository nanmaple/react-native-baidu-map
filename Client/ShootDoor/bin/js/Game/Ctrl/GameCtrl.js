var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GameCtrl = (function (_super) {
    __extends(GameCtrl, _super);
    /**
     * 页面关闭回调
     * @param onClose 回调Handler
     */
    function GameCtrl(onClose) {
        var _this = _super.call(this, GameConfig.GameID) || this;
        //绑定关闭页面事件回调
        _this.onClose = onClose;
        //添加UI到舞台
        _this.gameScenes = new ScenePanel.GameScenes();
        Net.WebApi.instance.SetToken();
        //创建游戏状态控制类实例
        _this.RoundPanelCtrl = new RoundPanelCtrl(_this.gameScenes.roundPanel);
        //创建扑克牌面板控制类实例
        _this.CardPanelCtrl = new CardPanelCtrl(_this.gameScenes.cardPanel, _this.gameScenes.footballPanel);
        //创建投注控制实例
        _this.BetCtrl = new BetPanelCtrl(_this.gameScenes.betPanel, Laya.Handler.create(_this, _this.SendHandelr, null, false), _this.authorizationInfo.IsClose, _this.memberInfo);
        //创建历史记录面板控制类实例
        _this.HistoryPanelCtrl = new HistoryPanelCtrl(_this.gameScenes.historyPanel);
        //创建时间面板控制类实例
        _this.TimePanelCtrl = new TimePanelCtrl(_this.gameScenes.timePanel);
        //创建游戏头部面板控制类实例
        _this.HeadPanelCtrl = new HeadPanelCtrl(_this.gameScenes.headPanel, _this.gameScenes.noteReocrdPanel, _this.gameScenes.rulePanel, _this.memberInfo, _this.parentID);
        //创建tipCtrl
        if (!_this.memberInfo) {
            var tipsCtrl = new TipsPanelCtrl(_this.gameScenes.tipsPanel);
            tipsCtrl.Show();
        }
        return _this;
    }
    /**
     * 侦听Socket连接事件
     * @param data
     */
    GameCtrl.prototype.OnConnectHandler = function () {
        console.log("侦听:Socket连接");
    };
    /**
     * 侦听Socket关闭事件
     * @param data
     */
    GameCtrl.prototype.OnCloseHandler = function () {
        console.log("侦听:Socket关闭");
    };
    /**
     * 侦听Socket错误事件
     * @param data
     */
    GameCtrl.prototype.OnErrorHandler = function (message) {
        console.log("侦听:Socket错误");
    };
    /**
     * 侦听Socket连接事件
     * @param data
     */
    GameCtrl.prototype.OnWillReconnectHandler = function () {
        console.log("侦听:Socket重连");
    };
    /**
     * 侦听登出事件
     * @param data
     */
    GameCtrl.prototype.OnLogoutHandler = function () {
        console.log("侦听:登出");
    };
    /**
     * Ack回调
     * @param data
     */
    GameCtrl.prototype.OnAckHandler = function (data) {
        console.log("侦听:Ack");
        this.BetCtrl.BetAck(data);
    };
    /**
     * 系统推送（预留）
     * @param data
     */
    GameCtrl.prototype.OnSystemPushHandler = function (data) {
    };
    GameCtrl.prototype.SendHandelr = function (dto) {
        var msgID = dto.MsgID ? dto.MsgID : Utils.Guid.Create();
        this.BetCtrl.SetMsgID(msgID);
        this.Send(dto.Data, msgID);
    };
    /**
     * 游戏初始化回调
     * @param data 游戏初始化信息
     */
    GameCtrl.prototype.OnGameInit = function (data) {
        if (data && data.RoundID) {
            this.RoundPanelCtrl.SetGameRound(data.RoundID);
        }
        if (data.Status == 0) {
            this.RoundPanelCtrl.SetGameState(0);
        }
        //投注状态
        //1.显示当前剩余投注时间data.BetTime
        if (data.Status == 1 && data.BetTime >= 0) {
            this.TimePanelCtrl.StartGameTime(data.BetTime);
            this.RoundPanelCtrl.SetGameState(1);
        }
        //2.初始化投注界面
        if (data) {
            this.BetCtrl.GameInit(data);
        }
        //3.显示当前牌面data.Cards
        if (data && data.Cards) {
            this.CardPanelCtrl.InitGame(data.Cards);
        }
        //4.显示历史记录data.History
        if (data && data.History) {
            this.HistoryPanelCtrl.SetHistoryData(data.History);
        }
        if (data && data.Limit) {
            this.HistoryPanelCtrl.SetLimit(data.Limit);
        }
        console.log("MSG:游戏初始化", data);
    };
    /**
     * 游戏开始回调
     * @param data 游戏开始信息
     */
    GameCtrl.prototype.OnGameStart = function (data) {
        if (data && data.RoundID) {
            this.RoundPanelCtrl.SetGameRound(data.RoundID);
        }
        this.RoundPanelCtrl.SetGameState(1); //计时开始
        console.log("MSG:游戏开始", data);
        //1.显示赔率
        if (data && data.Odds) {
            //开始游戏
            this.BetCtrl.GameStart(data.Odds);
        }
        //2.重置倒计时并显示时间
        if (data && data.BetTime) {
            this.TimePanelCtrl.StartGameTime(data.BetTime);
        }
        //3.重置牌面，显示第一和第二张牌
        this.CardPanelCtrl.StartGame(data);
    };
    /**
     * 游戏投注结果回调
     * @param data 游戏投注结果信息
     */
    GameCtrl.prototype.OnBetResult = function (data) {
        console.log("MSG:游戏投注结果", data);
        //投注结果返回
        this.BetCtrl.BetResult(data);
        if (!this.authorizationInfo.IsClose && data.Success) {
            //改变总金额
            this.HeadPanelCtrl.ChangeMoney(data.Balance);
        }
    };
    /**
     * 游戏停止投注回调
     */
    GameCtrl.prototype.OnStopBet = function () {
        console.log("MSG:游戏停止投注");
    };
    /**
     * 游戏结束回调
     * @param data 游戏结束结果信息
     */
    GameCtrl.prototype.OnGameResult = function (data) {
        var _this = this;
        this.RoundPanelCtrl.SetGameState(2);
        console.log("MSG:游戏结束", data);
        //禁用面板按钮
        this.BetCtrl.GameResult();
        //翻转第三张牌及足球效果
        this.CardPanelCtrl.EndGame(data);
        //停止时间
        this.TimePanelCtrl.EndGameTime();
        //第三张牌翻转结束回调
        this.CardPanelCtrl.EndGameHander(Laya.Handler.create(this, function () {
            //添加历史记录
            _this.HistoryPanelCtrl.AddHistoryList(data);
        }));
    };
    /**
     * 游戏结算回调
     * @param data 游戏结算结果信息
     */
    GameCtrl.prototype.OnSettleResult = function (data) {
        this.RoundPanelCtrl.SetGameState(3);
        console.log("MSG:游戏结算", data);
        //显示输赢效果
        this.BetCtrl.SettleResult(data);
        if (!this.authorizationInfo.IsClose) {
            //改变总金额
            this.HeadPanelCtrl.ChangeMoney(data.Balance);
        }
    };
    /**
     * 游戏其他信息回调
     * @param data 游戏其他信息
     */
    GameCtrl.prototype.OnGameOther = function (data) {
        console.log("MSG:游戏其他信息", data);
    };
    return GameCtrl;
}(BaseCtrl));