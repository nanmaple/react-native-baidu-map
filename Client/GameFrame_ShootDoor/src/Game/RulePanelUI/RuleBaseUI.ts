/*
* name;
*/

abstract class RuleBaseUI{
    protected ui: ui.RuleHUI | ui.RuleVUI;

    /**
     * 显示/隐藏
     */
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
        htmlD.innerHTML = language.GetLanguage("GameRule");
        htmlD.style.lineHeight = 40;
        htmlD.style.height = 2000;

        if (isVer) {
            this.ui = new ui.RuleVUI();
            htmlD.style.width = 660;
        } else {
            this.ui = new ui.RuleHUI();
            htmlD.style.width = 940;
        }
        //基础样式
        this.ui.zOrder = 7;
        this.ui.cacheAs = "bitmap";
        this.ui.rule.addChild(htmlD);
        this.ui.rule.vScrollBarSkin = "";
        this.ui.visible = this.isShow;
        let lang:number = language.GetLanguageType();
        if(lang == LanguageUtils.LanguageType.CH){
            this.ui.title.skin = "ui/ruleTitle.png";
        }else{
            this.ui.title.skin = "ui/ruleTitle_EN.png";
        }
        //事件绑定
        this.ui.close.on(Laya.Event.CLICK, this, this.CloseRule);
        
        Laya.stage.addChild(this.ui);
    }

    /**
     * 显示游戏规则
     */
    abstract ShowRule(): void;

    /**
     * 关闭游戏规则
     */
    abstract CloseRule(): void;
}
