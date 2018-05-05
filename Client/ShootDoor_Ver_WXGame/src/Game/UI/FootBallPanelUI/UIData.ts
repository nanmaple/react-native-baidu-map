namespace ScenePanel {
    export class FootBallPanelUIData{
        private static instance: FootBallPanelUIData;
        public static GetInstance() {
            if (!this.instance) {
                this.instance = new FootBallPanelUIData();
            }
            return this.instance;
        }


    }
}