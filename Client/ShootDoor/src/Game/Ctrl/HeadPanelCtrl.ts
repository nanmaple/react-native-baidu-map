class HeadPanelCtrl extends Laya.Sprite {
    private headPanel: ScenePanel.HeadPanel;  //游戏头部UI类
    private noteRecordPanelCtrl: NoteRecordPanelCtrl;  //投注记录面板控制类
    private rulePanel: ScenePanel.RulePanel;  //游戏规则面板UI类
    private score: Laya.Label;    //会员分数
    constructor(headPanel: ScenePanel.HeadPanel,noteRecordPanel: ScenePanel.NoteRecordPanel,rulePanel:ScenePanel.RulePanel,memberInfo: BaseDto.MemberInfoDto, parentID: string) {
        super();
        this.headPanel = headPanel;
        //创建头部面板UI实例
        let grHandler: Laya.Handler = Laya.Handler.create(this, this.OnClickGR, null, false);
        let ruleHandler: Laya.Handler = Laya.Handler.create(this, this.OnClickRule, null, false);

        this.headPanel.SetInfo(memberInfo,parentID, grHandler, ruleHandler);
        this.noteRecordPanelCtrl = new NoteRecordPanelCtrl(noteRecordPanel);
        this.rulePanel = rulePanel;
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
        this.rulePanel.ShowRule();
    }

    /**
     * 改变金额
     * @param money 
     */
    public ChangeMoney(money: number): void {
        this.headPanel.ChangeMoney(Math.floor(money));
    }

}