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
/*
* name;
*/
var HeadUIHV = /** @class */ (function (_super) {
    __extends(HeadUIHV, _super);
    function HeadUIHV() {
        return _super.call(this) || this;
    }
    /**
     * 设置初始绑定
     * @param memberInfo 用户信息
     * @param isTourists 是否游客
     */
    HeadUIHV.prototype.SetInfo = function (memberInfo, isTourists) {
        this.memberInfo = memberInfo;
        this.isTourists = isTourists;
        if (memberInfo && !isTourists) {
            var language = new LanguageUtils.Language();
            //显示头像
            this.ui.info.visible = true;
            //隐藏关注按钮
            this.ui.attention.visible = false;
            if (memberInfo.HeadImageUrl) {
                this.ui.headPic.skin = memberInfo.HeadImageUrl.replace("http", "https");
            }
            this.ui.nickname.text = memberInfo.Nickname;
            this.ui.agent.text = language.GetLanguage("Account") + memberInfo.Account;
            this.ui.score.text = Utils.Money.Format(memberInfo.Score);
        }
        else {
            this.ui.info.visible = false;
            this.ui.attention.visible = true;
            if (memberInfo && memberInfo.Score) {
                this.ui.score.text = Utils.Money.Format(memberInfo.Score);
            }
            else {
                this.ui.score.text = Utils.Money.Format(0);
            }
        }
        this.moneyEffect = new NumberGradualChangeEffect(this.ui.score);
    };
    HeadUIHV.prototype.ChangeMoney = function (money) {
        this.money = money;
        this.moneyEffect.start(money);
    };
    HeadUIHV.prototype.onRuleHandler = function () {
        var data = new Dto.BroadcastDto();
        data.Value = '';
        data.Type = Enum.ListenUIEnum.ShowRule;
        var event = new CustomEvent("GameUI", { detail: data });
        document.dispatchEvent(event);
    };
    HeadUIHV.prototype.onGRHandler = function () {
        var data = new Dto.BroadcastDto();
        data.Value = '';
        data.Type = Enum.ListenUIEnum.BetHistory;
        var event = new CustomEvent("GameUI", { detail: data });
        document.dispatchEvent(event);
    };
    HeadUIHV.prototype.onAttention = function () {
        Laya.Browser.window.location.href = GameConfig.GetWeChatUrl(Utils.Url.GetQuery("parentid"), true);
    };
    HeadUIHV.prototype.OnBalanceHander = function () {
        var data = new Dto.BroadcastDto();
        data.Value = '';
        data.Type = Enum.ListenUIEnum.ChangeMoney;
        var event = new CustomEvent("GameUI", { detail: data });
        document.dispatchEvent(event);
    };
    return HeadUIHV;
}(HeadBaseUI));
//# sourceMappingURL=HeadUIHV.js.map