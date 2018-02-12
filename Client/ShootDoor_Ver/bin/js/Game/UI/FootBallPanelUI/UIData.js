var ScenePanel;
(function (ScenePanel) {
    var FootBallPanelUIData = /** @class */ (function () {
        function FootBallPanelUIData() {
        }
        FootBallPanelUIData.GetInstance = function () {
            if (!this.instance) {
                this.instance = new FootBallPanelUIData();
            }
            return this.instance;
        };
        return FootBallPanelUIData;
    }());
    ScenePanel.FootBallPanelUIData = FootBallPanelUIData;
})(ScenePanel || (ScenePanel = {}));
