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
    function CardPanelCtrl(cardPanel, footBallPanel) {
        var _this = _super.call(this) || this;
        _this.pokerNum = 3; //扑克的数量
        _this.cardPanel = cardPanel;
        _this.footBallPanel = footBallPanel;
        return _this;
    }
    /**
     * 游戏初始化
     * @param data 牌信息
     */
    CardPanelCtrl.prototype.InitGame = function (data) {
        this.dataCards = [data.FirstCard, data.SecondCard, data.ThirdCard];
        for (var i = 0; i < this.pokerNum; i++) {
            this.cardPanel.pokerCards[i].InitPoker(this.dataCards[i]);
        }
    };
    /**
     * 游戏开始
     * @param data 游戏开始信息
     */
    CardPanelCtrl.prototype.StartGame = function (data) {
        this.dataCards = [data.FirstCard, data.SecondCard, null];
        for (var i = 0; i < this.pokerNum; i++) {
            this.cardPanel.pokerCards[i].ShowPoker(this.dataCards[i]);
        }
    };
    /**
     * 游戏结束
     * @param data 游戏结束结果信息
     */
    CardPanelCtrl.prototype.EndGame = function (data) {
        var _this = this;
        this.dataCards = [data.FirstCard, data.SecondCard, data.ThirdCard];
        //翻转第三张牌
        this.cardPanel.pokerCards[2].StartFlipPoker(data.ThirdCard);
        Laya.timer.once(2000, this, function () {
            for (var i = 0; i < _this.pokerNum; i++) {
                _this.cardPanel.pokerCards[i].HidePoker();
            }
            _this.endGameHander.runWith(data);
            //调用足球动画
            _this.FootBallAnimation(_this.dataCards);
        });
    };
    /**
     * 游戏结束回调
     * @param endGameHander 结束回调
     */
    CardPanelCtrl.prototype.EndGameHander = function (endGameHander) {
        this.endGameHander = endGameHander;
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
            this.footBallPanel.ShootIn();
        }
        //射偏（左边）
        if ((Third < First && Third < Second && (First < Second || First == Second)) || (Third > First && Third > Second && First > Second)) {
            this.footBallPanel.ShootLeft();
        }
        //射偏（右边）
        if ((Third > First && Third > Second && (First < Second || First == Second)) || (Third < First && Third < Second && First > Second)) {
            this.footBallPanel.ShootRight();
        }
        //射到门柱左边
        if (Third == First && Third == Second) {
            this.footBallPanel.ShootGoalPost(2);
        }
        //射到门柱左边
        if (Third == First) {
            this.footBallPanel.ShootGoalPost(0);
        }
        //射到门柱右边
        if (Third == Second) {
            this.footBallPanel.ShootGoalPost(1);
        }
    };
    return CardPanelCtrl;
}(Laya.Sprite));
