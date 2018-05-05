namespace ScenePanel {
    export class TipsPanelUIData{
        private static instance: TipsPanelUIData;
        public static GetInstance() {
            if (!this.instance) {
                this.instance = new TipsPanelUIData();
            }
            return this.instance;
        }

        public isShow:boolean = false;

    }
}