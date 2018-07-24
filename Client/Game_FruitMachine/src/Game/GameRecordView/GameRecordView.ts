namespace Enum{
    export enum GameRecordView{
        /**
         * 显示
         */
        IsRecordShow = 10000,
        /**
         * 获取记录数据
         */
        GetRecordData,
    }
}
class GameRecordView extends BaseGameRecordView implements IView {
    private listenEventKey: string = ""
    constructor(eventKey: string) {
        super();
        this.listenEventKey = eventKey;
    }
    /**
     * 类型：公有方法
     * 刷新方法，根据将组件内部的数据，处理逻辑后，将数据渲染到界面
     * 一般用于，当数据改变后，渲染需要延迟进行的情况
     */
    public Refresh(): void {

    }
    /**
     * 接收上层View或者GameViewLogic的数据,根据数据，进行不同的渲染
     * @param data 
     */
    public Set(data: any, type?:any): void {
        switch (type) {
            case Enum.GameRecordView.IsRecordShow:
                this.Show(); 
                break;
            case Enum.GameRecordView.GetRecordData:
                this.GetRecordData(data);
                break;
            default:
                break;
        }
    }
    /**
     * 显示面板
     */
    private Show():void{
        this.isShow = true;
        this.ui.visible = this.isShow;
        this.ui.prompt.scale(0, 0);
        Effect.AlertEffect.Show(this.ui.prompt, null);
        this.ui.recordList.vScrollBarSkin = "";
        this.ui.recordList.scrollBar.elasticBackTime = 300;
        this.ui.recordList.scrollBar.elasticDistance = 50;
        this.PullDownRefresh(true);
    }
    
    /**
     * 获取记录数据
     * @param data 
     */
    private GetRecordData(data:any):void{
        this.isLoading = false;
        if(!data){
            return;
        }
        //添加list数据
        let listArr:Array<any> = [];
        let len:number = data.length;
        if(data && len == 0 && !this.isInit){
            this.noMoreData = true;
            return;
        }
        for (let i: number = 0; i < len; i++) {
            let dto: any = {
                Time: Utils.Time.transform(data[i].BetTime, 1) ,
                Date: Utils.Time.transform(data[i].BetTime, 0) ,
                Reward: Utils.Float.Sub(data[i].PayAmount, data[i].BetAmount) ,
            }
            listArr.push(dto);
        }
        this.dataArr = this.dataArr.concat(listArr);
        //将this.arr数据赋值到列表数据源。
        this.SetListArray(this.dataArr);
        //renderHandler:单元格渲染处理器(默认返回参数cell:Box,index:int)。
        this.ui.recordList.renderHandler = Laya.Handler.create(this, this.onRender, null, false);
    }

    /**
     *渲染List 
     * @param cell
     * @param index
     * 
     */
    private onRender(cell: Laya.Box, index: number): void {
        //如果索引不再可索引范围，则终止该函数
        if (index > this.dataArr.length) return;
        //获取当前渲染条目的数据
        var data: any = this.dataArr[index];
        //获取listBox的高度
        this.listBoxH = cell.height;
        //获取recordList的高度
        this.recordListH = this.ui.recordList.height;
        //根据子节点的名字，获取子节点对象。   
        let time: Laya.Label = cell.getChildByName("time") as Laya.Label;
        let date: Laya.Label = cell.getChildByName("date") as Laya.Label;
        let num: Laya.Label = cell.getChildByName("num") as Laya.Label;
        let reward: Laya.Label = cell.getChildByName("reward") as Laya.Label;
        time.text = data.Time;
        date.text = data.Date;
        num.text = (index + 1).toString();
        reward.text = data.Reward;
    }
    
    /**
     * 通过事件，向上通知
     * 事件key值，通过构造函数时注入
     */
    public EventNotification(type:any, value?:any): void {
        let data: Dto.EventNotificationDto = new Dto.EventNotificationDto();
        data.Value = value;
        data.Type = type;
        let event = new CustomEvent(this.listenEventKey, { detail: data });
        document.dispatchEvent(event);
    }
}
