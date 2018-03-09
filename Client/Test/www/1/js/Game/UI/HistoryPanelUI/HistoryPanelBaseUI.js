var ScenePanel;
(function (ScenePanel) {
    var HistoryPanelBaseUI = /** @class */ (function () {
        /**
         * 构造函数
         * @param isHor 是否横版
         */
        function HistoryPanelBaseUI(isHor) {
            if (isHor) {
                this.ui = new ui.HistoryRecordUI();
            }
            else {
                this.ui = new ui.HistoryRecord_VerUI();
            }
            this.ui.zOrder = 6;
            this.ui.cacheAs = "bitmap";
            this.uiData = ScenePanel.HistoryUIData.GetInstance();
            this.uiData.listBoxH = this.ui.listPanel.height / 5;
        }
        /**
         * 获取UI
         */
        HistoryPanelBaseUI.prototype.GetUI = function () {
            return this.ui;
        };
        /**
         * 滚动历史列表
         */
        HistoryPanelBaseUI.prototype.ScrollHistoryList = function (hander) {
            Laya.Tween.to(this.ui._list, { y: this.uiData.listBoxH }, 2000, Laya.Ease.quadInOut, Laya.Handler.create(this, this.ResetHistoryList));
            this.uiData.hander = hander;
        };
        /**
         * 显隐list
         * @param visible
         */
        HistoryPanelBaseUI.prototype.ShowList = function (visible) {
            this.ui._list.visible = visible;
        };
        /**
         * 设置列表数据
         * @param array
         */
        HistoryPanelBaseUI.prototype.SetListArray = function (array) {
            this.ui._list.array = array;
        };
        HistoryPanelBaseUI.prototype.SetRenderHandler = function (hander) {
            this.ui._list.renderHandler = hander;
        };
        /**
         * 重置历史列表
         */
        HistoryPanelBaseUI.prototype.ResetHistoryList = function () {
            this.ui._list.y = 0;
            this.uiData.hander.run();
        };
        return HistoryPanelBaseUI;
    }());
    ScenePanel.HistoryPanelBaseUI = HistoryPanelBaseUI;
})(ScenePanel || (ScenePanel = {}));
