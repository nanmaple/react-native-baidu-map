/*
* name;
*/
abstract class HeadBaseUI{
    protected ui: ui.HeadHUI | ui.HeadVUI;
    /**
     * 金币改变动画
     */
    protected moneyEffect: NumberGradualChangeEffect;
    /**
     * 用户余额
     */
    protected money: number;
    /**
     * 用户信息
     */
    protected memberInfo: GameDto.MemberInfoDto;
    /**
     * 投注记录
     */
    protected grHandler: Laya.Handler;
    /**
     * 游戏规则
     */
    protected ruleHandler: Laya.Handler;
    /**
     * 是否游客
     */
    protected isTourists: boolean;
    protected balanceHander: Laya.Handler;

    constructor(){

    }

    /**
     * 切换横竖屏
     * @param isHor 是否为横屏
     */
    public ResetScreen(isVer?: boolean) {
        Laya.stage.removeChild(this.ui);
        if (isVer) {
            this.ui = new ui.HeadVUI();
        } else {
            this.ui = new ui.HeadHUI();
        }
        //基础样式
        this.ui.zOrder = 7;
        this.ui.cacheAs = "bitmap";
        let language: LanguageUtils.Language = new LanguageUtils.Language();
        let lang: number = language.GetLanguageType();
        if (lang == LanguageUtils.LanguageType.CH) {
            this.ui.attention.skin = "ui/attention.png";
        } else {
            this.ui.attention.skin = "ui/attention_EN.png";
        }
        //ui事件绑定
        this.ui.btnRule.on(Laya.Event.CLICK, this, this.onRuleHandler);
        this.ui.btnGR.on(Laya.Event.CLICK, this, this.onGRHandler);
        this.ui.attention.on(Laya.Event.CLICK, this, this.onAttention);
        this.ui.money.on(Laya.Event.CLICK, this, this.OnBalanceHander);
        
        Laya.stage.addChild(this.ui);
        this.GetInfo();
    }

    /**
     * 设置初始绑定
     * @param memberInfo 用户信息
     * @param parentID 地址栏parentID
     * @param isTourists 是否游客
     */
    abstract SetInfo(memberInfo: GameDto.MemberInfoDto, isTourists: boolean): void;

    /**
     * 改变金额
     * @param money
     */
    abstract ChangeMoney(money: number): void;

    /**
     * 点击规则
    */
    abstract onRuleHandler():void;

    /**
     * 点击个人投注记录
     */
    abstract onGRHandler():void;

    /**
     * 点击关注
     */
    abstract onAttention():void;

    /**
     * 点击余额
     */
    abstract OnBalanceHander():void;

    private GetInfo():void{
        let data: Dto.BroadcastDto = new Dto.BroadcastDto();
        data.Value = '';
        data.Type = Enum.ListenUIEnum.GetMemberInfo;

        let event = new CustomEvent("GameUI", { detail: data });
        document.dispatchEvent(event);
    }
}