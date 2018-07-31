/**
 * BaseView主要用于写固定的UI渲染方法和不同功能的UI处理方法,动画
 * 命名规则：BasexxxView
 */
abstract class BaseGameBetPosView {
    protected ui: ui.GameBetPosViewUI;
    /**
     * 最大投注
     */
    protected maxBet: number = 0;
    /**
     * 最小投注
     */
    protected minBet: number = 0;
    /**
     * 当前投注金额
     */
    protected betAmount: number = 0;
    /**
     * 是否初始化
     */
    protected isInit: boolean = false;
    /**
     * 是否刮过一次
     */
    protected isScrape:boolean = false;
    constructor() {

    }

    /**
     * 重置屏幕
     */
    public ResetScreen() {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.GameBetPosViewUI();
        this.ui.zOrder = 3;
        this.ui.cacheAs = "bitmap";
        Laya.stage.addChild(this.ui); 
        this.ui.max.on(Laya.Event.CLICK, this, this.ChooseMaxAmount);
        this.ui.reduce.on(Laya.Event.CLICK, this, this.ReduceBetAmount);
        this.ui.add.on(Laya.Event.CLICK, this, this.AddBetAmount);
        this.ui.start.on(Laya.Event.CLICK, this, this.StartGame);
        this.ui.cash.on(Laya.Event.CLICK, this, this.CashPrize);
        this.Init();
    }
    /**
     * 初始化
     */
    private Init():void{
        this.ui.max.label = LanguageUtils.Language.Get("Maxbet");
        this.ui.start.label = LanguageUtils.Language.Get("StartScrape");
        this.ui.cash.label = LanguageUtils.Language.Get("StartCash");
        this.ui.disabled = true;
        this.StartStatus(false);
    }

    /**
     * 游戏开始的状态
     * @param isStart 是否开始游戏
     */
    protected StartStatus(isStart: boolean):void{
        if(this.isScrape){
            this.ui.start.label = LanguageUtils.Language.Get("ScrapeAgain");
        }
        this.ui.start.visible = !isStart;
        this.ui.cash.visible = isStart;
        this.StartBtnDisabled(isStart);
    }
    /**
     * 是否禁用开始按钮
     * @param disabled 
     */
    protected StartBtnDisabled(disabled:boolean):void{
        this.ui.start.disabled = disabled;
        this.ui.start.gray = false;
    }
    /**
     * 开始游戏
     */
    private StartGame():void{
        Utils.BackgroundMusic.PlaySounds("sound/btn.mp3");
        this.StartBtnDisabled(true);
        this.EventNotification(Enum.ListenViewEnum.BetPos, null);
    }
    /**
     * 点击兑奖
     */
    private CashPrize():void{
        Utils.BackgroundMusic.PlaySounds("sound/btn.mp3");
        this.isScrape = true;
        this.StartStatus(false);
        this.EventNotification(Enum.ListenViewEnum.GameResult, null);
    }
    /**
     * 最大金额投注
     */
    private ChooseMaxAmount():void{
        Utils.BackgroundMusic.PlaySounds("sound/btn.mp3");
        this.EventNotification(Enum.ListenViewEnum.MaxBetAmount, null);
    }
    /**
     * 减少投注额
     */
    private ReduceBetAmount():void{
        if(this.betAmount <= this.minBet){
            this.ui.reduce.disabled = true;
            return;
        }
        Utils.BackgroundMusic.PlaySounds("sound/btn.mp3");
        this.betAmount = Utils.BetAmount.ReduceBet(this.betAmount,this.minBet);
        this.ui.amount.text = this.betAmount.toString();
        if(this.betAmount < this.maxBet){
            this.ui.add.disabled = false;
        }
        this.EventNotification(Enum.ListenViewEnum.SetBetAmount, this.betAmount);
    }
    /**
     * 增加投注额
     */
    private AddBetAmount():void{
        if(this.betAmount >= this.maxBet){
            this.ui.add.disabled = true;
            return;
        }
        Utils.BackgroundMusic.PlaySounds("sound/btn.mp3");
        this.betAmount = Utils.BetAmount.AddBet(this.betAmount,this.maxBet);
        this.ui.amount.text = this.betAmount.toString();
        if(this.betAmount > this.minBet){
            this.ui.reduce.disabled = false;
        }
        this.EventNotification(Enum.ListenViewEnum.SetBetAmount, this.betAmount);
    }
    /**
     * 事件广播
     * @param type 类型
     * @param value 值
     */
    abstract EventNotification(type:any, value?:any): void;
}
