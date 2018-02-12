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
var ScenePanel;
(function (ScenePanel) {
    var HeadPanel = (function (_super) {
        __extends(HeadPanel, _super);
        function HeadPanel() {
            var _this = _super.call(this) || this;
            //将提示UI类缓存为静态图像
            _this.cacheAs = "bitmap";
            if (GameConfig.RatioType) {
                _this.headBg.scale(GameConfig.HeightWidth, 1);
            }
            else {
                _this.headBg.scale(1, GameConfig.WidthHeight);
            }
            return _this;
        }
        /**
         * 设置初始绑定
         * @param memberInfo
         * @param grHandler
         * @param ruleHandler
         */
        HeadPanel.prototype.SetInfo = function (memberInfo, parentID, grHandler, ruleHandler, isTourists) {
            this.grHandler = grHandler;
            this.ruleHandler = ruleHandler;
            this.parentID = parentID;
            if (memberInfo && !isTourists) {
                //显示头像
                this.info.visible = true; //显示头像
                //隐藏关注按钮
                this.headPic.skin = memberInfo.HeadImageUrl;
                this.nickname.text = memberInfo.Nickname ? memberInfo.Nickname : memberInfo.Account;
                this.score.text = Utils.Money.Format(memberInfo.Score);
            }
            else {
                //隐藏头像
                //显示关注按钮
                this.info.visible = false;
                this.attention.visible = true;
                if (memberInfo && memberInfo.Score) {
                    this.score.text = Utils.Money.Format(memberInfo.Score);
                }
                else {
                    this.score.text = Utils.Money.Format(0);
                }
            }
            this.moneyEffect = new NumberGradualChangeEffect(this.score);
            this.btnRule.on(Laya.Event.CLICK, this, this.onRuleHandler);
            this.btnGR.on(Laya.Event.CLICK, this, this.onGRHandler);
            this.attention.on(Laya.Event.CLICK, this, this.ClickAttention);
        };
        /**
         * 点击规则
         */
        HeadPanel.prototype.onRuleHandler = function () {
            this.ruleHandler.run();
        };
        /**
         * 点击个人投注记录
         */
        HeadPanel.prototype.onGRHandler = function () {
            this.grHandler.run();
        };
        /**
         * 点击关注
         */
        HeadPanel.prototype.ClickAttention = function () {
            Laya.Browser.window.location.href = GameConfig.GetWeChatUrl(this.parentID, true);
        };
        /**
         * 改变金额
         * @param money
         */
        HeadPanel.prototype.ChangeMoney = function (money) {
            this.moneyEffect.start(money);
        };
        return HeadPanel;
    }(ui.HeadPanelUI));
    ScenePanel.HeadPanel = HeadPanel;
})(ScenePanel || (ScenePanel = {}));
