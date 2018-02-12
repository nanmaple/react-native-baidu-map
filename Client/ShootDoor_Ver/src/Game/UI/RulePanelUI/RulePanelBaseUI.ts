namespace ScenePanel {
    export abstract class RulePanelBaseUI {
        protected ui: ui.RulePanelUI | ui.RulePanel_VerUI;
        protected uiData: RulePanelUIData;
        /**
         * 构造函数
         * @param isHor 是否横版
         */
        constructor(isHor?: boolean) {
            if (isHor) {
                this.ui = new ui.RulePanelUI();
            } else {
                this.ui = new ui.RulePanel_VerUI();
            }
            //将提示UI类缓存为静态图像
            this.ui.zOrder = 8;
            //将提示UI类缓存为静态图像
            this.ui.cacheAs = "bitmap";
            this.uiData = RulePanelUIData.GetInstance();
            this.ui.visible = this.uiData.isShow;
            this.ui.close.on(Laya.Event.CLICK, this, this.CloseRule);

        }

        /**
         * 获取UI
         */
        public GetUI(): ui.RulePanelUI | ui.RulePanel_VerUI {
            return this.ui;
        }

        /**
         * 显示游戏规则
         */
        public ShowRule(): void {
            this.uiData.isShow = true;
            this.ui.visible = this.uiData.isShow;
        }
        /**
         * 关闭游戏规则
         */
        private CloseRule(): void {
            this.uiData.isShow = false;
            this.ui.visible = this.uiData.isShow;
            this.ClearTextureRes();
        }
        /**
         * 销毁投注面板资源，释放内存
         */
        private ClearTextureRes(): void {
            Laya.loader.clearTextureRes("ui/mask.png");
            Laya.loader.clearTextureRes("ui/bg_record.png");
            Laya.loader.clearTextureRes("ui/recordLine.png");
        }
    }
}