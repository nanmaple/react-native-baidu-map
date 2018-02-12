namespace ScenePanel {
    export abstract class HeadPanelBaseUI {
        protected ui: ui.HeadPanelUI | ui.HeadPanel_VerUI;
        protected moneyEffect: NumberGradualChangeEffect;
        protected uiData: HeadPanelUIData;
        /**
         * 构造函数
         * @param isHor 是否横版
         */
        constructor(isHor?: boolean) {
            if (isHor) {
                this.ui = new ui.HeadPanelUI();
            } else {
                this.ui = new ui.HeadPanel_VerUI();
            }
            this.ui.zOrder = 7;
            this.ui.cacheAs = "bitmap";
            this.uiData = HeadPanelUIData.GetInstance();
            this.SetInfo(this.uiData.memberInfo, this.uiData.parentID, this.uiData.grHandler, this.uiData.ruleHandler, this.uiData.isTourists);
        }

        /**
         * 获取UI
         */
        public GetUI(): ui.HeadPanelUI | ui.HeadPanel_VerUI {
            return this.ui;
        }

        /**
         * 设置初始绑定
         * @param memberInfo 
         * @param grHandler 
         * @param ruleHandler 
         */
        public SetInfo(memberInfo: BaseDto.MemberInfoDto, parentID: string, grHandler: Laya.Handler, ruleHandler: Laya.Handler, isTourists: boolean): void {
            this.uiData.grHandler = grHandler;
            this.uiData.ruleHandler = ruleHandler;
            this.uiData.parentID = parentID;
            if (memberInfo && !isTourists) {
                //显示头像
                this.ui.info.visible = true;   //显示头像
                this.ui.attention.visible = false;
                //隐藏关注按钮
                this.ui.headPic.skin = memberInfo.HeadImageUrl;
                this.ui.nickname.text = memberInfo.Nickname ? memberInfo.Nickname : memberInfo.Account;
                this.ui.score.text = Utils.Money.Format(memberInfo.Score);
            } else {
                //隐藏头像
                //显示关注按钮
                this.ui.info.visible = false;
                this.ui.attention.visible = true;
                if (memberInfo && memberInfo.Score) {
                    this.ui.score.text = Utils.Money.Format(memberInfo.Score);
                } else {
                    this.ui.score.text = Utils.Money.Format(0);
                }
            }

            this.moneyEffect = new NumberGradualChangeEffect(this.ui.score);
            this.ui.btnRule.on(Laya.Event.CLICK, this, this.onRuleHandler);
            this.ui.btnGR.on(Laya.Event.CLICK, this, this.onGRHandler);
            this.ui.attention.on(Laya.Event.CLICK, this, this.ClickAttention);

        }

        /**
         * 点击规则
         */
        public onRuleHandler(): void {
            this.uiData.ruleHandler.run();
        }

        /**
         * 点击个人投注记录
         */
        public onGRHandler(): void {
            this.uiData.grHandler.run();
        }

        /**
         * 点击关注
         */
        private ClickAttention(): void {
            Laya.Browser.window.location.href = GameConfig.GetWeChatUrl(this.uiData.parentID, true);
        }

        /**
         * 改变金额
         * @param money 
         */
        public ChangeMoney(money: number): void {
            this.uiData.money = money;
            this.moneyEffect.start(money);
        }
    }
}