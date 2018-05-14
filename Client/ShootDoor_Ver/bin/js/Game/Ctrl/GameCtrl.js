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
var GameCtrl = /** @class */ (function (_super) {
    __extends(GameCtrl, _super);
    /**
     * 页面关闭回调
     * @param onClose 回调Handler
     */
    function GameCtrl(onClose) {
        var _this = _super.call(this, GameConfig.GameID) || this;
        _this.isAnimateEnd = false;
        _this.settleData = null;
        _this.cacheData = null;
        _this.roundID = null; //当前局号
        _this.currentStatus = 0;
        //绑定关闭页面事件回调
        _this.onClose = onClose;
        //添加UI到舞台
        _this.gameUI = ScenePanel.GameUI.GetInstance();
        _this.gameUI.ChangeModeHanler(Laya.Handler.create(_this, _this.ReInit, null, false));
        ScenePanel.GameUI.GetInstance().GetLoadingPanel().ShowConnect(_this.authorizationInfo.IsClose);
        // 创建游戏状态控制类实例
        _this.RoundPanelCtrl = new RoundPanelCtrl();
        //创建扑克牌面板控制类实例
        _this.CardPanelCtrl = new CardPanelCtrl();
        // //第三张牌翻转结束回调
        _this.CardPanelCtrl.EndGameHander(Laya.Handler.create(_this, _this.FlipEnd, null, false));
        // //创建投注控制实例
        _this.BetCtrl = new BetPanelCtrl(Laya.Handler.create(_this, _this.SendHandelr, null, false), _this.authorizationInfo.IsClose, _this.memberInfo);
        // //创建历史记录面板控制类实例
        _this.HistoryPanelCtrl = new HistoryPanelCtrl();
        // //创建时间面板控制类实例
        _this.TimePanelCtrl = new TimePanelCtrl();
        // //创建游戏头部面板控制类实例
        _this.HeadPanelCtrl = new HeadPanelCtrl();
        _this.HeadPanelCtrl.SetInfo(_this.memberInfo, _this.parentID, _this.authorizationInfo.IsTourists);
        //创建tipCtrl
        if (_this.authorizationInfo.IsTourists) {
            var tipsCtrl = new TipsPanelCtrl();
            tipsCtrl.Show();
        }
        return _this;
    }
    GameCtrl.prototype.ReInit = function () {
        var nowDate = new Date().getTime();
        var date;
        if (!this.cacheData) {
            return;
        }
        date = this.cacheData.BetTime - (nowDate - this.cacheData.BetTimeStamp) / 1000; //相差秒数
        this.cacheData.BetTimeStamp = nowDate;
        this.cacheData.BetTime = date < 0 ? 0 : date;
        this.OnGameInit(this.cacheData, true);
        this.HeadPanelCtrl.SetInfo(this.memberInfo, this.parentID, this.authorizationInfo.IsTourists);
    };
    /**
     * 分享回调
     * @param status 分享结果类型 1.分享成功 0.取消分享 -1.分享失败
     */
    GameCtrl.prototype.WeChatShareHandler = function (status) {
    };
    /**
     * 网络状态
     * @param networkType 网络状态
     */
    GameCtrl.prototype.OnNoNetwork = function () {
    };
    /**
     * 侦听Socket连接事件
     * @param data
     */
    GameCtrl.prototype.OnConnectHandler = function () {
    };
    /**
     * 侦听Socket关闭事件
     * @param data
     */
    GameCtrl.prototype.OnCloseHandler = function (message) {
        ScenePanel.GameUI.GetInstance().GetLoadingPanel().ShowConnect();
    };
    /**
     * 侦听会员状态关闭事件
     */
    GameCtrl.prototype.OnMemberCloseHandler = function () {
        ScenePanel.GameUI.GetInstance().GetLoadingPanel().ShowConnect(true);
    };
    /**
     * 侦听Socket错误事件
     * @param data
     */
    GameCtrl.prototype.OnErrorHandler = function (message) {
    };
    /**
     * 侦听Socket连接事件
     * @param data
     */
    GameCtrl.prototype.OnWillReconnectHandler = function () {
    };
    /**
     * 侦听登出事件
     * @param data
     */
    GameCtrl.prototype.OnLogoutHandler = function () {
        ScenePanel.GameUI.GetInstance().GetLoadingPanel().HideConnect();
    };
    /**
     * Ack回调
     * @param data
     */
    GameCtrl.prototype.OnAckHandler = function (data) {
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
    GameCtrl.prototype.OnGameInit = function (data, isReInit) {
        if (isReInit === void 0) { isReInit = false; }
        ScenePanel.GameUI.GetInstance().GetLoadingPanel().HideConnect();
        this.cacheData = data;
        if (!this.roundID || this.roundID <= data.RoundID) {
            this.roundID = data.RoundID;
        }
        this.cacheData.BetTimeStamp = new Date().getTime();
        if (data && data.RoundID) {
            this.RoundPanelCtrl.SetGameRound(data.RoundID);
        }
        if (data.Status == 0 && !isReInit) {
            this.RoundPanelCtrl.SetGameState(0);
        }
        else {
            this.RoundPanelCtrl.SetGameState(this.cacheData.Status);
        }
        //投注状态
        //1.显示当前剩余投注时间data.BetTime
        if (data.Status == 1 && data.BetTime > 0) {
            this.TimePanelCtrl.StartGameTime(data.BetTime);
            this.RoundPanelCtrl.SetGameState(1);
        }
        if (data.Cards == null) {
            this.TimePanelCtrl.HideGameTime();
        }
        //2.初始化投注界面
        if (data) {
            this.BetCtrl.GameInit(data, isReInit);
            this.cacheData.RoundID = data.RoundID;
        }
        //3.显示当前牌面data.Cards
        if (data && data.Cards) {
            this.CardPanelCtrl.InitGame({ RoundID: data.RoundID, Cards: data.Cards, BetTime: data.BetTime });
        }
        //4.显示历史记录data.History
        if (data && data.History) {
            this.HistoryPanelCtrl.SetHistoryData(data.History);
        }
        if (data && data.Balance) {
            //改变总金额
            this.HeadPanelCtrl.ChangeMoney(data.Balance);
        }
    };
    /**
     * 游戏开始回调
     * @param data 游戏开始信息
     */
    GameCtrl.prototype.OnGameStart = function (data) {
        ScenePanel.GameUI.GetInstance().ClearPokerFly();
        this.CardPanelCtrl.ClearPokerFlip();
        if (!this.roundID || this.roundID < data.RoundID) {
            this.roundID = data.RoundID;
        }
        else if (this.roundID == data.RoundID) {
            this.roundID = data.RoundID;
        }
        else {
            return;
        }
        if (data && data.RoundID) {
            this.cacheData.RoundID = data.RoundID;
            this.RoundPanelCtrl.SetGameRound(data.RoundID);
        }
        this.cacheData.Status = BaseEnum.GameStatus.BET;
        this.RoundPanelCtrl.SetGameState(1); //计时开始
        this.cacheData.TotalBet = null;
        //1.显示赔率
        if (data && data.Odds) {
            this.cacheData.Odds = data.Odds;
            this.BetCtrl.GameStart(data.Odds);
        }
        //4.显示历史记录data.History
        if (data && data.History) {
            this.HistoryPanelCtrl.SetHistoryData(data.History);
        }
        //2.重置倒计时并显示时间
        if (data && data.BetTime) {
            this.cacheData.BetTime = data.BetTime;
            this.cacheData.BetTimeStamp = new Date().getTime();
            this.TimePanelCtrl.StartGameTime(data.BetTime);
        }
        //3.重置牌面，显示第一和第二张牌
        if (!this.cacheData.Cards) {
            this.cacheData.Cards = new Dto.CardInfoDto();
        }
        this.cacheData.Cards.FirstCard = data.FirstCard;
        this.cacheData.Cards.SecondCard = data.SecondCard;
        this.cacheData.Cards.ThirdCard = 0;
        this.CardPanelCtrl.StartGame(data);
        this.isAnimateEnd = false;
        this.settleData = null;
    };
    /**
     * 游戏投注结果回调
     * @param data 游戏投注结果信息
     */
    GameCtrl.prototype.OnBetResult = function (data) {
        if (!this.roundID || this.roundID < data.RoundID) {
            this.roundID = data.RoundID;
        }
        else if (this.roundID == data.RoundID) {
            this.roundID = data.RoundID;
        }
        else {
            return;
        }
        //投注结果返回
        this.BetCtrl.BetResult(data);
        if (!this.authorizationInfo.IsClose && data.Success) {
            //改变总金额
            this.HeadPanelCtrl.ChangeMoney(data.Balance);
            this.cacheData.Balance = data.Balance;
            this.cacheData.TotalBet = data.TotalBet;
        }
    };
    /**
     * 游戏停止投注回调
     */
    GameCtrl.prototype.OnStopBet = function () {
        Utils.BackgroundMusic.PlaySounds("sound/csz1.wav");
    };
    /**
     * 游戏结束回调
     * @param data 游戏结束结果信息
     */
    GameCtrl.prototype.OnGameResult = function (data) {
        var _this = this;
        if (!this.roundID || this.roundID < data.RoundID) {
            this.roundID = data.RoundID;
        }
        else if (this.roundID == data.RoundID) {
            this.roundID = data.RoundID;
        }
        else {
            return;
        }
        //缓存数据
        // this.roundID = this.cacheData.RoundID;
        this.cacheData.Status = BaseEnum.GameStatus.END;
        var dto = new Dto.HistoryRoundDto();
        dto.FirstCard = data.FirstCard;
        dto.SecondCard = data.SecondCard;
        dto.ThirdCard = data.ThirdCard;
        dto.RoundID = data.RoundID;
        this.cacheData.History.push(dto);
        this.cacheData.History.splice(0, 1);
        this.cacheData.Cards.FirstCard = data.FirstCard;
        this.cacheData.Cards.SecondCard = data.SecondCard;
        this.cacheData.Cards.ThirdCard = data.ThirdCard;
        this.RoundPanelCtrl.SetGameState(2);
        Laya.timer.once(5000, this, function () {
            _this.cacheData.Status = BaseEnum.GameStatus.SETTLE;
            _this.RoundPanelCtrl.SetGameState(3);
            if (_this.ChangeMoneyHander) {
                _this.ChangeMoneyHander.run();
            }
            _this.isAnimateEnd = true;
            if (_this.settleData) {
                //显示输赢效果
                _this.BetCtrl.SettleResult(_this.settleData, data.RoundID);
            }
        });
        //禁用面板按钮
        this.BetCtrl.GameResult();
        //翻转第三张牌及足球效果
        this.CardPanelCtrl.EndGame(data);
        //停止时间
        this.TimePanelCtrl.EndGameTime();
    };
    /**
     * 游戏结束牌翻转
     */
    GameCtrl.prototype.FlipEnd = function (data) {
        //牌飞入
        ScenePanel.GameUI.GetInstance().PokerFly(data.Cards);
        //添加历史记录
        this.HistoryPanelCtrl.AddHistoryList(data);
    };
    /**
     * 游戏结算回调
     * @param data 游戏结算结果信息
     */
    GameCtrl.prototype.OnSettleResult = function (data) {
        var _this = this;
        if (!this.roundID || this.roundID < data.RoundID) {
            this.roundID = data.RoundID;
        }
        else if (this.roundID == data.RoundID) {
            this.roundID = data.RoundID;
        }
        else {
            return;
        }
        this.cacheData.Status = BaseEnum.GameStatus.SETTLEED;
        this.cacheData.TotalBet = data.SettleResult;
        this.cacheData.Balance = data.Balance;
        this.cacheData.Cards = JSON.parse(data.GameResult);
        this.RoundPanelCtrl.SetGameState(4);
        if (this.isAnimateEnd) {
            //显示输赢效果
            this.BetCtrl.SettleResult(data, data.RoundID);
        }
        else {
            this.settleData = data;
        }
        if (!this.authorizationInfo.IsClose) {
            //改变总金额
            this.ChangeMoneyHander = Laya.Handler.create(this, function () {
                _this.HeadPanelCtrl.ChangeMoney(data.Balance);
            });
        }
    };
    /**
     * 游戏其他信息回调
     * @param data 游戏其他信息
     */
    GameCtrl.prototype.OnGameOther = function (data) {
    };
    return GameCtrl;
}(BaseCtrl));
