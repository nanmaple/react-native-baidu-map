
abstract class TimeBaseUI {
    protected ui: ui.TimeHUI | ui.TimeVUI;
    protected time: number = 0;  //时间
    protected timeStamp: number = 0;  //时间戳
    protected timeEffect: TimeEffect;   //游戏时间效果
    constructor() {

    }

    /**
     * 切换横竖屏
     * @param isVer 是否为竖屏
     */
    public ResetScreen(isVer?: boolean) {
        Laya.stage.removeChild(this.ui);
        if (isVer) {
            this.ui = new ui.TimeVUI();
        } else {
            this.ui = new ui.TimeHUI();
        }
        this.ui.zOrder = 5;
        this.ui.cacheAs = "bitmap";
        Laya.stage.addChild(this.ui);
        this.timeEffect = new TimeEffect(this.ui.time);
        //创建时间效果
        this.ui.visible = false;
        this.time = this.Set();
        if (this.time > 0) {
            this.StartGameTime(this.time);
        }
    }

    abstract StartGameTime(time: number): void;

    abstract Set(): number;
}
