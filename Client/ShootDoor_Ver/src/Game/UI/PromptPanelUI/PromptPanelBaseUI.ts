namespace ScenePanel {
    export abstract class PromptPanelBaseUI {
        protected ui: ui.PromptUI | ui.Prompt_VerUI;
        protected uiData: PromptPanelUIData;
        /**
         * 构造函数
         * @param isHor 是否横版
         */
        constructor(isHor?: boolean) {
            if (isHor) {
                this.ui = new ui.PromptUI();
            } else {
                this.ui = new ui.Prompt_VerUI();
            }
            //将提示UI类缓存为静态图像
            this.ui.zOrder = 8;
            this.ui.cacheAs = "bitmap";

            this.uiData = PromptPanelUIData.GetInstance();
            this.ui.visible = this.uiData.isShow;
            this.ui.promptTxt.text = this.uiData.txt;
            //确认、取消按钮绑定点击事件
            this.ui.sureBtn.on(Laya.Event.CLICK, this, this.OnClickConfirm);
            if (GameConfig.RatioType) {
                this.ui.prompt.scale(GameConfig.LengthShort, 1);
            } else {
                this.ui.prompt.scale(1, GameConfig.ShortLength);
            }
            let language: LanguageUtils.Language = new LanguageUtils.Language();
            let lang:number = language.GetLanguageType();
            if(lang == LanguageUtils.LanguageType.CH){
                this.ui.title.skin = "ui/title.png";
                this.ui.sureBtn.skin = "ui/ok.png";
            }else{
                this.ui.title.skin = "ui/title_EN.png";
                this.ui.sureBtn.skin = "ui/ok_EN.png";
            }
        }

        /**
         * 获取UI
         */
        public GetUI(): ui.PromptUI | ui.Prompt_VerUI {
            return this.ui;
        }

        /**
         * 弹出提示框
         * @param txt 显示内容
         */
        public ShowMsg(txt: string): void {
            this.uiData.isShow = true;
            this.uiData.txt = txt;
            this.ui.visible = this.uiData.isShow;
            this.ui.promptTxt.text = this.uiData.txt;
        }
        /**
         * 点击确认
         */
        public OnClickConfirm(): void {
            this.uiData.isShow = false;
            this.ui.visible = this.uiData.isShow;
        }
    }
}