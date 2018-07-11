namespace Enum{
    export enum ChipView{
        /**设置投注个数 */
        SET_BASE_AMOUNT = 10000,
        /**改变游戏状态 */
        CHANG_GAME_STATUS,
    }
}
class ChipView extends BaseChipView implements IView{
    /**游戏状态 */
    private gameStatus:Enum.GameStatus = Enum.GameStatus.DEFAULT;

    constructor(eventKey:string) {
        super();
        this.ListenEventKey = eventKey;
    }

    /** 
     * 刷新UI
    */
    public Refresh():void{

    }

    /**
     * 设置结果
     */
    public Set(data:any,type?:any):void{
        switch(type){
            case Enum.ChipView.SET_BASE_AMOUNT:
                this.currChip = data;
                this.ui.currChip.text = data;
                break;
            case Enum.ChipView.CHANG_GAME_STATUS:
                this.gameStatus = data;
                break;
        }
    }

     /**
     * 按下加注或减注
     * @param type 添加或减去
     */
    public OnMouseDown(type:boolean):void{
        if(this.gameStatus != Enum.GameStatus.DEFAULT) return;
        this.loopMark = true;
        this.type = type;
        if(type){
            this.currChip += this.baseChip;
            if(this.currChip > this.maxChip){
                this.currChip = this.maxChip;
            }
        }else{
            this.currChip -= this.baseChip;
             if(this.currChip < this.baseChip){
                this.currChip = this.baseChip;
                return;
            }
        }
        this.ui.currChip.text = this.currChip + '';
        Laya.timer.once(300,this,this.DelayCallback);
    }

    /** 
     * 延迟执行循环
    */
    private DelayCallback():void{
        Laya.timer.frameLoop(3,this,this.LoopCallback);
    }

    /** 
     * 循环累计回调函数
    */
    private LoopCallback():void{
        if(!this.loopMark){
            Laya.timer.clear(this,this.LoopCallback);
            return;
        }

        if(this.type){
            this.currChip += this.baseChip;
            if(this.currChip > this.maxChip){
                this.currChip = this.maxChip;
            }
        }else{
            this.currChip -= this.baseChip;
            if(this.currChip < this.baseChip){
                Laya.timer.clear(this,this.LoopCallback);
                this.currChip = this.baseChip;
                return;
            }
        }
        this.ui.currChip.text = this.currChip + '';
    }

     /**
     * 鼠标移出或抬起结束加减注
     */
    public OnMouseUp():void{
        if(!this.loopMark || this.gameStatus != Enum.GameStatus.DEFAULT) return;
        this.loopMark = false;

        Laya.timer.clear(this,this.DelayCallback);
        Laya.timer.clear(this,this.LoopCallback);

        this.OnSetChip(this.currChip);
    }

    /**
     * 设置筹码事件监听函数
     * @param value 筹码额
     */
    public OnSetChip(value:number):void{
        if(this.gameStatus != Enum.GameStatus.DEFAULT) return;
        this.currChip = value;
        let data: Dto.EventNotificationDto = new Dto.EventNotificationDto();
        data.Value = {BaseAmount:this.baseChip,Value:value};
        data.Type = Enum.ListenViewEnum.ChangBaseAmount;

        let event = new CustomEvent(this.ListenEventKey, { detail: data });
        document.dispatchEvent(event);
    }
    
}