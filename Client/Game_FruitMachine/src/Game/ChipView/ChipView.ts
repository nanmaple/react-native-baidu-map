namespace Enum{
    export enum ChipView{
        /**设置投注个数 */
        SetBaseAmonut = 10000,
        /**改变游戏状态 */
        ChangGameStatus,
        /**游戏初始化设置 */
        Init,
    }
}
/**筹码面板类 */
class ChipView extends BaseChipView implements IView{
    /**游戏状态 */
    private gameStatus:Enum.GameStatus = Enum.GameStatus.Default;

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
            case Enum.ChipView.SetBaseAmonut:
                this.currChip = data;
                this.ui.currChip.text = data;
                break;
            case Enum.ChipView.ChangGameStatus:
                this.gameStatus = data;
                break;
            case Enum.ChipView.Init:
                this.InitSetting(data);
                break;
        }
    }

    private InitSetting(data:any):void{
        this.baseChip = data[0];
        this.ui.currChip.text = data[0];
        
        this.smallFast = data[1];
        this.ui.leftLable.text = data[1];

        this.bigFast = data[2];
        this.ui.rightLable.text = data[2];
    }

     /**
     * 按下加注或减注
     * @param type 添加或减去
     */
    public OnMouseDown(type:boolean):void{
        if(this.gameStatus != Enum.GameStatus.Default) return;
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
        if(!this.loopMark || this.gameStatus != Enum.GameStatus.Default) return;
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
        if(this.gameStatus != Enum.GameStatus.Default || !value) return;
        SoundManage.PlaySound(SoundConfig.SounRes.Button);
        this.currChip = value;
        let data: Dto.EventNotificationDto = new Dto.EventNotificationDto();
        data.Value = this.currChip;
        data.Type = Enum.ListenViewEnum.ChangBaseAmount;

        let event = new CustomEvent(this.ListenEventKey, { detail: data });
        document.dispatchEvent(event);
    }
    
}