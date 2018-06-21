var ScenePanel;
(function (ScenePanel) {
    var BetMorePanelUIData = /** @class */ (function () {
        function BetMorePanelUIData() {
            this.selectedChipNum = 0; //当前选择的筹码编号
            this.guessSuccess = false; //是否有猜中
            this.isBetting = false;
            this.visible = false; //显示隐藏
        }
        BetMorePanelUIData.GetInstance = function () {
            if (!this.instance) {
                this.instance = new BetMorePanelUIData();
            }
            return this.instance;
        };
        return BetMorePanelUIData;
    }());
    ScenePanel.BetMorePanelUIData = BetMorePanelUIData;
})(ScenePanel || (ScenePanel = {}));
