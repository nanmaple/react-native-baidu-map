abstract class BaseGameChipsView {
    protected listenEventKey: string = "";
    protected ui: ui.GameChipsViewUI;
    /**
     * 筹码数组
     */
    protected chipsArr:Array<ui.ChipBtnViewUI> = null;
    /**
     * 选中的筹码皮肤
     */
    protected selectChipSkin:any = "ui/chip/btn_select.png";
    /**
     * 未选中的筹码皮肤
     */
    protected noSelectChipSkin:any = "ui/chip/btn_noselect.png";
    /**
     * 射门默认的皮肤
     */
    protected shootDoorSkin:any = "ui/chip/btn_shoor.png";
    /**
     * 射门按下的皮肤
     */
    protected noShootDoorSkin:any = "ui/chip/btn_shoor_n.png";
    /**
     * 投注金额(不包含道具金额)
     */
    protected betAmount:number = null;
    /**
     * 筹码总页数
     */
    protected pageNum:number = 1;
    /**
     * 当前筹码页
     */
    protected pageNow:number = 1;
    constructor() {

    }

    /**
     * 重置屏幕
     */
    public ResetScreen() {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.GameChipsViewUI();
        this.ui.zOrder = 3;
        this.ui.cacheAs = "bitmap";
        this.ui.btn_shoor.on(Laya.Event.CLICK, this, this.ShootDoor);
        this.ui.btn_left.on(Laya.Event.CLICK, this, this.PreviousPage);
        this.ui.btn_right.on(Laya.Event.CLICK, this, this.NextPage);
        this.ui.btn_max.on(Laya.Event.CLICK, this, this.ChooseMaxChip);
        this.ui.btn_max.label = LanguageUtils.Language.Get("MaxChip");
        Laya.stage.addChild(this.ui);
        this.Init();
    }
    /**
     * 初始化
     * @param data 
     */
    private Init():void{
        this.DisabledShootBtn(true);
    }
    
    /**
     * 是否禁用射门按钮
     * @param disabled 
     */
    protected DisabledShootBtn(disabled:boolean):void{
        if(disabled){
            this.ui.btn_shoor.skin = this.noShootDoorSkin;
        }else{
            this.ui.btn_shoor.skin = this.shootDoorSkin;
        }
        this.ui.btn_shoor.disabled = disabled;
        this.ui.btn_shoor.gray = false;
    }
    /**
     * 跳转到上一页
     */
    private PreviousPage():void{
        if(this.pageNow <= 1){
            return
        }else{
            this.pageNow--;
            Laya.Tween.to(this.ui.chipBox, {x:-this.ui.chipPanel.width * (this.pageNow - 1)},500,Laya.Ease.circInOut);
        }
    }
    /**
     * 跳转到下一页
     */
    private NextPage():void{
        if(this.pageNow >= this.pageNum){
            return
        }else{
            this.pageNow++;
            Laya.Tween.to(this.ui.chipBox, {x:-this.ui.chipPanel.width * (this.pageNow - 1)},500,Laya.Ease.circInOut);
        }
    }
    /**
     * 跳转到最大筹码页
     * @param index 
     */
    protected MaxChipPage(index:number):void{
        this.pageNow = Math.ceil((index + 1) / 4);
        Laya.Tween.to(this.ui.chipBox, {x:-this.ui.chipPanel.width * (this.pageNow - 1)},500,Laya.Ease.circInOut);
    }
    /**
     * 选择最大筹码
     */
    private ChooseMaxChip():void{
        this.EventNotification(Enum.ListenViewEnum.ChooseMaxChip);
    }
    /**
     * 点击射门
     */
    abstract ShootDoor():void;
    /**
     * 事件广播
     * @param type 类型
     * @param value 值
     */
    abstract EventNotification(type:any, value?:any): void;
}
