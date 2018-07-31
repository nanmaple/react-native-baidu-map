
 /**
 * View类
 * 功能：基础的View组件内部的逻辑，控制数据渲染逻辑和处理点击等事件，调用对应Base类功能方法和动画，事件通知上层或者ViewGameLogic
 * 
 */
namespace Enum{
    export enum GameHeadView{
        /**
         * 设置用户余额
         */
        SetBalance = 10000,
         
    }
}
class GameHeadView extends BaseGameHeadView implements IView {
    public listenEventKey: string = "";
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
        this.SetBalance(this.balance);
    }

    /**
     * 接收上层View或者GameViewLogic的数据,根据数据，进行不同的渲染
     * @param data 
     */
    public Set(data: any, type?:any): void {
        switch (type) {
            case Enum.GameCommand.MsgGameInit:
                this.GameInit(data); 
                break;
            case Enum.GameCommand.MsgGameSettleResult:
                this.GameResult(data);
                break;
            case Enum.GameHeadView.SetBalance:
                this.SetBalance(data);
            default:
                break;
        }
    }
    /**
     * 设置用户余额
     * @param balance 
     */
    private SetBalance(balance:number):void{
        this.moneyEffect.start(balance);
    }
    /**
     * 游戏初始化
     * @param data 
     */
    private GameInit(data:Dto.GameInitDto):void{
        this.balance = data.Balance;
        this.ui.balance.text = Utils.Money.Format(this.balance);
    }
    /**
     * 投注结果
     * @param data 
     */
    private GameResult(data:Dto.BetResultDto):void{
        if(data.Status == Enum.BetResultEnum.Success){
            this.balance = data.Balance;
        }else{
            this.Refresh();
        }
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