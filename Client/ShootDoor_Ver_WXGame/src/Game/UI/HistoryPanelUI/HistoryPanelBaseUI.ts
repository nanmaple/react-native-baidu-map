namespace ScenePanel {
    export abstract class HistoryPanelBaseUI {
        protected ui: ui.HistoryRecordUI | ui.HistoryRecord_VerUI;
        protected uiData: HistoryUIData;
        /**
         * 构造函数
         * @param isHor 是否横版
         */
        constructor(isHor?: boolean) {
            if (isHor) {
                this.ui = new ui.HistoryRecordUI();
            } else {
                this.ui = new ui.HistoryRecord_VerUI();
            }
            this.ui.zOrder = 6;
            this.ui.cacheAs = "bitmap";
            this.uiData = HistoryUIData.GetInstance();
            this.uiData.listBoxH = this.ui.listPanel.height / 5;
        }

        /**
         * 获取UI
         */
        public GetUI(): ui.HistoryRecordUI | ui.HistoryRecord_VerUI {
            return this.ui;
        }

        /**
         * 滚动历史列表
         */
        public ScrollHistoryList(hander: Laya.Handler): void {
            Laya.Tween.to(this.ui._list, { y: this.uiData.listBoxH }, 2000, Laya.Ease.quadInOut, Laya.Handler.create(this, this.ResetHistoryList));
            this.uiData.hander = hander;
        }

        /**
         * 显隐list
         * @param visible 
         */
        public ShowList(visible: boolean): void {
            this.ui._list.visible = visible;
        }

        /**
         * 设置列表数据
         * @param array 
         */
        public SetListArray(array: Array<any>): void {
            this.ui._list.array = array;
        }

        public SetRenderHandler(hander: Laya.Handler): void {
            this.ui._list.renderHandler = hander;
        }

        /**
         * 重置历史列表
         */
        private ResetHistoryList(): void {
            this.ui._list.y = 0;
            this.uiData.hander.run();
        }
        /**
         * 获取牌面结束位置和宽高
         */
        abstract GetEndFlyPoker(isChange: boolean): any;
    }

}