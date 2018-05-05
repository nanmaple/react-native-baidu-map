namespace ScenePanel {
    export class RoundPanelUIData {
        private static instance: RoundPanelUIData;
        public static GetInstance() {
            if (!this.instance) {
                this.instance = new RoundPanelUIData();
            }
            return this.instance;
        }
    }
}