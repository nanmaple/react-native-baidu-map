var ScenePanel;
(function (ScenePanel) {
    var GameLoadUIData = /** @class */ (function () {
        function GameLoadUIData() {
            this.progress = "0%";
        }
        GameLoadUIData.GetInstance = function () {
            if (!this.instance) {
                this.instance = new GameLoadUIData();
            }
            return this.instance;
        };
        return GameLoadUIData;
    }());
    ScenePanel.GameLoadUIData = GameLoadUIData;
})(ScenePanel || (ScenePanel = {}));
