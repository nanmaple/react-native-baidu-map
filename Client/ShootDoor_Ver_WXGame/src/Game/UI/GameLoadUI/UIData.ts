namespace ScenePanel {
    export class GameLoadUIData{
        private static instance: GameLoadUIData;
        public static GetInstance() {
            if (!this.instance) {
                this.instance = new GameLoadUIData();
            }
            return this.instance;
        }

        public progress: string = "0%";

    }
}