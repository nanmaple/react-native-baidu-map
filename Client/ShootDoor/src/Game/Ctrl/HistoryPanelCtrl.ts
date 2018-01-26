class HistoryPanelCtrl extends Laya.Sprite {
    private historyPanel: ScenePanel.HistoryPanel;   //历史记录面板UI类
    private listArr: Array<any>;   //历史记录数据
    private index: number = 0;  //记录条数
    private dataCards: Array<number>;  //扑克牌数据
    constructor(historyPanel: ScenePanel.HistoryPanel) {
        super();
        this.historyPanel = historyPanel;
    }
    /**
     * 获得扑克牌地址
     * @param type 牌类型
     */
    private GetPokerUrl(type: number): string {
        return `ui/poker/${type}.png`
    }
    /**
     * 获取历史记录
     */
    public SetHistoryData(history: Array<Dto.HistoryRoundDto>): void {
        //添加list数据
        this.listArr = [];
        if (!history) {
            return;
        }
        this.index = history.length;
        for (let i: number = 0; i < this.index; i++) {
            let dto: any = {
                poker0: { skin: this.GetPokerUrl(history[i].FirstCard) },
                poker1: { skin: this.GetPokerUrl(history[i].SecondCard) },
                poker2: { skin: this.GetPokerUrl(history[i].ThirdCard) }
            }
            this.listArr.unshift(dto);
        }
        //实现list滚动
        // this.ListPanelScenes._list.vScrollBarSkin = "";
        //将this.arr数据赋值到列表数据源。
        this.historyPanel._list.array = this.listArr;
        //renderHandler:单元格渲染处理器(默认返回参数cell:Box,index:int)。
        this.historyPanel._list.renderHandler = new Laya.Handler(this, this.onRender);
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
     * 增加历史记录
     */
    public AddHistoryList(data: Dto.CardInfoDto): void {
        //增加单元格数据源
        let dto: any = {
            poker0: { skin: this.GetPokerUrl(data.FirstCard) },
            poker1: { skin: this.GetPokerUrl(data.SecondCard) },
            poker2: { skin: this.GetPokerUrl(data.ThirdCard) }
        }
        this.listArr.unshift(dto);
        this.historyPanel._list.array = this.listArr;
    }

    /**
     * 设置投注限额
     * @param limit 
     */
    public SetLimit(limit: Dto.LimitDto): void {
        this.historyPanel.SetLimit(limit);
    }
}