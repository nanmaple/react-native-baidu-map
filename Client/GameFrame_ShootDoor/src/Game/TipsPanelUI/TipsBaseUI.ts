/*
* name;
*/
abstract class TipsBaseUI{
    protected ui: ui.TipsHUI | ui.TipsVUI;
    protected isShow:boolean = false;

    constructor(){

    }

    /**
     * 切换横竖屏
     * @param isHor 是否为横屏
     */
    public ResetScreen(isVer?: boolean) {
        Laya.stage.removeChild(this.ui);
        let language: LanguageUtils.Language = new LanguageUtils.Language();
        var htmlD: Laya.HTMLDivElement = new Laya.HTMLDivElement();
        htmlD.innerHTML = language.GetLanguage("GameTips"); 
        htmlD.style.width = 360;
        htmlD.style.height = 250;
        if (isVer) {
            this.ui = new ui.TipsVUI();
        } else {
            this.ui = new ui.TipsHUI();
        }
        //基础样式
        this.ui.zOrder = 10;
        this.ui.cacheAs = "bitmap";
        this.ui.visible = this.isShow;
        this.ui.tips.vScrollBarSkin = "";
        //ui事件绑定
        this.ui.closeBtn.on(Laya.Event.CLICK, this, this.CloseTip);
        
        this.ui.tips.addChild(htmlD);
        Laya.stage.addChild(this.ui);
    }

    /** 
     * 隐藏提示
    */
    abstract CloseTip():void;

    /** 
     * 显示提示
    */
    abstract ShowTip():void;


}