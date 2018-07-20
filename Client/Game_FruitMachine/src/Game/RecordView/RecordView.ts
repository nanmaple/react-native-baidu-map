namespace Enum{
    export enum RecordView{
        /**显示 */
        Show = 10000,
        /**设置数据 */
        SetRecord,
    }
}
/**规则面板类 */
class RecordView extends BaseRecordView implements IView{
    
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
     */
    public Set(data:any,type?:Enum.RecordView):void{
        switch(type){
            case Enum.RecordView.Show:
                this.ShowRecord();
                break;
            case Enum.RecordView.SetRecord:
                this.SetRecord(data);
                break;
        }
    }

    /**显示规则栏 */
    private ShowRecord():void{
        this.ui.recordBox.scale(0, 0);
        this.ui.visible = true;
        Laya.Tween.to(this.ui.recordBox, { scaleX: 1, scaleY: 1 }, 300, Laya.Ease.backOut);
    }

    /**
     * 关闭规则栏
    */
    public OnCloseRecord():void{
        Laya.SoundManager.playSound(SoundConfig.SounRes.Button);
        Laya.Tween.to(this.ui.recordBox, { scaleX: 0, scaleY: 0 }, 300, Laya.Ease.backIn, Laya.Handler.create(this, () => {
            this.ui.visible = false;
        }, null, false));
    }

    private SetRecord(data:any):void{

    }

    /**获取历史记录 */
    public GetRecord():void{
        this.EventNotification(Enum.ListenViewEnum.GetRecord);
    }
    
    /**刷新历史记录 */
    public RefreshRecord():void{

    }

    /**
     * 统一事件发送
     * @param type 事件类型
     */
    private EventNotification(type:Enum.ListenViewEnum,value:any = ''):void{
        let data: Dto.EventNotificationDto = new Dto.EventNotificationDto();
        data.Value = value;
        data.Type = type;
        let event = new CustomEvent(this.ListenEventKey, { detail: data });
        document.dispatchEvent(event);
    }
}