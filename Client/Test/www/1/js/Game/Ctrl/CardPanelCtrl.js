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
var CardPanelCtrl = /** @class */ (function (_super) {
    __extends(CardPanelCtrl, _super);
    function CardPanelCtrl() {
        var _this = _super.call(this) || this;
        _this.pokerNum = 3; //扑克的数量
        _this.gameUI = ScenePanel.GameUI.GetInstance();
        return _this;
    }
    /**
     * 游戏初始化
     * @param data 牌信息
     */
    CardPanelCtrl.prototype.InitGame = function (data) {
        if (data.Cards == null || data.BetTime == 0) {
            console.log("游戏初始化隐藏牌", new Date().getTime());
            this.HidePoker();
        }
        else {
            this.dataCards = [data.Cards.FirstCard, data.Cards.SecondCard, data.Cards.ThirdCard];
            console.log("游戏初始化隐藏-显示牌", new Date().getTime());
            for (var i = 0; i < this.pokerNum; i++) {
                this.gameUI.GetCardPanel().HidePoker(i);
                this.gameUI.GetCardPanel().InitPoker(this.dataCards[i], i);
            }
        }
    };
    /**
     * 隐藏扑克牌
     */
    CardPanelCtrl.prototype.HidePoker = function () {
        for (var i = 0; i < this.pokerNum; i++) {
            this.gameUI.GetCardPanel().HidePoker(i);
        }
    };
    /**
     * 游戏开始
     * @param data 游戏开始信息
     */
    CardPanelCtrl.prototype.StartGame = function (data) {
        this.dataCards = [data.FirstCard, data.SecondCard, null];
        console.log("游戏开始隐藏-显示牌", new Date().getTime());
        for (var i = 0; i < this.pokerNum; i++) {
            this.gameUI.GetCardPanel().HidePoker(i);
            this.gameUI.GetCardPanel().ShowPoker(this.dataCards[i], i);
        }
    };
    /**
     * 清理上一局扑克牌动画
     * @param roundID
     */
    CardPanelCtrl.prototype.ClearPokerFlip = function () {
        this.gameUI.GetCardPanel().ClearPokerTween();
        console.log(this.roundID);
    };
    /**
     * 游戏结束
     * @param data 游戏结束结果信息
     */
    CardPanelCtrl.prototype.EndGame = function (data) {
        var _this = this;
        this.dataCards = [data.FirstCard, data.SecondCard, data.ThirdCard];
        var cardsDto = new Dto.CardInfoDto();
        cardsDto.FirstCard = data.FirstCard;
        cardsDto.SecondCard = data.SecondCard;
        cardsDto.ThirdCard = data.ThirdCard;
        //翻转第三张牌
        this.gameUI.GetCardPanel().StartFlipPoker(data.ThirdCard, 2);
        //扑克牌翻转结束回调
        this.gameUI.GetCardPanel().EndFlipPokerHander(Laya.Handler.create(this, function () {
            console.log("游戏结束隐藏牌", new Date().getTime());
            for (var i = 0; i < _this.pokerNum; i++) {
                _this.gameUI.GetCardPanel().HidePoker(i);
            }
            _this.endGameHander.runWith({ RoundID: data.RoundID, Cards: cardsDto });
            //调用足球动画
            _this.FootBallAnimation(_this.dataCards);
        }));
    };
    /**
     * 游戏结束回调
     * @param endGameHander 结束回调
     */
    CardPanelCtrl.prototype.EndGameHander = function (endGameHander) {
        this.endGameHander = endGameHander;
    };
    /**
     * 清除足球动画
     */
    CardPanelCtrl.prototype.ClearFootBallAnimation = function () {
        this.gameUI.GetFootBallPanel().ClearTween();
    };
    /**
     * 进球动画
     * @param data 扑克牌数组(三张牌)
     */
    CardPanelCtrl.prototype.FootBallAnimation = function (data) {
        //定义三张牌
        var First = Utils.Poker.GetNumber(data[0]);
        var Second = Utils.Poker.GetNumber(data[1]);
        var Third = Utils.Poker.GetNumber(data[2]);
        //射进
        if ((Third > First && Third < Second) || (Third < First && Third > Second)) {
            this.gameUI.GetFootBallPanel().ShootIn();
        }
        //射偏（左边）
        if ((Third < First && Third < Second && (First < Second || First == Second)) || (Third > First && Third > Second && First > Second)) {
            this.gameUI.GetFootBallPanel().ShootLeft();
        }
        //射偏（右边）
        if ((Third > First && Third > Second && (First < Second || First == Second)) || (Third < First && Third < Second && First > Second)) {
            this.gameUI.GetFootBallPanel().ShootRight();
        }
        //射到门柱左边
        if (Third == First && Third == Second) {
            this.gameUI.GetFootBallPanel().ShootGoalPost(2);
        }
        //射到门柱左边
        if (Third == First) {
            this.gameUI.GetFootBallPanel().ShootGoalPost(0);
        }
        //射到门柱右边
        if (Third == Second) {
            this.gameUI.GetFootBallPanel().ShootGoalPost(1);
        }
    };
    return CardPanelCtrl;
}(Laya.Sprite));
