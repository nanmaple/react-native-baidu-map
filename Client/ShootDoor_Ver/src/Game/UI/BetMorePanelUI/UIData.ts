namespace ScenePanel {
    export class BetMorePanelUIData {
        private static instance: BetMorePanelUIData;
        public static GetInstance() {
            if (!this.instance) {
                this.instance = new BetMorePanelUIData();
            }
            return this.instance;
        }

        public handler: Laya.Handler;                           //回调句柄
        public selectedChipNum: number = 0;                     //当前选择的筹码编号
        public guessSuccess: boolean = false;                   //是否有猜中
        public isBetting: boolean = false;
        public visible: boolean = false;  //显示隐藏
    }
}