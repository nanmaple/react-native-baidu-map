var ScenePanel;
(function (ScenePanel) {
    var PromptPanelUIData = /** @class */ (function () {
        function PromptPanelUIData() {
            this.isShow = false;
            this.txt = "";
        }
        PromptPanelUIData.GetInstance = function () {
            if (!this.instance) {
                this.instance = new PromptPanelUIData();
            }
            return this.instance;
        };
        return PromptPanelUIData;
    }());
    ScenePanel.PromptPanelUIData = PromptPanelUIData;
})(ScenePanel || (ScenePanel = {}));
