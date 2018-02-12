namespace ScenePanel {
    export class CardPanelUIData{
        private static instance: CardPanelUIData;
        public static GetInstance() {
            if (!this.instance) {
                this.instance = new CardPanelUIData();
            }
            return this.instance;
        }


    }
}