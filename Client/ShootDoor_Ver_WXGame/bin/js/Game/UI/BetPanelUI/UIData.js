var ScenePanel;
(function (ScenePanel) {
    var BetPanelUIData = /** @class */ (function () {
        function BetPanelUIData() {
            this.selectedChipNum = 0; //当前选择的筹码编号
            this.guessSuccess = false; //是否有猜中
            this.isBetting = false;
        }
        BetPanelUIData.GetInstance = function () {
            if (!this.instance) {
                this.instance = new BetPanelUIData();
            }
            return this.instance;
        };
        return BetPanelUIData;
    }());
    ScenePanel.BetPanelUIData = BetPanelUIData;
})(ScenePanel || (ScenePanel = {}));
