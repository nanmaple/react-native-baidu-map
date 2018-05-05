var ScenePanel;
(function (ScenePanel) {
    var HeadPanelBaseUI = /** @class */ (function () {
        /**
         * 构造函数
         * @param isHor 是否横版
         */
        function HeadPanelBaseUI(isHor) {
            if (isHor) {
                this.ui = new ui.HeadPanelUI();
            }
            else {
                this.ui = new ui.HeadPanel_VerUI();
            }
            this.ui.zOrder = 7;
            this.ui.cacheAs = "bitmap";
            this.uiData = ScenePanel.HeadPanelUIData.GetInstance();
            this.SetInfo(this.uiData.memberInfo, this.uiData.parentID, this.uiData.grHandler, this.uiData.ruleHandler, this.uiData.balanceHander, this.uiData.isTourists);
            var language = new LanguageUtils.Language();
            var lang = language.GetLanguageType();
            if (lang == LanguageUtils.LanguageType.CH) {
                this.ui.attention.skin = "ui/attention.png";
            }
            else {
                this.ui.attention.skin = "ui/attention_EN.png";
            }
        }
        /**
         * 获取UI
         */
        HeadPanelBaseUI.prototype.GetUI = function () {
            return this.ui;
        };
        /**
         * 设置初始绑定
         * @param memberInfo
         * @param grHandler
         * @param ruleHandler
         */
        HeadPanelBaseUI.prototype.SetInfo = function (memberInfo, parentID, grHandler, ruleHandler, balanceHander, isTourists) {
            this.uiData.memberInfo = memberInfo;
            this.uiData.grHandler = grHandler;
            this.uiData.ruleHandler = ruleHandler;
            this.uiData.balanceHander = balanceHander;
            this.uiData.parentID = parentID;
            this.uiData.isTourists = isTourists;
            if (memberInfo && !isTourists) {
                var language = new LanguageUtils.Language();
                //显示头像
                this.ui.info.visible = true; //显示头像
                this.ui.attention.visible = false;
                //隐藏关注按钮
                this.ui.headPic.skin = memberInfo.HeadImageUrl.replace("http", "https");
                this.ui.nickname.text = memberInfo.Nickname;
                this.ui.agent.text = language.GetLanguage("Account") + memberInfo.Account;
                this.ui.score.text = Utils.Money.Format(memberInfo.Score);
            }
            else {
                //隐藏头像
                //显示关注按钮
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
            this.ui.btnRule.on(Laya.Event.CLICK, this, this.onRuleHandler);
            this.ui.btnGR.on(Laya.Event.CLICK, this, this.onGRHandler);
            this.ui.attention.on(Laya.Event.CLICK, this, this.ClickAttention);
            this.ui.money.on(Laya.Event.CLICK, this, this.OnBalanceHander);
        };
        /**
         * 点击规则
         */
        HeadPanelBaseUI.prototype.onRuleHandler = function () {
            this.uiData.ruleHandler.run();
        };
        /**
         * 点击个人投注记录
         */
        HeadPanelBaseUI.prototype.onGRHandler = function () {
            this.uiData.grHandler.run();
        };
        /**
         * 点击关注
         */
        HeadPanelBaseUI.prototype.ClickAttention = function () {
            Laya.Browser.window.location.href = GameConfig.GetWeChatUrl(this.uiData.parentID, true);
        };
        /**
         * 点击余额
         */
        HeadPanelBaseUI.prototype.OnBalanceHander = function () {
            this.uiData.balanceHander.run();
        };
        /**
         * 改变金额
         * @param money
         */
        HeadPanelBaseUI.prototype.ChangeMoney = function (money) {
            this.uiData.money = money;
            this.moneyEffect.start(money);
        };
        return HeadPanelBaseUI;
    }());
    ScenePanel.HeadPanelBaseUI = HeadPanelBaseUI;
})(ScenePanel || (ScenePanel = {}));
