var PokerEffect = /** @class */ (function () {
    function PokerEffect() {
        this.TopY = -500; //扑克开始最低位置
        this.pokerBgUrl = "ui/poker/pkbg.png"; //扑克背景地址
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
    PokerEffect.prototype.Reset = function (poker, y) {
        poker.scale(1, 1);
        poker.visible = false;
        poker.scaleX = -1;
        poker.img.skin = this.pokerBgUrl;
    };
    /**
     * 初始化直接显示牌面
     * @param poker
     */
    PokerEffect.prototype.Show = function (dto) {
        dto.Poker.scale(1, 1);
        dto.Poker.x = dto.BaseScale.x;
        dto.Poker.y = dto.BaseScale.y;
        if (dto.Card) {
            dto.Poker.img.skin = this.GetPokerUrl(dto.Card);
        }
        else {
            dto.Poker.img.skin = this.pokerBgUrl;
        }
        switch (dto.Status) {
            case Dto.PokerStatus.Hide:
            case Dto.PokerStatus.End:
            case Dto.PokerStatus.Flip:
            case Dto.PokerStatus.Fly:
                dto.Poker.visible = false;
                break;
            default:
                dto.Poker.visible = true;
                break;
        }
    };
    /**
     * 牌飞入
     */
    PokerEffect.prototype.FlyIn = function (dto) {
        dto.Poker.scale(1, 1);
        dto.Poker.x = dto.BaseScale.x;
        dto.Poker.y = this.TopY;
        dto.Poker.img.skin = this.pokerBgUrl;
        dto.Poker.visible = true;
        Laya.Tween.to(dto.Poker, { y: dto.BaseScale.y }, 1000, Laya.Ease.backOut, Laya.Handler.create(this, this.Flip, [dto, dto.Card], false));
    };
    /**
     * 牌翻转
     */
    PokerEffect.prototype.Flip = function (dto, pokerData) {
        if (dto.Card) {
            dto.Poker.scaleX = 1;
            Laya.Tween.to(dto.Poker, { scaleX: 0 }, 1000, Laya.Ease.circIn, Laya.Handler.create(this, this.EndFlip, [dto, pokerData], false));
        }
    };
    /**
     * 翻转后半程(扑克容器scaleX为0开始)
     */
    PokerEffect.prototype.EndFlip = function (dto, pokerData) {
        var _this = this;
        dto.Poker.img.skin = this.GetPokerUrl(dto.Card);
        Laya.Tween.to(dto.Poker, { scaleX: 1 }, 1000, Laya.Ease.circOut, Laya.Handler.create(this, function () {
            dto.Poker.scale(1, 1);
            if (pokerData) {
                var length_1 = pokerData.length;
                for (var i = 0; i < length_1; i++) {
                    _this.FlyOut(pokerData[i]);
                }
            }
        }));
    };
    PokerEffect.prototype.FlyOut = function (item) {
        Laya.Tween.to(item.Poker, { x: item.Scale.x, y: item.Scale.y, scaleX: item.Scale.scaleX, scaleY: item.Scale.scaleY }, 2000, Laya.Ease.sineInOut, Laya.Handler.create(this, function (pokerItem) {
            // pokerItem.poker.visible = false;
            // this.ClearPoker(pokerItem.poker);
        }, [item]));
    };
    /**
     * 清理扑克牌动画
     */
    PokerEffect.prototype.ClearPoker = function (poker) {
        Laya.Tween.clearAll(poker);
    };
    return PokerEffect;
}());
//# sourceMappingURL=PokerEffect.js.map