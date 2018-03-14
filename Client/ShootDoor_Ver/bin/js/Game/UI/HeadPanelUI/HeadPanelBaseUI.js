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
            this.SetInfo(this.uiData.memberInfo, this.uiData.parentID, this.uiData.grHandler, this.uiData.ruleHandler, this.uiData.isTourists);
            var lang = Laya.Browser.window.navigator.language || Laya.Browser.window.navigator["userLanguage"]; //常规浏览器语言和IE浏览器  
            lang = lang.substr(0, 2); //截取lang前2位字符 
            if (lang == 'zh') {
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
        HeadPanelBaseUI.prototype.SetInfo = function (memberInfo, parentID, grHandler, ruleHandler, isTourists) {
            this.uiData.memberInfo = memberInfo;
            this.uiData.grHandler = grHandler;
            this.uiData.ruleHandler = ruleHandler;
            this.uiData.parentID = parentID;
            this.uiData.isTourists = isTourists;
            if (memberInfo && !isTourists) {
                //显示头像
                this.ui.info.visible = true; //显示头像
                this.ui.attention.visible = false;
                //隐藏关注按钮
                this.ui.headPic.skin = memberInfo.HeadImageUrl;
                this.ui.nickname.text = memberInfo.Nickname ? memberInfo.Nickname : memberInfo.Account;
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
