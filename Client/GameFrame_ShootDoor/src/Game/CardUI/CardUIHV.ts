class CardUIHV extends CardBaseUI implements IUI {
    private broadcast: Dto.BroadcastDto = new Dto.BroadcastDto();
    constructor() {
        super()
    }

    public Refresh(): void {
    }
    /**
     * 设置数据分流
     * @param data 
     */
    public Set(data: any): void {
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
    }

    private GameInit(card: any) {
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
    }

    private GameStart(card: any) {
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
    }

    private GameResult(card: any) {
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
    }

}