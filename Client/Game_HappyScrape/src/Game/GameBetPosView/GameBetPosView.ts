namespace Enum{
    export enum GameBetPosView{
        /**
         * 最大金额投注
         */
        MaxBetAmount = 10000,
    }
}
 /**
 * View类
 * 功能：基础的View组件内部的逻辑，控制数据渲染逻辑和处理点击等事件，调用对应Base类功能方法和动画，事件通知上层或者ViewGameLogic
 * 
 */
class GameBetPosView extends BaseGameBetPosView implements IView {
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
        this.StartStatus(false);
    }

    /**
     * 接收上层View或者GameViewLogic的数据,根据数据，进行不同的渲染
     * @param data 
     */
    public Set(data: any, type?: any): void {
        switch (type) {
            case Enum.GameCommand.MsgGameInit:
                this.GameInit(data); 
                break;
            case Enum.GameCommand.MsgGameSettleResult:
                this.GameResult(data);
                break;
            case Enum.GameBetPosView.MaxBetAmount:
                this.MaxBetAmount(data);
                break;
            default:
                break;
        }
    }
    /**
     * 游戏初始化
     * @param data 
     */
    private GameInit(data:Dto.GameInitDto):void{
        if(!this.isInit){
            this.betAmount = data.MinBet;
            this.ui.amount.text = this.betAmount.toString();
        }
        this.isInit = true;
        this.ui.disabled = false;
        this.maxBet = data.MaxBet;
        this.minBet = data.MinBet;
    }
    /**
     * 投注结果
     * @param data 
     */
    private GameResult(data:Dto.GameResultDto):void{
        if(data.Status == Enum.BetErrorCode.Success){
            this.StartStatus(true);
        }else{
            this.Refresh();
        }
    }
    /**
     * 最大金额
     * @param balance 
     */
    private MaxBetAmount(balance: number):void{
        this.betAmount = Math.floor(balance / 100) * 100;
        this.ui.reduce.disabled = false;
        this.ui.add.disabled = false;
        if(this.betAmount <= this.minBet){
            this.betAmount = this.minBet;
            this.ui.reduce.disabled = true;
        }
        else if(this.betAmount >= this.maxBet){
            this.betAmount = this.maxBet;
            this.ui.add.disabled = true;
        }
        this.ui.amount.text = this.betAmount.toString();
        this.EventNotification(Enum.ListenViewEnum.SetBetAmount, this.betAmount);
    }
    /**
     * 类型：私有方法
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
