// 程序入口
var GameMain = (function () {
    function GameMain() {
        var _this = this;
        this.memberServer = new MemberManager.Member();
        this.dto = new BaseDto.LoginDto();
        this.status = 0;
        this.loginService = null;
        var init = new InitState();
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
        var http = new Utils.Http();
        this.loginService = new Laya.Browser.window.LoginService(Utils.Http, Utils.Storage, function (data) { _this.LoginSuccess(data); }, function (data) { _this.LoginMultiSucess(data); }, function () { _this.LoginError(); }, Net.WebApi.instance);
        this.loginService.Login();
    }
    /**
     * 登录成功回调
     */
    GameMain.prototype.LoginSuccess = function (data) {
        this.Redirect();
    };
    /**
     * 登录失败回调
     */
    GameMain.prototype.LoginError = function () {
        var language = new LanguageUtils.Language();
        alert(language.GetLanguage("LoginError"));
    };
    /**
     * 登录成功多账号回调
     */
    GameMain.prototype.LoginMultiSucess = function (data) {
        this.list = data.Data;
        this.status = 1;
        this.MultiAccount(data.Data);
    };
    /**
     * 屏幕横竖屏监听
     */
    GameMain.prototype.ScreenMonitor = function () {
        var _this = this;
        var evt = "onorientationchange" in window ? "orientationchange" : "resize";
        Laya.Browser.window.addEventListener("load", function () { _this.listenerCallBack(); });
        //事件监听
        Laya.Browser.window.addEventListener(evt, function () { _this.listenerCallBack(); }, false);
    };
    GameMain.prototype.listenerCallBack = function () {
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
            }
            else {
                this.screenMode = 0;
                Laya.stage.size(750, 1222);
                Laya.stage.screenMode = Laya.Stage.SCREEN_VERTICAL;
            }
        }
        Laya.stage.once(Laya.Event.RESIZE, this, this.VersionSwitch, [this.screenMode]);
    };
    /**
     * 横竖屏切换
     * @param version (0：竖屏  1：横屏)
     */
    GameMain.prototype.VersionSwitch = function (version) {
        if (version == 0) {
            this.accountUI = new ui.AccountList_VerUI();
            Laya.stage.addChild(this.accountUI);
        }
        else {
            this.accountUI = new ui.AccountListUI();
            Laya.stage.addChild(this.accountUI);
        }
        if (this.status === 1) {
            this.accountUI.login.visible = false;
            this.accountUI.accountList.visible = true;
            this.accountUI.title.visible = true;
            this.MultiAccount(this.list);
        }
        else {
            this.accountUI.login.visible = true;
            this.accountUI.accountList.visible = false;
            this.accountUI.title.visible = false;
        }
        var language = new LanguageUtils.Language();
        this.accountUI.login.text = language.GetLanguage("Login");
        this.accountUI.title.text = language.GetLanguage("AgentTitle");
    };
    /**
     * 重定向
     */
    GameMain.prototype.Redirect = function () {
        if (this.accountUI) {
            this.accountUI.login.visible = false;
        }
        if (this.dto.GameID) {
            // console.log("登录成功")
            Laya.Browser.window.location.replace(GameConfig.GetRedirectUrl(this.dto.GameID, this.dto.ParentID));
        }
        else {
            alert("游戏不存在");
        }
    };
    /**
     * 多账号处理
     * @param data 数据
     */
    GameMain.prototype.MultiAccount = function (data) {
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
    };
    GameMain.prototype.renderHandler = function (cell, index) {
        var language = new LanguageUtils.Language();
        var lang = language.GetLanguageType();
        //如果索引不再可索引范围，则终止该函数
        if (index > this.list.length)
            return;
        //获取当前渲染条目的数据
        var data = this.list[index];
        //根据子节点的名字listNumber，获取子节点对象。 
        var agent = cell.getChildByName("agent");
        var agentLabel = cell.getChildByName("label");
        if (lang == LanguageUtils.LanguageType.CH) {
            agentLabel.width = 100;
            agent.x = 120;
        }
        else {
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
    };
    /**
     * 选中回调
     * @param index 编号
     */
    GameMain.prototype.onSelect = function (e, index) {
        if (e.type == Laya.Event.CLICK) {
            this.accountUI.login.visible = true;
            this.accountUI.accountList.visible = false;
            this.accountUI.title.visible = false;
            this.dto.MemberID = this.list[index].MemberId;
            this.loginService.LoginByID(this.dto.MemberID);
        }
    };
    return GameMain;
}());
new GameMain();
