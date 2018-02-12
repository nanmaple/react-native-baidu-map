namespace ScenePanel {
    export class HeadPanel extends ui.HeadPanelUI {
        private grHandler: Laya.Handler;   //点击个人跳转回调
        private ruleHandler: Laya.Handler;  //点击规则跳转回调
        private moneyEffect: NumberGradualChangeEffect;
        private parentID: string;
        constructor() {
            super();
            //将提示UI类缓存为静态图像
            this.cacheAs = "bitmap";
            if (GameConfig.RatioType) {
                this.headBg.scale(GameConfig.HeightWidth, 1);
            } else {
                this.headBg.scale(1, GameConfig.WidthHeight);
            }
        }

        /**
         * 设置初始绑定
         * @param memberInfo 
         * @param grHandler 
         * @param ruleHandler 
         */
        public SetInfo(memberInfo: BaseDto.MemberInfoDto, parentID: string, grHandler: Laya.Handler, ruleHandler: Laya.Handler, isTourists: boolean): void {
            this.grHandler = grHandler;
            this.ruleHandler = ruleHandler;
            this.parentID = parentID;
            if (memberInfo && !isTourists) {
                //显示头像
                this.info.visible = true;   //显示头像
                //隐藏关注按钮
                this.headPic.skin = memberInfo.HeadImageUrl;
                this.nickname.text = memberInfo.Nickname ? memberInfo.Nickname : memberInfo.Account;
                this.score.text = Utils.Money.Format(memberInfo.Score);
            } else {
                //隐藏头像
                //显示关注按钮
                this.info.visible = false;
                this.attention.visible = true;
                if (memberInfo && memberInfo.Score) {
                    this.score.text = Utils.Money.Format(memberInfo.Score);
                } else {
                    this.score.text = Utils.Money.Format(0);
                }
            }

            this.moneyEffect = new NumberGradualChangeEffect(this.score);
            this.btnRule.on(Laya.Event.CLICK, this, this.onRuleHandler);
            this.btnGR.on(Laya.Event.CLICK, this, this.onGRHandler);
            this.attention.on(Laya.Event.CLICK, this, this.ClickAttention);

        }

        /**
         * 点击规则
         */
        public onRuleHandler(): void {
            this.ruleHandler.run();
        }

        /**
         * 点击个人投注记录
         */
        public onGRHandler(): void {
            this.grHandler.run();
        }

        /**
         * 点击关注
         */
        private ClickAttention(): void {
            Laya.Browser.window.location.href = GameConfig.GetWeChatUrl(this.parentID,true);
        }

        /**
         * 改变金额
         * @param money 
         */
        public ChangeMoney(money: number): void {
            this.moneyEffect.start(money);
        }
    }
}