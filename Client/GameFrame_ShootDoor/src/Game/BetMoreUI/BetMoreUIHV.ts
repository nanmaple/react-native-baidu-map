class BetMoreUIHV extends BetMoreBaseUI implements IUI{
    private broadcast: Dto.BroadcastDto = new Dto.BroadcastDto();
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
        if(data.Status == Enum.GameStatus.DEFAULT){
            return;
        }
        this.SetOdds(data.Odds);
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
        this.SetBetPos(this.lastBetPosMsg);
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
     * 提示消息
     * @param txt 提示的信息
     */
    public ShowMsg(txt: string): void {
        Laya.timer.clear(this,this.HideMsg);
        this.ui.MsgPanel.changeText(txt);
        this.ui.MsgPanel.visible = true;
        Laya.timer.once(2000, this, this.HideMsg);
    }
    /**
     * 隐藏提示信息
     */
    public HideMsg():void{
        this.ui.MsgPanel.visible = false;
    }
    /**
     * 禁用所有按钮
     */
    private DisabledAllBtn():void{
        this.DisabledBetBtn(true);
        this.DisabledBetPanel(true);
    }
    /**
     * 设置未投注成功的数据
     * @param noSureBetMsg 
     */
    public SetNoBetPos(noSureBetMsg:any):void{
        this.currentBetPosMsg = noSureBetMsg;
    }
    /**
     * 设置不同位置的投注金额
     */
    public SetBetPos(BetResultMsg: any, noSureBetMsg?:any): void {
        let unSucreData: any = {};  
        if(noSureBetMsg){
            for(let i in noSureBetMsg){
                unSucreData[i] = noSureBetMsg[i].Amount;
            }
            this.DisabledBetBtn(false);
        }

        if (!BetResultMsg) {
            BetResultMsg = {};
        }
        for (let i in this.betBtnArr) {
            if(BetResultMsg[i]){
                let Amount = BetResultMsg[i] + (unSucreData[i] ? unSucreData[i] : 0);
                this.betBtnArr[i].SetValue(Amount);
                this.betBtnArr[i].Refresh();
            }
            else{
                let Amount = unSucreData[i] ? unSucreData[i] : null; 
                this.betBtnArr[i].SetValue(Amount);
                this.betBtnArr[i].Refresh();
            }
            
        }
    }
    /**
     * 禁用投注确认和取消按钮
     */
    public DisabledBetBtn(disabled: boolean = true): void {
        this.ui.ConfirmBetBtn.disabled = disabled;
        this.ui.CancleBetBtn.disabled = disabled;
    }
    /**
     * 禁用投注按钮
     * @param disabled 是否禁用
     */
    private DisabledBetPanel(disabled: boolean):void{
        for(let i in this.betBtnArr){
            this.betBtnArr[i].SetStatus(disabled);
        }
    }

    /**
     * 设置赔率
     * @param data 
     */
    private SetOdds(data:any):void{
        for (let i in this.betBtnArr) {
            let odd = data[i];
            this.betBtnArr[i].SetOdds(data[i]);
            this.betBtnArr[i].Refresh();
            if(odd == 0){
                this.betBtnArr[i].GetUI().gray = false;
                this.betBtnArr[i].GetUI().getChildByName("masks").visible = true;
                
            }else{
                this.betBtnArr[i].GetUI().getChildByName("masks").visible = false;
            }
        }
    }
    /**
     * 投注
     * @param data 
     */
    public Bet(data:Bet.BetPosAmountDto):void{
        for(let i in this.betBtnArr){
            if(data.Pos == Number(i)){
                this.DisabledBetBtn(false);
                this.betBtnArr[i].SetValue(data.Amount);
                this.betBtnArr[i].Refresh();
                break;
            }
        }
    }
    /**
     * 设置限额
     * @param limit 
     */
    private SetLimit(limit:Dto.LimitDto):void{
        for(let i in this.betBtnArr){
            this.betBtnArr[i].MinLimit = limit.MinBet;
            this.betBtnArr[i].MaxLimit = limit.MaxBet;
        }
    }
    /**
     * 创建投注按钮
     * @param isVer 
     */
    public CreateBetBtn(isVer:boolean):void{
        let language: LanguageUtils.Language = new LanguageUtils.Language();
        if(isVer){
            for(let i = 1; i <= 52; i++){
                let btnUI:Bet.BetPos = new Bet.BetPos();
                let j:number = i%13 == 0 ? 100 * Math.floor(i/13) + 13 : Math.floor(i/13 + 1) * 100 + i%13;
                btnUI.SetText(language.GetLanguage(Enum.BetMoreTxtType[i%13]));
                btnUI.SetType(2);   
                btnUI.Pos = j;
                this.betBtnArr[btnUI.Pos] = btnUI;
                btnUI.width = 145;
                btnUI.height = 80;
                if(i >= 1 && i <= 13){
                    let ico = btnUI.GetUI().getChildByName("ico").skin = this.spadeIco;
                    btnUI.GetUI().getChildByName("betName").color = "#000";
                    btnUI.x = btnUI.width * 3;
                    btnUI.y = btnUI.height * (13 - i) + 13 - i;
                }
                if(i >= 14 && i <= 26){
                    let ico = btnUI.GetUI().getChildByName("ico").skin = this.heartIco;
                    btnUI.x = btnUI.width * 2;
                    btnUI.y = btnUI.height * (13 * 2 - i) + 13 * 2 - i;
                }
                if(i >= 27 && i <= 39){
                    let ico = btnUI.GetUI().getChildByName("ico").skin = this.clubIco;
                    btnUI.GetUI().getChildByName("betName").color = "#000";
                    btnUI.x = btnUI.width;
                    btnUI.y = btnUI.height * (13 * 3 - i) + 13 * 3 - i;
                }
                if(i >= 40 && i <= 52){
                    let ico = btnUI.GetUI().getChildByName("ico").skin = this.blockIco;
                    btnUI.x = 0;
                    btnUI.y = btnUI.height * (13 * 4- i) + 13 * 4 - i;
                }
                btnUI.Refresh();
                this.ui.BetBox.addChild(btnUI.GetUI());
            }
        }else{
            for(let i = 1;i <= 52;i++){
                let btnUI:Bet.BetPos = new Bet.BetPos();
                let j:number = i%13 == 0 ? 100 * Math.floor(i/13) + 13 : Math.floor(i/13 + 1) * 100 + i%13;
                btnUI.SetText(language.GetLanguage(Enum.BetMoreTxtType[i%13]));
                btnUI.SetType(3);   
                btnUI.Pos = j;
                this.betBtnArr[btnUI.Pos] = btnUI;
                btnUI.width = 95;
                btnUI.height = 88;
                if(i >= 1 && i <= 13){
                    let ico = btnUI.GetUI().getChildByName("ico").skin = this.spadeIco;
                    btnUI.GetUI().getChildByName("betName").color = "#000";
                    btnUI.x = btnUI.width * 3;
                    btnUI.y = btnUI.height * (13 - i) + 13 - i;
                }
                if(i >= 14 && i <= 26){
                    let ico = btnUI.GetUI().getChildByName("ico").skin = this.heartIco;
                    btnUI.x = btnUI.width * 2;
                    btnUI.y = btnUI.height * (13 * 2 - i) + 13 * 2 - i;
                }
                if(i >= 27 && i <= 39){
                    let ico = btnUI.GetUI().getChildByName("ico").skin = this.clubIco;
                    btnUI.GetUI().getChildByName("betName").color = "#000";
                    btnUI.x = btnUI.width;
                    btnUI.y = btnUI.height * (13 * 3 - i) + 13 * 3 - i;
                }
                if(i >= 40 && i <= 52){
                    let ico = btnUI.GetUI().getChildByName("ico").skin = this.blockIco;
                    btnUI.x = 0;
                    btnUI.y = btnUI.height * (13 * 4- i) + 13 * 4 - i;
                }
                btnUI.Refresh();
                this.ui.BetBox.addChild(btnUI.GetUI());
            }
        }
    }
    /**
     * 确认投注
     */
    public ConfirmBet():void{
        this.DisabledBetBtn(true);
        this.broadcast.Type = Enum.ListenUIEnum.ConfirmBet;
        let event = new CustomEvent("GameUI", { detail: this.broadcast });
        document.dispatchEvent(event);
    };
    /**
     * 取消投注
     */
    public CancleBet():void{
        this.DisabledBetBtn(true);
        this.SetBetPos(this.lastBetPosMsg);
        this.broadcast.Type = Enum.ListenUIEnum.CancelBet;
        let event = new CustomEvent("GameUI", { detail: this.broadcast });
        document.dispatchEvent(event);
    };
    /**
     * 打开面板
     */
    public Show():void{
        this.isShow = true;
        this.ui.visible = this.isShow;
    }
    /**
     * 关闭面板
     */
    public Close():void{
        this.isShow = false;
        this.ui.visible = this.isShow;
    }
}