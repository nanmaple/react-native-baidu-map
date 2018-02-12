var ScenePanel;
(function (ScenePanel) {
    var HeadPanelUIData = /** @class */ (function () {
        function HeadPanelUIData() {
        }
        HeadPanelUIData.GetInstance = function () {
            if (!this.instance) {
                this.instance = new HeadPanelUIData();
            }
            return this.instance;
        };
        return HeadPanelUIData;
    }());
    ScenePanel.HeadPanelUIData = HeadPanelUIData;
})(ScenePanel || (ScenePanel = {}));
