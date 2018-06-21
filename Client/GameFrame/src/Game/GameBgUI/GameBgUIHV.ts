const GameStatus: any = ["等待", "投注", "结束", "正在结算", "已结算"];
class GameBgHV extends GameBgBaseUI implements IUI {
    private broadcast: Dto.BroadcastDto = new Dto.BroadcastDto();
    private roundIdUI: Laya.Label;
    private roundId: string = "";
    private gameStatusUI: Laya.Label;
    private gameStatus: string = "";
    private balanceUI: Laya.Label;
    private balance: string = "";
    private btnUI: Bet.BetPos;
    private firstCardUI: Laya.Label;
    private secondCardUI:  Laya.Label;
    private thirdCardUI: Laya.Label;
    private firstCard: string = "";
    private secondCard: string = "";
    private thirdCard: string = "";
    private btnPosArr:any = new Object();
    constructor() {
        super();
        this.roundIdUI = this.CreateLabel(300, 200);
        Laya.stage.addChild(this.roundIdUI);
        this.gameStatusUI = this.CreateLabel(200, 250);
        Laya.stage.addChild(this.gameStatusUI);
        this.balanceUI = this.CreateLabel(400, 250);
        Laya.stage.addChild(this.balanceUI);

        this.firstCardUI = this.CreateLabel(200, 300);
        Laya.stage.addChild(this.firstCardUI);
        this.secondCardUI = this.CreateLabel(300, 300);
        Laya.stage.addChild(this.secondCardUI);
        this.thirdCardUI = this.CreateLabel(400, 300);
        Laya.stage.addChild(this.thirdCardUI);


        for(let i = 0;i < 13;i++){
            this.btnUI = new Bet.BetPos();
            // this.btnUI.SetOdds(0.51);
            this.btnUI.SetText("射偏");
            // this.btnUI.SetValue(10);
            this.btnUI.SetType(1);   
            this.btnUI.width = 200;
            this.btnUI.height = 80;
            this.btnUI.x = 500;
            this.btnUI.y = 300 + i * this.btnUI.height;
            this.btnUI.zOrder = 2;
            this.btnUI.MinLimit = 10;
            this.btnUI.MaxLimit = 100;
            this.btnUI.Pos = i + 1;
            this.btnUI.Refresh();
            this.btnPosArr[this.btnUI.Pos] = this.btnUI;
            Laya.stage.addChild(this.btnUI.GetUI());
        }
    }

    private CreateLabel = (x: number, y: number, color: string = "yellow"): any => {
        let ui = new Laya.Label();
        ui.color = color;
        ui.fontSize = 22;//设置 textInput 的字体大小。
        ui.x = x;//设置 textInput 对象的属性 x 的值，用于控制 textInput 对象的显示位置。
        ui.y = y;//设置 textInput 对象的属性 y 的值，用于控制 textInput 对象的显示位置。
        ui.zOrder = 2;
        return ui;
    }

    // private CreateBtn = (x: number, y: number, label: string = ""): any => {
    //     let ui = new Laya.Button();
    //     ui.label =label;//设置 textInput 的文本。
    //     ui.skin = 'comp/button.png';
    //     ui.labelSize = 22;//设置 textInput 的字体大小。
    //     ui.x = x;//设置 textInput 对象的属性 x 的值，用于控制 textInput 对象的显示位置。
    //     ui.y = y;//设置 textInput 对象的属性 y 的值，用于控制 textInput 对象的显示位置。
    //     ui.width = 150;//设置 textInput 的宽度。
    //     ui.height = 36;//设置 textInput 的高度。
    //     ui.zOrder = 2;
    //     ui.on(Laya.Event.CLICK, this, this.Bet);
    //     return ui;
    // }

    public Log(): void { }
    public Set(data: any): void {
        switch (data.type) {
            case 0:
                this.roundId = data.data;
                break;
            case 1:
                this.gameStatus = GameStatus[data.data];
                break;
            case 2:
                this.balance = data.data;
                break;
            case 3:
                if(data.data){
                    this.firstCard = data.data.FirstCard;
                    this.secondCard = data.data.SecondCard;
                    this.thirdCard = data.data.ThirdCard;
                }
                break;
            case 4:
                this.SetOdds(data.data);
                break;
            case 5:
                this.GameEnd();
                break;
            default:
                break;
        }
        this.Refresh();
    }
    private GameEnd():void{
        for(let i in this.btnPosArr){
            this.btnPosArr[i].SetValue();
            // this.btnPosArr[i].SetOdds(0);
            this.btnPosArr[i].Refresh();
        }
    }
    private SetOdds(data:any):void{
        for(let i in data){
            if(Number(i) <= 13){
                this.btnPosArr[i].SetOdds(data[i]);
                this.btnPosArr[i].Refresh();
            }
        }
    }
    public Refresh(): void {
        this.roundIdUI.text = this.roundId;
        this.gameStatusUI.text = this.gameStatus
        this.balanceUI.text = this.balance;
        this.firstCardUI.text = this.firstCard;
        this.secondCardUI.text = this.secondCard;
        this.thirdCardUI.text = this.thirdCard;
    }

    public IsBet(data:Bet.BetPosAmountDto):void{
        for(let i in this.btnPosArr){
            if(data.Pos == Number(i)){
                this.btnPosArr[i].SetValue(data.Amount);
                this.btnPosArr[i].Refresh();
            }
        }
    }

    public ConfirmBet(){
        this.broadcast.Type = Enum.ListenUIEnum.ConfirmBet;
        let event = new CustomEvent("GameUI", { detail: this.broadcast });
        document.dispatchEvent(event);
    }

    /**
     * 广播
     */
    private Broadcast(): void {
        this.broadcast.Type = Enum.ListenUIEnum.OnGameBgClick;
        let event = new CustomEvent("GameUI", { detail: this.broadcast });
        document.dispatchEvent(event);
    }
    public Close(): void {
        this.Broadcast();
    }
}
