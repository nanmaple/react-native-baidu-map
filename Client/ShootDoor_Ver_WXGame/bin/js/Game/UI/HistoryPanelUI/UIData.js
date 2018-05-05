var ScenePanel;
(function (ScenePanel) {
    var HistoryUIData = /** @class */ (function () {
        function HistoryUIData() {
        }
        HistoryUIData.GetInstance = function () {
            if (!this.instance) {
                this.instance = new HistoryUIData();
            }
            return this.instance;
        };
        return HistoryUIData;
    }());
    ScenePanel.HistoryUIData = HistoryUIData;
})(ScenePanel || (ScenePanel = {}));
