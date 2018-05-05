class HeadPanelCtrl extends Laya.Sprite {
    private gameUI: ScenePanel.GameUI;
    private noteRecordPanelCtrl: NoteRecordPanelCtrl;  //投注记录面板控制类
    private rulePanel: ScenePanel.RulePanelHor | ScenePanel.RulePanelVer;  //游戏规则面板UI类
    private score: Laya.Label;    //会员分数
    constructor() {
        super();
        this.gameUI = ScenePanel.GameUI.GetInstance();
        this.noteRecordPanelCtrl = new NoteRecordPanelCtrl();
    }

    public SetInfo(memberInfo: BaseDto.MemberInfoDto, parentID: string, isTourists: boolean):void{
        //创建头部面板UI实例
        let grHandler: Laya.Handler = Laya.Handler.create(this, this.OnClickGR, null, false);
        let ruleHandler: Laya.Handler = Laya.Handler.create(this, this.OnClickRule, null, false);
        let balanceHandler: Laya.Handler = Laya.Handler.create(this, this.OnClickBalance, null, false);
        this.gameUI.GetHeadPanel().SetInfo(memberInfo, parentID, grHandler, ruleHandler, balanceHandler, isTourists);
    }
    /**
     * 点击个人投注记录
     */
    private OnClickGR(): void {
        this.noteRecordPanelCtrl.ShowNoteRecord();
    }

    /**
     * 点击规则
     */
    private OnClickRule(): void {
        this.gameUI.GetRulePanel().ShowRule();
    }
    /**
     * 点击余额刷新
     */
    private OnClickBalance(): void{
        let loginService = new Laya.Browser.window.LoginService(Utils.Http, Utils.Storage, ()=>{
            let memberInfo = loginService.GetMemberInfoByLocal();
            let money = memberInfo.Score;
            this.gameUI.GetHeadPanel().ChangeMoney(money);
        });
        //获取会员信息
        loginService.GetMemberInfo(true);
    }

    /**
     * 改变金额
     * @param money 
     */
    public ChangeMoney(money: number): void {
        this.gameUI.GetHeadPanel().ChangeMoney(money);
    }

}