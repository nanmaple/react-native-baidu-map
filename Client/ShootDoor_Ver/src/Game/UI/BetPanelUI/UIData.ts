namespace ScenePanel {
    export class BetPanelUIData {
        private static instance: BetPanelUIData;
        public static GetInstance() {
            if (!this.instance) {
                this.instance = new BetPanelUIData();
            }
            return this.instance;
        }

        public handler: Laya.Handler;                           //回调句柄
        public selectedChipNum: number = 0;                     //当前选择的筹码编号
        public guessSuccess: boolean = false;                   //是否有猜中
        public isBetting: boolean = false;
    }
}