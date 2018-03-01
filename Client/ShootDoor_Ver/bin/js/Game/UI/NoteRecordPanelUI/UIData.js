var ScenePanel;
(function (ScenePanel) {
    var NoteRecordPanelUIData = /** @class */ (function () {
        function NoteRecordPanelUIData() {
            this.isShow = false; //面板是否显示
            this.isDetailShow = false; //列表详情是否显示
            this.listData = []; //列表数据
            this.listDetailData = []; //列表详情数据
            this.listScrollValue = 0; //列表滚动距离
        }
        NoteRecordPanelUIData.GetInstance = function () {
            if (!this.instance) {
                this.instance = new NoteRecordPanelUIData();
            }
            return this.instance;
        };
        return NoteRecordPanelUIData;
    }());
    ScenePanel.NoteRecordPanelUIData = NoteRecordPanelUIData;
})(ScenePanel || (ScenePanel = {}));
