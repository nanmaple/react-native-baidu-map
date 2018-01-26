<<<<<<< .mine
// namespace ScenePanel {
//     export const STATE = {
//         0: "等待开始",
//         1: "投注",
//         2: "结束投注",
//         3: "游戏结算"
//     }
//     export class StatePanel extends ui.StatePanelUI {
//         constructor() {
//             super();
//         }
//         /**
//          * 显示roundID
//          * @param round 游戏RoundID
//          */
//         public SetGameRound(round): void {
//             this.gameRound.text = round;
//         }
//         /**
//          * 更新游戏状态
//          * @param state 游戏状态
//         */
//         public SetGameState(state): void {
//             this.gameState.text = STATE[state];
//         }
//     }
// } 
=======
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
    ScenePanel.STATE = {
        0: "等待开始",
        1: "投注",
        2: "结束投注",
        3: "游戏结算"
    };
    var StatePanel = /** @class */ (function (_super) {
        __extends(StatePanel, _super);
        function StatePanel() {
            return _super.call(this) || this;
        }
        /**
         * 显示roundID
         * @param round 游戏RoundID
         */
        StatePanel.prototype.SetGameRound = function (round) {
            this.gameRound.text = round;
        };
        /**
         * 更新游戏状态
         * @param state 游戏状态
        */
        StatePanel.prototype.SetGameState = function (state) {
            this.gameState.text = ScenePanel.BetStatus[state];
        };
        return StatePanel;
    }(ui.StatePanelUI));
    ScenePanel.StatePanel = StatePanel;
})(ScenePanel || (ScenePanel = {}));
>>>>>>> .r489
