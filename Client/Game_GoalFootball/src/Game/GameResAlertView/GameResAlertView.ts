
 /**
 * View类
 * 功能：基础的View组件内部的逻辑，控制数据渲染逻辑和处理点击等事件，调用对应Base类功能方法和动画，事件通知上层或者ViewGameLogic
 * 
 */
class GameResAlertView extends BaseGameResAlertView implements IView {
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
        this.Show();
    }

    /**
     * 接收上层View或者GameViewLogic的数据,根据数据，进行不同的渲染
     * @param data 
     */
    public Set(data: any, type?:any): void {
        switch (type) {
            case Enum.GameCommand.MsgGameSettleResult:
                this.GameResult(data);
                break;
            default:
                break;
        }
    }
    /**
     * 投注结果
     * @param data 
     */
    private GameResult(data:Dto.BetResultDto):void{
        this.isShow = true;
        if(data.WinAmount == 0){
            this.resultSound = "sound/miss.mp3";
            this.ui.prompt.skin = this.failTipSkin;
            this.ui.result.visible = false;
        }else{
            this.resultSound = "sound/goal.mp3";
            this.ui.prompt.skin = this.sucTipSkin;
            this.ui.result.visible = true;
            this.ui.times.text = "x" + data.Odds;
            this.ui.win.text = LanguageUtils.Language.Get("Win") + data.WinAmount;
        }
    }
    /**
     * 显示提示框
     */
    private Show():void{
        Utils.BackgroundMusic.PlaySounds(this.resultSound);
        this.ui.visible = this.isShow;
        this.ui.prompt.scale(0, 0);
        Effect.AlertEffect.Show(this.ui.prompt, null);
        Laya.timer.once(2000,this,this.Hide);
    }
    /**
     * 类型：私有方法
     * 通过事件，向上通知
     * 事件key值，通过构造函数时注入
     */
    private EventNotification(): void {
        
    }
}
