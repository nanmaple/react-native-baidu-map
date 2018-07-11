// const type = Enum.BetPosTypeEnum;
// const betpos = {0:type.Apple,1:type.Orange,2:type.Papaya,3:type.Bell,4:type.Watermelon,5:type.Star,6:type.Seven,7:type.Bar}
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
        // this.ui.cacheAs = "bitmap";
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
            bet.on(Laya.Event.CLICK,this,this.OnBetClick,[i])        
        }
    }

    /**
     * 点击事件触发函数
     * @param position 投注位置
     */
    abstract OnBetClick(position:number):void;

    
}