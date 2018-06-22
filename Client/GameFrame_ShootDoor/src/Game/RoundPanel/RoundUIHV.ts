const BetStatus: any = {
    0: "WaitStart",
    1: "Betting",
    2: "EndBet",
    3: "Settling",
    4: "HaveSettled"
}
class RoundUIHV extends RoundBaseUI {
    
    constructor() {
        super();
        
    }

    public SetGameRound(round:string):void{
        this.round = round;
        this.ui.gameRound.text = round;
    }

    public SetGameState(state:Enum.GameStatus):void{
        this.state = state;
        let language: LanguageUtils.Language = new LanguageUtils.Language();
        this.ui.gameState.text = language.GetLanguage(BetStatus[state]);
    }
}