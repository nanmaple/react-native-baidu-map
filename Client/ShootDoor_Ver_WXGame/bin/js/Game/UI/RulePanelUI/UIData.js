var ScenePanel;
(function (ScenePanel) {
    var RulePanelUIData = /** @class */ (function () {
        function RulePanelUIData() {
            this.isShow = false;
        }
        RulePanelUIData.GetInstance = function () {
            if (!this.instance) {
                this.instance = new RulePanelUIData();
            }
            return this.instance;
        };
        return RulePanelUIData;
    }());
    ScenePanel.RulePanelUIData = RulePanelUIData;
})(ScenePanel || (ScenePanel = {}));
