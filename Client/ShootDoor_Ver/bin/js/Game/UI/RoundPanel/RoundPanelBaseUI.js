var ScenePanel;
(function (ScenePanel) {
    ScenePanel.BetStatus = {
        0: "等待开始",
        1: "正在投注",
        2: "停止投注",
        3: "正在结算",
        4: "已结算"
    };
    var RoundPanelBaseUI = /** @class */ (function () {
        /**
         * 构造函数
         * @param isHor 是否横版
         */
        function RoundPanelBaseUI(isHor) {
            this.currentState = 0;
            this.isSettle = false;
            if (isHor) {
                this.ui = new ui.RoundPanelUI();
            }
            else {
                this.ui = new ui.RoundPanel_VerUI();
            }
            this.ui.zOrder = 2;
            this.ui.cacheAs = "bitmap";
        }
        RoundPanelBaseUI.prototype.GetUI = function () {
            return this.ui;
        };
        /**
         * 显示roundID
         * @param round 游戏RoundID
         */
        RoundPanelBaseUI.prototype.SetGameRound = function (round) {
            this.ui.gameRound.text = round;
        };
        /**
         * 更新游戏状态
         * @param state 游戏状态
        */
        RoundPanelBaseUI.prototype.SetGameState = function (state) {
            var _this = this;
            if (state == 2) {
                this.isSettle = false;
            }
            if (state < 3) {
                this.currentState = state;
                this.ui.gameState.text = ScenePanel.BetStatus[state];
            }
            else if (state == 3) {
                this.currentState = state;
                if (this.isSettle) {
                    Laya.timer.once(500, this, function () {
                        _this.ui.gameState.text = ScenePanel.BetStatus[4];
                    });
                }
                else {
                    this.ui.gameState.text = ScenePanel.BetStatus[state];
                }
            }
            else if (state == 4) {
                this.isSettle = true;
                if (this.currentState == 3) {
                    this.ui.gameState.text = ScenePanel.BetStatus[state];
                }
            }
        };
        return RoundPanelBaseUI;
    }());
    ScenePanel.RoundPanelBaseUI = RoundPanelBaseUI;
})(ScenePanel || (ScenePanel = {}));
