namespace Enum{
    export enum OperateView{
        /**改变游戏状态 */
        ChangGameStatus = 10000,
        /**游戏初始化设置 */
        Init,
    }
}
/**操作面板类 */
class OperateView extends BaseOperateView implements IView {
    /**游戏状态 */
    private gameStatus:Enum.GameStatus = Enum.GameStatus.WaitInit;

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
        switch(type){
            case Enum.OperateView.ChangGameStatus:
                this.ChangGameStatus(data);
                break;
            case Enum.OperateView.Init:
                this.InitSetting(data);
                break;
        }
    }

    /**
     * 初始化基数
     * @param data 
     */
    private InitSetting(data:any):void{
        this.chipArray = data;
        this.ui.currChip.text = data[0];
    }

    /**
     * 改变游戏状态
     * @param data 游戏状态枚举
     */
    private ChangGameStatus(data:Enum.GameStatus):void{
        this.gameStatus = data;
        switch (data) {
            case Enum.GameStatus.Default:
                this.ui.addChip.disabled = true;
                this.ui.reduceChip.disabled = true;
                this.ui.clear.disabled = false;
                this.ui.addAll.disabled = false;
                this.ui.start.disabled = false;
                this.ui.big.disabled = true;
                this.ui.small.disabled = true;
                this.ui.start.label = LanguageUtils.Language.Get('GameStart');
                break;
            case Enum.GameStatus.Execute:
                this.ui.addChip.disabled = true;
                this.ui.reduceChip.disabled = true;
                this.ui.small.disabled = true;
                this.ui.big.disabled = true;
                this.ui.clear.disabled = true;
                this.ui.addAll.disabled = true;
                this.ui.start.disabled = true;
                break;
            case Enum.GameStatus.Guess:
                this.ui.addChip.disabled = false;
                this.ui.reduceChip.disabled = false;
                this.ui.small.disabled = false;
                this.ui.big.disabled = false;
                this.ui.clear.disabled = true;
                this.ui.addAll.disabled = true;
                this.ui.start.disabled = false;
                this.ui.start.label = LanguageUtils.Language.Get('GainScore');
                break;
        }
    }

    /** 
     * 加大猜大小金额
    */
    public OnAddChip():void{
        Laya.SoundManager.stopAllSound();
        this.EventNotification(Enum.ListenViewEnum.AddGuessSum);
    }

    /** 
     * 减小猜大小金额
    */
    public OnReduceChip():void{
        Laya.SoundManager.stopAllSound();
        this.EventNotification(Enum.ListenViewEnum.ReduceGuessSum);
    }

    /** 
     * 开始游戏或收获分数
    */
    public OnStart():void{
        Laya.SoundManager.stopAllSound();
        if(this.gameStatus == Enum.GameStatus.Default){
            this.EventNotification(Enum.ListenViewEnum.GameStart);
        }else{
            this.EventNotification(Enum.ListenViewEnum.GatherFraction);
            Laya.SoundManager.playSound(SoundConfig.SounRes.Gain);
        }
    }

    /** 
     * 清空投注
    */
    public OnClear():void{
        this.EventNotification(Enum.ListenViewEnum.ClearBet);
    }

    /** 
     * 选择大小为小
    */
    public OnSmall():void{
        this.EventNotification(Enum.ListenViewEnum.GuessSize,0);
    }

    /** 
     * 全部位置+1
    */
    public OnAddAll():void{
        this.EventNotification(Enum.ListenViewEnum.AddAll);
    }

    /** 
     * 选择大小为大
    */
    public OnBig():void{
        Laya.SoundManager.stopAllSound();
        this.EventNotification(Enum.ListenViewEnum.GuessSize,1);
    }

    /**
     * 加注
     */
    public OnIncrease():void{
        if(this.gameStatus != Enum.GameStatus.Default) return;
        this.currChip += 1;
        if(this.currChip == this.chipArray.length){
            this.currChip = 0;
        }
        this.ui.currChip.text = this.chipArray[this.currChip];
        this.EventNotification(Enum.ListenViewEnum.ChangBaseAmount,this.chipArray[this.currChip]);
    };

    /**
     * 减注
     */
    public OnDecrease():void{
        if(this.gameStatus != Enum.GameStatus.Default) return;
        this.currChip -= 1;
        if(this.currChip == -1){
            this.currChip = this.chipArray.length-1;
        }
        this.ui.currChip.text = this.chipArray[this.currChip];
        this.EventNotification(Enum.ListenViewEnum.ChangBaseAmount,this.chipArray[this.currChip]);
    };


    /**
     * 统一事件发送
     * @param type 事件类型
     */
    private EventNotification(type:Enum.ListenViewEnum,value:any = ''):void{     
        if(this.gameStatus == Enum.GameStatus.WaitInit) return;
        Laya.SoundManager.playSound(SoundConfig.SounRes.Button);
        let data: Dto.EventNotificationDto = new Dto.EventNotificationDto();
        data.Value = value;
        data.Type = type;

        let event = new CustomEvent(this.ListenEventKey, { detail: data });
        document.dispatchEvent(event);
    }
    
   
}
