var ScenePanel;
(function (ScenePanel) {
    var RoundPanelUIData = /** @class */ (function () {
        function RoundPanelUIData() {
        }
        RoundPanelUIData.GetInstance = function () {
            if (!this.instance) {
                this.instance = new RoundPanelUIData();
            }
            return this.instance;
        };
        return RoundPanelUIData;
    }());
    ScenePanel.RoundPanelUIData = RoundPanelUIData;
})(ScenePanel || (ScenePanel = {}));
