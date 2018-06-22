class BetMoreUIHV extends BetMoreBaseUI implements IUI{
    
    constructor(){
        super()
        
    }

    public Refresh():void{

    }
    /**
     * 设置数据分流
     * @param data 
     */
    public Set(data:any):void{
        switch (data.Type) {
            case GameEnum.GameCommand.MSG_GAME_INIT:
                this.GameInit(data.Data);
                break;
            case GameEnum.GameCommand.MSG_GAME_START:
                this.GameStart(data.Data);
                break;
            case GameEnum.GameCommand.MSG_GAME_BETRESULT:
                this.BetResult(data.Data);
                break;
            case GameEnum.GameCommand.MSG_GAME_GAMERESULT:
                this.GameResult(data.Data);
                break;
            case GameEnum.GameCommand.MSG_GAME_SETTLERESULT:
                this.SettleResult(data.Data);
                break;
            default:
                break;
        }
    }
    /**
     * 初始化
     * @param data 
     */
    public GameInit(data:Dto.InitGameDto):void{
        this.cacheData = data;
        this.DisabledAllBtn();
        if(!data){
            return;
        }
        this.SetLimit(data.Limit);
        this.SetOdds(data.Odds);
        if(data.Status == Enum.GameStatus.DEFAULT || data.Status == Enum.GameStatus.SETTLE){
            this.DisabledAllBtn();
        }
        if(data.BetTime > 0){
            this.StartGameTime(data.BetTime);
        }
        //初始化界面
        if (data.Status == Enum.GameStatus.BET) {
            this.lastBetPosMsg = data.TotalBet;
        }
        this.SetBetPos(this.lastBetPosMsg,this.currentBetPosMsg);
    }

    /**
     * 游戏开始
     * @param data 
     */
    private GameStart(data:Dto.StartGameDto):void{
        this.cacheData.Odds = data.Odds;
        this.cacheData.Status = Enum.GameStatus.BET;
        this.DisabledBetBtn(true);
        this.StartGameTime(data.BetTime);
        this.SetOdds(data.Odds);
        //清除上一个注单投注成功的投注信息
        this.lastBetPosMsg = new Object();
        this.cacheData.TotalBet = new Object();
        this.SetBetPos(this.lastBetPosMsg);
    }
    /**
     * 投注结果
     * @param data 
     */
    private BetResult(data:Dto.BetResultDto):void{
        let language: LanguageUtils.Language = new LanguageUtils.Language();
        //改变上一局投注结果
        if (data.Success) {
            //改变投注信息为本次投注成功的注单信息
            this.cacheData.TotalBet = data.TotalBet;
            this.lastBetPosMsg = data.TotalBet;
            this.SetBetPos(this.lastBetPosMsg);
            //提示投注成功
            this.ShowMsg(language.GetLanguage("betSuccess"));
        } else {
            //根据错误码转换对应错误信息
            let language: LanguageUtils.Language = new LanguageUtils.Language();
            let errorMsg: string = language.GetLanguage(Enum.BetErrorCode[data.ErrorCode], GameConfig.GameID);
            //提示错误信息
            this.ShowMsg(errorMsg);
            //还原上次成功的投注状态
            this.SetBetPos(this.lastBetPosMsg);
        }
            
    }
    /**
     * 游戏结束
     * @param data 
     */
    private GameResult(data:Dto.EndGameDto):void{
        this.DisabledAllBtn();
        this.EndGameTime();
        this.SetBetPos(this.lastBetPosMsg);
        this.cacheData.Status = Enum.GameStatus.SETTLE;
        for(let i in this.betBtnArr){
            this.betBtnArr[i].GetUI().getChildByName("masks").visible = false;
        }
    }
    /**
     * 结算结果
     * @param data 
     */
    private SettleResult(data:Dto.GameResultDto):void{
        //清除上一个注单投注成功的投注信息
        this.lastBetPosMsg = new Object();
        this.cacheData.TotalBet = new Object();
        let language: LanguageUtils.Language = new LanguageUtils.Language();
        this.guessSuccess = false;
        //总赢数目
        let win: number = 0;
        let gameResult: Dto.CardInfoDto = JSON.parse(data.GameResult);
        let card: number = Utils.Poker.GetNumber(gameResult.ThirdCard);
        let msg: Array<string> = new Array<string>();
        for (let i in data.SettleResult) {
            if (data.SettleResult[i] > 0) {
                for (let j = 1, len = this.betBtnArr.length; j <= len; j++) {
                    let index:number = j%13 == 0 ? 100 * Math.floor(j/13) + 13 : Math.floor(j/13 + 1) * 100 + j%13;
                    if(Number(i) == index){
                        if (data.SettleResult[i] > 100) {
                            data.SettleResult[i] = Utils.Money.Format(data.SettleResult[i], 0);
                        }
                        this.betBtnArr[i].SetValue(data.SettleResult[i]);
                        this.betBtnArr[i].Refresh();
                        this.betBtnArr[i].GetUI().gray = false;
                    }
                }
                this.guessSuccess = true;
            }
            
        }
        if (!this.guessSuccess) {
            this.ShowMsg(language.GetLanguage("gameFail"));
        }
    }
    
    /**
     * 开始倒计时
     * @param time 
     */
    private StartGameTime(time: number): void {
        this.cacheData.BetTime = time;
        this.timeStamp = new Date().getTime();
        this.ui.time.visible = true;
        this.timeEffect.StartGameTime(time);
    }
    /**
     * 游戏时间结束
     */
    private EndGameTime(): void {
        this.timeEffect.EndGameTime();
        this.ui.time.visible = false;
    }
    /**
     * 设置游戏时间
     * @param time 
     */
    public SetTime():void{
        let nowDate: number = new Date().getTime();
        let date: number;
        date = this.cacheData.BetTime - (nowDate - this.timeStamp) / 1000;
        this.cacheData.BetTime = date < 0 ? 0 : date;
    }
}