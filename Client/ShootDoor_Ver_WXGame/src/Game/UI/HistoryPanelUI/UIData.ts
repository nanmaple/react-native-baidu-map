namespace ScenePanel {
    export class HistoryUIData {
        private static instance: HistoryUIData;
        public static GetInstance() {
            if (!this.instance) {
                this.instance = new HistoryUIData();
            }
            return this.instance;
        }

        public listBoxH: number;   //历史列表每一行的高度
        public hander: Laya.Handler;
        public flyPoker: any;

    }
}