/**规则面板基类 */
abstract class BaseRecordView{
    protected ui: ui.RecordViewUI;
    protected ListenEventKey: string;

    /**当前历史记录条数 */
    protected length: number = 14;
    /**当前记录列表高度 */
    protected height: number = 14*40 + 13*5;
    /**记录列表盒子高度 */
    protected boxHeitht: number = 239;
    /**皮筋极限距离 */
    protected spring: number = 50;
    /**触发事件节点长度 */
    protected node: number = 30;

    constructor(){
    }

    /**
     * 重置屏幕
     */
    public ResetScreen() {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.RecordViewUI();
        this.ui.zOrder = 3;
        this.ui.cacheAs = "bitmap";
        Laya.stage.addChild(this.ui);
        this.Init();
    }

    /**初始化事件绑定 */
    private Init():void{
        this.ui.btnClose.on(Laya.Event.CLICK,this,this.OnCloseRecord);
        this.ui.recordList.array = [{number:'1'},{number:'1'},{number:'1'},{number:'1'},{number:'1'},{number:'1'},{number:'1'},{number:'1'},{number:'1'},{number:'1'},{number:'1'},{number:'1'},{number:'1'},{number:'1'}]
        this.ui.recordList.vScrollBarSkin = '';
        this.ui.recordList.scrollBar.hide = true;//隐藏列表的滚动条。
        this.ui.recordList.scrollBar.elasticBackTime = 200;//设置橡皮筋回弹时间。单位为毫秒。
        this.ui.recordList.scrollBar.elasticDistance = this.spring;//设置橡皮筋极限距离。
        this.ui.recordList.on(Laya.Event.MOUSE_UP,this,this.OnMouseUp);
    }

    /**关闭记录面板 */
    abstract OnCloseRecord():void;

    /**获取历史记录 */
    abstract GetRecord():void;
    
    /**刷新历史记录 */
    abstract RefreshRecord():void;

    private OnMouseUp():void{
        let value = this.ui.recordList.scrollBar.value;

        if(value <= -this.node){

            console.log(value,'开始刷新纪录')

        }else if((value + this.boxHeitht) - this.height >= this.node){

            console.log(value,'开始加载纪录')

        }
    }
    
}