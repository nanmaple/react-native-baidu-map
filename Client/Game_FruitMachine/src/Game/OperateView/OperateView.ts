class OperateView extends BaseOperateView implements IView {
    /**游戏状态 */
    private gameStatus:Enum.GameStatus = Enum.GameStatus.DEFAULT;

    constructor(eventKey:string) {
        super();
        this.ListenEventKey = eventKey;
    }
    /**
     * 刷新方法，根据将组件内部的数据，处理逻辑后，将数据渲染到界面
     */
    public Refresh(): void {

    }

    /**
     * 接收上层View或者GameViewLogic的数据,根据数据，进行不同的渲染
     * @param data 
     */
    public Set(data: any,type?:any): void {
        this.ChangGameStatus(data);
    }

    /**
     * 改变游戏状态
     * @param data 游戏状态枚举
     */
    private ChangGameStatus(data:Enum.GameStatus):void{
        this.gameStatus = data;
        switch (data) {
            case Enum.GameStatus.DEFAULT:
                this.ui.addChip.disabled = true;
                this.ui.reduceChip.disabled = true;
                this.ui.clearOrSmall.disabled = false;
                this.ui.addAllOrBig.disabled = false;
                this.ui.startOrGather.disabled = false;
                this.ui.clearOrSmall.skin = 'ui/btn_clear.png';
                this.ui.addAllOrBig.skin = 'ui/btn_addAll.png';
                this.ui.startOrGather.skin = 'ui/btn_start.png';
                break;
            case Enum.GameStatus.EXECUTE:
                this.ui.addChip.disabled = true;
                this.ui.reduceChip.disabled = true;
                this.ui.startOrGather.disabled = true;
                this.ui.clearOrSmall.disabled = true;
                this.ui.addAllOrBig.disabled = true;
                break;
            case Enum.GameStatus.GUESS:
                this.ui.addChip.disabled = false;
                this.ui.reduceChip.disabled = false;
                this.ui.clearOrSmall.disabled = false;
                this.ui.addAllOrBig.disabled = false;
                this.ui.startOrGather.disabled = false;
                this.ui.clearOrSmall.skin = 'ui/btn_small.png';
                this.ui.addAllOrBig.skin = 'ui/btn_big.png';
                this.ui.startOrGather.skin = 'ui/btn_gather.png';
                break;
        }
    }

    /** 
     * 加大猜大小金额
    */
    public OnAddChip():void{
        this.EventNotification(Enum.ListenViewEnum.AddGuessSum);
    }


    /** 
     * 减小猜大小金额
    */
    public OnReduceChip():void{
        this.EventNotification(Enum.ListenViewEnum.ReduceGuessSum);
    }

    /** 
     * 开始游戏或收获分数
    */
    public OnStartOrGather():void{
        if(this.gameStatus == Enum.GameStatus.DEFAULT){
            this.EventNotification(Enum.ListenViewEnum.GameStart);
        }else{
            this.EventNotification(Enum.ListenViewEnum.GatherFraction);
        }
    }

    /** 
     * 清空投注或选择大小为小
    */
    public OnClearOrSmall():void{
        if(this.gameStatus == Enum.GameStatus.DEFAULT){
            this.EventNotification(Enum.ListenViewEnum.ClearBet);
        }else{
            this.EventNotification(Enum.ListenViewEnum.GuessSize,0);
        }
    }

    /** 
     * 全部位置+1或选择大小为大
    */
    public OnAddAllOrBig():void{
        if(this.gameStatus == Enum.GameStatus.DEFAULT){
            this.EventNotification(Enum.ListenViewEnum.AddAll);
        }else{
            this.EventNotification(Enum.ListenViewEnum.GuessSize,1);
        }
    }

    /**
     * 统一事件发送
     * @param type 事件类型
     */
    private EventNotification(type:Enum.ListenViewEnum,value:any = ''):void{
        let data: Dto.EventNotificationDto = new Dto.EventNotificationDto();
        data.Value = value;
        data.Type = type;

        let event = new CustomEvent(this.ListenEventKey, { detail: data });
        document.dispatchEvent(event);
    }
    
   
}
