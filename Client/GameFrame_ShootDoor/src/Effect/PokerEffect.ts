class PokerEffect {
    private TopY: number = -500;      //扑克开始最低位置
    private pokerBgUrl = "ui/poker/pkbg.png";//扑克背景地址
    constructor() {
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
    public Reset(poker: ui.PokerHVUI, y?: number): void {
        poker.scale(1, 1);
        poker.visible = false;
        poker.scaleX = -1;
        poker.img.skin = this.pokerBgUrl;
    }

    /**
     * 初始化直接显示牌面
     * @param poker 
     */
    public Show(dto: Dto.CardDto): void {
        dto.Poker.scale(1, 1);
        dto.Poker.x = dto.BaseScale.x;
        dto.Poker.y = dto.BaseScale.y;
        if (dto.Card) {
            dto.Poker.img.skin = this.GetPokerUrl(dto.Card);
        } else {
            dto.Poker.img.skin = this.pokerBgUrl;
        }
        switch (dto.Status) {
            case Dto.PokerStatus.Hide:
            case Dto.PokerStatus.End:
            case Dto.PokerStatus.Flip:
            case Dto.PokerStatus.Fly:
                dto.Poker.visible = false;
                break;
            default:
                dto.Poker.visible = true;
                break;
        }
    }

    /**
     * 牌飞入
     */
    public FlyIn(dto: Dto.CardDto) {
        dto.Poker.scale(1, 1);
        dto.Poker.x = dto.BaseScale.x;
        dto.Poker.y = this.TopY;
        dto.Poker.img.skin = this.pokerBgUrl;
        dto.Poker.visible = true;
        Laya.Tween.to(dto.Poker, { y: dto.BaseScale.y }, 1000, Laya.Ease.backOut, Laya.Handler.create(this, this.Flip, [dto, dto.Card], false));
    }

    /**
     * 牌翻转
     */
    public Flip(dto: Dto.CardDto, pokerData: any) {
        if (dto.Card) {
            dto.Poker.scaleX = 1;
            Laya.Tween.to(dto.Poker, { scaleX: 0 }, 1000, Laya.Ease.circIn, Laya.Handler.create(this, this.EndFlip, [dto, pokerData], false));
        }
    }

    /**
     * 翻转后半程(扑克容器scaleX为0开始)
     */
    private EndFlip(dto: Dto.CardDto, pokerData: any): void {
        dto.Poker.img.skin = this.GetPokerUrl(dto.Card);
        Laya.Tween.to(dto.Poker, { scaleX: 1 }, 1000, Laya.Ease.circOut, Laya.Handler.create(this, () => {
            dto.Poker.scale(1, 1);
            if (pokerData) {
                let length: number = pokerData.length;
                for (var i = 0; i < length; i++) {
                    this.FlyOut(pokerData[i]);
                }
            }
        }));
    }

    private FlyOut(item: Dto.CardDto) {
        Laya.Tween.to(item.Poker, { x: item.Scale.x, y: item.Scale.y, scaleX: item.Scale.scaleX, scaleY: item.Scale.scaleY }, 2000, Laya.Ease.sineInOut, Laya.Handler.create(this, (pokerItem: any) => {
            // pokerItem.poker.visible = false;
            // this.ClearPoker(pokerItem.poker);
        }, [item]));
    }

    /**
     * 清理扑克牌动画
     */
    public ClearPoker(poker): void {
        Laya.Tween.clearAll(poker);
    }
}