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
var CardUIHV = /** @class */ (function (_super) {
    __extends(CardUIHV, _super);
    function CardUIHV() {
        var _this = _super.call(this) || this;
        _this.broadcast = new Dto.BroadcastDto();
        return _this;
    }
    CardUIHV.prototype.Refresh = function () {
    };
    /**
     * 设置数据分流
     * @param data
     */
    CardUIHV.prototype.Set = function (data) {
        switch (data.Type) {
            case GameEnum.GameCommand.MSG_GAME_INIT:
                this.GameInit(data.Data);
                break;
            case GameEnum.GameCommand.MSG_GAME_START:
                this.GameStart(data.Data);
                break;
            case GameEnum.GameCommand.MSG_GAME_GAMERESULT:
                this.GameResult(data.Data);
                break;
            case GameEnum.GameCommand.MSG_GAME_SETTLERESULT:
                // this.SettleResult(data.Data);
                break;
            default:
                break;
        }
    };
    CardUIHV.prototype.GameInit = function (card) {
        this.Log(card, "Cards");
        if (!card) {
            return;
        }
        this.cardList[0].Card = card.FirstCard;
        this.cardList[0].Status = Dto.PokerStatus.Show;
        this.pokerEffect.Show(this.cardList[0]);
        this.cardList[1].Card = card.ThirdCard;
        this.cardList[1].Status = card.ThirdCard ? Dto.PokerStatus.Show : Dto.PokerStatus.Flip;
        this.pokerEffect.Show(this.cardList[1]);
        this.cardList[2].Card = card.SecondCard;
        this.cardList[2].Status = Dto.PokerStatus.Show;
        this.pokerEffect.Show(this.cardList[2]);
    };
    CardUIHV.prototype.GameStart = function (card) {
        this.Log(card, "Cards");
        if (!card) {
            return;
        }
        this.cardList[0].Card = card.FirstCard;
        this.cardList[0].Status = Dto.PokerStatus.Show;
        this.pokerEffect.FlyIn(this.cardList[0]);
        this.cardList[1].Card = card.ThirdCard;
        this.cardList[1].Status = Dto.PokerStatus.Flip;
        this.pokerEffect.FlyIn(this.cardList[1]);
        this.cardList[2].Card = card.SecondCard;
        this.cardList[2].Status = Dto.PokerStatus.Show;
        this.pokerEffect.FlyIn(this.cardList[2]);
    };
    CardUIHV.prototype.GameResult = function (card) {
        this.Log(card, "Cards");
        if (!card) {
            return;
        }
        this.cardList[0].Card = card.FirstCard;
        this.pokerEffect.Show(this.cardList[0]);
        this.cardList[0].Status = Dto.PokerStatus.Show;
        this.cardList[2].Card = card.SecondCard;
        this.pokerEffect.Show(this.cardList[2]);
        this.cardList[2].Status = Dto.PokerStatus.Show;
        this.cardList[1].Card = card.ThirdCard;
        this.cardList[1].Status = Dto.PokerStatus.Show;
        this.pokerEffect.Flip(this.cardList[1], [this.cardList[0], this.cardList[1], this.cardList[2]]);
    };
    return CardUIHV;
}(CardBaseUI));
//# sourceMappingURL=CardUIHV.js.map