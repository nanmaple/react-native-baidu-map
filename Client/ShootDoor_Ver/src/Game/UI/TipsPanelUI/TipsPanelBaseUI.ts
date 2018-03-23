namespace ScenePanel {
    export abstract class TipsPanelBaseUI {
        protected ui: ui.TipsPanelUI | ui.TipsPanel_VerUI;
        protected uiData: TipsPanelUIData;
        /**
         * 构造函数
         * @param isHor 是否横版
         */
        constructor(isHor?: boolean) {
            let language: LanguageUtils.Language = new LanguageUtils.Language();
            var htmlD: Laya.HTMLDivElement = new Laya.HTMLDivElement();
            htmlD.innerHTML = language.GetLanguage("GameTips");
            htmlD.style.width = 360;
            htmlD.style.height = 250;
            if (isHor) {
                this.ui = new ui.TipsPanelUI();
            } else {
                this.ui = new ui.TipsPanel_VerUI();
            }
            //将提示UI类缓存为静态图像
            this.ui.zOrder = 10;
            this.ui.cacheAs = "bitmap";
            this.ui.closeBtn.on(Laya.Event.CLICK, this, this.CloseTip);
            this.uiData = TipsPanelUIData.GetInstance();
            this.ui.visible = this.uiData.isShow;
            this.ui.tips.vScrollBarSkin = "";
            this.ui.tips.addChild(htmlD);
        }

        /**
         * 获取UI
         */
        public GetUI(): ui.TipsPanelUI | ui.TipsPanel_VerUI {
            return this.ui;
        }

        /**
         * 显示面板
         */
        public ShowTip(): void {
            this.uiData.isShow = true;
            this.ui.visible = this.uiData.isShow;
        }
        /**
         * 关闭面板
         */
        public CloseTip(): void {
            this.uiData.isShow = false;
            this.ui.visible = this.uiData.isShow;
        }
    }
}