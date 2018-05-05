namespace ScenePanel {
    export class PromptPanelUIData {
        private static instance: PromptPanelUIData;
        public static GetInstance() {
            if (!this.instance) {
                this.instance = new PromptPanelUIData();
            }
            return this.instance;
        }

        public isShow: boolean = false;
        public txt: string = "";
    }
}