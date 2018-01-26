var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ScenePanel;
(function (ScenePanel) {
    ScenePanel.BetStatus = {
        0: "等待开始",
        1: "正在投注",
        2: "结束投注",
        3: "游戏结算"
    };
    var RoundPanel = (function (_super) {
        __extends(RoundPanel, _super);
        function RoundPanel() {
            var _this = _super.call(this) || this;
            if (GameConfig.RatioType) {
                _this.round.scale(GameConfig.HeightWidth, 1);
            }
            else {
                _this.round.scale(1, GameConfig.WidthHeight);
            }
            return _this;
        }
        /**
         * 显示roundID
         * @param round 游戏RoundID
         */
        RoundPanel.prototype.SetGameRound = function (round) {
            this.gameRound.text = round;
        };
        /**
         * 更新游戏状态
         * @param state 游戏状态
        */
        RoundPanel.prototype.SetGameState = function (state) {
            this.gameState.text = ScenePanel.BetStatus[state];
        };
        return RoundPanel;
    }(ui.RoundPanelUI));
    ScenePanel.RoundPanel = RoundPanel;
})(ScenePanel || (ScenePanel = {}));
