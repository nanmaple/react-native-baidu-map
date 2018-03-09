var ScenePanel;
(function (ScenePanel) {
    var CardPanelUIData = /** @class */ (function () {
        function CardPanelUIData() {
        }
        CardPanelUIData.GetInstance = function () {
            if (!this.instance) {
                this.instance = new CardPanelUIData();
            }
            return this.instance;
        };
        return CardPanelUIData;
    }());
    ScenePanel.CardPanelUIData = CardPanelUIData;
})(ScenePanel || (ScenePanel = {}));
