var PokerEffect = /** @class */ (function () {
    function PokerEffect(poker) {
        this.pokerIndex = 0; //扑克牌下标
        this.pokerBgUrl = "ui/poker/pkbg.png"; //扑克背景地址
        this.poker = poker;
        this.upY = this.poker.y;
        this.downY = -500;
        this.Reset();
    }
    /**
     * 获得扑克牌地址
     * @param type 牌类型
     */
    PokerEffect.prototype.GetPokerUrl = function (type) {
        return "ui/poker/" + type + ".png";
    };
    /**
     * 重置
     */
    PokerEffect.prototype.Reset = function () {
        this.isActive = false;
        this.poker.visible = false;
        this.poker.scaleX = -1;
        this.poker.skin = this.pokerBgUrl;
    };
    /**
     * 扑克牌初始化
     * @param type 牌类型
     */
    PokerEffect.prototype.InitPoker = function (type) {
        this.isActive = true;
        this.poker.visible = true;
        if (!type) {
            this.poker.skin = this.pokerBgUrl;
        }
        else {
            this.poker.skin = this.GetPokerUrl(type);
            this.poker.scaleX = 1;
        }
    };
    /**
     * 牌从底部抽出显示
     */
    PokerEffect.prototype.ShowPoker = function (type) {
        if (this.isActive) {
            return;
        }
        else {
            this.isActive = true;
            this.poker.visible = true;
            this.poker.y = this.downY;
            Laya.Tween.to(this.poker, { y: this.upY }, 1000, Laya.Ease.backOut, Laya.Handler.create(this, this.StartFlipPoker, [type], false));
        }
    };
    /**
     * 开始翻转
     * @param type 牌的数值
     */
    PokerEffect.prototype.StartFlipPoker = function (type) {
        if (!type) {
            return;
        }
        else {
            this.type = type;
            this.poker.scaleX = -1;
            Laya.Tween.to(this.poker, { scaleX: 0 }, 1000, Laya.Ease.circIn, Laya.Handler.create(this, this.EndFlipPoker));
        }
    };
    /**
     * 翻转后半程(扑克容器scaleX为0开始)
     */
    PokerEffect.prototype.EndFlipPoker = function () {
        var _this = this;
        this.poker.skin = this.GetPokerUrl(this.type);
        Laya.Tween.to(this.poker, { scaleX: 1 }, 1000, Laya.Ease.circOut, Laya.Handler.create(this, function () {
            _this.pokerIndex == 2 ? _this.endPokerHander.run() : null;
        }));
    };
    /**
     * 游戏结束
     */
    PokerEffect.prototype.HidePoker = function () {
        this.Reset();
    };
    /**
     * 结束翻转回调
     */
    PokerEffect.prototype.EndFlipPokerHander = function (endPokerHander, index) {
        this.endPokerHander = endPokerHander;
        this.pokerIndex = index;
    };
    /**
     * 清理扑克牌动画
     */
    PokerEffect.prototype.ClearPoker = function () {
        Laya.Tween.clearAll(this.poker);
    };
    return PokerEffect;
}());
