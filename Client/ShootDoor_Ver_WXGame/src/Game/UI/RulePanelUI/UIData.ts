namespace ScenePanel {
    export class RulePanelUIData{
        private static instance: RulePanelUIData;
        public static GetInstance() {
            if (!this.instance) {
                this.instance = new RulePanelUIData();
            }
            return this.instance;
        }

        public isShow:boolean = false;
    }
}