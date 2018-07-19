/**最大最小缓速距离 */
const defaultSpeed = 21;
const gameResult = {0:[6,11,17,23],1:[1,13],2:12,3:[7,19],4:18,5:[2,14],6:24,7:8,8:9,9:20,10:21,11:16,12:15,13:4,14:3,15:5,16:[10,22]}
/**轮盘面板基类 */
abstract class BaseRouletteView{
    protected ui: ui.RouletteViewUI;
    protected ListenEventKey:string;
    protected box:Laya.Image;
    
    /**一共移动次数 */
    protected num:number = 0;
    /**轮盘图标数 */
    protected iconNum:number = 24;
    /**加速状态 */
    protected rollStatus:Enum.RollStatus = Enum.RollStatus.SpeedUp;
    /**开始位置 从1开始 */
    protected start:number = 1;
    /**结束位置 */
    protected end:number = 7;
    /**当前所在位置 从0开始 */
    protected index:number = 0;

    /**当前帧 */
    protected currentFrame:number = 0;
    /**当前速度 */
    protected currentSpeed:number = 20;
    /**缓速距离 */
    protected slowDistance:number = 9;
    /**结束加速位置 */
    protected accelerateEnd:number = 0;

    protected firstRoll:boolean = true;

    protected halos:number = 4;
    

    constructor(eventKey:string){
        this.ListenEventKey = eventKey;
    }

    /**
     * 重置屏幕
     */
    public ResetScreen() {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.RouletteViewUI();
        this.box = this.ui.getChildAt(0) as Laya.Image;
        // (this.box.getChildAt(0).getChildByName('animated') as Laya.Animation).visible = true;
        // (this.box.getChildAt(0).getChildByName('animated') as Laya.Animation).play();
        (this.box.getChildAt(0).getChildByName('halo') as Laya.Animation).visible = true;
        this.ui.zOrder = 1;
        // this.ui.cacheAs = "bitmap";
        Laya.stage.addChild(this.ui);
    }

    
    
}