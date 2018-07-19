const betpos = {
        0 : Enum.BetBtnPosEnum.Apple,
        1 : Enum.BetBtnPosEnum.Orange,
        2 : Enum.BetBtnPosEnum.Orange,
        3 : Enum.BetBtnPosEnum.Papaya,
        4 : Enum.BetBtnPosEnum.Papaya,
        5 : Enum.BetBtnPosEnum.Bell,
        6 : Enum.BetBtnPosEnum.Bell,
        7 : Enum.BetBtnPosEnum.Watermelon,
        8 : Enum.BetBtnPosEnum.Watermelon,
        9 : Enum.BetBtnPosEnum.Star,
        10 : Enum.BetBtnPosEnum.Star,
        11 : Enum.BetBtnPosEnum.Seven,
        12 : Enum.BetBtnPosEnum.Seven,    
        13 : Enum.BetBtnPosEnum.Bar,
        14 : Enum.BetBtnPosEnum.Bar,
        15 : Enum.BetBtnPosEnum.Bar,
        16 : 16}
abstract class BaseBetBarView{
    protected ui: ui.BetBarViewUI;
    protected ListenEventKey:string;
    
    /**投注位置个数 */
    protected lenght:number;
    /**最大投注数 */
    protected max:any = 99;
    
    constructor(){
    }

    /**
     * 重置屏幕
     */
    public ResetScreen() {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.BetBarViewUI();
        this.ui.zOrder = 1;
        this.ui.cacheAs = "bitmap";
        Laya.stage.addChild(this.ui);
        this.Init();
    }

    /** 
     * 初始化绑定点击事件
    */
    private Init():void{
        this.lenght = this.ui.numChildren-1;//减去上面的倍数条
        for(let i = 0;i<this.lenght;i++){
            let bet = this.ui.getChildAt(i).getChildByName('betBtutton');
            bet.on(Laya.Event.CLICK,this,this.OnBetClick,[i,true]);
        }
    }

    /**
     * 点击事件触发函数
     * @param position 投注位置
     */
    abstract OnBetClick(position:number):void;

    
}