namespace Enum{
    export enum GameChipsView{
        /**
         * 设置投注总金额
         */
        SetBetTotalAmount = 10000,
        /**
         * 投注失败
         */
        BetPosError,
        /**
         * 选择最大筹码
         */
        SetMaxChip,
    }
}
class GameChipsView extends BaseGameChipsView implements IView {
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
        this.DisabledShootBtn(false);
        this.SetBetTotalAmount(this.betAmount);
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
            case Enum.GameChipsView.SetBetTotalAmount:
                this.SetBetTotalAmount(data);
                break;
            case Enum.GameChipsView.BetPosError:
                this.DisabledShootBtn(false);
                break;
            case Enum.GameChipsView.SetMaxChip:
                this.SetMaxChip(data);
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
        this.InitChip(data.BaseAmounts);
        this.DisabledShootBtn(false);
    }
    /**
     * 初始化筹码
     * @param data 
     */
    private InitChip(data:any):void{
        if(this.chipsArr){
            return;
        }else{
            this.ui.chipBox.removeChildren();
            this.chipsArr = [];
            this.betAmount = data[0];
            this.SetBetTotalAmount(this.betAmount);
            for (var index = 0; index < data.length; index++) {
                let chipBtn:ui.ChipBtnViewUI = new ui.ChipBtnViewUI();
                chipBtn.on(Laya.Event.CLICK, this, this.ChooseChip, [index]);  
                chipBtn.x = (chipBtn.width + 10) * index;
                chipBtn.chip.skin = this.noSelectChipSkin;
                chipBtn.chip.label = Utils.Money.TransforK(data[index]);
                this.ui.chipBox.addChild(chipBtn);
                this.chipsArr.push(chipBtn);
            }
            this.ui.chipBox.width = data.length * (this.chipsArr[0].width + 10);
            this.pageNum = Math.ceil(this.ui.chipBox.width / this.ui.chipPanel.width);
            this.chipsArr[0].chip.skin = this.selectChipSkin;
        }
    }
    /**
     * 选择投注筹码
     * @param index 
     */
    private ChooseChip(index:number):void{
        this.betAmount = Utils.Money.TransforK(this.chipsArr[index].chip.label);
        for (var i = 0; i < this.chipsArr.length; i++) {
            this.chipsArr[i].chip.skin = this.noSelectChipSkin;
            if(index == i){
                this.chipsArr[i].chip.skin = this.selectChipSkin;
            }
        }
        this.EventNotification(Enum.ListenViewEnum.ChooseChip, this.betAmount);
    }
    /**
     * 设置最大筹码
     */
    private SetMaxChip(money:any):void{
        let index:number = 0;
        for (var i = 0; i < this.chipsArr.length; i++) {
            if(money < Utils.Money.TransforK(this.chipsArr[i].chip.label)){
                index = (i - 1) <= 0 ? 0 : i - 1;  
                this.ChooseChip(index);
                this.MaxChipPage(index);
                break;
            }
            else if(money >= Utils.Money.TransforK(this.chipsArr[this.chipsArr.length - 1].chip.label)){
                index = this.chipsArr.length - 1;
                this.ChooseChip(index);
                this.MaxChipPage(index);
                break;
            }
        }
    }
    /**
     * 设置投注总金额
     * @param betAmount 投注总金额
     */
    private SetBetTotalAmount(betAmount:number):void{
        this.ui.money.text = betAmount.toString();
    }
    /**
     * 投注结果
     * @param data 
     */
    private GameResult(data:Dto.BetResultDto):void{
        if(data.Status != Enum.BetResultEnum.Success){
            this.DisabledShootBtn(false);
        }
    }
    /**
     * 类型：私有方法
     * 通过事件，向上通知
     * 事件key值，通过构造函数时注入
     */
    public ShootDoor(): void {
        this.DisabledShootBtn(true);
        this.EventNotification(Enum.ListenViewEnum.ShootDoor);
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