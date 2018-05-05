class PokerEffect {
    private downY: number;      //扑克开始最低位置
    private upY: number;     //扑克显示最高位置
    public poker: Laya.Image;    //扑克
    private isActive: boolean;   //初始化显示状态
    private type: number;   //扑克类型
    private endPokerHander:Laya.Handler;   //扑克牌结束翻转回调
    private pokerIndex:number = 0;   //扑克牌下标
    private pokerBgUrl = "ui/poker/pkbg.png";//扑克背景地址
    constructor(poker: Laya.Image) {
        this.poker = poker;
        this.upY = this.poker.y;
        this.downY = -500;
        this.Reset();
    }
    /**
     * 获得扑克牌地址
     * @param type 牌类型
     */
    private GetPokerUrl(type: number): string {
        return `ui/poker/${type}.png`
    }

    /**
     * 重置
     */
    private Reset(): void {
        this.isActive = false;
        this.poker.visible = false;
        this.poker.scaleX = -1;
        this.poker.skin = this.pokerBgUrl;
    }
    /**
     * 扑克牌初始化
     * @param type 牌类型
     */
    public InitPoker(type?: number): void {
        this.isActive = true;
        this.poker.visible = true;
        if (!type) {
            this.poker.skin = this.pokerBgUrl;
        }
        else {
            this.poker.skin = this.GetPokerUrl(type);
            this.poker.scaleX = 1;
        }
    }
    /**
     * 牌从底部抽出显示
     */
    public ShowPoker(type?: number): void {
        if (this.isActive) {
            return;
        }
        else {
            this.isActive = true;
            this.poker.visible = true;
            this.poker.y = this.downY;
            Laya.Tween.to(this.poker, { y: this.upY }, 1000, Laya.Ease.backOut, Laya.Handler.create(this, this.StartFlipPoker, [type], false));
        }
    }
    /**
     * 开始翻转
     * @param type 牌的数值
     */
    public StartFlipPoker(type?: number): void {
        if (!type) {
            return;
        }
        else {
            this.type = type;
            this.poker.scaleX = -1;
            Laya.Tween.to(this.poker, { scaleX: 0 }, 1000, Laya.Ease.circIn, Laya.Handler.create(this, this.EndFlipPoker));
        }
    }
    /**
     * 翻转后半程(扑克容器scaleX为0开始)
     */
    private EndFlipPoker(): void {
        this.poker.skin = this.GetPokerUrl(this.type);
        Laya.Tween.to(this.poker, { scaleX: 1 }, 1000, Laya.Ease.circOut,Laya.Handler.create(this,()=>{
            this.pokerIndex == 2 ? this.endPokerHander.run():null;
        }));
    }
    /**
     * 游戏结束
     */
    public HidePoker(): void {
        this.Reset();
    }
    /**
     * 结束翻转回调
     */
    public EndFlipPokerHander(endPokerHander:Laya.Handler,index:number):void{
        this.endPokerHander = endPokerHander;
        this.pokerIndex = index;
    }
    /**
     * 清理扑克牌动画
     */
    public ClearPoker():void{
        Laya.Tween.clearAll(this.poker);
    }
}