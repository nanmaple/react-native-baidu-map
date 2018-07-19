namespace Enum{
    export enum InternalView{
        /**设置当前投注额 */
        SetCurrentBet = 10000,
        /**开始随机数动画 */
        RandomAnimated,
    }
}
/**中心信息面板类 */
class InternalView extends BaseInternalView implements IView{

    private bigNumber:number = 14;//大小区分值为偶数
    private count:number = 28;//跳动次数
    private currCount:number = 0;//当前次数
    private result:boolean;//服务器返回结果

    private resNumber:number;//本轮游戏结果数值
    
    constructor(eventKey: string) {
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
     * @param value 
     */
    public Set(data:any,type:any):void{
        switch(type){
            case Enum.InternalView.SetCurrentBet:
                this.ui.curBet.text = data;
                break;
            case Enum.InternalView.RandomAnimated:
                this.Roll(data);
                break;
        }
    }

    /**
     * 滚动结果
     * @param result 结束数字
     */
    private Roll(result:number):void{
        this.resNumber = result;
        console.log('随机数为:'+this.resNumber)
        Laya.timer.frameLoop(2,this,this.LoopCallBack);
    }

    /**
     * 定时器回调函数
     */
    private LoopCallBack():void{
        this.currCount++;
        //显示数值
        let number:any = this.currCount%this.bigNumber;
        number = number ? number : this.bigNumber;
        this.ui.random.text = number + '';

        if(this.currCount >= this.count+this.resNumber){
            this.RollEnd();
        }
    }

    /**
     * 滚动结束
     */
    private RollEnd():void{
        Laya.timer.clear(this,this.LoopCallBack);
        this.currCount = 0;

        //发送事件
        let data: Dto.EventNotificationDto = new Dto.EventNotificationDto();
        data.Value = '';
        data.Type = Enum.ListenViewEnum.RandomEndm;
        let event = new CustomEvent(this.ListenEventKey, { detail: data });
        document.dispatchEvent(event);
    }

    

    
}