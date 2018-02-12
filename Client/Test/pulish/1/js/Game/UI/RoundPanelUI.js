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
        2: "停止投注",
        3: "正在结算",
        4: "已结算"
    };
    var RoundPanel = (function (_super) {
        __extends(RoundPanel, _super);
        function RoundPanel() {
            var _this = _super.call(this) || this;
            _this.currentState = 0;
            _this.isSettle = false;
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
            var _this = this;
            if (state == 2) {
                this.isSettle = false;
            }
            if (state < 3) {
                this.currentState = state;
                this.gameState.text = ScenePanel.BetStatus[state];
            }
            else if (state == 3) {
                this.currentState = state;
                if (this.isSettle) {
                    Laya.timer.once(500, this, function () {
                        _this.gameState.text = ScenePanel.BetStatus[4];
                    });
                }
                else {
                    this.gameState.text = ScenePanel.BetStatus[state];
                }
            }
            else if (state == 4) {
                this.isSettle = true;
                if (this.currentState == 3) {
                    this.gameState.text = ScenePanel.BetStatus[state];
                }
            }
        };
        return RoundPanel;
    }(ui.RoundPanelUI));
    ScenePanel.RoundPanel = RoundPanel;
})(ScenePanel || (ScenePanel = {}));
