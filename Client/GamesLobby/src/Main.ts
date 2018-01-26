// 程序入口
class GameMain {
    private Storage: Utils.Storage;
    private memberServer: MemberManager.Member = new MemberManager.Member();
    private dto: BaseDto.LoginDto = new BaseDto.LoginDto();
    private list: Array<BaseDto.MultiAccountDto>;
    private accountUI: ui.AccountListUI;
    constructor() {
        let init = new InitState();

        this.accountUI = new ui.AccountListUI();
        Laya.stage.addChild(this.accountUI);
        //获取地址栏中code
        this.dto.Code = Utils.Url.GetQuery("code");
        //获取地址栏中state参数，即父级（推荐人）ID
        this.dto.ParentID = Utils.Url.GetQuery("parentID");
        //获取地址栏中的游戏id
        this.dto.GameID = Utils.Url.GetQuery("gameID");
        let isTest = Utils.Url.GetQuery("testID");
        if (!isTest) {
            //登录
            this.memberServer.Login(this.dto, Laya.Handler.create(this, this.LoginCallback));
        }
    }

    /**
     * 登录回调
     * @param data 
     */
    private LoginCallback(data: BaseDto.LoginResultDto): void {
        if (data.Result == BaseDto.ResultEnum.LOGIN) {
            //登录成功，获取会员信息
            this.memberServer.GetMemberInfo(this.dto.GameID, Laya.Handler.create(this, this.Redirect));
        } else if (data.Result == BaseDto.ResultEnum.MULTI) {
            this.MultiAccount(data.Data);
        } else if (data.Result == BaseDto.ResultEnum.ERROR) {
            this.Redirect();
        } else if (data.Result == BaseDto.ResultEnum.NO) {
            this.Redirect();
        }
    }

    /**
     * 重定向
     */
    private Redirect() {
        this.accountUI.login.visible = false;
        if (this.dto.GameID) {
            Laya.Browser.window.location.replace(GameConfig.GetRedirectUrl(this.dto.GameID));
        } else {
            alert("游戏不存在");
        }
    }

    /**
     * 多账号处理
     * @param data 数据
     */
    private MultiAccount(data: Array<BaseDto.MultiAccountDto>) {
        this.list = data;
        this.accountUI.accountList.array = data;
        // 使用但隐藏滚动条
        this.accountUI.accountList.vScrollBarSkin = "";
        this.accountUI.login.visible = false;
        this.accountUI.accountList.visible = true;
        this.accountUI.accountList.renderHandler =new Laya.Handler(this, this.renderHandler);
        this.accountUI.accountList.mouseHandler =new Laya.Handler(this, this.onSelect);
    }

    private renderHandler(cell: Laya.Box, index: number): void {
        //如果索引不再可索引范围，则终止该函数
        if (index > this.list.length) return;
        //获取当前渲染条目的数据
        let data: BaseDto.MultiAccountDto = this.list[index] as BaseDto.MultiAccountDto;
        //根据子节点的名字listNumber，获取子节点对象。 
        let accountBox: Laya.Box = cell.getChildByName("item").getChildByName("accountBox") as Laya.Box;
        let agentBox: Laya.Box = cell.getChildByName("item").getChildByName("agentBox") as Laya.Box;         
        let account: Laya.Label = accountBox.getChildByName("account") as Laya.Label;
        let agent: Laya.Label = agentBox.getChildByName("agent") as Laya.Label;
        //label渲染列表文本（序号）
        agent.text = data.ParentNickname;
        if(!data.Account && data.Account.length == 0){
            accountBox.visible = false;
            agentBox.centerX = 0;
            return;
        }
        else{
            //label渲染列表文本（序号）
            account.text = data.Account;
        }
    }

    /**
     * 选中回调
     * @param index 编号
     */
    private onSelect(e: Event, index: number): void {
        if(e.type == Laya.Event.CLICK){
            this.accountUI.login.visible = true;
            this.accountUI.accountList.visible = false;
            this.dto.MemberID = this.list[index].MemberId;
            this.memberServer.LoginByID(this.dto, Laya.Handler.create(this, this.LoginCallback));
        }  
    }
}
new GameMain();