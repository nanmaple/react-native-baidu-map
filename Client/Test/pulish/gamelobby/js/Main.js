// 程序入口
var GameMain = (function () {
    function GameMain() {
        this.memberServer = new MemberManager.Member();
        this.dto = new BaseDto.LoginDto();
        var init = new InitState();
        this.accountUI = new ui.AccountListUI();
        Laya.stage.addChild(this.accountUI);
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
     * 登录回调
     * @param data
     */
    GameMain.prototype.LoginCallback = function (data) {
        if (data.Result == BaseDto.ResultEnum.LOGIN) {
            //登录成功，获取会员信息
            this.memberServer.GetMemberInfo(this.dto.GameID, Laya.Handler.create(this, this.Redirect));
        }
        else if (data.Result == BaseDto.ResultEnum.MULTI) {
            this.MultiAccount(data.Data);
        }
        else if (data.Result == BaseDto.ResultEnum.ERROR) {
            this.Redirect();
        }
        else if (data.Result == BaseDto.ResultEnum.NO) {
            this.Redirect();
        }
    };
    /**
     * 重定向
     */
    GameMain.prototype.Redirect = function () {
        this.accountUI.login.visible = false;
        if (this.dto.GameID) {
            Laya.Browser.window.location.replace(GameConfig.GetRedirectUrl(this.dto.GameID));
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
        this.list = data;
        this.accountUI.accountList.array = data;
        // 使用但隐藏滚动条
        this.accountUI.accountList.vScrollBarSkin = "";
        this.accountUI.login.visible = false;
        this.accountUI.accountList.visible = true;
        this.accountUI.accountList.renderHandler = new Laya.Handler(this, this.renderHandler);
        this.accountUI.accountList.mouseHandler = new Laya.Handler(this, this.onSelect);
    };
    GameMain.prototype.renderHandler = function (cell, index) {
        //如果索引不再可索引范围，则终止该函数
        if (index > this.list.length)
            return;
        //获取当前渲染条目的数据
        var data = this.list[index];
        //根据子节点的名字listNumber，获取子节点对象。 
        var accountBox = cell.getChildByName("item").getChildByName("accountBox");
        var agentBox = cell.getChildByName("item").getChildByName("agentBox");
        var account = accountBox.getChildByName("account");
        var agent = agentBox.getChildByName("agent");
        //label渲染列表文本（序号）
        agent.text = data.ParentNickname;
        if (!data.Account && data.Account.length == 0) {
            accountBox.visible = false;
            agentBox.centerX = 0;
            return;
        }
        else {
            //label渲染列表文本（序号）
            account.text = data.Account;
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
            this.dto.MemberID = this.list[index].MemberId;
            this.memberServer.LoginByID(this.dto, Laya.Handler.create(this, this.LoginCallback));
        }
    };
    return GameMain;
}());
new GameMain();
