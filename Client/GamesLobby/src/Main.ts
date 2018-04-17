// 程序入口
class GameMain {
    private Storage: Utils.Storage;
    private memberServer: MemberManager.Member = new MemberManager.Member();
    private dto: BaseDto.LoginDto = new BaseDto.LoginDto();
    private list: Array<BaseDto.MultiAccountDto>;
    private accountUI: ui.AccountListUI | ui.AccountList_VerUI;
    private screenMode: number;
    private status: number = 0;
    constructor() {
        let init = new InitState();
        this.ScreenMonitor();
        //获取地址栏中code
        this.dto.Code = Utils.Url.GetQuery("code");
        //获取地址栏中state参数，即父级（推荐人）ID
        this.dto.ParentID = Utils.Url.GetQuery("parentid");
        //获取地址栏中的游戏id
        this.dto.GameID = Utils.Url.GetQuery("gameid");
        if (!this.dto.GameID) {
            this.dto.GameID = 1;
        }
        //登录
        this.memberServer.Login(this.dto, Laya.Handler.create(this, this.LoginCallback));
    }
    /**
     * 屏幕横竖屏监听
     */
    private ScreenMonitor(): void {
        let evt = "onorientationchange" in window ? "orientationchange" : "resize";
        Laya.Browser.window.addEventListener("load", () => { this.listenerCallBack() });
        //事件监听
        Laya.Browser.window.addEventListener(evt, () => { this.listenerCallBack() }, false);

    }
    private listenerCallBack(): void {
        Laya.stage.removeChildren();
        //判断android或者ios
        if (window.orientation == 0 || window.orientation == 180) {
            this.screenMode = 0;
            Laya.stage.size(750, 1222);
            Laya.stage.screenMode = Laya.Stage.SCREEN_VERTICAL;
        }
        else if (window.orientation == 90 || window.orientation == -90) {
            this.screenMode = 1;
            Laya.stage.size(1334, 750);
            Laya.stage.screenMode = Laya.Stage.SCREEN_HORIZONTAL;
        }
        else {
            if (Laya.Browser.clientWidth > Laya.Browser.clientHeight) {
                this.screenMode = 1;
                Laya.stage.size(1334, 750);
                Laya.stage.screenMode = Laya.Stage.SCREEN_HORIZONTAL;
            } else {
                this.screenMode = 0;
                Laya.stage.size(750, 1222);
                Laya.stage.screenMode = Laya.Stage.SCREEN_VERTICAL;
            }
        }
        Laya.stage.once(Laya.Event.RESIZE, this, this.VersionSwitch, [this.screenMode]);
    }
    /**
     * 横竖屏切换
     * @param version (0：竖屏  1：横屏) 
     */
    private VersionSwitch(version: number): void {
        if (version == 0) {
            this.accountUI = new ui.AccountList_VerUI();
            Laya.stage.addChild(this.accountUI);
        } else {
            this.accountUI = new ui.AccountListUI();
            Laya.stage.addChild(this.accountUI);
        }
        if (this.status === 1) {
            this.accountUI.login.visible = false;
            this.accountUI.accountList.visible = true;
            this.accountUI.title.visible = true;
            this.MultiAccount(this.list);
        } else {
            this.accountUI.login.visible = true;
            this.accountUI.accountList.visible = false;
            this.accountUI.title.visible = false;
        }
        let language: LanguageUtils.Language = new LanguageUtils.Language();
        this.accountUI.login.text = language.GetLanguage("Login");
        this.accountUI.title.text = language.GetLanguage("AgentTitle");
    }
    /**
     * 登录回调
     * @param data 
     */
    private LoginCallback(data: BaseDto.LoginResultDto): void {
        let language: LanguageUtils.Language = new LanguageUtils.Language();
        if (data.Result == BaseDto.ResultEnum.LOGIN) {
            //登录成功，获取会员信息
            this.memberServer.GetMemberInfo(this.dto.GameID, Laya.Handler.create(this, this.Redirect));
        } else if (data.Result == BaseDto.ResultEnum.MULTI) {
            this.list = data.Data;
            this.status = 1;
            this.MultiAccount(data.Data);
        } else if (data.Result == BaseDto.ResultEnum.ERROR) {
            alert(language.GetLanguage("LoginError"));
        } else if (data.Result == BaseDto.ResultEnum.NO) {
            this.Redirect();
        }
    }

    /**
     * 重定向
     */
    private Redirect() {
        if (this.accountUI) {
            this.accountUI.login.visible = false;
        }
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
        if (this.accountUI) {
            this.accountUI.accountList.array = data;
            // 使用但隐藏滚动条
            this.accountUI.accountList.vScrollBarSkin = "";
            this.accountUI.login.visible = false;
            this.accountUI.accountList.visible = true;
            this.accountUI.title.visible = true;
            this.accountUI.accountList.renderHandler = new Laya.Handler(this, this.renderHandler);
            this.accountUI.accountList.mouseHandler = new Laya.Handler(this, this.onSelect);
        }
    }

    private renderHandler(cell: Laya.Box, index: number): void {
        let language: LanguageUtils.Language = new LanguageUtils.Language();
        let lang:number = language.GetLanguageType();
        //如果索引不再可索引范围，则终止该函数
        if (index > this.list.length) return;
        //获取当前渲染条目的数据
        let data: BaseDto.MultiAccountDto = this.list[index] as BaseDto.MultiAccountDto;
        //根据子节点的名字listNumber，获取子节点对象。 
        let agent: Laya.Label = cell.getChildByName("agent") as Laya.Label;
        let agentLabel:Laya.Label = cell.getChildByName("label") as Laya.Label;
        if(lang == LanguageUtils.LanguageType.CH){
            agentLabel.width = 100;
            agent.x = 120;
        }else{
            agentLabel.width = 200;
            agent.x = 220;
        }
        agentLabel.text = language.GetLanguage("Agent");
        if (!data.Account && data.Account.length == 0) {
            //label渲染列表文本（序号）
            agent.text = data.ParentNickname;
        }
        else {
            //label渲染列表文本（序号）
            agent.text = data.ParentNickname + "(" + data.Account + ")";
        }
    }

    /**
     * 选中回调
     * @param index 编号
     */
    private onSelect(e: Event, index: number): void {
        if (e.type == Laya.Event.CLICK) {
            this.accountUI.login.visible = true;
            this.accountUI.accountList.visible = false;
            this.accountUI.title.visible = false;
            this.dto.MemberID = this.list[index].MemberId;
            this.memberServer.LoginByID(this.dto, Laya.Handler.create(this, this.LoginCallback));
        }
    }
}
new GameMain();