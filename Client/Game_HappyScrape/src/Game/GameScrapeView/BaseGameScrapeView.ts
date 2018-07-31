/**
 * BaseView主要用于写固定的UI渲染方法和不同功能的UI处理方法,动画
 * 命名规则：BasexxxView
 */
abstract class BaseGameScrapeView {
    protected ui: ui.GameScrapeViewUI;
    /**
     * 圆形刮层
     */
    private circle:Laya.Sprite; 
    /**
     * 是否正在刮
     */
    private isScrape:boolean = false;
    /**
     * 游戏二结果自定义对象（判断3个以上即中奖）
     */
    protected game2Count: any = {};
    /**
     * 中奖金额
     */
    protected bonus:number = 0;
    /**
     * 鼠标是否按下
     */
    protected isMouseDown:boolean = false;
    constructor() {

    }

    /**
     * 重置屏幕
     */
    public ResetScreen() {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.GameScrapeViewUI();
        this.ui.zOrder = 2;
        this.ui.cacheAs = "bitmap";
        Laya.stage.addChild(this.ui);
        this.ui.masks.on(Laya.Event.MOUSE_DOWN, this, this.OnMouseDown);
        this.ui.masks.on(Laya.Event.MOUSE_MOVE, this, this.ScrapeMaskView,[this.ui.masks]);
        this.ui.masks.on(Laya.Event.MOUSE_UP, this, this.OnMouseUp);
        this.Init();
    }
    /**
     * 初始化
     */
    private Init():void{
        for (var index = 0; index < this.ui.oddsInfo.numChildren; index++) {
            let odds:ui.OddsInfoViewUI = this.ui.oddsInfo.getChildAt(index) as ui.OddsInfoViewUI;
            odds.level.text = LanguageUtils.Language.Get("Level" + (index + 1).toString());
        }
        this.ui.ruleOneTit.text = LanguageUtils.Language.Get("RuleOneTitle");
        this.ui.ruleOneCon.text = LanguageUtils.Language.Get("RuleOneContent");
        this.ui.ruleTwoTit.text = LanguageUtils.Language.Get("RuleTwoTitle");
        this.ui.ruleTwoCon.text = LanguageUtils.Language.Get("RuleTwoContent");
        this.DisabledScrape(true);
    }
    /**
     * 是否禁用面板
     * @param disabled 
     */
    protected DisabledScrape(disabled:boolean):void{
        this.ui.disabled = disabled;
        this.ui.gray = false;
    }
    /**
     * 刮去遮罩涂层
     * @param mask 
     */
    private ScrapeMaskView(mask:Laya.Box):void{
        if(!this.isMouseDown) return;
        if(!this.isScrape){
            this.isScrape = true;
            Utils.BackgroundMusic.PlaySounds("sound/scratch.mp3",Laya.Handler.create(this,()=>{
                this.isScrape = false;
            },null,false));
        }
        // 绘制一个圆形区域，利用叠加模式，抠除上面遮罩区域
        this.circle = Laya.Pool.getItemByClass("circle",Laya.Sprite);
        this.circle.graphics.drawCircle(0, 0, 40, "#fff");
        this.circle.pos(Laya.stage.mouseX - mask.x, Laya.stage.mouseY - mask.y);
        // 设置叠加模式
        this.circle.blendMode = "destination-out";
        this.ui.coating.addChild(this.circle);
    }
    /**
     * 鼠标按下
     */
    private OnMouseDown():void{
        this.isMouseDown = true;
    }
    /**
     * 鼠标移开
     */
    private OnMouseUp():void{
        this.isMouseDown = false;
        this.isScrape = false;
        Utils.BackgroundMusic.StopSound("sound/scratch.mp3");
    }

    /**
     * 重置遮罩涂层
     * @param isShow 遮罩层是否显示 
     */
    protected ReSetMaskView(isShow: boolean):void{
        this.ui.masks.visible = isShow;
        this.ui.bonus.visible = !isShow;
        this.ui.coating.removeChildren();
    }
}
