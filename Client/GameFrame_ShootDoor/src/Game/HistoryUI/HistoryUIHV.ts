
class HistoryUIHV extends HistoryBaseUI implements IUI {
    private listArr: Array<any>;   //历史记录数据
    private maxLength: number = 5;  //记录条数
    private roundIDArr: Array<any>;   //历史牌数据局号
    private isShow: boolean = false;
    constructor() {
        super();
    }
    public Refresh(): void {
        this.ui._list.array = this.listArr;
        this.ui._list.y = 0;
        this.ShowPoker();
        this.ui._list.renderHandler = new Laya.Handler(this, this.onRender);
    }
    /**
     * 设置历史数据
     * @param time 
     */
    public Set(data: any): void {
        switch (data.Type) {
            case GameEnum.GameCommand.MSG_GAME_INIT:
                this.GameServer(data.Data);
                break;
            case GameEnum.GameCommand.MSG_GAME_START:
                this.GameServer(data.Data);
                break;
            case GameEnum.GameCommand.MSG_GAME_GAMERESULT:
                this.GameResult(data.Data);
                break;
        }
    }
    /**
     * 初始化和开始时，同步
     */
    private GameServer(history: Array<Dto.HistoryRoundDto>) {
        //添加list数据
        this.listArr = [];
        this.roundIDArr = [];
        if (!history) {
            this.ShowList(false);
            return;
        }
        this.ShowList(true);
        let recordCount = history.length >= this.maxLength ? this.maxLength : history.length;
        let start = history.length - 1;
        let end = history.length - recordCount;
        for (let i: number = start; i >= end; i--) {
            let dto: any = {
                poker0: { skin: this.GetPokerUrl(history[i].FirstCard) },
                poker1: { skin: this.GetPokerUrl(history[i].SecondCard) },
                poker2: { skin: this.GetPokerUrl(history[i].ThirdCard) }
            }
            this.listArr.push(dto);
            this.roundIDArr.push({ RoundID: history[i].RoundID });
        }
        this.Refresh();
    }

    private GameResult(dto: Dto.HistoryRoundDto) {
         let item: any = {
                poker0: { skin: this.GetPokerUrl(dto.FirstCard) },
                poker1: { skin: this.GetPokerUrl(dto.SecondCard) },
                poker2: { skin: this.GetPokerUrl(dto.ThirdCard) }
            }
        this.listArr.unshift(item);
        Laya.timer.once(2000, this, () => {
            Laya.Tween.to(this.ui._list, { y: this.listBoxH }, 2000, Laya.Ease.quadInOut, Laya.Handler.create(this, () => {
                this.ShowPoker(dto);
            }));
        })
    }

    /**
     *渲染List 
     * @param cell
     * @param index
     * 
     */
    private onRender(cell: Laya.Box, index: number): void {
        //如果索引不再可索引范围，则终止该函数
        if (index > this.listArr.length) return;
        //获取当前渲染条目的数据
        let data: any = this.listArr[index];
        //根据子节点的名字poker，获取子节点对象。   
        let poker0: Laya.Image = cell.getChildByName("poker0") as Laya.Image;
        let poker1: Laya.Image = cell.getChildByName("poker1") as Laya.Image;
        let poker2: Laya.Image = cell.getChildByName("poker2") as Laya.Image;
        poker0.skin = data.poker0.skin;
        poker1.skin = data.poker1.skin;
        poker2.skin = data.poker2.skin;
    }

    /**
     * 显隐list
     * @param visible 
     */
    public ShowList(visible: boolean): void {
        this.ui._list.visible = visible;
    }

    /**
     * 显隐list
     * @param visible 
     */
    public ShowPoker(dto?: Dto.HistoryRoundDto): void {
        if (dto) {
            this.ui.pokerPos0.skin = this.GetPokerUrl(dto.FirstCard);
            this.ui.pokerPos1.skin = this.GetPokerUrl(dto.ThirdCard);
            this.ui.pokerPos2.skin = this.GetPokerUrl(dto.SecondCard);
            this.ui.pokerPos0.visible = true;
            this.ui.pokerPos1.visible = true;
            this.ui.pokerPos2.visible = true;
        } else {
            this.ui.pokerPos0.visible = false;
            this.ui.pokerPos1.visible = false;
            this.ui.pokerPos2.visible = false;
        }
    }


    /**
     * 获得扑克牌地址
     * @param type 牌类型
     */
    private GetPokerUrl(type: number): string {
        return `ui/poker/${type}.png`
    }
}
