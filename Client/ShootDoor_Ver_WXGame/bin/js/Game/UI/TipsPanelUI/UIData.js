var ScenePanel;
(function (ScenePanel) {
    var TipsPanelUIData = /** @class */ (function () {
        function TipsPanelUIData() {
            this.isShow = false;
        }
        TipsPanelUIData.GetInstance = function () {
            if (!this.instance) {
                this.instance = new TipsPanelUIData();
            }
            return this.instance;
        };
        return TipsPanelUIData;
    }());
    ScenePanel.TipsPanelUIData = TipsPanelUIData;
})(ScenePanel || (ScenePanel = {}));
