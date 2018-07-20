namespace Enum{
    export enum HeadView{
        /**初始化 */
        Init = 10000,
        /**改变 */
        Chang,
    }
}
/**头部面板类 */
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
            case Enum.HeadView.Init:
                if(data.balance != null){
                    this.balance = data.balance;
                    this.ui.balance.text = Utils.Money.Format(data.balance);
                }
                break;
            case Enum.HeadView.Chang:
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

    /**返回首页 */
    public OnGoHome():void{}

    /**跳转支付 */
    public OnPay():void{}
    
    /**刷新余额 */
    public OnRefreshBalance():void{
        this.EventNotification(Enum.ListenViewEnum.GetBalance);
    }

    /**静音设置 */
    public OnSetMute():void{
        this.muted = !this.muted;
        if(this.muted){
            this.ui.btnSound.skin = 'ui/head_muted.png';
        }else{
            this.ui.btnSound.skin = 'ui/head_sound.png';
        }
        Laya.SoundManager.muted = this.muted;
    }

    /**显示规则面板 */
    public OnShowRule():void{
        this.EventNotification(Enum.ListenViewEnum.ShowRule);
    }

    /**显示记录面板 */
    public OnShowRecord():void{
        this.EventNotification(Enum.ListenViewEnum.ShowRecord);
    }

    /**
     * 统一事件发送
     * @param type 事件类型
     */
    private EventNotification(type:Enum.ListenViewEnum,value:any = ''):void{
        Laya.SoundManager.playSound(SoundConfig.SounRes.Button);
        let data: Dto.EventNotificationDto = new Dto.EventNotificationDto();
        data.Value = value;
        data.Type = type;

        let event = new CustomEvent(this.ListenEventKey, { detail: data });
        document.dispatchEvent(event);
    }

  
}