namespace ScenePanel {
    export class LoadingPanelUIData {
        private static instance: LoadingPanelUIData;
        public static GetInstance() {
            if (!this.instance) {
                this.instance = new LoadingPanelUIData();
            }
            return this.instance;
        }

        public showLoading: boolean = false;
        public showConnect: boolean = false;
    }
}