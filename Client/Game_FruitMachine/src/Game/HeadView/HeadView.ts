namespace Enum{
    export enum HeadView{
        /**初始化 */
        INIT = 10000,
        /**改变 */
        CHANGE,
    }
}
class HeadView extends BaseHeadView implements IView{
    
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
    public Set(data:Dto.AmountDto,type:any):void{
        switch(type){
            case Enum.HeadView.INIT:
                if(data.balance != null){
                    this.balance = data.balance;
                    this.ui.balance.text = Utils.Money.Format(data.balance);
                }
                break;
            case Enum.HeadView.CHANGE:
                this.ChangMoney(data);
                break;
        }
    }

    /**
     * 改变余额
     * @param data 
     */
    private ChangMoney(data:Dto.AmountDto):void{
        if(data.balance != null){
            this.balance = data.balance;
            this.effect.start(data.balance);
        }
        if(data.winAmount != null){
            this.winAmount = data.winAmount;
            this.ui.gain.text = data.winAmount+'';
        }
    }

    public OnGoHome():void{}
    

    public OnRefreshBalance():void{
        
    }

  
}