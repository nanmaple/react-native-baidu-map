namespace ScenePanel {
    export class NoteRecordPanelUIData {
        private static instance: NoteRecordPanelUIData;
        public static GetInstance() {
            if (!this.instance) {
                this.instance = new NoteRecordPanelUIData();
            }
            return this.instance;
        }

        public closeRecordHander: Laya.Handler;   //关闭投注记录回调
        public onMouseDownHander: Laya.Handler;   //鼠标按下回调
        public onMouseUpHander: Laya.Handler;    //鼠标移开回调
        public isShow: boolean = false;   //面板是否显示
        public isDetailShow: boolean = false;  //列表详情是否显示
        public listData:any = [];   //列表数据
        public listDetailData:any = [];  //列表详情数据
        public listScrollValue: number;   //列表滚动距离
        public mouseHandler:Laya.Handler;
        public renderHandler:Laya.Handler;
    }
}