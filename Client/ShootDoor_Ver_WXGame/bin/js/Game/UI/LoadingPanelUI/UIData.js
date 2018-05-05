var ScenePanel;
(function (ScenePanel) {
    var LoadingPanelUIData = /** @class */ (function () {
        function LoadingPanelUIData() {
            this.showLoading = false;
            this.showConnect = false;
        }
        LoadingPanelUIData.GetInstance = function () {
            if (!this.instance) {
                this.instance = new LoadingPanelUIData();
            }
            return this.instance;
        };
        return LoadingPanelUIData;
    }());
    ScenePanel.LoadingPanelUIData = LoadingPanelUIData;
})(ScenePanel || (ScenePanel = {}));
