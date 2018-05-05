var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var HeadPanelCtrl = /** @class */ (function (_super) {
    __extends(HeadPanelCtrl, _super);
    function HeadPanelCtrl() {
        var _this = _super.call(this) || this;
        _this.gameUI = ScenePanel.GameUI.GetInstance();
        _this.noteRecordPanelCtrl = new NoteRecordPanelCtrl();
        return _this;
    }
    HeadPanelCtrl.prototype.SetInfo = function (memberInfo, parentID, isTourists) {
        //创建头部面板UI实例
        var grHandler = Laya.Handler.create(this, this.OnClickGR, null, false);
        var ruleHandler = Laya.Handler.create(this, this.OnClickRule, null, false);
        var balanceHandler = Laya.Handler.create(this, this.OnClickBalance, null, false);
        this.gameUI.GetHeadPanel().SetInfo(memberInfo, parentID, grHandler, ruleHandler, balanceHandler, isTourists);
    };
    /**
     * 点击个人投注记录
     */
    HeadPanelCtrl.prototype.OnClickGR = function () {
        this.noteRecordPanelCtrl.ShowNoteRecord();
    };
    /**
     * 点击规则
     */
    HeadPanelCtrl.prototype.OnClickRule = function () {
        this.gameUI.GetRulePanel().ShowRule();
    };
    /**
     * 点击余额刷新
     */
    HeadPanelCtrl.prototype.OnClickBalance = function () {
        var _this = this;
        var loginService = new Laya.Browser.window.LoginService(Utils.Http, Utils.Storage, function () {
            var memberInfo = loginService.GetMemberInfoByLocal();
            var money = memberInfo.Score;
            _this.gameUI.GetHeadPanel().ChangeMoney(money);
        });
        //获取会员信息
        loginService.GetMemberInfo(true);
    };
    /**
     * 改变金额
     * @param money
     */
    HeadPanelCtrl.prototype.ChangeMoney = function (money) {
        this.gameUI.GetHeadPanel().ChangeMoney(money);
    };
    return HeadPanelCtrl;
}(Laya.Sprite));
