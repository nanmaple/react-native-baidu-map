namespace Enum{
    export enum GameAniView{
        /**
         * 设置道具金额
         */
        SetPropAmount = 10000,
         
    }
}
class GameAniView extends BaseGameAniView implements IView {
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
            case Enum.GameCommand.MsgGameInit:
                this.GameInit(data); 
                break;
            case Enum.GameCommand.MsgGameSettleResult:
                this.GameResult(data);
                break;
            case Enum.GameAniView.SetPropAmount:
                this.SetPropAmount(data);
                break;
            default:
                break;
        }
    }
    /**
     * 设置道具金额
     * @param amount 
     */
    private SetPropAmount(money:any):void{
        let amount:any = money / 5;
        for (let index = 0; index < 3; index++) {
            this.propBoxArr[index].money.text = amount; 
        }
    }
    /**
     * 开始射球
     * @param odds 返回赔率 
     */
    public ShootDoor(odds:any):void{
        this.IsSucDefense();
        this.isGoal = odds == 0 ? false : true;
        this.ui.player.play(0,false,"play");
        Effect.CurvesEffect.Hide();   
        this.ui.player.on(Laya.Event.LABEL,this,(data)=>{
            // 在标签start后开始执行
            if(data == "start"){
                this.DefenderStartJump();
                this.GetFootballEndPos();
                Laya.timer.once(750, this, this.SetGuardAnimation, [this.guardAniType]);
                this.ui.football.play(0,false);
                Laya.timer.frameLoop(1, this, this.StartCurvesMove, [0.002, this.ui.football, this.initPos, this.centPos, this.endPos,
                Laya.Handler.create(this,this.EndCurvesMove,null,false)])//主控制  0.001自己调整(运动快慢)
            }
        })  
    }
    /**
     * 游戏初始化
     * @param data 
     */
    private GameInit(data:Dto.GameInitDto):void{
        if(this.isInitProp){
            return;
        }else{
            this.SetPropAmount(data.BaseAmounts[0]);
            this.isInitProp = true;
        }
    }
    
    /**
     * 投注结果
     * @param data 
     */
    private GameResult(data:Dto.BetResultDto):void{
        if(data.Status == Enum.BetResultEnum.Success){
            this.ShootDoor(data.Odds);
            this.ui.disabled = true;
            this.ui.gray = false;
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
